"use client";

import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import experienceData from "@/data/experienceData";

export function ExperienceTimeline() {
  return (
    <Timeline>
      {experienceData.map((item, index) => (
        <Timeline.Item key={index}>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>{item.endDate}</Timeline.Time>
            <Timeline.Title className="text-white">{item.title}</Timeline.Title>
            <Timeline.Body>{item.description}</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

export default ExperienceTimeline;
