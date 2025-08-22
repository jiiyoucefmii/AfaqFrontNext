'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import '../../../assets/styles/OverviewT.css'
import CardOver from '../../../components/ui/CardOver'
import Teachers from '../../../data/TeachersAfaq';
import Pagination from '../../../components/AfaqPLus/Pagination';

const OverviewT: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(Teachers.length / itemsPerPage);

    const indexStart = (currentPage - 1) * itemsPerPage;
    const displayedTeachers = Teachers.slice(indexStart, indexStart + itemsPerPage);

    return (
        <div className='overviewt'>
            <p className='big-overview'>Overview</p>
            <hr className='hr-ov' />

            <div className="info-courses">
                <CardOver number={16} text=" الدورات المكتملة" />
                <CardOver number={2} text="إجمالي عدد الطلاب المسجلين" />
                <CardOver number={550} text="مجموع ساعات التدريس" />
                <CardOver number={90} text="عدد الدورات" />
            </div>

            <div className="teacher-courses">
                <p className='my-courses'>الدورات الخاصة بي</p>
                <p className='courses-over'>نظرة شاملة على موادك التعليمية</p>
                <hr className='hr-ov2' />
            </div>

            <div className="my-course">
                <div className="all-teachers1">
                    {displayedTeachers.length > 0 ? (
                        displayedTeachers.map((teacher) => (
                            <div className="one-card" key={teacher.id}>
                                <div className="teacher-img-wrapper">
                                    <Image
                                        src={teacher.image}
                                        alt={teacher.name}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="white-bottom">
                                    <p className="teacher-name">{teacher.name}</p>{/* testing with false data , should be imported from db */}
                                    <p className="teacher-course">{teacher.name}</p>
                                    <p className="module">{teacher.module}</p>

                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-courses">لا توجد دورات</p>
                    )}
                </div>

                {/* Pagination only if more than 1 page */}
                {totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                )}
            </div>
        </div>
    )
}

export default OverviewT
