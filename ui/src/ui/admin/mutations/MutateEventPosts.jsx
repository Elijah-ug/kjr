import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { useDestroyEventMutation, useGetEventsQuery } from "@/ui/state/features/events";
import { toast } from "react-toastify";

export const MutateEventPosts = () => {
  const { data, isLoading, error } = useGetEventsQuery();
  const [destroy, { isLoading: loadDestroy, error: destroyErr }] = useDestroyEventMutation();
  const handleDeleteEvent = async (eventId) => {
    try {
      const res = await destroy(eventId);
      console.log("Deleted event post==>", res);
      toast.success("Event deleted!");
      return res;
    } catch (error) {
      console.log("Error==>", error);
      return toast.error("Failed to delete event!");
    }
  };
  console.log("Events hereeee==>", data);
  return (
    <div className="max-w-5xl mx-auto px-4 py-">
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
                <Link to={`/dashboard/events/${item.id}`}>
                  <Edit className="text-blue-300 cursor-pointer" />
                </Link>
                <Trash onClick={() => handleDeleteEvent(item.id)} className="text-red-400 cursor-pointer" />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
