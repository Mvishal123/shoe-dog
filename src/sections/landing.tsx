import LandingButton from "../components/landing-button";
import { shoes, statistics } from "../constants";

import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import ShoeCard from "../components/shoe-card";
import { useState } from "react";

const Landing = () => {
    const [currentShoe, setCurrentShoe] = useState<string>(bigShoe1);
  const onShoeChange = (url: string) => {
    setCurrentShoe(url);
  };
  return (
    <div className="h-screen flex flex-col xl:flex-row">
      <div className="relative pt-28 w-full xl:w-[40%] padding-l">
        <p className="text-coral-red text-lg">Our summer collections</p>
        <div className="mt-8">
          <h1 className="text-[60px] md:text-[72px] font-bold font-palanquin">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-8">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red">Nike</span> Shoes
          </h1>
          <p className="text-lg leading-6 text-slate-500 mt-2">
            Discover stylish Nike arrivals , quality <br />
            comfort, and innovation for your active
          </p>
          <div className="mt-12">
            <LandingButton />
          </div>
          <div className="mt-3 lg:mt-8 flex gap-12">
            {statistics.map((stat) => {
              return (
                <div key={stat.label} className="flex flex-col font-palanquin">
                  <span className="text-3xl font-bold">{stat.value}</span>
                  <span>{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative flex-1 bg-hero bg-cover bg-center flex justify-center items-center max-xl:py-40">
        <img src={currentShoe} alt="shoe" height={610} width={502} />
        <div className="flex gap-6 absolute -bottom-[7%] px-6 xl:px-0">
          {shoes.map((shoe) => {
            return (
              <ShoeCard
                key={shoe.bigShoe}
                imageUrl={shoe.thumbnail}
                onShoeChange={(url: string) => onShoeChange(url)}
                currentShoeUrl={currentShoe}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Landing;
