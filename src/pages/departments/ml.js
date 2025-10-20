import React from 'react';
import DeptLayout from './_layout';

const ML = ({ coords, subcoords, events }) => {
  const coordArr = [
    {
      key: 1,
      coordName: "Bapi Deb",
      coordImage: "/home/bapi.jpg",
      coordCommittee: "AI/ML Head",
      coordLinkedIn: "https://www.linkedin.com/in/bapi-deb-937308286",
      coordGitHub: "https://github.com/Bapi-D",
      coordCFHandle: "NA"
    }
  ];

  const subCoordArr = [];

  const deptName = 'AI/ML';
  const deptCoordName = "Bapi Deb";
  const deptImage = '/home/ai.png';
  const deptDesc =
    'The AI/ML Department of QUES2 is dedicated to exploring the vast field of artificial intelligence and machine learning. Through workshops, lectures, and practical sessions, this department equips members with the knowledge and tools required to tackle complex problems using machine learning algorithms. Students in this department delve into areas such as data preprocessing, model selection, and optimization techniques. By organizing hackathons and machine learning competitions, the Machine Learning Department provides opportunities for members to showcase their skills and creativity in this rapidly evolving domain.';

  const eventsML = [
    {
      key: 1,
      eventName: "Intro to Machine Learning",
      desc: "A beginner-friendly workshop covering the basics of machine learning concepts and algorithms.",
      image: "/home/ai.png",
      registerLink: "#",
      old: false
    },
    {
      key: 2,
      eventName: "Deep Learning Bootcamp",
      desc: "An intensive bootcamp focused on deep learning techniques and neural networks.",
      image: "/home/ai.png",
      registerLink: "#",
      old: false
    },
    {
      key: 3,
      eventName: "AI Hackathon",
      desc: "A competitive event where participants build AI-powered solutions to real-world problems.",
      image: "/home/ai.png",
      registerLink: "#",
      old: false
    },
    {
      key: 4,
      eventName: "Data Science Challenge",
      desc: "A challenge to analyze and derive insights from complex datasets using data science tools.",
      image: "/home/ai.png",
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
      events={eventsML}
      coordArr={coordArr}
      subCoordArr={subCoordArr}
      pageLink="/departments/ml"
    />
  );
};

export default ML;
