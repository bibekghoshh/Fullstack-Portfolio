import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";


const TimeLine = ({ timelines = [] }) => {
  // console.log(timelines);
  return (
    <div className="flex flex-col items-center gap-10 ">
      <div className="flex items-center sm:gap-8 gap-3 sm:w-9/12 w-[90%]">
        <p className="text-4xl font-semibold text-newblue min-w-fit font-roboto dark:text-white">
          My Timeline
        </p>
        <div className="h-[3px] w-full bg-newblue dark:bg-white"></div>
      </div>

      <Timeline position="alternate" sx={{ px: "0px" }}>
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              className="text-right text-slate-500 dark:text-slate-400"
            >
              <div className="font-medium">
                {new Date(item.startdate).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}{" "}
                -{" "}
                {new Date(item.enddate).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "20px", }}>
              <h6 className="text-base font-medium sm:text-lg lg:text-xl">{item.title}</h6>
              <p className="text-xs sm:text-sm lg:text-base">{item.description}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
