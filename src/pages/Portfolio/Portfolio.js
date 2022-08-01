import React, { useState } from "react";
import "./Portfolio.css";
import "react-slideshow-image/dist/styles.css";
import Animy from "../../components/Animation/button5/animy";
import {
  Grid,
  Tabs,
  Tab,
  Card,
  Grow,
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
} from "@material-ui/core";
import { motion } from "framer-motion";
import Resume from "../../utils/resumeData";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import MyGallery from "../../components/ImageGallery/ImageGallery";
const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Grid container className="section" id="portfolio">
        {/* Title*/}
        <Grid item className="section-title">
          <span></span>
          Portfolio
        </Grid>

        {/* Tabs*/}
        <Grid item xs={12}>
          <Tabs
            value={tabValue}
            indicatorColor="white"
            className="custom-tab"
            onChange={(event, newValue) => setTabValue(newValue)}
            centered
          >
            <Tab
              label="All"
              value="All"
              className={
                tabValue === "All" ? "customTab-item active" : "customTab-item"
              }
            />
            {[...new Set(Resume.portfolio.map((item) => item.tag))].map(
              (tag) => (
                <Tab
                  label={tag}
                  value={tag}
                  className={
                    tabValue === tag
                      ? "customTab-item active"
                      : "customTab-item"
                  }
                />
              )
            )}
          </Tabs>
        </Grid>

        {/* Projects*/}
        <Grid item xs={12}>
          <Grid container spacing={5} className="center-card">
            {Resume.portfolio.map((project) => (
              <>
                {tabValue === project.tag || tabValue === "All" ? (
                  <Grid item>
                    <Grow in timeout={1000}>
                      <Card
                        className="customCard"
                        onClick={() => setProjectDialog(project)}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            className="customCard-img"
                            image={project.images}
                            title={project.title}
                          />
                          <CardContent>
                            <Typography className="customCard-title">
                              {project.title}
                            </Typography>
                            <Typography className="customCard-description">
                              {project.caption}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </Grid>
                ) : null}
              </>
            ))}
          </Grid>
        </Grid>

        <Dialog
          open={Boolean(projectDialog)}
          onClose={() => setProjectDialog(false)}
          className="projectDialog"
          maxWidth={"lg"}
          fullWidth
        >
          <DialogTitle
            onClose={() => setProjectDialog(false)}
            style={{ textAlign: "center" }}
          >
            {projectDialog.title}
          </DialogTitle>
          <DialogContent style={{ height: "100%" }}>
            {projectDialog?.images && (
              <MyGallery images={projectDialog?.images} />
            )}
            <Typography className="projectDialog-des">
              {projectDialog.description}
            </Typography>
          </DialogContent>
          <DialogActions className="projectDialog-action">
            {projectDialog?.links?.map((link) => (
              <a
                href={link.link}
                target="_blank"
                className="projectDialog-icon"
                rel="noreferrer"
              >
                <Animy />
              </a>
            ))}
          </DialogActions>
        </Dialog>
      </Grid>
    </motion.div>
  );
};

export default Portfolio;
