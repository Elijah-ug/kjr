import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";
import { useLoginAdminMutation } from "../state/features/admin";
import { toast } from "react-toastify";

export const Login = () => {
  const [login, { isLoading: logLoading, error: newErr }] = useLoginAdminMutation();
  const [info, setInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("info==>", info);
      const res = await login(info).unwrap();
      const token = await res?.token;
      localStorage.setItem("token", token);

      console.log("token==>", token);
      toast.success("You've logged in");
      // 🔥 force reload of auth state
      navigate("/dashboard", { replace: true });
      return res;
    } catch (error) {
      console.log("Login Error==>", error.message);
    }
  };

  return (
    <div className="">
      {/* {logLoading ? (
        <div className="">
          <Spinner className="size-8" />
        </div>
      ) : ( */}
      <div className="flex flex-col justify-center  items-center gap-5 px-7 py-7 ">
        <Card
          className="  w-xs sm:w-lg lg:w-xl
      
      rounded-3xl
      shadow-xl py-10"
        >
          <CardHeader>
            <CardTitle className="">Admin Login</CardTitle>
            <CardAction>
              <Link to="/add-admin">Register</Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAdminLogin}>
              <div className="flex flex-col gap-6">
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
                <Button
                  type="submit"
                  className=" rounded-full bg-blue-500 hover:bg-blue-400 shadow-lg hover:shadow-blue-500/40
     transition-all duration-300"
                >
                  {logLoading ? <Spinner className="size-8" /> : "Login"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      {/* )} */}
    </div>
  );
};
