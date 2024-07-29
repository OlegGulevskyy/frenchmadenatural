"use client";

import { env } from "@/env";
import { api } from "@/trpc/react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { useToast } from "@/components/ui/use-toast";

export const Reservation = () => {
  const { toast } = useToast();
  const utils = api.useUtils();

  // Retrieve event details on server side to get start and end times
  // And then create a lesson with those in DB
  const { mutateAsync: createLesson } = api.lessons.create.useMutation({
    onSuccess: () => {
      void utils.user.invalidate();
    },
  });

  const handleEventCreated = async (eventUrl: string) => {
    createLesson({ calendlyEventUrl: eventUrl })
      .then(() => {
        toast({
          title: "Lesson booked!",
          description: "You will receive an email with the link to your lesson",
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useCalendlyEventListener({
    onEventScheduled: (e) => {
      void handleEventCreated(e.data.payload.event.uri);
    },
  });

  return <InlineWidget url={env.NEXT_PUBLIC_MEET_URL} />;
};
