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
      <div className="flex flex-col md:flex-row md:items-center md:gap-8 md:w-8/12 gap-4" data-aos="fade-up">
        <div className="flex items-center gap-3">
          <p className="text-3xl font-semibold md:text-4xl text-slate-900 min-w-fit text-display dark:text-white">
            Professional Timeline
          </p>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
            Growth Focused
          </span>
        </div>
        <div className="h-[3px] w-full bg-emerald-400 hidden md:block"></div>
        <p className="text-sm text-slate-500 dark:text-slate-300 md:max-w-sm">
          A snapshot of my journey building products, learning fast, and shipping
          real-world features.
        </p>
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
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
                Milestone
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
              <div className="border-gradient">
                <div className="surface rounded-2xl px-5 py-4 shadow-md dark:bg-slate-900">
                  <div className="flex items-center justify-between">
                    <h6 className="text-base font-semibold sm:text-lg lg:text-xl text-slate-900 dark:text-white">
                      {item.title}
                    </h6>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      Verified
                    </span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-200">
                    {item.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-[11px] rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      Impact Driven
                    </span>
                    <span className="px-2 py-1 text-[11px] rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      Product Mindset
                    </span>
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
