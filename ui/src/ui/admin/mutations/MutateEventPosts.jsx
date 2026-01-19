import { useDeleteNewsMutation, useGetNewsQuery } from "@/ui/state/features/news";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { useDeleteEventMutation, useGetAllEventsQuery } from "@/ui/state/features/events";

export const MutateEventPosts = () => {
  const { data, isLoading, error } = useGetAllEventsQuery();
  const [destroy, { isLoading: loadDestroy, error: destroyErr }] = useDeleteEventMutation();
  const handleDeleteEvent = async (eventId) => {
    try {
      const res = await destroy(eventId);
      console.log("Deleted news post==>", res);
      return res;
    } catch (error) {
      console.log("Error==>", error);
    }
  };
  // console.log("News hereeee==>", data);
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6 ">Total events available</h2>

      <div className="grid gap-4">
        {data?.events.map((item) => (
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
                <Link to={`/post-event/${item.id}`}>
                  <Edit className="text-blue-300 cursor-pointer" />
                </Link>
                <Trash onClick={() => handleDeleteEvent(item.id)} className="text-red-400 cursor-pointer" />
              </div>
            </CardHeader>
            {/* <CardContent></CardContent> */}
          </Card>
        ))}
      </div>
    </div>
  );
};
