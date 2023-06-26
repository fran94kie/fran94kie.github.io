import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-screen bg-[#1f1f1f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/27f87b43-e31a-4223-a23e-df83a20973ec"
        className="flex flex-col max-w-[600px] w-full"
        method="POST"
      >
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me and email - frankiechu94@gmail.com
          </p>
        </div>
        <input
          className=" p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className=" my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 p-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
