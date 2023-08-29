import React ,{useEffect,useState}from "react";
import "./recommendedVideo.css";
import VideoCard from "./VideoCard";
import axios from "axios";

function RecommendedVideos() {


  const [courseItems , setCourseData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/course/")
    .then((res)=> {
      setCourseData(res.data);
    }).catch((e)=>{console.log("error",e);})
  },[])

  return (
    <div className="recommendedVideos">
      {courseItems.map((item)=>(
      <VideoCard key={item}
        courseTitle={item.course_name}
        imgSrc={item.image}
        instructor={item.author_name}
        rating={item.rating}
        noOfStudents={"(166,042)"}
        price={item.price}
      />
      ))}
    </div>
  );
}

export default RecommendedVideos;