import React from "react";
import "./profile.css";
import Anim from "../Animation/textAnime/Animtxt";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../Timeline/Timeline";
import Resume from "../../utils/resumeData";
import TimelineItem from "@mui/lab/TimelineItem";
import Typography from "@mui/material/Typography";
import TimelineContent from "@mui/lab/TimelineContent";
import FaceIcon from "@mui/icons-material/Face";
import Anima from "../Animation/button2/anima";
const CustomTimelineItem = ({ title, text, link, icon }) => (
  <TimelineItem>
    <CustomTimelineSeparator icon={icon} />
    <TimelineContent>
      {link ? (
        <Typography>
          <span>{title}:</span>
          <span>{text}</span>
        </Typography>
      ) : (
        <Typography>
          <span>{title}:</span>
          <p className="text2">{text}</p>
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);
const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Anim title={Resume.name} title2={Resume.title} />
      </div>
      <div className="profile_image">
        <img
          src={require("../../assets/images/profileimg.jpg")}
          alt="profile-img"
        />
      </div>
      <div className="profile_information">
        <CustomTimeline icon={<FaceIcon />}>
          <CustomTimelineItem title="Full Name" text={" " + Resume.full} />
          <CustomTimelineItem title="Email" text={" " + Resume.email} />
          <CustomTimelineItem title="Job" text={" " + Resume.Job.name} />
          <CustomTimelineItem title="Birth" text={" " + Resume.Birth} />
        </CustomTimeline>
        <div className="btn_container">
          <Anima />
        </div>
      </div>
    </div>
  );
};

export default Profile;
