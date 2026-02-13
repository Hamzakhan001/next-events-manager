'use client';

import { createBooking } from "@/lib/actions/booking.action";
import { useState } from "react"

const BookEvent = ({ eventId, slug }: { eventId: string, slug: string }) => {

    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        const { success, error } = await createBooking({ eventId, slug, email })
        e.preventDefault();

        if (success) setSubmitted(true);



        setTimeout(() => {
            setSubmitted(true)
        }, 1000);
    }

    return (
        <div id="book-event">
            {
                submitted ? (
                    <p className="text-sm"> Thank you signing up!</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter your email" />
                        </div>

                        <button type="submit" className="button-submie">Submit</button>
                    </form>
                )
            }

        </div>
    )
}

export default BookEvent