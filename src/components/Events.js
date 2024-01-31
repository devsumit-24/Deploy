import React from "react";
import event1 from "./images/events/Event1.png";
import event2 from "./images/events/Event2.png";
import event3 from "./images/events/Event3.jpg";
// import event1 from "./images/events/Event1.png";

export default function Events() {
  const cards = [
    {
      img: event1,
      date: "September 7, 2023",
      title: "CSD & CMD Activities at ISKCON",
      about:"We held CSD & CMD EVENT on Janmashtami🌸",
    },
    {
      img: event2,
      date: "August 09, 2023",
      title: "Go Green: Let's Plant a Tree",
      about:
        "Let's Join Hands And Grow A Greener World Together.....!!",
    },
    {
      img: event3,
      date: "July 18, 2023",
      title: "Let's talk: For Mental Peace",
      about:
        "🎭 Unmask Your Truth. 🎧Listen, Empathize, Heal. 🔊Amplify Voices on World Listening Day.",
    },
  ];

  return (
    <>
      <div className="md: flex items-center text-gray-600 ">
        <div className="container px-5 md:px-8 py-8 mx-auto">
          <div className="text-center mb-7 md:mb-3">
            <h1 className="text-4xl md:text-5xl text-gray-700 font-semibold">
              Events
            </h1>
          </div>
          <div className="flex flex-wrap">
            {cards.map((card, index) => (
              <div className="p-4 md:p-10 sm:w-1/2 lg:w-1/3">
                <div className="h-full overflow-hidden">
                  <div className="border-2 border-gray-200 border-opacity-60 rounded-lg">
                    <img
                      className="w-auto h-64 mx-auto object-cover object-center"
                      src={card.img}
                      alt={card.title}
                    />
                    <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in rounded-b-lg">
                      <h2 className="text-base font-medium text-indigo-300 mb-1">
                        {card.date}
                      </h2>
                      <h1 className="text-2xl font-semibold mb-3">
                        {card.title}
                      </h1>
                      <p className="leading-relaxed mb-3 text-justify">
                        {card.about}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        {/* <a
                        className="text-indigo-300 inline-flex items-center text-xl lg:mb-0"
                        href="#"
                      >
                        Register Now&nbsp;
                        <BsArrowRight size={30} />
                      </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
