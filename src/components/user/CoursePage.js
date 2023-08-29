import React from 'react';
import "../user/coursepage.css";

export default function CoursePage() {

  return (
    <div className="heading">
        <h2>Let's get Started with your course</h2>
        <div className='course'>
            <iframe 
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/_wiUoCNMg0I" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
        </div>
    </div>
  )
}
