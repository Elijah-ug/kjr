import React from "react";
import { Slider } from "./Slider";
import { About } from "./About";
import { CoreValues } from "./CoreValues";
import { WhyChooseUs } from "./WhyChooseUs";
import { ProgramsSection } from "./ProgramsSection";
import { NewsPosts } from "./NewsPosts";
import { Events } from "./Events";
import { Staff } from "./Staff";

export const Home = () => {
  return (
    <div className="">
      <Slider />
        <About />
        <CoreValues />
        <WhyChooseUs />
        <ProgramsSection />
        <NewsPosts />
        <Events />
        <Staff />
      </div>
  );
};
