import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FaceIcon from "@mui/icons-material/Face";
import DataObjectIcon from "@mui/icons-material/DataObject";
import BoltIcon from "@mui/icons-material/Bolt";
import CommitIcon from "@mui/icons-material/Commit";
import BugReportIcon from "@mui/icons-material/BugReport";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import AddCardIcon from "@mui/icons-material/AddCard";
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Typography } from "@mui/material";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "abdelrahman shehata",
  full: "Abdelrahman Mohamed Abdelrahman Shahata",
  title: "Web Developer",
  email: "abdelrahman2490@gmail.com",
  Phone1: "+20 112 107 0429",
  Phone2: "+20 114 453 7386",
  Birth: "30/4/1999",
  Location: "28 Abd-Elmonaem Hafez ,Bganb El-Nozha Bridge , Masr ElGdida ",
  City: "Cairo",
  Country: "Egypt",
  Job: { name: "FreeLancer", icon: <FaceIcon /> },
  social: {
    Git: {
      link: "https://github.com/aboodmhmd",
      name: "Github",
      style: "icon github",
      style2: "fab fa-github",
    },
    Facebook: {
      link: "https://www.facebook.com/profile.php?id=100004822723530",
      name: "Facebook",
      style: "icon facebook",
      style2: "fab fa-facebook-f",
    },
    Instagram: {
      link: "https://www.instagram.com/ab.do_mohamed/",
      name: "Instagram",
      style: "icon instagram",
      style2: "fab fa-instagram",
    },
    Linked: {
      link: "https://www.linkedin.com/in/abdelrahman-shehata-9a20b41b1",
      name: "LinkedIn",
      style: "icon twitter",
      icon: <LinkedInIcon />,
    },
  },

  about: (
    <Typography>
      Hello Im Abdelrahman 23 Years old Im following my passion about
      Programming . <br />
      <br />
      Went from Flutter with developing Mobile apps till i found that im more
      into web development ,<br />
      Im Graduated and Looking for Job in{" "}
      <Typography variant="h6">"Web Development".</Typography>
      <br />
      Mean while working as Freelancer doing Projects and working on my skills
      more,
      <br /> Been working before in other Companies like Vodafone, Jumia before
      leaving for Freelance which gave me soft skills with different customers.
      <br /> I love Animations in My work with decent colors that gives primary
      look,
      <br /> Best Performance for Web with Clean code as its needed For quality
      to customers,
      <br /> i give specific time for the work i do as i respect the deal more
      for my Customers in Free Lance, <br />i love team work for big projects as
      much as solo work for Free lance as i can work in any environment needed
      for the work.
    </Typography>
  ),
  experiences: [
    {
      title: <Typography variant="body1">In Web Development</Typography>,
    },
    {
      title: "Free Lance",
      date: <p className="text3">Since 6/19/2020</p>,
      description:
        "I have been working in khamsat.com and freelancer.com with my Collage since 2020 for different projects started from Java till i changed to Web development with react-js",
    },
    {
      title: "Graduation Projects",
      date: <p className="text3">Since 12/10/2021</p>,
      description: (
        <Typography variant="p">
          I been doing Graduation projects if its in web for teammates similar
          to Free Lance
          <br />
          <br />
        </Typography>
      ),
    },
    {
      title: <Typography variant="body1">Out of Programming</Typography>,
    },
    {
      title: "Jumia",
      date: <p className="text3">9/20/2021 - 5/14/2022</p>,
      description:
        "I was Looking for extra job with collage to make extra money for courses which i did , got much experience in soft skills",
    },
    {
      title: "X-Ceed",
      date: <p className="text3">3/11/2020 - 5/20/2020</p>,
      description:
        "same reason that made me need job out of programming to get extra courses as i worked in X-ceed and as free lance to get as much  experiences as i can",
    },
  ],

  education: [
    {
      title: "School",
      date: <p className="text3">till 2018</p>,
      description: "I was In ElManara Modern School .",
    },
    {
      title: "Collage",
      date: <p className="text3">2018 - 2019</p>,
      description:
        "Went to Faculty of Education Ain Shams University but found thats not what im good at .",
    },
    {
      title: "Collage 2",
      date: <p className="text3">2019 - 2022</p>,
      description:
        "Graduated from Faculty of Computer Science At El-Shorouk Academy .",
    },
  ],

  services: [
    {
      icon: <DataObjectIcon />,
      title: "Web Development",
      detail: "Designing Web Front End Using React-Js",
    },
    {
      icon: <BoltIcon />,
      title: "Fast Delivery",
      detail: "Delivering Work In Time",
    },

    {
      icon: <DesignServicesIcon />,
      title: "Designing",
      detail: "Making Amazing Designs For Web With More of Animations",
    },
    {
      icon: <CommitIcon />,
      title: "Commitment",
      detail: "Commitment To The Deal In Time and Quality",
    },
    {
      icon: <BugReportIcon />,
      title: "Problem Solving",
      detail: "Using The Best Problem Solving Way to The Issue",
    },
    {
      icon: <CleaningServicesIcon />,
      title: "Code",
      detail: "Using Best Techniques with Clean Code For Boosting Performance",
    },
    {
      icon: <AddCardIcon />,
      title: "Features",
      detail: "Adding Unlimited Features To Serve Your Need",
    },
    {
      icon: <BookmarkAddedIcon />,
      title: "Value",
      detail: "Getting Best Value Compare to Cost",
    },
  ],

  skills: [
    {
      title: <Typography variant="h5">Front End</Typography>,
      description: ["HTML", "CSS", "JS", "ReactJs", "BootStrap"],
    },
    {
      title: <Typography variant="h5">API</Typography>,
      description: ["Redux", "Cookies", "RESTapi", "LocalStorage"],
    },
    {
      title: <Typography variant="h5">UI / UX</Typography>,
      description: ["Adobe Xd", "Figma"],
    },
  ],

  portfolio: [
    {
      tag: "Website Builder 1",
      caption: (
        <Typography variant="p">
          Website that is building <br />
          E-Commerce websites
          <br />
          Part 1
        </Typography>
      ),
      images: [
        "https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-15/296324937_1191052278401070_1673726558871277766_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=wkTvNZ98ey0AX-N4PBM&edm=ABJHkxYAAAAA&ccb=7-5&ig_cache_key=Mjg5MzMwNTYyODM0NjI0NzIzNw%3D%3D.2-ccb7-5&oh=00_AT9uBIAPpMTpd2qp0JebNq-j8MJoPr7jENBcwPeifUsAXA&oe=62EB090B&_nc_sid=fa978c",
        "https://websitebuildereggg.blob.core.windows.net/image/YFpE2KHCGmCQQcLEqWor.png",
        "https://websitebuildereggg.blob.core.windows.net/image/tVQ3KRnEwzCwSfy027KL.png",
        "https://websitebuildereggg.blob.core.windows.net/image/a6k86WxEM2R2rcRzkGZx.png",
        "https://websitebuildereggg.blob.core.windows.net/image/bWXbalSufupGfSzvXDCQ.png",
        "https://websitebuildereggg.blob.core.windows.net/image/pezU3W3RufvRGrkn5QbB.png",
        "https://websitebuildereggg.blob.core.windows.net/image/nlMkHsdlCQpz6qnicyxz.png",
        "https://websitebuildereggg.blob.core.windows.net/image/ikBtgZfVH4ueNGt7my1R.png",
        "https://websitebuildereggg.blob.core.windows.net/image/pegg3CyNy0k6Lu9jR9si.png",
        "https://websitebuildereggg.blob.core.windows.net/image/dudRXGGauonnZPMsJSwc.png",
        "https://websitebuildereggg.blob.core.windows.net/image/zi1lS9KbKS7oBRckFPPA.png",
        "https://websitebuildereggg.blob.core.windows.net/image/rVPpNDZmKmIviSZmFyH7.png",
      ],
      title: "Swifter",
      description: (
        <Typography variant="h6">
          Getting Started with Swifter
          <br />
          React-Js Application
          <br />
          This is Webbuilder for E-Commerces Web applications Containes Of 2
          Parts
          <br />
          1. DashBoard That Control the E-commerece by shop owner
          <br />
          2. E-commerece app that is designed and filled with products Like
          amazon by the Dashboard
          <br />
          This is the Main App - "Dashaboard"
          <br />
          You can control everything in your E-Commerces website from
          customers,products,shipment,payments,return-refund to every detail in
          it Amazing Desgin for the Dashboard and A default Design for
          E-Commerces that can be changed from shop owner easily from Dashboard
          <br />
          Very easy to handle Professional for big websites can rely on it for
          big products and many customers
          <br />
          all the data will be easily Controlled and viewed from Dashboard
          <br />
          to install - new terminal - npm install - npm start
        </Typography>
      ),
      links: [{ link: "https://github.com/aboodmhmd/Swifter" }],
    },
    {
      tag: "Website Builder 2",
      caption: (
        <Typography variant="p">
          E-Commerce
          <br />
          <br />
          Part 2
        </Typography>
      ),
      images: [
        "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://scontent.fcai19-2.fna.fbcdn.net/v/t1.15752-9/293880034_7745385568835780_3126461827141056838_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHzlHBStFZfzF6sjNgdRCmdwAqG88g2bFfACobzyDZsVw-o3vrw3JsAR5MhARgzwXfkd2bU8_FqnVcARchcZHQ2&_nc_ohc=LLFxbZVXA6YAX_kTwxG&_nc_ht=scontent.fcai19-2.fna&oh=03_AVI5SULkNfdZi2kbDLpx1y8XvrE8Jj2gqtfh29RYRy9F4A&oe=630BA9CE",
        "https://scontent.fcai19-2.fna.fbcdn.net/v/t1.15752-9/295806719_616428756470680_1207498353399194104_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGq0_DJCxxQMKsFNF3msFNnsirf-RA-MMqyKt_5ED4wypWohgeg6Ev4zaOPP2oKdaxY5EXLxPz1OWGxdGhDWTCl&_nc_ohc=mRy5-wmPb18AX9yscRk&_nc_ht=scontent.fcai19-2.fna&oh=03_AVKpMP8PLy4qLFwnK2jKtCoeA5omlQ5rdcyuZzhIkkR7ZA&oe=630963C3",
        "https://scontent.fcai19-2.fna.fbcdn.net/v/t1.15752-9/295720129_1042258649816648_3241841396193362609_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF20tdKUn2d77ivxT4UNjRma5uSo5_IoB1rm5Kjn8igHZ-AWReRsXqZMo8I_FnDM5bFOfjz1nL6FiKzCud6vc8o&_nc_ohc=bzNmL9icS30AX9MjWkS&_nc_ht=scontent.fcai19-2.fna&oh=03_AVKZxB0BIHPmYcL7D_J5LQVftkkojg5kgZZXUbIhL-pKUg&oe=630A09DC",
        "https://scontent.fcai19-2.fna.fbcdn.net/v/t1.15752-9/295816228_395880799198141_4138011462632484353_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHrlX0pNGHlobX40ShRyFqqBV9OkH_MEgUFX06Qf8wSBd2K7g13z9J4sAVOCS1xEi80BV7tzJbSMjr2vGry1hiR&_nc_ohc=OImSS0KKToIAX9dTHKI&tn=xLv0qycAi-fBuJz5&_nc_ht=scontent.fcai19-2.fna&oh=03_AVL_R3vQV_z3Bd19vNbSKC5qq-rijl6UE59l04J9ZhHByA&oe=630AA639",
      ],
      title: "Swifter",
      description: "Building E-Commerces Web Pages Like Jumia",
      links: [
        {
          link: "https://github.com/aboodmhmd/Swifter-Commerecs",
        },
      ],
    }
  ],
};
