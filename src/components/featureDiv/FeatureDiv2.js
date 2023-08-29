import React from "react";
import "./featureDiv2.css";
import FeatureCard from "./FeatureCard";
import AccessTime from "@mui/icons-material/AccessTime";
import EmojiPeople from "@mui/icons-material/EmojiPeople";
import VideoLibrary from "@mui/icons-material/VideoLibrary";

function Feature2() {
  return (
    <div className="featureDiv2">
      <FeatureCard
        icon={<AccessTime className="icon" />}
        heading={"Go at your own pace"}
        para={"Enjoy lifetime access to courses on Udemy's website and app"}
      />
      <FeatureCard
        icon={<EmojiPeople className="icon" />}
        heading={"Learn from industry experts"}
        para={"Select from top instructors around the world"}
      />
      <FeatureCard
        icon={<VideoLibrary className="icon" />}
        heading={"Find video courses on almost any topic"}
        para={"Build your library for your career and personal growth"}
      />
    </div>
  );
}

export default Feature2;