'use client'; // Required for client-side interactivity in Next.js App Router

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Search, Users, BookOpen, Upload, Check, X, Plus, Minus, Eye, Edit2, Trash2 } from 'lucide-react';
import '@/assets/styles/Dashboard.css'; // Updated path assuming `paths` in tsconfig.json

// Type definitions
interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  wilaya: string;
  role: string;
}

interface Teacher {
  id: string;
  name: string;
  description: string;
  category: string;
}

interface Course {
  id: string;
  title: string;
  price: number;
  chapters: Chapter[];
  isPublished: boolean;
  teacher: string;
  coverImage?: string;
}

interface Request {
  id: string;
  studentName: string;
  studentId: string;
  courseName: string;
  courseId: string;
  status: 'PROCESSING' | 'ACCEPTED' | 'REJECTED';
  date: string;
  studentEmail: string;
}

interface Chapter {
  title: string;
  duration: string;
  isFree: boolean;
}

interface NewCourse {
  title: string;
  description: string;
  price: string;
  teacher: string;
  chapters: Chapter[];
  coverImage?: File | null;
  coverImagePreview?: string;
}

type TabType = 'overview' | 'students' | 'teachers' | 'courses' | 'upload' | 'requests';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [studentSearch, setStudentSearch] = useState<string>('');
  const [courseSearch, setCourseSearch] = useState<string>('');
  const [teacherSearch, setTeacherSearch] = useState<string>('');
  const [requestSearch, setRequestSearch] = useState<string>('');

  // Mock data - no database, purely in-memory
  const [students] = useState<Student[]>([
    { id: '1', firstName: 'Ahmed', lastName: 'Ben Salem', email: 'ahmed@email.com', phone: '0123456789', wilaya: 'Algiers', role: 'STUDENT' },
    { id: '2', firstName: 'Fatima', lastName: 'Mansouri', email: 'fatima@email.com', phone: '0123456790', wilaya: 'Oran', role: 'STUDENT' },
    { id: '3', firstName: 'Omar', lastName: 'Belkacem', email: 'omar@email.com', phone: '0123456791', wilaya: 'Constantine', role: 'STUDENT' }
  ]);

  const [teachers] = useState<Teacher[]>([
    { id: '1', name: 'Dr. Amina Khelifi', description: 'Mathematics Professor', category: 'Mathematics' },
    { id: '2', name: 'Prof. Youcef Medjahed', description: 'Physics Instructor', category: 'Physics' },
    { id: '3', name: 'Dr. Nesrine Bouali', description: 'Computer Science Expert', category: 'Computer Science' }
  ]);

  const [courses, setCourses] = useState<Course[]>([
    { id: '1', title: 'Advanced Mathematics', price: 5000, chapters: [{ title: 'Algebra Basics', duration: '2h', isFree: true }, { title: 'Calculus', duration: '3h', isFree: false }], isPublished: true, teacher: 'Dr. Amina Khelifi', coverImage: '' },
    { id: '2', title: 'Physics Fundamentals', price: 4500, chapters: [{ title: 'Mechanics', duration: '2.5h', isFree: true }, { title: 'Thermodynamics', duration: '3h', isFree: false }], isPublished: true, teacher: 'Prof. Youcef Medjahed', coverImage: '' },
    { id: '3', title: 'Web Development', price: 6000, chapters: [{ title: 'HTML & CSS', duration: '4h', isFree: true }, { title: 'JavaScript', duration: '5h', isFree: false }], isPublished: false, teacher: 'Dr. Nesrine Bouali', coverImage: '' }
  ]);

  const [requests, setRequests] = useState<Request[]>([
    { id: '1', studentName: 'Ahmed Ben Salem', studentId: 'ST001', courseName: 'Advanced Mathematics', courseId: 'C001', status: 'PROCESSING', date: '2025-08-22', studentEmail: 'ahmed@email.com' },
    { id: '2', studentName: 'Fatima Mansouri', studentId: 'ST002', courseName: 'Physics Fundamentals', courseId: 'C002', status: 'PROCESSING', date: '2025-08-21', studentEmail: 'fatima@email.com' },
    { id: '3', studentName: 'Omar Belkacem', studentId: 'ST003', courseName: 'Web Development', courseId: 'C003', status: 'PROCESSING', date: '2025-08-20', studentEmail: 'omar@email.com' },
    { id: '4', studentName: 'Amina Kaddour', studentId: 'ST004', courseName: 'Advanced Mathematics', courseId: 'C001', status: 'PROCESSING', date: '2025-08-19', studentEmail: 'amina@email.com' },
    { id: '5', studentName: 'Youcef Zemouri', studentId: 'ST005', courseName: 'Data Science', courseId: 'C004', status: 'PROCESSING', date: '2025-08-18', studentEmail: 'youcef@email.com' },
    { id: '6', studentName: 'Nesrine Boudjema', studentId: 'ST006', courseName: 'Physics Fundamentals', courseId: 'C002', status: 'ACCEPTED', date: '2025-08-17', studentEmail: 'nesrine@email.com' },
    { id: '7', studentName: 'Karim Benali', studentId: 'ST007', courseName: 'Web Development', courseId: 'C003', status: 'REJECTED', date: '2025-08-16', studentEmail: 'karim@email.com' }
  ]);

  // Course creation/edit form state
  const [newCourse, setNewCourse] = useState<NewCourse>({
    title: '',
    description: '',
    price: '',
    teacher: '',
    chapters: [{ title: '', duration: '', isFree: false }],
    coverImage: null,
    coverImagePreview: ''
  });

  // State for editing a course
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  // Filtered data with null checks
  const filteredStudents = students.filter(student =>
    student.firstName.toLowerCase().includes(studentSearch.toLowerCase()) ||
    student.lastName.toLowerCase().includes(studentSearch.toLowerCase()) ||
    student.email.toLowerCase().includes(studentSearch.toLowerCase()) ||
    student.id.includes(studentSearch)
  );

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(courseSearch.toLowerCase()) ||
    course.id.includes(courseSearch)
  );

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(teacherSearch.toLowerCase()) ||
    teacher.description.toLowerCase().includes(teacherSearch.toLowerCase()) ||
    teacher.category.toLowerCase().includes(teacherSearch.toLowerCase()) ||
    teacher.id.includes(teacherSearch)
  );

  const filteredRequests = requests.filter(request =>
    request.studentName.toLowerCase().includes(requestSearch.toLowerCase()) ||
    request.courseName.toLowerCase().includes(requestSearch.toLowerCase()) ||
    request.studentId.toLowerCase().includes(requestSearch.toLowerCase()) ||
    request.courseId.toLowerCase().includes(requestSearch.toLowerCase()) ||
    request.studentEmail.toLowerCase().includes(requestSearch.toLowerCase())
  );

  const handleRequestAction = (requestId: string, action: 'ACCEPTED' | 'REJECTED') => {
    setRequests(prev => prev.map(req => 
      req.id === requestId ? { ...req, status: action } : req
    ));
  };

  const addChapter = (): void => {
    setNewCourse(prev => ({
      ...prev,
      chapters: [...prev.chapters, { title: '', duration: '', isFree: false }]
    }));
  };

  const removeChapter = (index: number): void => {
    if (newCourse.chapters.length > 1) {
      setNewCourse(prev => ({
        ...prev,
        chapters: prev.chapters.filter((_, i) => i !== index)
      }));
    }
  };

  const updateChapter = (index: number, field: keyof Chapter, value: string | boolean): void => {
    setNewCourse(prev => ({
      ...prev,
      chapters: prev.chapters.map((chapter, i) => 
        i === index ? { ...chapter, [field]: value } : chapter
      )
    }));
  };

  const handleCoverImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const previewUrl = URL.createObjectURL(file);
        setNewCourse(prev => ({
          ...prev,
          coverImage: file,
          coverImagePreview: previewUrl
        }));
      } catch (error) {
        console.error('Error creating image preview:', error);
      }
    }
  };

  const handleRemoveCoverImage = () => {
    setNewCourse(prev => ({
      ...prev,
      coverImage: null,
      coverImagePreview: ''
    }));
  };

  const handleCourseSubmit = (e: FormEvent<HTMLFormElement>, isDraft: boolean) => {
    e.preventDefault();
    const newCourseData: Course = {
      id: editingCourse ? editingCourse.id : `C${Date.now()}`,
      title: newCourse.title || 'Untitled Course',
      price: parseFloat(newCourse.price) || 0,
      chapters: newCourse.chapters,
      isPublished: !isDraft,
      teacher: newCourse.teacher || 'Unknown Teacher',
      coverImage: newCourse.coverImagePreview || ''
    };

    if (editingCourse) {
      setCourses(prev => prev.map(course => 
        course.id === editingCourse.id ? newCourseData : course
      ));
      setEditingCourse(null);
    } else {
      setCourses(prev => [...prev, newCourseData]);
    }

    // Reset form
    setNewCourse({
      title: '',
      description: '',
      price: '',
      teacher: '',
      chapters: [{ title: '', duration: '', isFree: false }],
      coverImage: null,
      coverImagePreview: ''
    });
  };

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course);
    setNewCourse({
      title: course.title || '',
      description: course.title || '',
      price: course.price.toString() || '',
      teacher: course.teacher || '',
      chapters: course.chapters ?? [{ title: '', duration: '', isFree: false }],
      coverImage: null,
      coverImagePreview: course.coverImage || ''
    });
    setActiveTab('upload');
  };

  const handleDeleteCourse = (courseId: string) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(prev => prev.filter(course => course.id !== courseId));
    }
  };

  const renderOverview = () => (
    <div className="stats-grid">
      <div className="stats-card">
        <div className="stats-card-content">
          <div>
            <p className="stats-card-text">Total Students</p>
            <p className="stats-card-number">{students.length}</p>
          </div>
          <Users className="stats-card-icon" />
        </div>
      </div>
      
      <div className="stats-card">
        <div className="stats-card-content">
          <div>
            <p className="stats-card-text">Total Teachers</p>
            <p className="stats-card-number">{teachers.length}</p>
          </div>
          <Users className="stats-card-icon" />
        </div>
      </div>
      
      <div className="stats-card">
        <div className="stats-card-content">
          <div>
            <p className="stats-card-text">Total Courses</p>
            <p className="stats-card-number">{courses.length}</p>
          </div>
          <BookOpen className="stats-card-icon" />
        </div>
      </div>
      
      <div className="stats-card">
        <div className="stats-card-content">
          <div>
            <p className="stats-card-text">Pending Requests</p>
            <p className="stats-card-number">{requests.filter(r => r.status === 'PROCESSING').length}</p>
          </div>
          <Eye className="stats-card-icon" />
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="dashboard-card">
      <h2 className="dashboard-title">Students Management</h2>
      
      <div className="search-container">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search by name, ID, or email..."
          value={studentSearch}
          onChange={(e) => setStudentSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-container">
        <table className="table">
          <thead className="table-header">
            <tr>
              <th className="table-header-cell">Student</th>
              <th className="table-header-cell">Contact</th>
              <th className="table-header-cell">Location</th>
              <th className="table-header-cell">Role</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="table-row">
                  <td className="table-cell">
                    <div>
                      <div className="table-cell-primary">{student.firstName} {student.lastName}</div>
                      <div className="table-cell-secondary">ID: {student.id}</div>
                    </div>
                  </td>
                  <td className="table-cell">
                    <div>
                      <div className="table-cell-primary">{student.email}</div>
                      <div className="table-cell-secondary">{student.phone}</div>
                    </div>
                  </td>
                  <td className="table-cell table-cell-primary">{student.wilaya}</td>
                  <td className="table-cell">
                    <span className="badge badge-yellow">
                      {student.role}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="empty-state">
                  No students found matching your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderTeachers = () => (
    <div className="dashboard-card">
      <h2 className="dashboard-title">Teachers Management</h2>
      
      <div className="search-container">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search teachers by name, ID, description, or category..."
          value={teacherSearch}
          onChange={(e) => setTeacherSearch(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="teacher-grid">
        {filteredTeachers.length > 0 ? (
          filteredTeachers.map((teacher) => (
            <div key={teacher.id} className="dashboard-card">
              <h3 className="table-cell-primary" style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{teacher.name}</h3>
              <p className="table-cell-secondary" style={{ marginBottom: '0.5rem' }}>{teacher.description}</p>
              <p className="table-cell-secondary" style={{ color: '#d97706', fontWeight: '500' }}>Category: {teacher.category}</p>
              <p className="table-cell-secondary" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>ID: {teacher.id}</p>
            </div>
          ))
        ) : (
          <div className="empty-state">
            No teachers found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="dashboard-card">
      <h2 className="dashboard-title">Courses Management</h2>
      
      <div className="search-container">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search courses by name or ID..."
          value={courseSearch}
          onChange={(e) => setCourseSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-container">
        <table className="table">
          <thead className="table-header">
            <tr>
              <th className="table-header-cell">Course</th>
              <th className="table-header-cell">Teacher</th>
              <th className="table-header-cell">Chapters</th>
              <th className="table-header-cell">Price</th>
              <th className="table-header-cell">Status</th>
              <th className="table-header-cell">Actions</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <tr key={course.id} className="table-row">
                  <td className="table-cell">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {course.coverImage ? (
                        <img
                          src={course.coverImage}
                          alt={`${course.title} cover`}
                          className="course-cover-image"
                          style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div style={{ width: '40px', height: '40px', borderRadius: '4px', background: '#e5e7eb' }} />
                      )}
                      <div>
                        <div className="table-cell-primary">{course.title || 'Untitled'}</div>
                        <div className="table-cell-secondary">ID: {course.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="table-cell table-cell-primary">{course.teacher || 'Unknown'}</td>
                  <td className="table-cell table-cell-primary">{course.chapters.length}</td>
                  <td className="table-cell table-cell-primary">{course.price} DZD</td>
                  <td className="table-cell">
                    <span className={`badge ${course.isPublished ? 'badge-green' : 'badge-red'}`}>
                      {course.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="table-cell">
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => handleEditCourse(course)}
                        className="btn btn-primary btn-small"
                      >
                        <Edit2 className="btn-icon-small" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteCourse(course.id)}
                        className="btn btn-danger btn-small"
                      >
                        <Trash2 className="btn-icon-small" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="empty-state">
                  No courses found matching your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderUploadCourse = () => (
    <div className="dashboard-card">
      <h2 className="dashboard-title">{editingCourse ? 'Edit Course' : 'Upload New Course'}</h2>
      
      <form onSubmit={(e) => handleCourseSubmit(e, false)} className="form-container">
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Course Title</label>
            <input
              type="text"
              value={newCourse.title}
              onChange={(e) => setNewCourse(prev => ({ ...prev, title: e.target.value }))}
              className="form-input"
              placeholder="Enter course title"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Price (DZD)</label>
            <input
              type="number"
              value={newCourse.price}
              onChange={(e) => setNewCourse(prev => ({ ...prev, price: e.target.value }))}
              className="form-input"
              placeholder="Enter price"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Teacher</label>
            <input
              type="text"
              value={newCourse.teacher}
              onChange={(e) => setNewCourse(prev => ({ ...prev, teacher: e.target.value }))}
              className="form-input"
              placeholder="Enter teacher name"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Cover Image</label>
            <div className="cover-image-upload">
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverImageChange}
                className="form-input cover-image-input"
                id="coverImage"
              />
              {newCourse.coverImagePreview ? (
                <div className="cover-image-preview-container">
                  <img
                    src={newCourse.coverImagePreview}
                    alt="Cover preview"
                    className="cover-image-preview"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <button
                    type="button"
                    onClick={handleRemoveCoverImage}
                    className="cover-image-remove-btn"
                  >
                    <X className="btn-icon-small" />
                    Remove
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            value={newCourse.description}
            onChange={(e) => setNewCourse(prev => ({ ...prev, description: e.target.value }))}
            rows={4}
            className="form-textarea"
            placeholder="Enter course description"
            required
          />
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <label className="form-label">Chapters ({newCourse.chapters.length})</label>
            <button
              type="button"
              onClick={addChapter}
              className="btn btn-primary btn-small"
            >
              <Plus className="btn-icon-small" />
              Add Chapter
            </button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {newCourse.chapters.map((chapter, index) => (
              <div key={`chapter-${index}`} className="chapter-container">
                <div className="chapter-title-input">
                  <input
                    type="text"
                    placeholder={`Chapter ${index + 1} title`}
                    value={chapter.title}
                    onChange={(e) => updateChapter(index, 'title', e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="chapter-duration-input">
                  <input
                    type="text"
                    placeholder="Duration (e.g., 2h)"
                    value={chapter.duration}
                    onChange={(e) => updateChapter(index, 'duration', e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="chapter-free-toggle">
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                      type="checkbox"
                      checked={chapter.isFree}
                      onChange={(e) => updateChapter(index, 'isFree', e.target.checked)}
                      className="chapter-free-checkbox"
                    />
                    Free Chapter
                  </label>
                </div>
                {newCourse.chapters.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeChapter(index)}
                    className="chapter-remove-btn"
                  >
                    <Minus className="btn-icon-small" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button
            type="button"
            onClick={() => {
              const syntheticEvent = new Event('submit') as unknown as FormEvent<HTMLFormElement>;
              handleCourseSubmit(syntheticEvent, true);
            }}
            className="btn btn-secondary"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="btn btn-primary"
          >
            <Upload className="btn-icon" />
            {editingCourse ? 'Update Course' : 'Upload Course'}
          </button>
        </div>
      </form>
    </div>
  );

  const renderRequests = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="dashboard-card">
        <h2 className="dashboard-title">Pending Course Access Requests</h2>
        
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search by student name, course name, student ID, course ID, or email..."
            value={requestSearch}
            onChange={(e) => setRequestSearch(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="table-container">
          <table className="table">
            <thead className="table-header">
              <tr>
                <th className="table-header-cell">Student</th>
                <th className="table-header-cell">Course</th>
                <th className="table-header-cell">Request Date</th>
                <th className="table-header-cell">Status</th>
                <th className="table-header-cell">Actions</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {filteredRequests.filter(req => req.status === 'PROCESSING').length > 0 ? (
                filteredRequests.filter(req => req.status === 'PROCESSING').map((request) => (
                  <tr key={request.id} className="table-row">
                    <td className="table-cell">
                      <div>
                        <div className="table-cell-primary">{request.studentName || 'Unknown'}</div>
                        <div className="table-cell-secondary">ID: {request.studentId}</div>
                        <div className="table-cell-secondary">{request.studentEmail}</div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <div>
                        <div className="table-cell-primary">{request.courseName || 'Unknown'}</div>
                        <div className="table-cell-secondary">ID: {request.courseId}</div>
                      </div>
                    </td>
                    <td className="table-cell table-cell-primary">{request.date}</td>
                    <td className="table-cell">
                      <span className="badge badge-yellow">
                        {request.status}
                      </span>
                    </td>
                    <td className="table-cell">
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                          onClick={() => handleRequestAction(request.id, 'ACCEPTED')}
                          className="btn btn-success btn-small"
                        >
                          <Check className="btn-icon-small" />
                          Approve
                        </button>
                        <button
                          onClick={() => handleRequestAction(request.id, 'REJECTED')}
                          className="btn btn-danger btn-small"
                        >
                          <X className="btn-icon-small" />
                          Decline
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="empty-state">
                    {requestSearch ? 'No pending requests found matching your search criteria.' : 'No pending requests at the moment.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-card">
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Quick Actions</h3>
        <div className="quick-actions-grid">
          <div className="quick-action-card">
            <h4 className="quick-action-title">Bulk Approve by Course</h4>
            <p className="quick-action-description">Approve all pending requests for a specific course</p>
            <div className="quick-action-controls">
              <select className="quick-action-select">
                <option value="">Select a course...</option>
                {courses.map(course => (
                  <option key={course.id} value={course.title}>{course.title}</option>
                ))}
              </select>
              <button className="btn btn-success btn-small">
                Approve All
              </button>
            </div>
          </div>
          
          <div className="quick-action-card">
            <h4 className="quick-action-title">Bulk Approve by Student</h4>
            <p className="quick-action-description">Approve all pending requests for a specific student</p>
            <div className="quick-action-controls">
              <select className="quick-action-select">
                <option value="">Select a student...</option>
                {students.map(student => (
                  <option key={student.id} value={`${student.firstName} ${student.lastName}`}>
                    {student.firstName} {student.lastName}
                  </option>
                ))}
              </select>
              <button className="btn btn-success btn-small">
                Approve All
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Recent Actions</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filteredRequests.filter(req => req.status !== 'PROCESSING').length > 0 ? (
            filteredRequests.filter(req => req.status !== 'PROCESSING').slice(0, 5).map((request) => (
              <div key={request.id} className="recent-action-item">
                <div className="recent-action-content">
                  <div className="recent-action-main">
                    <div>
                      <span className="recent-action-text recent-action-text-primary">{request.studentName || 'Unknown'}</span>
                      <span className="recent-action-text recent-action-text-secondary"> requested </span>
                      <span className="recent-action-text recent-action-text-primary">{request.courseName || 'Unknown'}</span>
                    </div>
                  </div>
                  <div className="recent-action-meta">
                    Student ID: {request.studentId} • Course ID: {request.courseId} • {request.date}
                  </div>
                </div>
                <span className={`badge ${request.status === 'ACCEPTED' ? 'badge-green' : 'badge-red'}`}>
                  {request.status === 'ACCEPTED' ? 'Approved' : 'Declined'}
                </span>
              </div>
            ))
          ) : (
            <div className="empty-state" style={{ padding: '1rem' }}>
              No recent actions to display.
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-header-content">
          <h1 className="dashboard-title">Admin Dashboard</h1>
          <p className="dashboard-subtitle">Manage your educational platform</p>
        </div>
      </header>

      <nav className="dashboard-nav">
        <div className="dashboard-nav-content">
          <div className="dashboard-nav-tabs">
            {[
              { id: 'overview' as TabType, label: 'Overview' },
              { id: 'students' as TabType, label: 'Students' },
              { id: 'teachers' as TabType, label: 'Teachers' },
              { id: 'courses' as TabType, label: 'Courses' },
              { id: 'upload' as TabType, label: 'Upload Course' },
              { id: 'requests' as TabType, label: 'Requests' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`dashboard-nav-tab ${activeTab === tab.id ? 'active' : 'inactive'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="dashboard-main">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'students' && renderStudents()}
        {activeTab === 'teachers' && renderTeachers()}
        {activeTab === 'courses' && renderCourses()}
        {activeTab === 'upload' && renderUploadCourse()}
        {activeTab === 'requests' && renderRequests()}
      </main>
    </div>
  );
};

export default AdminDashboard;