import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateAdminMutation } from "../state/features/admin";

export const RegisterAdmin = () => {
  const [info, setInfo] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const [register, { isLoading: regLoading }] = useCreateAdminMutation();
  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      console.log("info==>", info);
      if (!info.name && !info.email && !info.password) {
        console.log("You have some info missing");
      }
      const res = await register(info);
      // const token = await res.data.token;
      // localStorage.setItem("token", token);
      console.log("Response==>", res);
      // navigate("/dashboard");
      return res;
    } catch (error) {
      console.log("Error==>", error);
    }
  };

  return (
    <div className="flex flex-col justify-center  items-center gap-5 px-7 py-7 lg:py-12 max-w-7xl mx-auto">
      <Card
        className=" w-xs sm:w-lg lg:w-xl
      
      rounded-3xl
      shadow-xl py-10"
      >
        <CardHeader>
          <CardTitle className="">Admin Registration</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegistration}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="Enter name"
                  value={info.name}
                  onChange={(e) => setInfo({ ...info, name: e.target.value })}
                  required
                  className="bg-gray-900/50 border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={info.email}
                  onChange={(e) => setInfo({ ...info, email: e.target.value })}
                  placeholder="m@example.com"
                  className="bg-gray-900/50 border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={info.password}
                  onChange={(e) => setInfo({ ...info, password: e.target.value })}
                  className="bg-gray-900/50 border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex items-center gap-7">
                <Button
                  type="submit"
                  className=" rounded-full bg-blue-500 hover:bg-blue-400 shadow-lg hover:shadow-blue-500/40
     transition-all duration-300"
                >
                  Register
                </Button>
                <span>Or</span>
                <Link to="/login">Login here</Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
