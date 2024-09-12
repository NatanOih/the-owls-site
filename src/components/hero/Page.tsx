import ShowData from "./ShowData";
import UpcommingShows from "./UpcommingShows";

export default function HomePage() {
  return (
    <main className="container h-screen mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ShowData />

        <UpcommingShows />
      </div>
    </main>
  );
}
