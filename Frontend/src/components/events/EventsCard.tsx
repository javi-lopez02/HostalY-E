import { Image, useDisclosure } from "@heroui/react";
import { FC } from "react";
import ImagePreview from "../ImagePreview";


interface Event {
  imagen: string | undefined;
  description: string | undefined;
}

const EventsCard: FC<Event> = ({ imagen, description }) => {

  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <div className="flex flex-col gap-1">
      <Image width={300} height={200} src={imagen} onClick={onOpen} />
      <ImagePreview isOpen={isOpen} onClose={onClose} imagen={imagen}/>
      <h1 className="text-center md:text-medium font-semibold leading-tight text-gray-900 dark:text-white">{description}</h1>
    </div>
  );
};

export default EventsCard;
