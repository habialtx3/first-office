import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { mockOffices } from "../data/mockData";

export default function Details() {
  const { slug } = useParams<{ slug: string }>();
  const office = mockOffices.find(o => o.slug === slug);

  if (!office) return <p className="text-center mt-20 text-red-500">Office not found</p>;

  return (
    <>
      <Navbar />

      <section id="Gallery" className="-mb-[50px]">
        <Swiper
          grabCursor
          className="w-full"
          spaceBetween={100}
          slidesPerView="auto"
          slidesOffsetBefore={30}
          slidesOffsetAfter={30}
        >
          {office.photo.map(photo => (
            <SwiperSlide key={photo.id} className="!w-fit">
              <div className="w-[1000px] h-[550px]">
                <img
                  src={photo.photo} // path dari mockData, pastikan ada di public folder
                  className="w-full h-full object-cover"
                  alt={office.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="relative flex max-w-[1130px] mx-auto gap-[30px] mb-20 z-10">
        <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          <p className="w-fit rounded-full px-4 py-1 bg-[#0D903A] text-white font-bold text-sm">
            Popular
          </p>

          <div className="flex justify-between">
            <div>
              <h1 className="font-extrabold text-[32px] leading-[44px]">{office.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <img src="/assets/images/icons/location.svg" className="w-6 h-6" />
                <p className="font-semibold">{office.city.name}</p>
              </div>
            </div>
          </div>

          <p className="leading-[30px]">{office.about}</p>
          <hr />

          <h2 className="font-bold">Office Address</h2>
          <p>{office.address}</p>
        </div>

        <div className="w-[392px] shrink-0">
          <div className="rounded-[20px] border border-[#E0DEF7] p-[30px] bg-white flex flex-col gap-6">
            <div>
              <p className="font-extrabold text-[32px] text-[#0D903A]">
                Rp {office.price.toLocaleString("id-ID")}
              </p>
              <p className="font-semibold">For {office.duration} days working</p>
            </div>

            <hr />

            <div className="flex flex-col gap-4">
              {office.benefit.map(b => (
                <div key={b.id} className="flex items-center gap-3">
                  <img src="/assets/images/icons/verify.svg" className="w-6 h-6" />
                  <p className="font-semibold">{b.name}</p>
                </div>
              ))}
            </div>

            <hr />

            <Link
              to={`book`}
              className="flex items-center justify-center w-full rounded-full bg-[#0D903A] text-white font-bold py-4 gap-2"
            >
              Book This Office
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
