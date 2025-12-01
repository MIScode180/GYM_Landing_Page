import React from 'react'

export default function AboutUs() {
    return (
        <>
            <div className="flex flex-col mt-4 px-4 md:px-8">

                <div className="bg-[#02754B] rounded-xl shadow mt-4 p-6 mx-auto max-w-5xl w-full">
                    <h1 className="bg-[#E0D205] w-full rounded-lg font-bold py-5 px-8 text-black text-center mx-auto text-2xl md:text-2xl font-zentry-regular mb-5 lg:text-6xl">
                        Why <span className='text-[#02754B]'>Choose Us</span> 
                    </h1>
                    <h1 className="rounded-lg font-bold py-5 px-8 text-black text-center  mx-auto text-3xl md:text-5xl lg:text-4xl font-zentry-regular mb-5">
                        Strength <span className='text-[#E0D205] mx-2'>Starts Here</span>
                    </h1>
                   
                    <div className="bg-[#E0D205] rounded-xl shadow flex flex-col md:flex-row items-center p-6 gap-6">



                        {/* Left Paragraph */}
                        <p className="text-black flex-1 text-center md:text-left text-base md:text-md font-zentry-general font-extrabold lg:text-4xl">
                            We are committed to providing top-notch services that exceed our clients'
                            expectations. Our team of experts works diligently to ensure every experience is
                            delivered with professionalism and excellence.
                        </p>

                        {/* Middle List */}
                        <div className="bg-[#02754B] rounded-xl shadow p-6 w-full md:w-64">
                            <ul className="list-none text-[#E0D205] text-sm md:text-base space-y-2 pl-5 font-general">
                                <li className='hover:text-gray-400'>Expert Trainers</li>
                                <li className='hover:text-gray-400'>Modern Equipment</li>
                                <li className='hover:text-gray-400'>Personalized Programs</li>
                                <li className='hover:text-gray-400'>Clean & Safe Environment</li>
                                <li className='hover:text-gray-400'>Affordable Memberships</li>
                                 <img
                            src="/img/img2.jpg"
                            alt="Service"
                            className="w-80 h-40 lg:h-70 object-cover rounded-2xl mt-3 items-center"
                        />
                            </ul>
                        </div>

                        {/* Right Image */}
                       
                    </div>
                </div>
            </div>
        </>
    )
}
