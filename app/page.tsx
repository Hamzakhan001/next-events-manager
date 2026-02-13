import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { IEvent } from "@/database";
import events from "@/lib/constants"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {

  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json()

  return (
    <section>
      <h1 className="text-center">
        Dev Events Hub <br /> You can't miss these events
      </h1>
      <p>Meetups,Hackathons and Conferences all at one place</p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events && events.length > 0 && events.map((item: IEvent) => (
            <li key={item.title}>
              <EventCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page