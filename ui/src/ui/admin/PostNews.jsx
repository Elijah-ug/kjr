import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetNewsQuery, usePostNewsMutation } from "../state/features/news";
import { useUpdateAdminMutation } from "../state/features/admin";

export const PostNews = () => {
  const { id } = useParams();
  const postId = parseInt(id);
  const { data, isLoading: LoadNews, error: newsErr } = useGetNewsQuery(postId, { skip: !id });

  const [update, { isLoading: LoadNewsUpdate, error: newsUpdateErr }] = useUpdateAdminMutation();

  const [news, setNews] = useState({ title: "", description: "" });
  const [newsPost, { isLoading, error }] = usePostNewsMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setNews({ title: data.post.title, description: data.post.description });
    }
  }, [data]);
  const handlePostNews = async (e) => {
    e.preventDefault();
    try {
      console.log("post this event==>", news);
      if (id) {
        const res = await update({ postId, ...news });
        console.log("Updated ==>", res);
        return navigate("/");
      } else {
        const res = await newsPost(news);
        console.log("data==>", res);
        return navigate("/");
      }
    } catch (error) {
      return console.log("Error==>", error);
    }
  };
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
          <CardTitle className="">Add News Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePostNews}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="title"
                  placeholder="News Title"
                  required
                  value={news.title}
                  onChange={(e) => setNews({ ...news, title: e.target.value })}
                  className="bg-gray-900/50 border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="news">News</Label>
                <Textarea
                  placeholder="News description"
                  value={news.description}
                  onChange={(e) => setNews({ ...news, description: e.target.value })}
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
                Publish News
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
