import { Swiper, SwiperSlide } from "swiper/react";
import CityCard from "../components/CityCard";
import type { City } from "../types/type";
import { mockCities } from "../data/mockData";

export default function BrowseCityWrapper() {
  const cities: City[] = mockCities;

  return (
    <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
      <div className="w-full max-w-[1130px] mx-auto flex items-center justify-between">
        <h2 className="font-bold text-[32px]">
          You Can Choose <br /> Our Favorite Cities
        </h2>
      </div>

      <Swiper spaceBetween={30} slidesPerView="auto">
        {cities.map((city) => (
          <SwiperSlide key={city.id} className="!w-fit">
            <CityCard city={city} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
