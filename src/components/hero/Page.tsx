import LogoBlock from "./Logo";
import ShowData from "./ShowData";
import UpcommingShows from "./UpcommingShows";

export default function HomePage() {
  return (
    <main className="  h-fit select-none  gap-20 p-12 flex flex-col items-center justify-center  ">
      <LogoBlock />
      <h1 className="text-6xl font-extrabold text-white/90">
        {" "}
        The Owls - The Who Cover Band
      </h1>
      <p className="text-white/90 text-2xl w-[30vw]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        delectus. Repellat impedit vero minima neque illo libero repellendus
        deleniti cupiditate tenetur, rerum odit, aspernatur eveniet, obcaecati
        consequuntur. Repudiandae, a sed.
      </p>
      <div className="grid grid-cols-1 gap-28 items-center px-4">
        <ShowData />
        <UpcommingShows />
      </div>
    </main>
  );
}
