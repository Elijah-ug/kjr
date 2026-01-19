import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

export const PostGalary = () => {
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col justify-center  items-center gap-5 px-7 py-7 max-w-7xl mx-auto">
      <Card
        className="  w-xs sm:w-lg lg:w-xl
      bg-linear-to-br from-gray-700 to-gray-800
      border border-white/10
      text-gray-200
      rounded-3xl
      shadow-xl py-10"
      >
        <CardHeader>
          <CardTitle className="">Add An Image</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  type="description"
                  placeholder="Enter name"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-gray-900/50 border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="pic">Image</Label>
                <Input
                  id="file"
                  type="file"
                  className="bg-gray-900/50 border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-blue-500 hover:bg-blue-400 shadow-lg hover:shadow-blue-500/40
     transition-all duration-300"
              >
                Save Image
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
