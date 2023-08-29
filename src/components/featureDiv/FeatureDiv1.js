import React from "react";
import "./featureDiv1.css";
import FeatureCard from "./FeatureCard";
import OndemandVideo from "@mui/icons-material/OndemandVideo";
import AllInclusive from "@mui/icons-material/AllInclusive";
import Star from "@mui/icons-material/Star";

function Feature1() {
  return (
    <div className="featureDiv1">
      <FeatureCard
        icon={<OndemandVideo className="icon" />}
        heading={"130,000 online courses"}
        para={"Enjoy a variety of fresh topics"}
      />
      <FeatureCard
        icon={<Star className="icon" />}
        heading={"Expert instruction"}
        para={"Find the right instructor for you"}
      />
      <FeatureCard
        icon={<AllInclusive className="icon" />}
        heading={"Lifetime access"}
        para={"Learn on your schedule"}
      />
    </div>
  );
}

export default Feature1;