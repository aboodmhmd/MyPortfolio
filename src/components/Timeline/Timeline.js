import React from "react";
import "./Timeline.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
const TimeLine = ({ children, icon, title }) => {
  return (
    <Timeline className="timeline">
      <TimelineItem className="timeline_firstitem">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header">{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="title-con">{title}</TimelineContent>
      </TimelineItem>

      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = ({ icon }) => (
  <TimelineSeparator className="separator_padding">
    <TimelineDot variant={"outlined"} className="timeline_dot">
      {icon}
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>
);

export const CustomTimelineSeparator2 = ({ icon }) => (
  <TimelineSeparator className="separator_padding">
    <TimelineDot variant={"outlined"} className="timeline_dot">
      {icon}
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>
);
export default TimeLine;
