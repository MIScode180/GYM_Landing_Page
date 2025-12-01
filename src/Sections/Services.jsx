import React from 'react'

export default function Services() {
    return (
        <>
            <div className="bg-[#02754B] rounded-xl shadow mt-5 p-8 mx-auto max-w-5xl w-full lg:w-full lg-h-full">

                <h2 className="flex flex-row justify-center gap-2 w-full h-auto rounded-lg font-bold py-5 px-8 text- text-center  mx-auto  md:text-5xl font-zentry-regular mb-5 text-2xl lg:text-6xl text-black">
                    What  <span className='text-[#E0D205] '>We Offer</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">

                    <h2 className="bg-[#E0D205] rounded-lg font-bold py-4 px-6 text-black 
                 text-lg md:text-3xl lg:text-4xl font-zentry-regular text-center">
                        Gym Services<hr className="my-2 border-black" />
                        <ul className="list-none text-[#02754B] text-sm md:text-base space-y-2 pl-5 font-general">
                            <li className='hover:text-gray-500'>Personal Training</li>
                            <li className='hover:text-gray-500'>Strength Training</li>
                            <li className='hover:text-gray-500'>Weight Loss Program</li>
                            <li className='hover:text-gray-500'>Cardio & Endurance</li>
                            <li className='hover:text-gray-500'>CrossFit & Functional Training</li>
                            <li className='hover:text-gray-500'>Zumba & Group Classes</li>
                            <li className='hover:text-gray-500'>Yoga & Flexibility</li>
                            <li className='hover:text-gray-500'>HIIT Workouts</li>
                            <li className='hover:text-gray-500'>Diet & Nutrition Guidance</li>
                        </ul>
                    </h2>

                    <h2 className="bg-[#E0D205] rounded-lg font-bold py-4 px-6 text-black 
                 text-xl md:text-3xl lg:text-4xl font-zentry-regular">
                        PROGRAMS & PACKAGES<hr className="my-2 border-black" />
                        <ul className="list-none text-[#02754B] text-sm md:text-base space-y-2 pl-5 font-general ">
                            <li className='hover:text-gray-500'>30-Day Transformation Challenge</li>
                            <li className='hover:text-gray-500'>Beginner to Pro Training Plan</li>
                            <li className='hover:text-gray-500'>Body Recomposition Program</li>
                            <li className='hover:text-gray-500'>Muscle Building Program</li>
                            <li className='hover:text-gray-500'>Women’s Fitness Program</li>
                            <li className='hover:text-gray-500'>Sports Performance Training</li>
                            <li className='hover:text-gray-500'>Senior Fitness Program</li>
                            <li className='hover:text-gray-500'>Corporate Fitness Plans</li>
                        </ul>
                    </h2>

                    <h2 className="bg-[#E0D205] rounded-lg font-bold py-4 px-6 text-black 
                 text-xl md:text-3xl lg:text-4xl font-zentry-regular text-center">
                        FACILITIES & FEATURES<hr className="my-2 border-black" />
                        <ul className="list-none text-[#02754B] text-sm md:text-base space-y-2 pl-5 font-general ">
                            <li className='hover:text-gray-500'>Fully Equipped Strength Zone</li>
                            <li className='hover:text-gray-500'>Advanced Cardio Machines</li>
                            <li className='hover:text-gray-500'>Dedicated CrossFit Arena</li>
                            <li className='hover:text-gray-500'>Indoor Turf for Functional Training</li>
                            <li className='hover:text-gray-500'>Spacious Group Studio</li>
                            <li className='hover:text-gray-500'>Personal Training Zone</li>
                            <li className='hover:text-gray-500'>Locker Rooms & Showers</li>
                            <li className='hover:text-gray-500'>Free Wi-Fi & Waiting Lounge</li>
                        </ul>
                    </h2>
                    <h2 className="bg-[#E0D205] rounded-lg font-bold py-4 px-6 text-black 
                 text-xl md:text-3xl lg:text-4xl font-zentry-regular text-center">
                        🔥 SPECIAL FEATURES<hr className="my-2 border-black" />
                        <ul className="list-none text-[#02754B] text-sm md:text-base space-y-2 pl-5 font-general ">
                            <li className='hover:text-gray-500'>Free 3-Day Trial</li>
                            <li className='hover:text-gray-500'>Monthly Fitness Assessment</li>
                            <li className='hover:text-gray-500'>Personalized Workout Sheet</li>
                            <li className='hover:text-gray-500'>Diet Chart Included</li>
                            <li className='hover:text-gray-500'>Discount on Annual Membership</li>
                            <button className='mt-4 bg-[#02754B] text-[#E0D205] mx-4 w-40 rounded-2xl h-12 cursor-pointer'>GET OFFER NOW</button>
                        </ul>
                    </h2>
                </div>
            </div>
        </>
    )
}
