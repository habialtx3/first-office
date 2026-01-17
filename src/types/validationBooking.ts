import { z } from "zod"

export const bookingSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone_number: z.string().min(1, "Phone number is required"),
    started_at: z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid Date"),
    office_space_id: z.number().min(1, "Office Space Id is required")
})

export const viewBookingSchema = z.object({
    booking_trx_id : z.string().min(1, "Booking Transaction Id is Required"),
    phone_number : z.string().min(1,"Number is Required")
})