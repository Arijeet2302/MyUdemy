import React from 'react';
import Topcategories from './topcategories/Topcategories';
import Recommendations from "./recommendations/Recommendations";
import Feature1 from "../featureDiv/FeatureDiv1";
import Feature2 from "../featureDiv/FeatureDiv2";
import AdImage from "../user/AdImage";
import FillerDiv from "../user/FillerDiv";
import BecomeInstructor from "../user/BecomeInstructor";
import VideoAdDiv from "../user/VideoAdDiv";
import TrustedCompanies from "../user/TrustedCompanies";



export const Home = () => {
  return (
    <>
    <AdImage/>
    <Feature1/>
    <Recommendations/>
    <Feature2/>
    <FillerDiv/>
    <Topcategories/>
    <BecomeInstructor/>
    <TrustedCompanies/>
    <VideoAdDiv/>
    </>
  );
};

