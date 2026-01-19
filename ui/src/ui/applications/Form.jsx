import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { LearnerBio } from "./LearnerBio";
import { GuardianBio } from "./GuardianBio";
import { LearnerHealth } from "./LearnerHealth";
import { AcademicBackground } from "./AcademicBackground";
import { Link, Outlet } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

export const Form = () => {
  return (
    <div className="flex flex-col justify-center  items-center gap-5 py-7 max-w-7xl mx-auto">
      <h2 className="text-lg font-bold text-center">Student Application Form</h2>

      {/* ================= Learner Information ================= */}
      <div className=" grid gap-7">
        <Slider
          defaultValue={[25]}
          max={100}
          step={25}
          className="
    w-full
    [&_[data-range]]:bg-blue-500
    [&_[role=slider]]:border-blue-500
  "
        />
        {/* <Link to="learner-bio" className="bg-blue-400 px-5 py-1 rounded">Continue</Link> */}
        {/* <LearnerBio/> */}
        {/* <GuardianBio/> */}
        {/* <LearnerHealth/> */}
        {/* <AcademicBackground/> */}
        <Outlet />
      </div>
    </div>
  );
};
