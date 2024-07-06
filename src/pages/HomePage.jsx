import logo from "../assets/logo1.png";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import { useState } from "react";

const HomePage = () => {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    console.log(import.meta.env.VITE_BACKEND_API_URL);
    event.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: feedback, email }),
    });
    if (response.ok) {
      setMessage("Thank you for your feedback!");
      setFeedback("");
      setEmail("");
    } else {
      setMessage("There was an error submitting your feedback. Please try again.");
    }
    setIsLoading(false);
  };
  return (
    <div className="container mx-auto p-4 py-10">
      <img src={logo} className="w-1/2 object-cover" alt="crew ride sharing pool logo" />
      <img src={image1} alt="crew ride sharing pool" className="-mt-10 md:-mt-20 lg:-mt-30 xl:-mt-40" />
      <img src={image2} alt="crew ride sharing pool" />
      <img src={image3} alt="crew ride sharing pool" className="mt-20" />
      <section className="container mx-auto text-center py-24 pt-32">
        <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold mb-16 text-white">Help Us Shape the Future of Carpooling</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <div className="mb-4">
            <textarea
              placeholder="Feedback"
              value={feedback}
              rows={4}
              onChange={(e) => setFeedback(e.target.value)}
              required
              className="w-full px-3   rounded-xl bg-input bg-gray-700 outline-none text-white py-3"
            />
          </div>

          <div className="mb-10">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3  rounded-xl bg-input bg-gray-700 outline-none text-white py-3"
            />
          </div>
          <button
            type="submit"
            className="px-12 rounded-xl py-3 bg-primary text-white  font-semibold dark:bg-[#8731F8] text-primary-foreground flex gap-2 mx-auto "
            disabled={isLoading}
          >
            {isLoading && (
              <span className="animate-spin">
                <CircleSVG />
              </span>
            )}
            Submit
          </button>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </section>
    </div>
  );
};

export default HomePage;

const CircleSVG = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.45001 14.97C3.52001 18.41 6.40002 21.06 9.98002 21.79"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.04999 10.98C2.55999 5.93 6.81998 2 12 2C17.18 2 21.44 5.94 21.95 10.98"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.01 21.8C17.58 21.07 20.45 18.45 21.54 15.02"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
