import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="my-10">
      <div className="container" id="Contact">
        <div className="text-center py-4">
          <div className="text-center flex justify-center items-center text-5xl font-bold">
            <h1 className="text-blue-600 px-2">Contact </h1>
            <h1 className="text-yellow-500 px-2"> Us</h1>
          </div>
          <p className="text-slate-400">
            Have questions or need assistance? Our team is here to help you
            every step of the way.
          </p>
        </div>
        <div className="row addresses">
          <div className="col">
            <h1 className="text-yellow-500 font-bold text-lg">
              Customer Support
            </h1>
            <p>Email: support@wanderlustadventures.com</p>
            <p>Phone: +1 (XXX) XXX-XXXX</p>
            <br />
            <h1 className="text-yellow-500 font-bold text-lg">
              General Inquiries
            </h1>
            <p>Email: info@wanderlustadventures.com</p>
            <p>Phone: +1 (XXX) XXX-XXXX</p>
          </div>

          <div className="col">
            <h1 className="text-yellow-500 font-bold text-lg">
              Office Address
            </h1>
            <p>Wanderlust Adventures</p>
            <p>67 High Street</p>
            <p>New York City, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
