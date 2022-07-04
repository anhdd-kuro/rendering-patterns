import { PImage, PLink } from "@/components/atoms";
import { Style } from "@/helpers";

type Props = {
  interview?: {
    url: string;
  };
  role?: string;
  nickname?: string;
  catchCopy?: string;
  imageUrl?: string;
};

export const PMember: React.FC<Props> = ({ interview, role, nickname, catchCopy, imageUrl }) => {
  return (
    <figure className="relative flex border-box flex-col">
      <div className="relative">
        <PImage alt={`${nickname}の画像`} src={imageUrl || ""} cycled role="avatar" />
        {interview && (
          <div
            className={Style.clsx(
              "flex-center absolute top-0 right-0 transform translate-x-[20%] translate-y-[-20%]",
              "text-[0.6em] font-bold tracking-tight text-center",
              "w-2/5 h-2/5 rounded-full p-2 box-content",
              "bg-yellow-400 text-blue-800",
              "transition-all duration-500 ease-linear",
              "hover:rotate-[1turn] hover:opacity-100 cursor-pointer",
            )}
          >
            <PLink isExternal={false} href={interview.url}>
              インタビュー
              <br />
              を読む
            </PLink>
          </div>
        )}
      </div>
      <p className="mb-1 text-center text-gray-400">{role}</p>
      <p className="mb-2 text-[1.3em] text-center">{nickname}</p>
      <p className="mx-1 text-[0.85em] leading-relaxed">{catchCopy}</p>
    </figure>
  );
};
