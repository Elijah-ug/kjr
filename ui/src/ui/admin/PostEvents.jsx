import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { formatDate } from "../utils/utils";
import { useGetEventQuery, usePostEventMutation, useUpdateEventMutation } from "../state/features/events";
import { toast } from "react-toastify";

// todos
// 1. To validate inputs with zod && finding proper way of navigating after posting

export const PostEvents = () => {
  const { id } = useParams();
  const eventId = Number(id);
  const [event, setEvent] = useState({ title: "", description: "", date: "" });

  const { data, isLoading: loadEvent, error: eventErr } = useGetEventQuery(eventId, { skip: !id });
  const [newEvent, { isLoading, error }] = usePostEventMutation();
  const [update, { isLoading: loadUpdate, error: updateErr }] = useUpdateEventMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      // const formattedDate =
      setEvent({
        title: data.event.title,
        description: data.event.description,
        date: formatDate(data.event.date).toLocaleString(),
      });
    }
  }, [data]);
  // console.log("event data data==>", data);

  const handlePostEvent = async (e) => {
    e.preventDefault();
    try {
      console.log("post this event==>", event, typeof formatDate(event.date));
      if (id) {
        const res = await update({ eventId, ...event });
        toast.success("Event has been Updated!");
        navigate("/dashboard/event-list");
        return res;
      } else {
        const res = await newEvent(event);
        toast.success("Event has been Posted!");
        navigate("/dashboard/profile");
        return res;
      }
    } catch (error) {
      return console.log("Error==>", error);
    }
  };
  // console.log(localStorage.getItem("token"))
  // const []
  return (
    <div className="flex flex-col justify-center  items-center gap-5 sm:px-6">
      <Card className="  w-xs sm:w-lg lg:w-xl rounded-3xl shadow-xl py-10">
        <CardHeader>
          <CardTitle className="">Add New Event</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePostEvent}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="title"
                  placeholder="Event Title"
                  required
                  value={event.title}
                  onChange={(e) => setEvent({ ...event, title: e.target.value })}
                  className="bg-gray-900/50 border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="event">Event</Label>
                <Textarea
                  placeholder="Event description"
                  required
                  value={event.description}
                  onChange={(e) => setEvent({ ...event, description: e.target.value })}
                />
              </div>
              {/* date */}
              <div className="grid gap-2">
                <Label htmlFor="event">Event</Label>
                <Input
                  id="date"
                  type="date"
                  required
                  value={event.date}
                  onChange={(e) => setEvent({ ...event, date: e.target.value })}
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
                Post Event
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
