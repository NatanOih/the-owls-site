import Gallery from "./components/gallery/Gallery";
import HomePage from "./components/hero/Page";
import PageLayout from "./components/Layout";
import { VideoSliderGallery } from "./components/videos/video-slider-gallery";

function App() {
  return (
    <PageLayout>
      <HomePage />
      <Gallery />
      <VideoSliderGallery />
    </PageLayout>
  );
}

export default App;
