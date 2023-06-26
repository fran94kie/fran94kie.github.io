import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full md:h-screen bg-[#1f1f1f] text-gray-300"
    >
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-6">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold pl-4">
            <p>Hi. I'm Frankie, nice to meet you, Please take a look around.</p>
          </div>
          <div>
            <p>
              Experienced full stack web developer with 5 years of expertise in
              developing web and mobile applications. Skilled in languages such
              as C#, PHP, JavaScript, SQL, HTML5, CSS, and Visual Basic.
              Proficient in frameworks like .Net Core, Laravel, React Native,
              Vue.js, and libraries such as Bootstrap and jQuery. Strong
              knowledge of Git, Unity 3D, and databases like MySQL and SQL
              Server. Successfully implemented features like Single Sign-On
              (SSO), encryption, CMS integration, live streaming, and chat room
              capabilities. Accomplishments include stress testing for
              high-traffic events and developing comprehensive course
              application apps. Dedicated to contributing and growing
              professionally in challenging development opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
