// Contact.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export const ContactUs = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen max-h-[70vh] overflow-hidden">
        <img
          src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=517359235601020"
          alt="Beautiful view of Kabale town and hills"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">Contact Us</h1>
            <p className="text-xl md:text-3xl text-white drop-shadow-lg">
              We're here to answer your questions and welcome you to our school family
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <div className="grid px-6 gap-12 sm:gap-17 py-13  sm:px-10">
        <section className=" bg-linear-to-b ">
          <div className=" mx-auto px-6 grid md:grid-cols-2 gap-12 pt-3">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-yellow-500 p-4 rounded-full shadow-lg">
                    <MapPin className="text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                    <p className=" text-gray-600 mt-2">
                      Kabale Town, Near Kikungiri Hill
                      <br />
                      Kabale District, Uganda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-yellow-500 p-4 rounded-full shadow-lg">
                    <Phone className="text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                    <p className=" text-gray-600 mt-2">
                      +256 123 456 789
                      <br />
                      +256 987 654 321
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-yellow-500 p-4 rounded-full shadow-lg">
                    <Mail className="text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                    <p className=" text-gray-600 mt-2">
                      info@kabalejunior.sc.ug
                      <br />
                      admissions@kabalejunior.sc.ug
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-yellow-500 p-4 rounded-full shadow-lg">
                    <Clock className="text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Office Hours</h3>
                    <p className=" text-gray-600 mt-2">
                      Monday – Friday: 8:00 AM – 5:00 PM
                      <br />
                      Saturday: 9:00 AM – 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-2xl w-full max-w-sm sm:w-auto sm:max-w-lg mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="John Doe" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+256 ..." className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Admissions Inquiry" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={6} placeholder="Tell us how we can help..." className="mt-2" />
                  </div>

                  <div className="flex items-center justify-end">
                    <Button type="submit" size="lg" className="">
                      <Send className="mr-3 w-5 h-5" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="">
          <div className=" mx-auto px-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">Find Us on the Map</h2>
            <div className="h-96 rounded-3xl overflow-hidden shadow-2xl bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center w-full max-w-sm sm:max-w-4xl sm:w-auto mx-auto">
              <div style={{ width: "100%", height: "400px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15958.878141920977!2d32.5938274!3d0.4031876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v1767475419903!5m2!1sen!2sug"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
