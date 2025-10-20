import React from 'react';
import DeptLayout from './_layout';

const CyberSec = ({ coords, subcoords, events }) => {
  const coordArr = [
    {
      key: 1,
      coordName: "Rajib Rudra Paul",
      coordImage: "/home/rajib.png",
      coordCommittee: "Content Creation Head",
      coordLinkedIn: "https://www.linkedin.com/in/rajib-rudra-paul-281a86283/",
      coordInstagram: "https://www.instagram.com/rajib.rudrapaul_?igsh=MXNvcmswMmtlbjdhMQ==",
    },
    {
      key: 2,
      coordName: "Bapi Deb",
      coordImage: "/home/bapi.jpg",
      coordCommittee: "Content Creator",
      coordLinkedIn: "https://www.linkedin.com/in/bapi-deb-937308286",
      coordInstagram: "https://www.instagram.com/reywhite_?igsh=MzU5d3kzZmEzdXR6",
    },
    {
      key: 3,
      coordName: "Anurag Das",
      coordImage: "/home/anurag.jpg",
      coordCommittee: "Content Creator",
      coordLinkedIn: "https://www.linkedin.com/in/anurag-das-46b680287/",
      coordInstagram: "https://www.instagram.com/_._anrg_._?igsh=MTY5cjM0bnpnY2x6ZQ==",
    },
    {
      key: 4,
      coordName: "Rajdeep Dhar",
      coordImage: "/home/rajdeep.jpg",
      coordCommittee: "Content Creator",
      coordLinkedIn: "https://www.linkedin.com/in/rajdeep-dhar/",
      coordInstagram: "https://www.instagram.com/rajdeep_159?igsh=eTIybmNwbnFvbmh0",
    }

  ];

  const subCoordArr = [];

  const deptName = 'Content Creation';
  const deptCoordName = "Rajib Rudra Paul, Bapi Deb, Anurag Das, Rajdeep Dhar";
  const deptImage = '/home/content.png';
  const deptDesc =
    'The Content Creation Department at QUES2 is committed to enhancing students storytelling, creativity, and communication skills. Through blogs, articles, videos, and social media projects, members refine their writing, design, and presentation abilities. By creating engaging content that showcases the club’s initiatives and achievements, they gain the experience and confidence to communicate ideas effectively to a wider audience.';

  const eventsCyber = [
    {
      key: 1,
      eventName: "Content Writing Workshop",
      desc: "Learn the art of compelling content writing for blogs, articles, and social media.",
      image: "/home/content.png",
      registerLink: "#",
      old: false
    },
    {
      key: 2,
      eventName: "Video Editing Basics",
      desc: "A hands-on workshop on video editing techniques and tools for engaging content creation.",
      image: "/home/content.png",
      registerLink: "#",
      old: false
    },
    {
      key: 3,
      eventName: "Social Media Strategy",
      desc: "Understand how to create effective social media campaigns to boost engagement.",
      image: "/home/content.png",
      registerLink: "#",
      old: false
    },
    {
      key: 4,
      eventName: "Creative Storytelling",
      desc: "Enhance your storytelling skills to create impactful and memorable content.",
      image: "/home/content.png",
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
      events={eventsCyber}
      coordArr={coordArr}
      subCoordArr={subCoordArr}
      pageLink="/departments/cyber-security"
    />
  );
};

export default CyberSec;
