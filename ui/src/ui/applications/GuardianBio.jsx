import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Guardian Bio – Ugandan Primary School Admission (Required & Verifiable)
export const GuardianBio = () => {
  const navigate = useNavigate();
  const handleSaveGuardianBio = async (e) => {
    e.preventDefault();
    try {
      console.log("Hello Parent or guardian");
      navigate("/application-form/learner-health");
    } catch (error) {
      console.log("Error here==>", error);
    }
  };
  return (
    <form onSubmit={handleSaveGuardianBio} className="">
      <Card className="sm:w-3xl w-87  shadow-md rounded-xl bg-gray-600 text-gray-100 border-none">
        <CardHeader>
          <CardTitle className="text-xl">Parent / Guardian Bio</CardTitle>
          <CardDescription className="text-gray-100">Legal guardian identification and contact details</CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="space-y-1">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="Jane Doe" />
          </div>

          {/* Relationship */}
          <div className="space-y-1">
            <Label>Relationship to Learner</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select relationship" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mother">Mother</SelectItem>
                <SelectItem value="father">Father</SelectItem>
                <SelectItem value="guardian">Guardian</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Nationality */}
          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="nationality">Nationality</Label>
            <Input id="nationality" placeholder="Ugandan" />
          </div>

           {/* National ID Number */}
          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="nin">National ID (NIN)</Label>
            <Input id="nin" placeholder="CMXXXXXXXXXX" />
          </div>

          {/* ID Front */}
          <div className="space-y-1">
            <Label htmlFor="idFront">National ID – Front</Label>
            <Input id="idFront" type="file" accept="image/*" />
          </div>

          {/* ID Back */}
          <div className="space-y-1">
            <Label htmlFor="idBack">National ID – Back</Label>
            <Input id="idBack" type="file" accept="image/*" />
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <Label htmlFor="phone">Primary Phone Number</Label>
            <Input id="phone" placeholder="+256 7XX XXX XXX" />
          </div>

          {/* Alternative Contact */}
          <div className="space-y-1">
            <Label htmlFor="altPhone">Alternative Contact</Label>
            <Input id="altPhone" placeholder="Relative / Work contact" />
          </div>

          {/* Occupation */}
          <div className="space-y-1">
            <Label htmlFor="occupation">Occupation</Label>
            <Input id="occupation" placeholder="Teacher, Farmer, Business" />
          </div>

          {/* Residence */}
          <div className="space-y-1">
            <Label htmlFor="residence">Place of Residence</Label>
            <Input id="residence" placeholder="Town / District" />
          </div>

          {/* Home Address */}
          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="address">Physical Address</Label>
            <Textarea id="address" placeholder="Village, Parish, District" />
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
