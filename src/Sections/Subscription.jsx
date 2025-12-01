import React from 'react'


export default function Subscription() {
    return (
        <div className="bg-[#02754B] rounded-xl shadow mt-5 p-8 mx-auto max-w-5xl w-full lg:w-full lg-h-full">
            <h1 className="rounded-lg font-bold py-5 px-8 text-black text-center  mx-auto text-3xl md:text-5xl lg:text-4xl font-zentry-regular mb-5">
                Our <span className='text-[#E0D205] mx-2'>Membership </span>Plans
            </h1>
            <div className="bg-[#E0D205] rounded-xl shadow flex flex-col md:flex-row items-center p-6 gap-6">
                <div className="bg-[#02754B] rounded-xl shadow mt-5 p-8 mx-auto max-w-5xl w-full lg:w-full lg-h-90">

                    <ul className=" flex flex-col list-none text-[#E0D205] text-sm md:text-base space-y-2 pl-5 font-general items-center text-center ">
                        <h1 className='bg-[#E0D205] rounded-lg font-bold py-3 px-8 text-black inline-flex items-center gap-3 hover:bg-[#FFFD8D] w-max mx-auto text-lg md:text-2xl font-zentry-regular'>Basic Plan</h1>
                        <span className='font-black text-2xl text-black font-robert-medium mb-3'>₹999 <span>/Monthly</span> <s>1499</s></span>
                        <li className='hover:text-gray-400'>Access to gym floor</li>
                        <li className='hover:text-gray-400'>Cardio & strength equipment</li>
                        <li className='hover:text-gray-400'> Locker & changing room</li>
                        <li className='hover:text-gray-400'> Ideal for beginners</li>
                        <li className='hover:text-gray-400'> Perfect for those starting their fitness journey</li>
                        <button className="bg-[#E0D205] rounded-lg font-bold py-3 px-8 text-black inline-flex items-center gap-3 hover:bg-[#FFFD8D] w-max mx-auto text-lg md:text-2xl font-zentry-regular cursor-pointer">
                            Choose Plan
                        </button>
                    </ul>



                </div>
                <div className="bg-[#02754B] rounded-xl shadow mt-5 p-8 mx-auto max-w-5xl w-full lg:w-full lg-h-full">
                    <ul className=" flex flex-col list-none text-[#E0D205] text-sm md:text-base space-y-2 pl-5 font-general items-center text-center">
                           <h1 className='bg-[#E0D205] rounded-lg font-bold py-3 px-8 text-black inline-flex items-center gap-3 hover:bg-[#FFFD8D] w-max mx-auto text-lg md:text-2xl font-zentry-regular'>Standard Plan</h1>
                        <span className='font-black text-2xl text-black font-robert-medium mb-3'>₹1499 <span>/Monthly</span> <s>2499</s></span>

                        <li className='hover:text-gray-400'>Everything in Basic</li>
                        <li className='hover:text-gray-400'>Group classes (Zumba, HIIT, Yoga)</li>
                        <li className='hover:text-gray-400'> Locker & changing room</li>
                        <li className='hover:text-gray-400'> Personal workout guidance</li>
                        <li className='hover:text-gray-400'> Priority support</li>
                        <li className='hover:text-gray-400'> Best for members who want structured training and classes.</li>
                       <button className="bg-[#E0D205] rounded-lg font-bold py-3 px-8 text-black inline-flex items-center gap-3 hover:bg-[#FFFD8D] w-max mx-auto text-lg md:text-2xl font-zentry-regular cursor-pointer">
                            Choose Plan
                        </button>

                    </ul>
                </div>
                <div className="bg-[#02754B] rounded-xl shadow mt-5 p-8 mx-auto max-w-5xl w-full lg:w-full lg-h-full">
                    <ul className="flex flex-col list-none text-[#E0D205] text-sm md:text-base space-y-2 pl-5 font-general items-center text-center">
                        <h1 className='bg-[#E0D205] rounded-lg font-bold py-3 px-8 text-black inline-flex items-center gap-3 hover:bg-[#FFFD8D] w-max mx-auto text-lg md:text-2xl font-zentry-regular'>Premium Plan</h1>
                        <span className='font-black text-2xl text-black font-robert-medium mb-3'>₹1999 <span>/Monthly</span> <s>3999</s></span>
                        <li className='hover:text-gray-400'>Everything in Standard</li>
                        <li className='hover:text-gray-400'>1-on-1 Personal Training</li>
                        <li className='hover:text-gray-400'>Custom diet & workout plan</li>
                        <li className='hover:text-gray-400'>Custom diet & workout plan</li>
                        <li className='hover:text-gray-400'>VIP access + extended hours</li>
                        <li className='hover:text-gray-400'>For serious members who want full transformation support.</li>
                        <button className="bg-[#E0D205] rounded-lg font-bold py-3 px-8 text-black inline-flex items-center gap-3 hover:bg-[#FFFD8D] w-max mx-auto text-lg md:text-2xl font-zentry-regular cursor-pointer">
                            Choose Plan
                        </button>
                    </ul>
                </div>

            </div>
        </div>
    )
}
