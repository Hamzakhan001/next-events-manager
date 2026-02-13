'use server'
import Booking from "@/database/booking.model";
import connectDB from "../mongodb";

interface CreateBooking {
    eventId: string;
    slug: string;
    email: string
}


export const createBooking = async ({ eventId, slug, email }: CreateBooking) => {
    try {
        await connectDB()
        const booking = (await Booking.create({ eventId, slug, email })).lean()

        return { success: true, booking }

    }
    catch (error) {
        return { success: false, error }
    }
}