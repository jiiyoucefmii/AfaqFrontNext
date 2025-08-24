"use client";
import React, { useState } from "react";
import "../../../../assets/styles/AddQuiz.css";

interface Question {
  question: string;
  options: string[];
  correct: number | null;
}

const AddQuiz: React.FC = () => {
  const [course, setCourse] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([
    { question: "", options: ["", "", "", ""], correct: null },
  ]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correct: null },
    ]);
  };

  const handleQuestionChange = (qIndex: number, value: string) => {
    const updated = [...questions];
    updated[qIndex].question = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex: number, oIndex: number, value: string) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  const handleCorrectChoice = (qIndex: number, oIndex: number) => {
    const updated = [...questions];
    updated[qIndex].correct = oIndex;
    setQuestions(updated);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const quizData = { course, title, questions };
    console.log("✅ Quiz Submitted:", quizData);
    alert("Quiz submitted ✅ (check console)");

    // reset
    setCourse("");
    setTitle("");
    setQuestions([{ question: "", options: ["", "", "", ""], correct: null }]);
  };

  return (
    <div className="addquiz">
      <div className="top1">
        <p className="big-quiz">Quiz</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="dropdown-group3">
            <label htmlFor="course"> الدورة :</label>
            <select
              id="course"
              name="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option value="">-- اختر الدورة --</option>
              <option value="motion">الحركة المستقيمة المنتظمة والمتغيرة</option>
              <option value="forces">القوى والحركة</option>
              <option value="energy">الطاقة والشغل</option>
            </select>
          </div>
          
        </form>
      </div>

      <hr className="hr-quiz" />

      {/* New Quiz Form */}
      <div className="new-quiz">
        <form onSubmit={handleSubmit}>
          {/* Quiz Title */}
          <div className="form-group-title">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="اكتب العنوان ..."
              required
            />
          </div>

          {/* Questions */}
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="question-block">
              {/* Question */}
              <div className="form-group question">
                <textarea
                  value={q.question}
                  onChange={(e) =>
                    handleQuestionChange(qIndex, e.target.value)
                  }
                  placeholder={`اكتب السؤال ${qIndex + 1} ...`}
                  required
                />
              </div>

              {/* Options */}
              <div className="form-group">
                {q.options.map((option, oIndex) => (
                  <div key={oIndex} className="option-row">
                    <input
                      type="text"
                      className="option-input"
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(qIndex, oIndex, e.target.value)
                      }
                      placeholder={`إجابة ${oIndex + 1}`}
                      required
                    />
                    <label className="correct-choice">
                      <input
                        type="radio"
                        name={`correct-${qIndex}`}
                        checked={q.correct === oIndex}
                        onChange={() =>
                          handleCorrectChoice(qIndex, oIndex)
                        }
                      />
                      صحيح
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Actions */}
          <div className="form-actions">
            <button
              type="button"
              className="btn-q add-option"
              onClick={handleAddQuestion}
            >
              ➕ إضافة سؤال
            </button>
            <button type="submit" className="btn-q submit-btn">
              💾 حفظ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuiz;
