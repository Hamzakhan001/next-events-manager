import { notFound } from "next/navigation";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = await params
    const request = await fetch(`${BASE_URL}/api/events/${slug}`);
    const { event: { description, image, overview, date, time, location, agenda, mode, audience, tags } } = await request.json()

    if (!description) {
        return notFound()
    }

    return (
        <section id="event">
            <div className="header">
                <h1>Event Description</h1>
                <p className="mt-2">{description}</p>
            </div>
            <div className="details">
                {/* Left side- Event Content */}
                <div className="content">
                    <Image src={image} className="banner" alt="Event Banner" width={800} height={800} />

                    <section className="flex-col-gap-2">
                        <h2>Overview</h2>
                        <h2>{overview}</h2>
                    </section>

                    <section className="flex-col-gap-2">
                        <h2>Event Details:</h2>

                    </section>
                </div>

                {/* Right side- Booking Form */}
                <aside className="booking">
                    <p className="text-lg font-semibold">Book Event</p>
                </aside>
            </div>
        </section>
    )
}

export default EventDetailsPage