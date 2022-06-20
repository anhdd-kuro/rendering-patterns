import { PImage } from "@/components/atoms";

type Props = {
  name: string;
  role: string;
  imageSrc?: string;
};

export const PWriter: React.FC<Props> = ({ name, role, imageSrc }) => {
  return (
    <div className="flex items-center">
      <div role="img" className="w-[2em] h-[2em]">
        <PImage src={imageSrc || ""} alt={`${name}さんの画像`} role="avatar" cycled />
      </div>
      <p className="ml-2 font-bold">{name}</p>
      <p className="ml-2 text-gray-500 text-[0.8em]">{role}</p>
    </div>
  );
};
