import LogoBlock from "./Logo";
import ShowData from "./ShowData";
import UpcommingShows from "./UpcommingShows";

export default function HomePage() {
  return (
    <main className="  h-fit  gap-20 p-12 flex flex-col items-center justify-center  ">
      <LogoBlock />
      <div className="grid grid-cols-1 gap-28 items-center px-4">
        <ShowData />
        <UpcommingShows />
      </div>
    </main>
  );
}
