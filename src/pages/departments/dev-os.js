import DeptLayout from './_layout';

const DevOS = ({ coords, subcoords, events }) => {
  const coordArr = [
    {
      key: 1,
      coordName: "Bapi Deb",
      coordImage: "/home/bapi.jpg",
      coordCommittee: "Dev & OS Head",
      coordLinkedIn: "https://www.linkedin.com/in/bapi-deb-937308286",
      coordGitHub: "https://github.com/Bapi-D",
      coordCFHandle: "NA"
    },

    {
      key: 2,
      coordName: "Rajdeep Dhar",
      coordImage: "/home/rajdeep.jpg",
      coordCommittee: "Game Developer",
      coordLinkedIn: "https://linkedin.com/in/rajdeep",
      coordGitHub: "https://github.com/rajdeep",
    }
  ];

  const subCoordArr = [
    {
      key: 1,
      coordName: "Pritam Banik",
      coordCommittee: "Frontend Dev",
      coordImage: "/home/pritam.jpg",
      coordLinkedIn: "https://www.linkedin.com/in/pritam-banik-5b1b39307/",
      coordGitHub: "https://github.com/",
    },

    {
      key: 2,
      coordName: "Shagnik Shyam",
      coordCommittee: "Fullstack Dev",
      coordImage: "/home/shagnik.jpg",
      coordLinkedIn: "https://www.linkedin.com/in/shagnik-shyam-46354a32a/",
      coordGitHub: "https://github.com/",
    },

    {
      key: 3,
      coordName: "Krishayan Bhattacharjee",
      coordCommittee: "Backend Dev",
      coordImage: "/home/krish.jpg",
      coordLinkedIn: "https://www.linkedin.com/in/krishayan-bhattacharjee-2b3b79210/",
      coordGitHub: "https://github.com/",
    },
  ];

  const deptName = 'Development & Open Source';
  const deptCoordName = "Bapi Deb, Rajdeep Dhar, Pritam Banik, Shagnik Shyam, Krishayan Bhattacharjee";
  const deptImage = '/home/web.png';
  const deptDesc =
    "QUES2 Dev and OS is a distinguished department with a primary focus on the realm of development and open source contributions. Our core activities revolve around conducting informative sessions and workshops on a wide range of topics such as web development, app development, game development, and open source contributions. These sessions are designed to enhance participants' knowledge and skills in their respective fields.\
		At QUES2 Dev and OS, we are committed to creating a conducive environment for learning, skill development, and fostering a sense of camaraderie among developers. By organizing informative sessions, engaging events, and nurturing an active community, we aim to empower individuals in their pursuit of excellence in the field of development and open source contributions.";

  const devEvents = events.filter(event => event.dept === 'Dev&OS');

  return (
    <DeptLayout
      deptName={deptName}
      deptCoordName={deptCoordName}
      deptImage={deptImage}
      deptDesc={deptDesc}
      events={devEvents}
      coordArr={coordArr}
      subCoordArr={subCoordArr}
      pageLink="/departments/dev-os"
    />
  );
};

export default DevOS;
