import { useParams } from "react-router-dom";
import BrowseOfficeWrapper from "../wrappers/BrowseOfficeWrapper";
import { useState } from "react";
import type { City } from "../types/type";
import OfficeCard from "../components/OfficeCard";
import Navbar from "../components/Navbar";
import { mockCities, mockOffices } from "../data/mockData";

export default function CityDetails() {
  const { slug } = useParams<{ slug: string }>();

  // Tidak perlu Base_Url kalau path mock sudah dari public
  const foundCity = mockCities.find((item) => item.slug === slug) || null;
  const [city] = useState<City | null>(foundCity);
  const [error] = useState<string | null>(
    foundCity ? null : "City tidak ditemukan"
  );

  

  

  if (error) {
    return (
      <>
        <Navbar />
        <p className="text-center mt-20 text-red-500">{error}</p>
      </>
    );
  }

  if (!city) {
    return null;
  }

  

  return (
    <>
      <Navbar />

      <header className="flex flex-col w-full">
        <section id="Hero-Banner" className="relative flex h-[434px]">
          <div
            id="Hero-Text"
            className="relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-10 gap-[30px] bg-white mt-[70px] ml-[calc((100%-1130px)/2)] z-10"
          >
            <h1 className="font-extrabold text-[50px] leading-[60px]">
              Great Office in <br />
              <span className="text-[#0D903A]">{city.name}</span>
            </h1>
            <p className="text-lg leading-8 text-[#000929]">
              Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik
              dan sehat dalam tumbuhkan karir.
            </p>
          </div>

          <div
            id="Hero-Image"
            className="absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[434px] rounded-bl-[40px] overflow-hidden"
          >
            {/* Ambil path langsung dari mock */}
            <img
              src={city.photo.replace("public", "")}
              className="w-full h-full object-cover"
              alt="hero background"
            />
          </div>
        </section>
      </header>

      <section
        id="Fresh-Space"
        className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mb-[120px]"
      >

        <BrowseOfficeWrapper>
          {city.officeSpaces.map((office) => (
            <OfficeCard key={office.id} office={office} />
          ))}
        </BrowseOfficeWrapper>

      </section>
    </>
  );
}
