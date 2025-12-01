import React from 'react'

export default function Testimonial() {
    return (
        <>
            <div className="bg-[#02754B] rounded-xl shadow mt-5 p-8 mx-auto max-w-5xl w-full lg:w-full lg-h-full">
                <h2 className="flex flex-row justify-center gap-2 bg-[#E0D205] w-full h-auto rounded-lg font-bold py-5 px-8 text- text-center  mx-auto  md:text-5xl font-zentry-regular mb-5 text-2xl lg:text-6xl text-black">
                    Client  <span className='text-[#02754B] '> Testimonials</span>
                </h2>
                <h1 className="rounded-lg font-bold py-5 px-8 text-black text-center  mx-auto text-3xl md:text-5xl lg:text-4xl font-zentry-regular mb-5">
                Success Stories From <span className='text-[#E0D205] mx-2'>Our Clients</span>
                </h1>
                <div className="bg-[#E0D205] rounded-xl shadow flex flex-col md:flex-row items-center p-6 gap-6">
                    <div className="bg-[#02754B] rounded-xl shadow mt-5 p-8 mx-auto max-w-5xl w-full lg:w-full lg-h-90">

                        <ul className="list-none text-[#E0D205] text-sm md:text-base space-y-2 pl-5 font-general items-center text-center">
                            <h1>Emilia<hr className=" my-2 text-center border-black" /></h1>
                            <li className='hover:text-gray-400'> Before: Low energy, inconsistent workouts</li>
                            <li className='hover:text-gray-400'>After: Lost 12 kg in 3 months, improved stamina</li>
                            <li className='hover:text-gray-400'> Review:
                                “Best decision ever! Trainers pushed me the right way — not too hard, but enough to transform me.”</li>

                        </ul>



                    </div>
                    <div className="bg-[#02754B] rounded-xl shadow mt-5 p-8 mx-auto max-w-5xl w-full lg:w-full lg-h-full">
<ul className="list-none text-[#E0D205] text-sm md:text-base space-y-2 pl-5 font-general items-center text-center">
                            <h1>Steve<hr className=" my-2 text-center border-black" /> </h1>
                            <li className='hover:text-gray-400'> Before: Struggled with weight & motivation</li>
                            <li className='hover:text-gray-400'>After: 8 kg fat loss + improved fitness habits</li>
                            <li className='hover:text-gray-400'> Review:
                               “The community here kept me going. Workouts are fun, and the transformation is real.”</li>

                        </ul>
                    </div>
                   
                </div>
            </div>

        </>
    )
}
