import { useState, React } from "react";
import contactBg from "../assets/Moon.svg";

// Serverless email sending

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    const formData = new FormData(event.target);

    formData.append("access_key", "d9ee3fbc-e36c-4e90-a726-fe4a477e9892");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setError("Failed to send message. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center pt-5 pb-5 font-body"
      id="Contact"
      style={{
        backgroundImage: `url("${contactBg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" container mx-auto max-w-screen-xl px-6  ">
        <div className="text-4xl mb-10 ">Contact</div>
        <div className="flex flex-col xl:flex-row xl:justify-between ">
          {submitted ? (
            <div>
              <p>Your message has been sent successfully!</p>
              <button
                aria-label="Send another contact message"
                onClick={() => setSubmitted(false)}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 mt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="xl:w-8/12" onSubmit={onSubmit}>
              <input
                type="hidden"
                name="access_key"
                value="d9ee3fbc-e36c-4e90-a726-fe4a477e9892"
              ></input>
              <input
                type="hidden"
                name="subject"
                value="Personal portfolio website message"
              ></input>
              <input
                type="hidden"
                name="from_name"
                value="Portfolio Message"
              ></input>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium  mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 "
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
              {error && (
                <p className="bg-red-400 w-full flex justify-center items-center py-2 px-4 mt-2 rounded-md border border-transparent shadow-sm text-sm font-medium text-white">
                  {error}
                </p>
              )}
            </form>
          )}
          <div>
            <div className="bg-white p-4 mt-3 rounded shadow-lg lg:p-8">
              Luke Hancock <br />
              <a href="mailto:lukehancock42@gmail.com" className="underline">
                lukehancock42@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
