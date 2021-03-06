import Image from "next/image";
import { Style } from "@/helpers";
import DefaultAvatar from "@/public/default-avatar.jpg";

type Role = "avatar" | "thumbnail" | "any";

type Props = {
  alt: string;
  src?: string | StaticImageData;
  cycled?: boolean;
  role?: Role;
};

const PImage: React.FC<Props> = ({ alt, src, role = "any", cycled = false }) => {
  let parsedImageSrc = src;

  switch (role) {
    case "avatar":
      parsedImageSrc = src || DefaultAvatar;
      break;
    case "thumbnail":
      parsedImageSrc = src || DefaultAvatar;
      break;

    default:
      parsedImageSrc = src || DefaultAvatar;
      break;
  }

  return (
    <Image
      src={parsedImageSrc}
      alt={alt}
      layout="responsive"
      width="100%"
      height="100%"
      className={Style.clsx(cycled && "rounded-full")}
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." // automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  );
};

export { PImage };
