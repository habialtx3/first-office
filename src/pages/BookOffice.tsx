import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import type { Office } from "../types/type";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { bookingSchema } from "../types/validationBooking";
import { mockOffices } from "../data/mockData";

export default function BookOffice() {
  const Base_Url = "" // Tidak perlu jika pakai public path
  const { slug } = useParams<{ slug: string }>()
  const [office, setOffice] = useState<Office | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    started_at: "",
    office_space_id: 0,
    total_amount: 0,
  })
  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [uniqueCode, setUniqueCode] = useState<number>(0)
  const [totalAmountWithUniqueCode, setTotalAmountWithUniqueCode] = useState<number>(0)
  const navigate = useNavigate()

  useEffect(() => {
    const foundOffice = mockOffices.find(o => o.slug === slug)
    if (foundOffice) {
      setOffice(foundOffice)

      const generatedUniqueCode = Math.floor(100 + Math.random() * 900)
      const grandTotal = foundOffice.price - generatedUniqueCode

      setUniqueCode(generatedUniqueCode)
      setTotalAmountWithUniqueCode(grandTotal)

      setFormData(prev => ({
        ...prev,
        office_space_id: foundOffice.id,
        total_amount: grandTotal
      }))
    } else {
      setOffice(null)
    }
  }, [slug])

  if (!office) return <p className="text-center mt-10">Office tidak ditemukan</p>

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validation = bookingSchema.safeParse(formData)
    if (!validation.success) {
      setFormErrors(validation.error.issues)
      return
    }

    setIsLoading(true)

    // Mock submit
    setTimeout(() => {
      navigate('/success-booking', {
        state: {
          office,
          booking: {
            ...formData,
            id: Math.floor(Math.random() * 1000),
            is_paid: false
          }
        }
      })
    }, 500)
  }

  return (
    <>
      <Navbar />
      <div id="Banner" className="relative w-full h-[240px] flex items-center overflow-hidden -mb-[50px]">
        <h1 className="text-center mx-auto font-extrabold text-[40px] leading-[60px] text-white mb-5 z-20">Start Booking Your Office</h1>
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10"></div>
        <img src={office.thumbnail} className="absolute w-full h-full object-cover object-top" alt={office.name} />
      </div>

      <form onSubmit={handleSubmit} className="relative flex justify-center max-w-[1130px] mx-auto gap-[30px] mb-20 z-20">
        {/* Left Column */}
        <div className="flex flex-col shrink-0 w-[500px] h-fit rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          <div className="flex items-center gap-4">
            <div className="flex shrink-0 w-[140px] h-[100px] rounded-[20px] overflow-hidden">
              <img src={office.thumbnail} className="w-full h-full object-cover" alt={office.name} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl leading-[30px]">{office.name}</p>
              <div className="flex items-center gap-[6px]">
                <img src="/assets/images/icons/location.svg" className="w-6 h-6" alt="icon" />
                <p className="font-semibold">{office.city.name}</p>
              </div>
            </div>
          </div>

          <hr className="border-[#F6F5FD]" />

          {/* Form */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Complete The Details</h2>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] focus-within:ring-2 focus-within:ring-[#0D903A]">
                <img src="/assets/images/icons/security-user-black.svg" className="w-6 h-6" alt="icon" />
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Write your complete name" className="appearance-none outline-none w-full py-3 font-semibold placeholder:text-[#000929]" />
              </div>
              {formErrors.find(e => e.path.includes("name")) && <p className="text-red-500">Name is required</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Phone Number</label>
              <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] focus-within:ring-2 focus-within:ring-[#0D903A]">
                <img src="/assets/images/icons/call-black.svg" className="w-6 h-6" alt="icon" />
                <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Write your valid number" className="appearance-none outline-none w-full py-3 font-semibold placeholder:text-[#000929]" />
              </div>
              {formErrors.find(e => e.path.includes("phone_number")) && <p className="text-red-500">Phone is required</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Start Date</label>
              <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] focus-within:ring-2 focus-within:ring-[#0D903A]">
                <img src="/assets/images/icons/calendar-black.svg" className="w-6 h-6" alt="icon" />
                <input type="date" name="started_at" value={formData.started_at} onChange={handleChange} className="appearance-none outline-none w-full py-3" />
              </div>
              {formErrors.find(e => e.path.includes("started_at")) && <p className="text-red-500">Date is required</p>}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col shrink-0 w-[400px] h-fit rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          <h2 className="font-bold">Your Order Details</h2>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <p className="font-semibold">Duration</p>
              <p className="font-bold">{office.duration} Days Working</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Sub Total</p>
              <p className="font-bold">Rp {totalAmountWithUniqueCode.toLocaleString("id")}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Unique Code</p>
              <p className="text-[#FF2D2D] font-bold">-Rp {uniqueCode}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Grand Total</p>
              <p className="text-[#0D903A] font-bold text-[22px] leading-[33px]">Rp {totalAmountWithUniqueCode.toLocaleString("id")}</p>
            </div>
          </div>

          <button type="submit" disabled={isLoading} className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]">
            {isLoading ? 'Loading ...' : 'Book The Office'}
          </button>
        </div>
      </form>
    </>
  )
}
