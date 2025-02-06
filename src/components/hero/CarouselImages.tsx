import { CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface CarouselImagesProps {
  images: string[];
}

const CarouselImages = ({ images }: CarouselImagesProps) => {
  return (
    <CarouselContent>
      {images.map((image, index) => (
        <CarouselItem key={index} className="min-w-0">
          <div 
            className="w-full h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${image}')` }}
          />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};

export default CarouselImages;