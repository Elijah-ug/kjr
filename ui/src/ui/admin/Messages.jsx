import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { useDestroyEventMutation, useGetEventsQuery } from "@/ui/state/features/events";
import { toast } from "react-toastify";
import { useDestroyMessageMutation, useGetMessagesQuery } from "../state/features/messages";

export const Messages = () => {
  const { data, isLoading, error } = useGetMessagesQuery();
  const [destroy, { isLoading: loadDestroy, error: destroyErr }] = useDestroyMessageMutation();
  const handleDeleteMessage = async (msgId) => {
    try {
      const res = await destroy(msgId);
      console.log("Deleted event post==>", res);
      toast.success("Message deleted!");
      return res;
    } catch (error) {
      console.log("Error==>", error);
      return toast.error("Failed to delete event!");
    }
  };
  console.log("messages==>", data);
  return (
    <div className="max-w-5xl mx-auto px-4 py-">
      <h2 className="text-2xl font-semibold mb-6 ">Total events available</h2>

      <div className="grid gap-4">
        {data &&
          data?.msg.map((item) => (
            <Card
              key={item.id}
              className="hover:shadow-lg transition-shadow duration-300 border bg-gray-600 border-none text-gray-200 rounded-2xl"
            >
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="">
                  <CardTitle className="text-base flex items-center gap-3">
                    <h3 className="bg-white/50 w-7 h-7 flex items-center justify-center rounded-full text-blue-500 ">
                      {item.name.slice(0, 1)}
                    </h3>
                    <span>{item.name || "N/A"}</span>
                  </CardTitle>
                  <p className="text-xs text-gray-300 italic">
                    Received on {new Date(item.submittedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-7">
                  <Trash onClick={() => handleDeleteMessage(item.id)} className="text-red-400 cursor-pointer" />
                </div>
              </CardHeader>
              <CardFooter>
                <div className="">
                <span>{item.subject ? item.subject : item.message.split(" ")[0] + "..."}</span>
              </div>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};
