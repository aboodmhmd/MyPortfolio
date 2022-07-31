import React from "react";
import "./home.css";
import { Grid, Icon } from "@material-ui/core";
import resume from "../../utils/resumeData";
import { Typography, Paper } from "@mui/material";
import { TimelineDot } from "@mui/lab";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      {/* About */}
      <Grid container>
        <Grid item className="section-title">
          <span></span>
          About Me
        </Grid>
        <Grid item xs={12} className="section-det">
          {resume.about}
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className="section2">
        <Grid item className="section-title">
          <span></span>
          My Services
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {resume.services.map((item) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service-icon">{item.icon}</Icon>
                  <Typography className="service-tit">{item.title}</Typography>
                  <Typography className="service-deta">
                    {item.detail}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid item className="section-title2">
        <span></span>
        Skills
      </Grid>

      <Grid container justify="space-between" spacing={1} className="section3">
        {resume.skills.map((item) => (
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={0} className="skill">
              <h2 className="skill-title">{item.title}</h2>
              {item.description.map((element) => (
                <Typography className="skill-des">
                  <TimelineDot className="timeline-dot" />
                  {element}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Home;
