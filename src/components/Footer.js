import React from "react";
import { FaChevronRight, FaFacebook,FaInstagram,FaLinkedin,FaTelegram,FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#071527] pb-[30px] text-sm text-white">
      <div className="pt-[60px] pb-[30px]">
        <div className="container px-3 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 m-auto">
            <div className="m-auto">
              <div className="mb-4 bg-[#05101e] border-t-4 border-solid border-yellow-500 text-center px-5 py-7">
                <h3 className="text-2xl mb-5 py-1 font-bold">Rotaract Club</h3>
                <p className="text-sm mb-0">JSPM's Rajarshi shahu college of engineering , Tathawade.<br/>Ashok Nagar, Tathawade, Pimpri-Chinchwad,<br/>Maharashtra 411033<br/><br/>
                  {/* <strong>Phone:</strong><a href="tel:917030639196"><p className="text-yellow-500">7030639196</p></a><br/> */}
                  <strong>Email:</strong><a href="mailto:rscoerotaract@gmail.com"><p className="text-yellow-500">rscoerotaract@gmail.com</p></a><br/>
                </p>
                <div className="mt-3 text-2xl">
                  <a href="https://m.facebook.com/rcrscoe" className="inline-block mx-2 hover:text-yellow-500"><FaFacebook /></a>
                  <a href="https://instagram.com/rc_rscoe?igshid=MzRlODBiNWFlZA==" className="inline-block mx-2 hover:text-yellow-500"><FaInstagram/></a>
                  <a href="https://www.linkedin.com/company/rotaract-club-of-rscoe/" className="inline-block mx-2 hover:text-yellow-500"><FaLinkedin/></a>
                  <a href="https://twitter.com/rc_rscoe?t=EFP2HzitjSsWTs1nciyWYA&s=09" className="inline-block mx-2 hover:text-yellow-500"><FaTwitter/></a>
                  <a href="https://t.me/rc_rscoe" className="inline-block mx-2 hover:text-yellow-500"><FaTelegram/></a>
                </div>
              </div>
            </div>

            <div className="w-4/6 m-auto">
              <h4 className="text-lg font-medium pb-3">Useful Links</h4>
              <ul>
                <li className="py-2"><i className="inline-block text-orange-700"><FaChevronRight/></i> <a href="#hero" className="text-sm font-normal hover:text-yellow-500">Home</a></li>
                <li className="py-2"><i className="inline-block text-orange-700"><FaChevronRight/></i> <a href="#about" className="text-sm font-normal hover:text-yellow-500">Events</a></li>
                <li className="py-2"><i className="inline-block text-orange-700"><FaChevronRight/></i> <a href="#product" className="text-sm font-normal hover:text-yellow-500">Product</a></li>
                <li className="py-2"><i className="inline-block text-orange-700"><FaChevronRight/></i> <a href="#contact" className="text-sm font-normal hover:text-yellow-500">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="border-t-[1px] border-solid border-[#0f2f57] text-center pt-8 text-base">
          &copy; Copyright <strong><span>Rotaract Club </span></strong>. All Rights Reserved
        </div>
        <div className="pt-2 text-center text-sm">
        Designed by <a href="#" className="text-yellow-500">Rahul, Sumit, Gaurav</a>
        </div>
      </div>
  </footer>
  );
}
