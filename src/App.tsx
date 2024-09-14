import Gallery from "./components/gallery/Gallery";
import HomePage from "./components/hero/Page";
import PageLayout from "./components/Layout";
import SectionDevider from "./components/ui/sectionDevider";
import { VideoSliderGallery } from "./components/videos/video-slider-gallery";

function App() {
  return (
    <PageLayout>
      <section className="w-[80vw] h-fit mx-auto  rounded-lg border-[2rem] shadow-[2px_7px_19px_3px_rgba(0,0,0,1)] border-[#d05f5f]">
        <div className=" flex flex-col py-16 gap-20 overflow-hidden justify-center items-center rounded-md border-[1px] border-black shadow-[2px_2px_3px_3px_rgba(0,0,0,1)]">
          <HomePage />
          <SectionDevider />
          <Gallery />
          <SectionDevider />
          <VideoSliderGallery />
        </div>
      </section>
    </PageLayout>
  );
}

export default App;
