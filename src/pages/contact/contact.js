import React, { useMemo } from "react";
import "./contact.css";
import { Grid, Typography } from "@mui/material";
import Resume from "../../utils/resumeData";
import { motion } from "framer-motion";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Loading from "../../components/Animation/loading/loading";
function Map() {
  const center = useMemo(() => ({ lat: 30.0871517, lng: 31.3447805 }), []);
  return (
    <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBpFZtJXSuRJPtokWDuSXzPI9stQu5JL0M",
  });
  if (!isLoaded)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
    <Grid container spacing={1} id="contact">
      {/* first contact*/}
      <Grid item>
        <Grid container>
          <Grid item className="section-title">
            <span></span>
            Contact Information
          </Grid>
          <Grid item xs={12} className="mrg">
            <Grid container>
              <Grid item>
                <Typography className="contact-item">
                  <span>ِAddress: </span>
                  {Resume.Location}
                </Typography>
                <Typography className="contact-item">
                  <span>Phone Number: </span>
                  {Resume.Phone1}
                </Typography>
                <Typography className="contact-item">
                  <span>Another Number: </span>
                  {Resume.Phone2}
                </Typography>
                <Typography className="contact-item">
                  <span>City: </span>
                  {Resume.City}
                </Typography>
                <Typography className="contact-item">
                  <span>Country: </span>
                  {Resume.Country}
                </Typography>
                <Typography className="contact-item">
                  <span>Email: </span>
                  {Resume.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* second contact*/}
      <Grid item xs={12} lg={6}>
        <Grid item className="section-title">
          <span></span>
          Contact Location
        </Grid>
        <Grid item xs={12}>
          <div className="mrg2">
            <Map />
          </div>
        </Grid>
      </Grid>
    </Grid>
    </motion.div>
  );
};

export default Contact;
