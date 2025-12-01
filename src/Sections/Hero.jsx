import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="px-2 py-4">
      <div className="flex flex-row gap-4">

        {/* LEFT: Progress text block */}
        <div className="bg-[#02754B] rounded-xl shadow flex-1 p-4 flex flex-col justify-center">
          <h1 className="text-black font-bold font-zentry-regular text-3xl md:text-5xl lg:text-7xl leading-tight">
            ONE  <span className="text-[#E0D205]">STRONG </span>MOVE  <br />STARTS <span className="text-[#E0D205]">EVERYTHING</span>
          </h1>
          <p className="text-[#02754B] text-center rounded-2xl bg-[#E0D205] font-extrabold mt-3 text-lg md:text-2xl lg:text-2xl opacity-90 font-general lg-py-5">
            BUILD DISCIPLINE BUILD STRENGTH BUILD YOU
          </p>
          <p className=" hidden lg:block md:block text-black font-extrabold mt-5 text-lg md:text-2xl lg:text-3xl opacity-90 font-general">
            A stronger body begins with consistent effort. Every session moves you closer to the version you want to become.
          </p>
        </div>

        {/*  Gym image */}
        <div className="rounded-xl shadow flex-1 overflow-hidden">
          <img
            src="/img/grid2.jpg"
            alt="Gym"
            className="w-full h-full object-cover"
          />
        </div>
      </div>


      <div className="bg-[#02754B] rounded-xl shadow mt-4 p-6 flex flex-col">
        <p className="text-center text-black text-xl md:text-3xl lg:text-4xl mb-6 font-zentry-regular">
          Discipline creates unstoppable daily strength
        </p>

        <button className="bg-[#E0D205] rounded-lg font-bold py-3 px-8 text-black inline-flex items-center gap-3 hover:bg-[#FFFD8D] w-max mx-auto text-lg md:text-2xl font-zentry-regular">
          Get Membership
          <FontAwesomeIcon icon={faDumbbell} className="text-[#02754B]" />
        </button>
      </div>
    </section>
  );
}
