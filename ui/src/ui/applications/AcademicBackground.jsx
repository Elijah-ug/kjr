import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Previous School & Academic History – Ugandan Primary Admission
export const AcademicBackground = () => {
  return (
    <Card className="sm:w-3xl w-sm  shadow-md rounded-xl bg-gray-600 text-gray-100 border-none">
      <CardHeader>
        <CardTitle className="text-xl">Previous School & Academic History</CardTitle>
        <CardDescription className="text-gray-100">
          Information about the learner’s previous school and academic background
        </CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Previous School Name */}
        <div className="space-y-1 md:col-span-2">
          <Label htmlFor="schoolName">Previous School Name</Label>
          <Input id="schoolName" placeholder="St. Mary’s Primary School" />
        </div>

        {/* School Type */}
        <div className="space-y-1">
          <Label>School Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select school type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="government">Government</SelectItem>
              <SelectItem value="private">Private</SelectItem>
              <SelectItem value="community">Community</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Last Class Completed */}
        <div className="space-y-1">
          <Label>Last Class Completed</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nursery">Nursery</SelectItem>
              <SelectItem value="p1">Primary 1</SelectItem>
              <SelectItem value="p2">Primary 2</SelectItem>
              <SelectItem value="p3">Primary 3</SelectItem>
              <SelectItem value="p4">Primary 4</SelectItem>
              <SelectItem value="p5">Primary 5</SelectItem>
              <SelectItem value="p6">Primary 6</SelectItem>
              <SelectItem value="p7">Primary 7</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Year Completed */}
        <div className="space-y-1">
          <Label htmlFor="yearCompleted">Year Completed</Label>
          <Input id="yearCompleted" type="number" placeholder="2024" />
        </div>

        {/* Reason for Transfer */}
        <div className="space-y-1">
          <Label>Reason for Leaving</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select reason" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relocation">Relocation</SelectItem>
              <SelectItem value="fees">School Fees</SelectItem>
              <SelectItem value="performance">Academic Performance</SelectItem>
              <SelectItem value="discipline">Discipline</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Teacher Remarks */}
        <div className="space-y-1 md:col-span-2">
          <Label htmlFor="remarks">Teacher / Head Teacher Remarks</Label>
          <Textarea id="remarks" placeholder="Optional remarks from the previous school" />
        </div>

        {/* Report Card Upload */}
        <div className="space-y-1 md:col-span-2">
          <Label htmlFor="report">Previous Report Card (Upload)</Label>
          <Input id="report" type="file" accept="image/*,.pdf" />
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 flex justify-end gap-2 pt-4">
          <Button>Save Draft</Button>
          <Button>Continue</Button>
        </div>
      </CardContent>
    </Card>
  );
};
