import React ,{useEffect,useState}from "react";
import "./recommendedVideo.css";
import VideoCard from "./VideoCard";
import axios from "axios";

function RecommendedVideos() {


  const [courseItems , setCourseData] = useState([]);

  useEffect(() => {
    axios.get("https://myudemy-backend.vercel.app/course/")
    .then((res)=> {
      setCourseData(res.data);
    }).catch((e)=>{console.log("error",e);})
  },[])

  return (
    <div className="recommendedVideos">
      {courseItems.map((item)=>(
      <VideoCard key={item.course_id}
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