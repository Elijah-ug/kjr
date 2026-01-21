"use client";

import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";

export const Admission = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 lg:px-10 py-10">
      <div className=" space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold">Online Admission Overview</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            To complete the online admission process, parents or guardians are required to provide accurate and
            verifiable information about the learner. This ensures proper placement, safety, and overall wellbeing.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            title="Learner Information"
            icon="🧒"
            items={[
              "Full name (as per birth certificate)",
              "Date and place of birth",
              "Gender",
              "Nationality",
              "Home address",
            ]}
          />

          <InfoCard
            title="Parent / Guardian Details"
            icon="👨‍👩‍👧"
            items={[
              "Full name of parent or guardian",
              "Relationship to learner",
              "Phone number and email address",
              "Residential and work address",
              "Emergency contact details",
            ]}
          />

          <InfoCard
            title="Health & Medical Information"
            icon="🩺"
            items={[
              "Immunisation status (supporting documents)",
              "Known allergies or chronic conditions",
              "Special medical needs or disabilities",
              "Medical practitioner or hospital details",
            ]}
          />

          <InfoCard
            title="Academic Background"
            icon="🎓"
            items={[
              "Previous school attended",
              "Last class or grade completed",
              "Academic reports or transcripts",
              "Reason for transfer (if applicable)",
            ]}
          />

          <InfoCard
            title="Legal & Compliance"
            icon="📄"
            span
            items={[
              "Copy of birth certificate or national ID",
              "Passport-size photographs of the learner",
              "Consent for data processing and storage",
              "Agreement to school rules and policies",
            ]}
          />
        </div>

        {/* CTA */}
        <Card className="bg-white shadow-md">
          <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
            <p className="text-sm text-gray-600">
              The application takes approximately <strong>10–15 minutes</strong>. You may save your progress and
              continue later.
            </p>
            {/* <Button asChild size="lg" className=""> */}
            <Link
              to="/application-form/learners-bio"
              className="bg-green-500 px-3 py-2 rounded-lg flex items-center gap-2"
            >
              <span className="text-gray-700">Start Application</span> <ArrowBigRight className="text-gray-700" />{" "}
            </Link>
            {/* </Button> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

function InfoCard({ title, icon, items, span }) {
  return (
    <Card className={`${span ? "sm:col-span-2" : ""} hover:shadow-lg transition-shadow`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <span>{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
