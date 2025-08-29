"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../assets/styles/CHATBOT.css";
import MessageBotIcon from "../../../assets/images/Message Bot.svg";

export default function Index() {
  const [message, setMessage] = useState("");
  const [activeConversationId, setActiveConversationId] = useState(0);
  // Add a state for user avatar (placeholder for now, can be updated from backend)
  const [userAvatar, setUserAvatar] = useState("");

  // Different conversations with their messages - now as state
  const [conversations, setConversations] = useState([
    {
      id: 0,
      title: "مقدمة في تحليل النصوص الأدبية",
      messages: [
        {
          id: 1,
          type: "bot",
          content: 'مرحبًا بك! نعم، لدينا دورة مميزة بعنوان "الإتقان في اللغة العربية للبكالوريا"، تغطي جميع المحاور المطلوبة.'
        },
        {
          id: 2,
          type: "user",
          content: "ممتاز! وش تشمل الدورة بالضبط؟"
        },
        {
          id: 3,
          type: "bot",
          content: 'مرحبًا بك! نعم، لدينا دورة مميزة بعنوان "الإتقان في اللغة العربية للبكالوريا"، تغطي جميع المحاور المطلوبة.'
        }
      ]
    },
    {
      id: 1,
      title: "أنواع النصوص ومهارات الفهم",
      messages: [
        {
          id: 1,
          type: "user",
          content: "ما هي أنواع النصوص المختلفة؟"
        },
        {
          id: 2,
          type: "bot",
          content: "هناك عدة أنواع من النصوص: النص الأدبي، النص الإعلامي، النص العلمي، والنص التطبيقي."
        },
        {
          id: 3,
          type: "user",
          content: "كيف أطور مهارات الفهم؟"
        },
        {
          id: 4,
          type: "bot",
          content: "يمكن تطوير مهارات الفهم من خلال القراءة المتأنية، وتحليل الأفكار الرئيسية، وطرح الأسئلة."
        }
      ]
    },
    {
      id: 2,
      title: "الإعراب والتحليل النحوي للجمل",
      messages: [
        {
          id: 1,
          type: "user",
          content: "كيف أتعلم الإعراب بسهولة؟"
        },
        {
          id: 2,
          type: "bot",
          content: "الإعراب يتطلب فهم أساسيات النحو أولاً، ثم التدرب على إعراب الجمل البسيط�� قبل المعقدة."
        },
        {
          id: 3,
          type: "user",
          content: "ما هي علامات الإعراب الأساسية؟"
        },
        {
          id: 4,
          type: "bot",
          content: "علامات الإعراب الأساسية هي: الضمة للرفع، والفتحة للنصب، والكسرة للجر، والسكون للجزم."
        }
      ]
    },
    {
      id: 3,
      title: "البلاغة والصور البيانية",
      messages: [
        {
          id: 1,
          type: "user",
          content: "ما هي الصور البيانية؟"
        },
        {
          id: 2,
          type: "bot",
          content: "الصور البيانية تشمل التشبيه، والاستعارة، والكناية، وهي من أهم أدوات البلاغة العربية."
        }
      ]
    },
    {
      id: 4,
      title: "الشعر العربي والعروض",
      messages: [
        {
          id: 1,
          type: "user",
          content: "كيف أتعلم بحور الشعر؟"
        },
        {
          id: 2,
          type: "bot",
          content: "تعلم بحور الشعر يبدأ بفهم التفعيلات الأساسية ثم حفظ أشهر البحور مثل البحر الطويل والكامل."
        }
      ]
    },
    {
      id: 5,
      title: "النثر العربي القديم",
      messages: [
        {
          id: 1,
          type: "user",
          content: "ما خصائص النثر العربي القديم؟"
        },
        {
          id: 2,
          type: "bot",
          content: "النثر العربي القديم يتميز بالفصاحة والبلاغة، واستخدام السجع والطباق والجناس."
        }
      ]
    },
    {
      id: 6,
      title: "قواعد الإملاء والخط",
      messages: [
        {
          id: 1,
          type: "user",
          content: "ما أهم قواعد الإملاء؟"
        },
        {
          id: 2,
          type: "bot",
          content: "أهم قواعد الإملاء تشمل: كتابة الهمزة، والتاء المربوطة والمفتوحة، وعلامات الترقيم."
        }
      ]
    }
  ]);

  // Get current conversation messages
  const currentMessages = conversations[activeConversationId]?.messages || [];

  const handleSendMessage = () => {
    if (message.trim() && conversations[activeConversationId]) {
      const newMessage = {
        id: currentMessages.length + 1,
        type: "user" as const,
        content: message
      };

      // Update the current conversation with the new message
      setConversations(prevConversations => {
        const updatedConversations = [...prevConversations];
        if (updatedConversations[activeConversationId]) {
          updatedConversations[activeConversationId] = {
            ...updatedConversations[activeConversationId],
            messages: [...updatedConversations[activeConversationId].messages, newMessage]
          };
        }
        return updatedConversations;
      });

      setMessage("");

      // Simulate bot response after a short delay
      setTimeout(() => {
        const botResponse = {
          id: currentMessages.length + 2,
          type: "bot" as const,
          content: "شكرًا لسؤالك! هذه إجابة تلقائية. في التطبيق الحقيقي، ستكون هناك إجابة ذكية من المساعد."
        };
        
        setConversations(prevConversations => {
          const updatedConversations = [...prevConversations];
          if (updatedConversations[activeConversationId]) {
            updatedConversations[activeConversationId] = {
              ...updatedConversations[activeConversationId],
              messages: [...updatedConversations[activeConversationId].messages, botResponse]
            };
          }
          return updatedConversations;
        });
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleHistoryClick = (conversationId: number) => {
    setActiveConversationId(conversationId);
  };

  const handleNewChat = () => {
    // Create a new conversation
    const newConversation = {
      id: conversations.length,
      title: `محادثة جديدة ${conversations.length + 1}`,
      messages: [
        {
          id: 1,
          type: "bot" as const,
          content: "مرحبًا! كيف يمكنني مساعدتك اليوم؟"
        }
      ]
    };

    // Add the new conversation to the list and switch to it
    setConversations(prevConversations => [...prevConversations, newConversation]);
    setActiveConversationId(newConversation.id);
  };

  return (
    <div className="chatbot-container">

      {/* History Tab */}
      <div className="history-tab">
        <div className="conversation-history">
          <h3>المحادثات السابقة مع المساعد</h3>
          <div className="history-list">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`history-item ${activeConversationId === conversation.id ? 'active' : ''}`}
                onClick={() => handleHistoryClick(conversation.id)}
              >
                {conversation.title}
              </div>
            ))}
          </div>
          <button
            className="new-chat-btn"
            onClick={handleNewChat}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            محادثة جديدة
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="chat-interface">
        {/* Chat Messages Container */}
        <div className="messages-area">
          {currentMessages.map((msg) => (
            <div key={msg.id} className={`message-container ${msg.type}`}>
              {msg.type === 'bot' && (
                <div className="bot-avatar">
                  <Image src={MessageBotIcon} alt="Bot" width={24} height={24} />
                </div>
              )}
              <div className={`message-bubble ${msg.type}`}>
                {msg.content}
              </div>
              {msg.type === 'user' && (
                <div className="user-avatar">
                  {userAvatar ? (
                    <Image src={userAvatar} alt="User" width={24} height={24} />
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#666"/>
                    </svg>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="input-container">
          <div className="input-wrapper">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="هل فيها فيديوهات؟ ولا فقط نصوص؟"
              className="message-input"
            />
            <button onClick={handleSendMessage} className="send-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="#666"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
