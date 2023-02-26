import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

type ImageProps = {
  image: any
}
const Image = ({ image }: ImageProps) => {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
