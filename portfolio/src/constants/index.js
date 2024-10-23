import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "Chatting WebApp",
    image: project1,
    description:
      "A fully functional chatting website with features like direct messaging, community messages, file sharing and user authentication.",
    technologies: ["Zustand", "Sockets", "React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Farmingo WebApp",
    image: project2,
    description:
      "This project implements a web-based application designed to empower farmers by providing them with insights about water availability, soil moisture, crop health, and other critical agricultural insights. It integrates satellite datasets, machine learning models, and visualization tools to make data actionable, helping farmers optimize their crop management strategies.",
    technologies: ["React", "Gemini AI", "FastAPI", "Google Cloud", "Convolution Neural Networks"],
  },
  {
    title: "Draw-2-Equation",
    image: project4,
    description:
      "(IN DEVELOPMENT) A WebApp that converts user drawn mathematical equations to text based equations. Used for providing iOS draw-to-eqaute feature in Notes app to web-pages as well.",
    technologies: ["React", "Tesseract", "Gemini AI"],
  },
];

export const CONTACT = {
  email: "goswamikrishna549@gmail.com",
};
