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
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center gap-3 sm:gap-8 md:w-8/12" data-aos="fade-up">
        <p className="text-3xl font-semibold md:text-4xl text-slate-900 min-w-fit text-display dark:text-white">
          My Timeline
        </p>
        <div className="h-[3px] w-full bg-emerald-400 hidden md:block"></div>
      </div>

      <Timeline position="alternate" sx={{ px: "0px" }} data-aos="fade-up" data-aos-delay="120">
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
              <TimelineDot color="success" variant="outlined">
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "20px" }}>
              <div className="surface-2 rounded-2xl px-4 py-3 shadow-md dark:bg-slate-900">
                <h6 className="text-base font-semibold sm:text-lg lg:text-xl text-slate-900 dark:text-white">
                  {item.title}
                </h6>
                <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-200">
                  {item.description}
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
