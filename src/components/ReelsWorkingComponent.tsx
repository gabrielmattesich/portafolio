import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
  } from "@/components/ui/drawer";
  import { X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { useState, useEffect } from "react";
  
  interface TutorialVideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
    title: string;
    tutorials: Array<{
      id: string;
      title: string;
      loomUrl: string;
    }>;
    currentVideoId: string;
    onVideoChange: (videoId: string) => void;
  }
  
  export default function ReelsWorkingComponent({
    isOpen,
    onClose,
    videoUrl,
    title,
    tutorials,
    currentVideoId,
    onVideoChange,
  }: TutorialVideoModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const index = tutorials.findIndex((t) => t.id === currentVideoId);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }, [currentVideoId, tutorials]);
  
    useEffect(() => {
      setIsLoading(true);
    }, [videoUrl]);
  
    const handlePrevious = () => {
      const newIndex = (currentIndex - 1 + tutorials.length) % tutorials.length;
      onVideoChange(tutorials[newIndex].id);
    };
  
    const handleNext = () => {
      const newIndex = (currentIndex + 1) % tutorials.length;
      onVideoChange(tutorials[newIndex].id);
    };
  
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="h-[95vh] p-0 bg-transparent border-none">
          <div className="relative w-full h-full">
            {/* Video Container */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl rounded-t-lg overflow-hidden">
              <div className="relative w-full h-full">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20">
                    <div className="flex flex-col items-center gap-4">
                      <Loader2 className="w-12 h-12 text-white animate-spin" />
                      <p className="text-white/90 text-sm">Cargando video...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src={videoUrl}
                  frameBorder="0"
                  allow="fullscreen"
                  className="w-full h-full"
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </div>
  
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 z-10">
              <div className="flex items-center justify-between">
                <DrawerTitle className="text-xl font-semibold text-white drop-shadow-lg">
                  {title}
                </DrawerTitle>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
  
            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center z-10">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white"
                onClick={handlePrevious}
                disabled={isLoading}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center z-10">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white"
                onClick={handleNext}
                disabled={isLoading}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
  
            {/* Video Progress */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              <div className="flex items-center justify-between text-sm text-white/90">
                <span className="bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  {currentIndex + 1} de {tutorials.length}
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePrevious}
                    className="text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                    disabled={isLoading}
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Anterior
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleNext}
                    className="text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                    disabled={isLoading}
                  >
                    Siguiente
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }
  