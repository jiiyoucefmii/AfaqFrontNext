import React from 'react';
import Image from 'next/image';
import leftStatsImage from '../../assets/images/leftstatsec.png';
import rightStatsImage from '../../assets/images/rightstatsec.png';

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
    <section className="statistics-section"> 
      <div className="stats-decoration-left"> 
        <Image src={leftStatsImage} alt="Left decoration" className="decoration-image" /> 
      </div> 
      
      <div className="stats-container"> 
        <div className="stats-content"> 
          <div className="stat-item"> 
            <div className="stat-number">+ {stats.courses}</div> 
            <div className="stat-label">دورة في AFAQ</div> 
          </div> 
          
          <div className="stat-item"> 
            <div className="stat-number">+ {stats.teachers}</div> 
            <div className="stat-label">أستاذ وخبير</div> 
          </div> 
          
          <div className="stat-item"> 
            <div className="stat-number">+ {stats.hours}</div> 
            <div className="stat-label">ساعة تعلم مسجلة</div> 
          </div> 
          
          <div className="stat-item"> 
            <div className="stat-number">{stats.students}</div> 
            <div className="stat-label">طالب مسجل</div> 
          </div> 
        </div> 
      </div> 
      
      <div className="stats-decoration-right"> 
        <Image src={rightStatsImage} alt="Right decoration" className="decoration-image" /> 
      </div> 
    </section>
  );
};

export default StatsSection;