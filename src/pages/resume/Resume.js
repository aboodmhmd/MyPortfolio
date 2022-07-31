import React from "react";
import "./Resume.css";
import { Grid } from "@mui/material";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import { motion } from "framer-motion";
import resumeData from "../../utils/resumeData";
import WorkIcon from "@mui/icons-material/Work";
import { TimelineContent, TimelineItem } from "@mui/lab";
import { Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const Resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <Grid container id="resume">
        <Grid item className="section-title">
          <span></span>
          Resume
        </Grid>

        <Grid item xs={12}>
          <Grid container className="pad-num">
            <Grid item sm={12} md={6}>
              {/* Work */}
              <CustomTimeline title="Work Experince" icon={<WorkIcon />}>
                {resumeData.experiences.map((item) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent>
                      <Typography>
                        <span>{item.title}</span>
                        <br />
                        <span>{item.date}</span>
                      </Typography>
                      <Typography className="text3">
                        <span>{item.description}</span>
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            <Grid item sm={12} md={6}>
              {/* Study */}
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.education.map((item) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent>
                      <Typography>
                        <span>{item.title}</span>
                        <span>{item.date}</span>
                      </Typography>
                      <Typography className="text3">
                        <span>{item.description}</span>
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Resume;
