import Image from "next/image";
import { Style } from "@/helpers";

type Props = {
  alt: string;
  src: string | StaticImageData;
  cycled?: boolean;
};

const PImage: React.FC<Props> = ({ alt, src, cycled = false }) => {
  return (
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      width="100%"
      height="100%"
      className={Style.joinClass([cycled && "rounded-full"])}
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." // automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  );
};

export { PImage };
