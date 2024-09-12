import { upcomingShows } from "../../lib/data";

export default function UpcommingShows() {
  return (
    <section className="">
      <div className="bg-orange-200 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform ">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Upcoming Shows</h2>
        <article className="flex flex-col gap-4">
          {upcomingShows.map((show, index) => (
            <div
              key={index}
              className=" p-6 rotate-1 bg-white/80 text-center rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <p className="text-4xl font-bold">{show.date}</p>
              <p className="text-3xl">{show.venue}</p>
              <p className="text-xl">{show.address}</p>
              <a href={show.link} target="_blank" className="text-xl">
                <button className="w-full mt-6 bg-red-600 text-white text-xl font-bold py-4 rounded-none hover:bg-red-700 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Facebook Event
                </button>
              </a>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
