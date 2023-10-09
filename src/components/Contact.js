import React from "react";

const Contact = () => {
  return (
    <div>
      <img
        src="https://img.freepik.com/premium-photo/ordering-grocery-online-shopping-purchase-healthy-food-shopping-groceries-online-supermarket-food-grocery-shop_36325-3595.jpg?w=1380"
        alt="contact-banner"
        className="w-full h-80"
      ></img>
      <div className="flex h-[100vh] justify-start  bg-blue-600 shadow-lg">
        <div className="w-1/3 bg-orange-00 px-8 flex">
          <form>
            <div className="flex flex-col w-96">
              <label className="m-1 text-lg " for="name">
                Name
              </label>
              <input
                className="p-2.5  h-8 rounded-md"
                type="text"
                id="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="m-1 text-lg" for="email">
                Email
              </label>
              <input
                className="p-2.5 h-8 rounded-md"
                type="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label className="m-1 text-lg" for="contact">
                Contact
              </label>
              <input
                className="p-2.5  h-8 rounded-md"
                type="text"
                id="contact"
                placeholder="Enter Your Contact No."
              />
            </div>
            <div className="flex flex-col">
              <label className="m-1 text-lg" for="message">
                Message
              </label>
              <textarea
                className="p-2.5  h-44 rounded-md"
                name="message"
                placeholder="Type Your Message "
                rows="5"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <input
                className="bg-blue-700 mt-2 p-1.5 text-sm text-white rounded-md flex text-center"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
