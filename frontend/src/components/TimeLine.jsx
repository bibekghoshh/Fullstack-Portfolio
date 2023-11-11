import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = ({ timelines = [] }) => {
  console.log(timelines);
  return (
    <div className="flex flex-col items-center gap-10 ">
      <div className="flex  w-9/12 items-center">
      <p className=" text-newblue font-semibold w-80 text-4xl font-roboto">My Timeline</p>
        <div className="h-[3px] w-full bg-newblue"></div>
      </div>

      <Timeline position="alternate">
        {timelines.map((item, index) => (
          
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
               {new Date(item.startdate).toLocaleDateString('en-US',{ month: 'long', year: 'numeric' })}
               - 
              {new Date(item.enddate).toLocaleDateString('en-US',{ month: 'long', year: 'numeric' })}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
