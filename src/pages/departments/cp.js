import React from 'react';
import DeptLayout from './_layout';

const CP = ({ coords, subcoords, events }) => {
  const coordArr = [
    {
      key: 1,
      coordName: "Anurag Das",
      coordImage: "/home/anurag.jpg",
      coordCommittee: "Design Head",
      coordLinkedIn: "https://www.linkedin.com/in/anurag-das-46b680287/",
      coordGitHub: "https://github.com/anurag",
      coordCFHandle: "NA"
    },
    
    {
      key: 2,
      coordName: "Bapi Deb",
      coordImage: "/home/bapi.jpg",
      coordCommittee: "UI/UX Designer",
      coordLinkedIn: "https://www.linkedin.com/in/bapi-deb-937308286",
      coordGitHub: "https://github.com/Bapi-D",
      coordCFHandle: "NA"
    },
  ];

  const subCoordArr = [
    {
      key: 1,
      coordName: "Gaurab Nag",
      coordCommittee: "Graphic Designer",
      coordImage: "/home/gaurab.jpg",
      coordLinkedIn: "https://www.linkedin.com/in/gourab-nag-820547328/",
      coordGitHub: "https://github.com/",
      coordCFHandle: "NA"
    },

  ];

  const deptName = 'Graphic Design';
  const deptCoordName = "Anurag Das, Bapi Deb, Gaurab Nag";
  const deptImage = '/home/design.png';
  const deptDesc =
    "The Graphic Design Department at QUES2 is committed to fostering students' creativity, design skills, and visual communication abilities. Through workshops, design challenges, and collaborative projects, members learn to craft compelling visuals, engaging UI/UX designs, and digital content. By applying modern design tools and principles, they gain the experience and confidence to produce impactful and innovative designs.";

  const eventsGD = [
    {
      key: 1,
      eventName: "Graphic Design Workshop",
      desc: "An introductory workshop to the fundamentals of graphic design, covering tools, techniques, and creative processes. Stay tuned for more details!",
      image: "/home/design.png",
      registerLink: "#",
      old: false
    },
    {
      key: 2,
      eventName: "UI/UX Design Challenge",
      desc: "A competitive event focused on user interface and user experience design. Participants will solve real-world design problems!",
      image: "/home/design.png",
      registerLink: "#",
      old: false
    }
  ];

  return (
    <DeptLayout
      deptName={deptName}
      deptCoordName={deptCoordName}
      deptImage={deptImage}
      deptDesc={deptDesc}
      coordArr={coordArr}
      subCoordArr={subCoordArr}
      events={eventsGD}
      pageLink="/departments/cp"
    />
  );
};

export default CP;
