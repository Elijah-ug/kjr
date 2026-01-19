import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Learner Health – Medical & Emergency Information (Primary School Ready)
export const LearnerHealth = () => {
  const navigate = useNavigate();
  const handleSaveLearnersHealth = async (e) => {
    e.preventDefault();
    try {
      console.log("Hello from academic background");
      navigate("/application-form/academic-background");
    } catch (error) {
      console.log("Error here==>", error);
    }
  };
  return (
    <form onSubmit={handleSaveLearnersHealth} className="">
      <Card className="sm:w-3xl w-87  shadow-md rounded-xl bg-gray-600 text-gray-100 border-none">
        <CardHeader>
          <CardTitle className="text-xl">Learner Health Information</CardTitle>
          <CardDescription className="text-gray-100">
            Medical details required for learner safety and emergency response
          </CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Blood Group */}
          <div className="space-y-1">
            <Label>Blood Group</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select blood group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="A-">A-</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="B-">B-</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="AB-">AB-</SelectItem>
                <SelectItem value="O+">O+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Has Allergies */}
          <div className="space-y-1">
            <Label>Allergies</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Does the learner have allergies?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="yes">Yes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Allergy Details */}
          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="allergyDetails">If yes, specify allergies</Label>
            <Textarea id="allergyDetails" placeholder="Food, medicine, dust, etc." />
          </div>

          {/* Disabilities */}
          <div className="space-y-1">
            <Label>Any Disability</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="physical">Physical</SelectItem>
                <SelectItem value="hearing">Hearing</SelectItem>
                <SelectItem value="vision">Vision</SelectItem>
                <SelectItem value="learning">Learning</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Disability Details */}
          <div className="space-y-1">
            <Label htmlFor="disabilityDetails">Disability Details</Label>
            <Input id="disabilityDetails" placeholder="If applicable" />
          </div>

          {/* Chronic Illness */}
          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="chronic">Chronic Illness / Ongoing Condition</Label>
            <Textarea id="chronic" placeholder="Asthma, sickle cell, epilepsy, etc." />
          </div>

          {/* Emergency Contact Name */}
          <div className="space-y-1">
            <Label htmlFor="emergencyName">Emergency Contact Name</Label>
            <Input id="emergencyName" placeholder="Parent / Guardian" />
          </div>

          {/* Emergency Contact Phone */}
          <div className="space-y-1">
            <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
            <Input id="emergencyPhone" placeholder="+256 7XX XXX XXX" />
          </div>

          {/* Consent */}
          <div className="md:col-span-2 flex items-start gap-2 pt-2">
            <Checkbox id="consent" />
            <Label htmlFor="consent" className="leading-snug">
              I consent to the school providing first aid and seeking medical attention for my child in case of an
              emergency.
            </Label>
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
