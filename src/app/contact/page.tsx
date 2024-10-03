"use client";

import { useRef, useState, ChangeEvent, FormEvent } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Image from "next/image";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    from_name: "",
    from_email: "",
    from_mobile: "",
    message: "",
  });

  const form = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_xwv4gp7",
          "template_5ply797",
          form.current,
          "IyCRsM1LVFLJYIHIy"
        )
        .then(
          (result) => {
            console.log(result.text);
            setInputValues({
              from_name: "",
              from_email: "",
              from_mobile: "",
              message: "",
            });
            toast.success("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            toast.error("Failed to send message. Try again!");
          }
        )
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="container lg:px-16">
      <h1 className="lg:text-4xl text-center my-7">Contact us today for a consultation</h1>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-8">
        {/* -------------Image Div----------------- */}
        <div className="h-full object-cover px-4">
          <Image
            src="https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww"
            alt="Contact Us"
            width={500}
            height={500}
            className=""
          />
        </div>

        {/* ------------Message Form---------------- */}
        <section className="max-w-[500px] flex flex-col gap-7 text-sm lg:text-base px-4">
          <p>
            Explore our services and see how we can enhance your business
            operations!
          </p>
          {/* -------------------Input Form------------------------- */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <input
              type="text"
              name="from_name"
              value={inputValues.from_name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="outline-none bg-gray-200 shadow-sm rounded-md py-3 px-4"
              required
            />
            <input
              type="email"
              name="from_email"
              value={inputValues.from_email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="outline-none bg-gray-200 shadow-sm rounded-md py-3 px-4"
              required
            />
            <input
              type="text"
              name="from_mobile"
              value={inputValues.from_mobile}
              onChange={handleInputChange}
              placeholder="Your Mobile Number"
              className="outline-none bg-gray-200 shadow-sm rounded-md py-3 px-4"
              required
            />
            <textarea
              rows={6}
              name="message"
              value={inputValues.message}
              onChange={handleInputChange}
              placeholder="Write a message"
              className="outline-none bg-gray-200 shadow-sm rounded-md py-3 px-4"
              required
            />
            {/* -------------------Submit Button-------------------- */}
            <button
              disabled={loading}
              className="btn disabled:cursor-not-allowed mt-3"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  Wait <BiLoaderAlt className="animate-spin" />
                </span>
              ) : (
                "Send Message 👋"
              )}
            </button>
            <ToastContainer />
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
