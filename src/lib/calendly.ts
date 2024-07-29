"use server";

import { env } from "@/env";

export type EventResponse = {
  resource: EventDetails;
}

export type EventDetails = {
  calendar_event: object;
  created_at: string;
  end_time: string;
  event_guests: unknown[];
  event_memberships: unknown[];
  event_type: string;
  invitees_counter: { active: number; limit: number; total: number };
  location: object;
  meeting_notes_html: null;
  meeting_notes_plain: null;
  name: string;
  start_time: string;
  status: string;
  updated_at: string;
  uri: string;
};

export const getEventDetails = async (eventUrl: string) => {
  if (!eventUrl) {
    throw new Error("Calendly Event URL is required");
  }

  const opts = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.CALENDLY_API_KEY}`,
    },
  };
  const res = await fetch(eventUrl, opts);
  const eventDetails = await res.json() as EventResponse;
  return eventDetails;
};
