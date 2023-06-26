import React from "react";
const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen bg-[#1f1f1f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-500">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*Grid Item*/}
          <div
            style={{
              backgroundImage: `url('https://i.postimg.cc/d19NkWv0/a-SB9g3-E2-400x400.jpg')`,
            }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Chinaplas 2023
              </span>
              <div className="pt-8 text-center">
                <a href="https://ecatalogue23.chinaplasonline.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Website
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url('https://i.postimg.cc/bvh9G8K3/shiningmind.png')`,
            }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shinning Mind
              </span>
              <div className="pt-8 text-center">
                <a href="https://apps.apple.com/hk/app/shining-mind/id1645816124?l=en">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    App Store
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url('https://i.postimg.cc/QNw59h71/frenchmay.png')`,
            }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white text-center tracking-wider">
                Virtually Versailles HK
              </span>
              <div className="pt-8 text-center">
                <a href="https://apps.apple.com/hk/app/virtuallyversailles-hk/id1605707906?l=en">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    App Store
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo Video
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url('https://i.postimg.cc/bwxVFhtq/1678766415615-1.jpg')`,
            }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                AR Photo Booth{" "}
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7001063173227249664">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo Video
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
