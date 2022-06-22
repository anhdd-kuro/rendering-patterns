import { PLink } from "@/components/atoms";
import { PMember } from "@/components/molecules";
import { Style } from "@/helpers";

type Props = {
  members: React.ComponentProps<typeof PMember>["member"][];
};

export const PMembers: React.FC<Props> = ({ members }) => {
  return (
    <div>
      <ul className="grid gap-x-[5%] gap-y-8 grid-cols-5">
        {members?.map((member, index) => (
          <li key={index}>
            <PMember member={member} />
          </li>
        ))}
      </ul>
      <div
        className={Style.clsx(
          "w-2/5 min-w-[300px] mt-20 mx-auto ",
          "font-bold text-sm hover:opacity-50",
          "border rounded-full",
          "[&>*]:block [&>*]:py-4 [&>*]:text-center",
        )}
      >
        <PLink href="/member" isExternal={false}>
          カラビナメンバーをもっと見る
        </PLink>
      </div>
    </div>
  );
};
