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
    title: "Live at The Roundhouse",
    thumbnail: "/thubnails/1.png",
    videoUrl: "/video/1.mp4",
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
    <div className="container mx-auto m-4 px-4 py-8 bg-gray-900 rounded-md text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Video Gallery</h2>

      {/* Main Slider */}
      <div className="relative mb-8 overflow-hidden rounded-xl shadow-2xl">
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white"
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
                          className="absolute top-2 right-2 bg-white/10 border-0 hover:bg-white/20"
                          onClick={() => setSelectedVideo(null)}
                        >
                          <X className="h-6 w-6 text-white" />
                        </Button>
                      </DialogTrigger>
                    </div>
                  </DialogContent>
                </Dialog>
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
  );
}
