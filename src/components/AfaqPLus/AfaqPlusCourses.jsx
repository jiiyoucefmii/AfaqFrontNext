import React, { useState } from 'react';
import '../../assets/styles/AfaqPlusCourses.css';
import CoursesAfaqP from '../../data/CoursesAfaqP';
import starOutlined from '../../assets/images/Star.svg';
import starFilled from '../../assets/images/Star-colored.svg';
import Pagination from './Pagination';

const AfaqPlusCourses = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(CoursesAfaqP.length / itemsPerPage);

    const indexStart = (currentPage - 1) * itemsPerPage;
    const displayedCourses = CoursesAfaqP.slice(indexStart, indexStart + itemsPerPage);

    //liked courses
    const [likedCourses, setLikedCourses] = useState([]);


    return (
        <div className='afaqpluscourses'>
            <div className='courses'>
                {displayedCourses.map(course => (
                    <div className='one-card' key={course.id}>
                        <div className="image-wraper">
                            <img src={course.image} alt="course" className="original-img" />
                            <button
                                onClick={() => {
                                    setLikedCourses(prev =>
                                        prev.includes(course.id)
                                            ? prev.filter(id => id !== course.id)
                                            : [...prev, course.id]
                                    );
                                }}
                                className="like-button" >
                                <img
                                    src={likedCourses.includes(course.id) ? starFilled : starOutlined}
                                    alt="like"
                                    className="star-icon"
                                />
                            </button>

                        </div>

                        <div className="course-title">
                                <p>{course.title}</p>
                            </div>

                        <div className="chapters">
                            <img src="src/assets/images/Table of Content.svg" alt="" />
                            <p>{course.chapters} Chapters</p>
                        </div>
                        <div className="price">
                            <img src="src/assets/images/Us Dollar Circled.svg" alt="" />
                            <p>{course.price}</p>
                        </div>
                        <div className="Play-now-btn-wrapper">
                            <button className="Play-now-btn">
                                <img src="src/assets/images/Circled Play Button.svg" alt="" />
                                <p>ابدأ الآن</p>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
        </div>
    );
};

export default AfaqPlusCourses;
