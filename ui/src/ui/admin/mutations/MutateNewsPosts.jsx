import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { useDestroyNewsMutation, useGetAllNewsQuery } from "@/ui/state/features/news";

export const MutateNewsPosts = () => {
  const { data, isLoading, error } = useGetAllNewsQuery();
  const [destroy, { isLoading: loadDestroy, error: destroyErr }] = useDestroyNewsMutation();
  const handleDeleteNewsPost = async (id) => {
    try {
      const res = await destroy(id);
      console.log("Deleted news post==>", res);
      return res;
    } catch (error) {
      console.log("Error==>", error);
    }
  };
  console.log("News hereeee==>", data);
  return (
    <div className="max-w-5xl mx-auto px-4 ">
      <h2 className="text-2xl font-semibold mb-6 ">You have unread messages </h2>

      <div className="grid gap-4">
        {data?.news.map((item) => (
          <Card
            key={item.id}
            className="hover:shadow-lg transition-shadow duration-300 border bg-gray-600 border-none text-gray-200 rounded-2xl"
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="sm:flex-1">
                <CardTitle className="text-base ">{item.title || "N/A"}</CardTitle>
                <p className="text-xs text-gray-400 italic">
                  Posted on {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-7">
                <Link to={`/dashboard/news/${item.id}`}>
                  <Edit className="text-blue-300 cursor-pointer" />
                </Link>
                <Trash onClick={() => handleDeleteNewsPost(item.id)} className="text-red-400 cursor-pointer" />
              </div>
            </CardHeader>
            {/* <CardContent></CardContent> */}
          </Card>
        ))}
      </div>
    </div>
  );
};
