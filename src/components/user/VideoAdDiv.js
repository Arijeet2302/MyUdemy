import React from "react";
import "../user/videoAdDiv.css";

function VideoAdDiv() {
  return (
    <div className="videoAdDiv">
      <div className="videoDiv">
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
      <div className="content">
        <h2 className="heading">Transform your life through education</h2>
        <p className="about">
          Dave Ulrich with a brand new podcast about emerging leaders 
          around the world
        </p>
      </div>
    </div>
  );
}

export default VideoAdDiv;