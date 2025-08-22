import React from 'react';
import Image from 'next/image';
const leftStatsDecoration = require('../../assets/images/leftstatsec.png');
const rightStatsDecoration = require('../../assets/images/rightstatsec.png');

interface StatsData {
  students: string;
  hours: string;
  teachers: string;
  courses: string;
}

interface StatsSectionProps {
  stats: StatsData;
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <section className="stats-section">
      <div className="stats-decoration-left">
        <Image src={leftStatsDecoration} alt="زخرفة يسار" className="decoration-image" />
      </div>
      <div className="stats-decoration-right">
        <Image src={rightStatsDecoration} alt="زخرفة يمين" className="decoration-image" />
      </div>
      
      <div className="stats-container">
        <div className="stats-content">
          <div className="stat-item">
            <div className="stat-number">{stats.students}</div>
            <div className="stat-label">طالب مسجل</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.hours}</div>
            <div className="stat-label">ساعة تعليمية</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.teachers}</div>
            <div className="stat-label">مدرس خبير</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.courses}</div>
            <div className="stat-label">دورة تدريبية</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;