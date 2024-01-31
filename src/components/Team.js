import React from "react";
import p_img from "./images/team/President.jpg"
import vp_img from "./images/team/Vice President.jpg"
import s_img from "./images/team/Secretary.jpg"
import js_img from "./images/team/Joint Secretary.jpg"
import saa_img from "./images/team/SAA.jpg"
import fd_img from "./images/team/Finance Director.jpg"
import t_img from "./images/team/Treasurer.jpg"
import ipp_img from "./images/team/IPP.jpg"

export default function Team() {
    const team = [
        {
          photo: p_img,
          name: "RTR. Samruddhi Parte",
          role: "President",
        },
        {
          photo: s_img,
          name: "RTR. Swarada Gade",
          role: "Secretary",
        },
        {
          photo: vp_img,
          name: "RTR. Yashodeep Gaikwad",
          role: "Vice President",
        },
        {
          photo: js_img,
          name: "RTR. Maheshwary Narkhede",
          role: "Joint Secretary",
        },
        {
          photo: saa_img,
          name: "RTR. Nishant Survase",
          role: "Sergeant at Arms",
        },
        {
          photo: fd_img,
          name: "RTR. Vijay Kale",
          role: "Finance Director",
        },
        {
          photo: t_img,
          name: "RTR. Sanket Kanegaonkar",
          role: "Treasurer",
        },
        {
          photo: ipp_img,
          name: "RTR. Roshni Gaikwad",
          role: "Immediate Past President",
        },
        ];
  return (
    <>
      <div className="md: flex items-center text-gray-600 ">
        <div className="container px-5 md:px-8 py-8 mx-auto border-t-2 border-solid border-gray-100 border">
          <div className="text-center mb-7 md:mb-3">
            <h1 className="text-4xl md:text-5xl text-gray-700 font-semibold">
              Our Team
            </h1>
          </div>
          <div className="flex flex-wrap content-center items-center justify-evenly">
            {team.map((member, index) => (
              <div className="p-4 md:p-7 w-[90%] md:w-1/2 lg:w-1/4">
                <div className="overflow-hidden hover:scale-110 transition duration-500 ease-out">
                  <img
                    className="w-44 h-60 mx-auto object-cover object-center shadow-xl rounded-md"
                    src={member.photo}
                    alt={member.name}
                  />
                  <div className="p-6 text-center">
                    <h1 className="text-xl font-semibold">
                    {member.name}
                    </h1>
                    <p className="leading-relaxed mb-3">
                    {member.role}
                    </p>
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
