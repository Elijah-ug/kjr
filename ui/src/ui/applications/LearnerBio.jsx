import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {  useNavigate } from "react-router-dom";

// Learner Bio – Ugandan Primary School Admission (Realistic Fields)
export const LearnerBio = () => {
  const navigate = useNavigate();
  const handleSaveLearnerBio = async (e) => {
    e.preventDefault()
    try {
      console.log("Hello learner");
      navigate("/application-form/guardian-bio");
    } catch (error) {
      console.log("Error here==>", error);
    }
  };
  return (
    <form onSubmit={handleSaveLearnerBio} className=" ">
      <Card className="sm:w-3xl w-87  shadow-md rounded-lg bg-gray-600 text-gray-100 border-none">
        <CardHeader>
          <CardTitle className="text-xl">Learner Bio</CardTitle>
          <CardDescription className="text-gray-100">
            Pupil personal details (no phone or email required)
          </CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div className="space-y-1">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" />
          </div>

          {/* Last Name */}
          <div className="space-y-1">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>

          {/* Date of Birth */}
          <div className="space-y-1">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" />
          </div>

          {/* Gender */}
          <div className="space-y-1">
            <Label>Gender</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Nationality */}
          <div className="space-y-1">
            <Label htmlFor="nationality">Nationality</Label>
            <Input id="nationality" placeholder="Ugandan" />
          </div>

          {/* Religion */}
          <div className="space-y-1">
            <Label>Religion</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select religion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="christian">Christian</SelectItem>
                <SelectItem value="muslim">Muslim</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* id pic */}
          <div className="space-y-1 md:col-span-2"></div>

          {/* Birth Certificate / NIN */}
          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="birthId">Birth Certificate / NIN Number</Label>
            <Input id="birthId" placeholder="CF12345678 or CMXXXXXXXX" />
          </div>

          {/* Home Address */}
          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="address">Home Address</Label>
            <Textarea id="address" placeholder="Village, Parish, District" />
          </div>

           {/* lin */}
          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="lin">LIN</Label>
            <Input type="text" id="lin" placeholder="Learner's Identification Number" />
          </div>

           {/* id pic */}
          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="pic">Small ID photo</Label>
            <Input id="pic" type="file"  />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-2 pt-4">
            <Button>Save Draft</Button>
            <Button>Continue</Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};
