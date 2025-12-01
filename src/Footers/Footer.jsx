import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faIdCard , faHouse ,faThumbsUp, faCircleInfo , faDumbbell, faClock ,faCalendarDays, faCircleXmark, faPhone,faEnvelope,faLocationDot} from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
    return (
        <>
            <div className="bg-[#02754B] rounded-xl shadow mt-4 p-6 flex flex-col">
                <div className='flex flex-col bg-[#E0D205] rounded-lg font-bold py-3 px-8 text-black  gap-3  w-full mx-auto text-lg md:text-2xl '>
                    <img
                        src="/logo/logo.jpg"
                        alt="logo"
                        className="w-14 h-14 rounded-full object-cover"
                    /><h1 className='font-zentry-regular'>Fitness Do It Now</h1>
                    <p className='text-lg'>Building stronger bodies and stronger minds.
                        Your journey starts here</p>
                    <div className="bg-[#02754B] text-[#E0D205] rounded-2xl p-6 font-general 
            flex flex-col md:flex-row md:justify-between gap-6">

                        {/* QUICK LINKS */}
                        <ul className="flex flex-col gap-2">
                            <h1 className="text-lg font-bold text-black bg-[#E0D205] px-4 py-1 rounded-xl text-center w-fit">
                                Quick Links
                            </h1>
                            <li className="hover:text-gray-400 text-lg ">
                                <FontAwesomeIcon icon={faHouse} className='mx-2 '/>
                                Home</li>
                            <li className="hover:text-gray-400 text-lg">
                                <FontAwesomeIcon icon={faThumbsUp} className='mx-2 ' />
                            Advantages
                            </li>
                            <li className="hover:text-gray-400 text-lg">
                                <FontAwesomeIcon icon={faIdCard} className='mx-2 '/>
                                Membership</li>
                            <li className="hover:text-gray-400 text-lg">
                                <FontAwesomeIcon icon={faCircleInfo} className='mx-2'/>
                                About
                                </li>
                            <li className="hover:text-gray-400 text-lg">
                                <FontAwesomeIcon icon={faDumbbell} className='mx-2'/>
                                Trainers
                                </li>
                        </ul>

                        {/* OPENING HOURS */}
                        <ul className="flex flex-col gap-2">
                            <h1 className="text-lg font-bold text-black bg-[#E0D205] px-4 py-1 rounded-xl text-center w-fit">
                                Opening Hours
                            </h1>
                            <li className="hover:text-gray-400 text-lg">
                                <FontAwesomeIcon icon={faCalendarDays} className='mx-1.5'/>
                                Monday – Friday
                                </li>
                            <li className="hover:text-gray-400 text-lg"><FontAwesomeIcon icon={faClock} className='mx-1.5'/> 6:00 AM – 10:00 PM</li>
                            <li className="hover:text-gray-400 text-lg">
                                  <FontAwesomeIcon icon={faCalendarDays} className='mx-1.5'/>
                                Saturday 
                                </li>
                            <li className="hover:text-gray-400 text-lg"><FontAwesomeIcon icon={faClock} className='mx-1.5'/> 7:00 AM – 9:00 PM</li>
                            <li className="hover:text-gray-400 text-lg">
                                <FontAwesomeIcon icon={faCircleXmark} className='mx-1.5'/>
                                Sunday: Closed
                                </li>
                        </ul>

                        {/* CONTACT */}
                        <ul className="flex flex-col gap-2">
                            <h1 className="text-lg font-bold text-black bg-[#E0D205] px-4 py-1 rounded-xl text-center w-fit">
                                Contact Us
                            </h1>
                            <li className="hover:text-gray-400 text-lg">
                                <FontAwesomeIcon icon={faPhone} className='mx-2'/>
                                Phone: +91 0000000000</li>
                            <li className="hover:text-gray-400 text-lg">
                                <FontAwesomeIcon icon={faEnvelope} className='mx-2'/>
                                Email: Fitness@DoItNow.com 
                                </li>
                            <li className="hover:text-gray-400 text-lg">
                                <FontAwesomeIcon icon={faLocationDot} className='mx-2'/>
                                Location: HSR Layout, Bangalore
                                </li>
                        </ul>

                    </div>

                    <h3 className='text-xl text-center'>© 2025 Fitness Do It Now — All Rights Reserved</h3>

                </div>

            </div>
        </>
    )
}
