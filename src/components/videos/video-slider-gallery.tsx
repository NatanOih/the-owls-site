import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "Rehersal - Bargain",
    thumbnail: "/thubnails/1.png",
    videoUrl: "/video/1.mp4",
  },
  {
    id: 3,
    title: "Live - The Seeker",
    thumbnail: "/thubnails/3.png",
    videoUrl: "/video/3.mp4",
  },
];

export function VideoSliderGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>();
  const sliderRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (isPlaying) {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  //     }
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setSelectedVideo(videos[index]);
  };

  return (
    // <section className="w-full h-full bg-orange-700/70">
    <div className=" w-full h-full px-28 py-8  items-center flex flex-col gap-8 text-white">
      <h2 className="text-5xl font-bold text-center">Video Gallery</h2>

      {/* Main Slider */}
      <div className="relative overflow-hidden max-w-[50%] rounded-xl shadow-2xl">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {videos.map((video) => (
            <div key={video.id} className="w-full flex-shrink-0">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-[60vh] object-cover"
              />
              <div className=" flex flex-row justify-start items-center gap-4 bg-gradient-to-t from-black to-transparent p-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-red-600 top-10 hover:bg-red-700 text-2xl text-white"
                      onClick={() => setSelectedVideo(video)}
                    >
                      Watch Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-black overflow-hidden">
                    <div className="relative aspect-video">
                      <video
                        src={selectedVideo?.videoUrl}
                        controls
                        className="w-full h-full"
                      >
                        Your browser does not support the video tag.
                      </video>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute top-2 right-2 bg-black border-0 hover:bg-white/20"
                          onClick={() => setSelectedVideo(null)}
                        >
                          <X className="h-6 w-6 text-white" />
                        </Button>
                      </DialogTrigger>
                    </div>
                  </DialogContent>
                </Dialog>
                <h3 className="text-2xl ml-40   font-bold p-2 mb-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 border-0 hover:bg-black/70"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 border-0 hover:bg-black/70"
          onClick={handleNext}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
        {/* <Button
          variant="outline"
          size="icon"
          className="absolute bottom-4 right-4 bg-black/50 border-0 hover:bg-black/70"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </Button> */}
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
              index === currentIndex
                ? "'scale-110 border-2 border-red-600'"
                : "'scale-100 opacity-70'"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-32 h-20 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
    // </section>
  );
}
