import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";

const TimeLineShimmer = () => {

    const timelines=[1,2];
    
  return (
    <div className="flex flex-col items-center gap-10 ">
      <div className="flex items-center gap-3 sm:gap-8 md:w-9/12 ">
        <p className="h-12 rounded-2xl sm:w-80 bg-slate-300 w-60 animate-pulse"></p>
        <div className="h-[3px] w-full bg-slate-300  hidden md:block animate-pulse"></div>
      </div>

      <Timeline position="alternate" sx={{ px: "0px" }}>
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
              <div className="w-full h-5 rounded-full bg-slate-300 animate-pulse"></div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "20px", width: ["70vw", "80vw", "600px"] }}
            >
              <p className="h-10 mb-2 w-[full] bg-slate-300 rounded-full animate-pulse"></p>
              <p className="h-7 bg-slate-300 w-[90%] md:w-full rounded-full animate-pulse"></p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLineShimmer;
