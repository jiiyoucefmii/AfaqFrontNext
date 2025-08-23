"use client";

import React from 'react';
import { useState } from "react";
import Link from "next/link";
import '../../assets/styles/coursereader.css'


export default function CourseReaderPage() {
  return (
    <div className='course-reader'>
      <div className="teacher-course">
        <p className='cr-name'>دورة: الإتقان في اللغة العربية للبكالوريا</p>
        <p className='tc-name'>الأستاذ سامي قرفي</p>
      </div>
      <hr className='hro' />

      <div className='video-sess'>
        <div className='video-player'>
          <iframe

            src="https://www.youtube.com/embed/yourVideoId"
            title="Course Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="videooo"
          />
          <p>الحصة الأولى</p>
        </div>
        <div className="sessions">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="one-session">
              الحصة {i + 1}
            </div>
          ))}
        </div>

      </div>
    </div>

  )
}
