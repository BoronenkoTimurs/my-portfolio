import React from "react";

const Contact = () => {
  return (
    <div className=" w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form
        method="POST"
        action="https://getform.io/f/520d1ead-61a7-46c5-a298-6aa0b095585f"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - b.timurs.b@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6] outline-none"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] outline-none"
          type="email"
          placeholder="Email"
          name="name"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message..."
        />
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto my-8 flex items-center">
          Lets Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
