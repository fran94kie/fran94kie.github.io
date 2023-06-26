import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#1f1f1f]">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hi, my name is</p>
        <h1 className=" text-4xl sm:text-7xl font-bold text-white">
          Frankie Chu
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-orange-500">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-orange-200 py-4 max-w-[700px]">
          Experienced full stack developer with 5 years of experience developing
          web and mobile applications seeking challenging opportunities to
          contribute and grow professionally.
        </p>
        <div>
          <Link activeClass="active" to="work" smooth={true} duration={1000}>
            <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-orange-500 hover:bg-orange-500">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
