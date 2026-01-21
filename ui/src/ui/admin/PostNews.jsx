import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetNewsQuery, usePostNewsMutation, useUpdateNewsMutation } from "../state/features/news";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "react-toastify";

export const PostNews = () => {
  const { id } = useParams();
  const newsId = Number(id);
  const { data, isLoading: LoadNews, error: newsErr } = useGetNewsQuery(newsId, { skip: !id });
  const [update, { isLoading: LoadNewsUpdate, error: newsUpdateErr }] = useUpdateNewsMutation();

  const [news, setNews] = useState({ title: "", description: "" });
  const [newsPost, { isLoading, error }] = usePostNewsMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setNews({ title: data.news.title, description: data.news.description });
    }
  }, [data]);
  const handlePostNews = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        console.log("post this event==>", news);
        const res = await update({ newsId, ...news });
        console.log("Updated ==>", res);
        toast.success("NewsPost Updated!");
        return navigate("/dashboard/news-list");
      } else {
        const res = await newsPost(news);
        console.log("data==>", res);
        toast.success("News Posted!");
        return navigate("/dashboard/news-list");
      }
    } catch (error) {
      toast.error("Failed to Post news!");
      return console.log("Error==>", error);
    }
  };
  return (
    <div className="flex flex-col justify-center  items-center gap-5 sm:px-6 lg:px-10 py-7 ">
      <Card className="  w-xs sm:w-lg lg:w-xl rounded-3xl shadow-xl py-10">
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
              {/* <div className="grid gap-2">
                <Label htmlFor="pic">Image</Label>
                <Input
                  id="file"
                  type="file"
                  className="bg-gray-900/50 border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div> */}
              <Button
                type="submit"
                className="w-full rounded-full bg-blue-500 hover:bg-blue-400 shadow-lg hover:shadow-blue-500/40
     transition-all duration-300"
              >
                {LoadNewsUpdate || isLoading ? <Spinner className="size-8" /> : "Publish News Post"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
