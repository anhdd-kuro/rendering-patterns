import { PImage, PLink } from "@/components/atoms";
import { Style } from "@/helpers";

export type Props = {
  member: {
    interview: {
      url: string;
    };
    role: string;
    nickname: string;
    catchCopy: string;
    imageUrl: string;
  };
};

export const PMember: React.FC<Props> = ({ member }) => {
  return (
    <figure className="relative flex border-box flex-col">
      <div className="relative">
        <PImage alt={`${member.nickname}の画像`} src={member.imageUrl} cycled role="avatar" />
        {member.interview && (
          <div
            className={Style.joinClass([
              "flex-center absolute top-0 right-0 transform translate-x-[20%] translate-y-[-20%]",
              "text-[0.6em] font-bold tracking-tight text-center",
              "w-2/6 h-2/6 rounded-full px-1",
              "bg-yellow-400 text-blue-800",
              "transition-all duration-500 ease-linear",
              "hover:rotate-[1turn] hover:opacity-100 cursor-pointer",
            ])}
          >
            <PLink isExternal={false} href={member.interview.url}>
              インタビュー
              <br />
              を読む
            </PLink>
          </div>
        )}
      </div>
      <p className="mb-1 text-center text-gray-400">{member.role}</p>
      <p className="mb-2 text-[1.3em] text-center">{member.nickname}</p>
      <p className="mx-1 text-[0.85em] leading-relaxed">{member.catchCopy}</p>
    </figure>
  );
};
