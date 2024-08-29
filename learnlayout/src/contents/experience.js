import {
  faEbay,
  faFacebook,
  faGithub,
  faLaravel,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import picDemo from "../assets/demo.gif";
import picSocial from "../assets/social_mern.png";

export const data = [
  {
    date: "2020-2001",
    title: "Fullstack - Laravel",
    link: "www.github.com",
    materials: [
      { type: faGithub, link: "www.chatgpt.com" },
      { type: faFacebook, link: "www.facebook.com" },
      { type: faYoutube, link: "www.youtube.com" },
    ],
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "It has survived not only five centuries, but also the leap into electronic containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    ],
    skills: [["React", "PHP", "MUI", "NodeJS", "MongoDB", "Express"]],
    picture: picDemo,
    picText: "picDemo",
  },

  {
    date: "2020-2055",
    title: "Attendance - FullstackHEHE",
    // link: "",
    materials: [
      { type: faEbay, link: "www.facebook.com" },
      { type: faLaravel, link: "www.youtube.com" },
    ],
    description: [
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500sincluding versions of Lorem Ipsum",
    ],
    skills: [["ChatGPT", "Brad", "MUI", "NodeJS", "MongoDB", "NextJS"]],
    picture: picSocial,
    picText: "picSocial",
  },
];
