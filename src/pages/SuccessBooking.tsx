import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SuccessBooking() {
  const baseUrl = "http://127.0.0.1:8000/storage";

  const office = {
    id: 1,
    name: "Master Capitalize",
    thumbnail: "offices/office-1.jpg",
    city: {
      id: 1,
      name: "Jakarta",
      slug: "jakarta",
      photo: "cities/jakarta.jpg",
      officeSpaces: [],
    },
  };

  const booking = {
    booking_trx_id: "BOOK-TRX-2026-001",
  };

  return (
    <>
      <Navbar />
      <section className="flex flex-1 py-10">
        <div className="flex flex-col w-[450px] m-auto rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          <div className="flex items-center gap-4">
            <img
              src="/assets/images/icons/verify.svg"
              className="w-[50px] h-[50px]"
              alt="icon"
            />
            <h1 className="font-extrabold text-[28px] leading-[38px]">
              Booking Finished
            </h1>
          </div>

          <hr className="border-[#F6F5FD]" />

          <div className="flex items-center gap-4">
            <div className="w-[140px] h-[100px] rounded-[20px] overflow-hidden">
              <img
                src={`${baseUrl}/${office.thumbnail}`}
                className="w-full h-full object-cover"
                alt="thumbnail"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl leading-[30px]">
                {office.name}
              </p>
              <div className="flex items-center gap-2">
                <img
                  src="/assets/images/icons/location.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <p className="font-semibold">{office.city.name}</p>
              </div>
            </div>
          </div>

          <hr className="border-[#F6F5FD]" />

          <div className="flex items-center gap-4">
            <img
              src="/assets/images/icons/receipt-text.svg"
              className="w-[34px] h-[34px]"
              alt="icon"
            />
            <div>
              <p className="font-bold">{booking.booking_trx_id}</p>
              <p className="text-sm mt-1">
                Save your booking ID securely
              </p>
            </div>
          </div>

          <hr className="border-[#F6F5FD]" />

          <p className="font-semibold leading-[28px] text-center">
            Pesanan Anda sedang kami proses, kami akan menginformasikan status Anda melalui SMS
          </p>

          <Link
            to="/check-booking"
            className="flex items-center justify-center w-full rounded-full py-4 bg-[#0D903A] font-bold text-white"
          >
            View Booking Details
          </Link>
        </div>
      </section>
    </>
  );
}
