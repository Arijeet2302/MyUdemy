import React from 'react';
import "./categoryCard.css";

export default function CategoryCard(props) {

  
  
  const gotoCategory=()=>{
    window.location.href = `https://www.udemy.com/courses/${props.name}/`;
  }
  return (
    <div className="categorycard" onClick={gotoCategory}>
      <img
        src={props.imgsrc}
        alt={props.title+" img"}
        className='="categoryImg'></img>
        <h3 className="categoryTitle">{props.title}</h3>
    </div>
  )
}
