import { FC, useEffect, useRef, useState } from "react";
import Gallery from "./Gallery";
import { Image } from "../../types/types";

type TCustomerDetailsProps = {
  selectedCustomerId: number;
};

const CustomerDetails: FC<TCustomerDetailsProps> = ({ selectedCustomerId }) => {
  const fetchImagesTimerRef = useRef<number | null>(null);
  const [images, setImages] = useState<Array<Image>>([]);

  const fetchData = async () => {
    const skip = Math.floor(Math.random() * 40);
    const URL = `https://dummyjson.com/recipes?limit=9&skip=${skip}&select=image`;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setImages(data?.recipes || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchImagesTimerRef.current = window.setInterval(fetchData, 10000);

    return () => {
      if (fetchImagesTimerRef.current !== null) {
        clearInterval(fetchImagesTimerRef.current);
      }
    };
  }, [selectedCustomerId]);

  return (
    <div className="w-full h-full px-32 py-16 flex flex-col gap-6 overflow-y-scroll bg-gray-100 text-center">
      <h2 className="text-xl font-normal">
        Customer {selectedCustomerId} details here
      </h2>
      <p className="text-sm text-gray-500">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Gallery images={images} />
    </div>
  );
};

export default CustomerDetails;
