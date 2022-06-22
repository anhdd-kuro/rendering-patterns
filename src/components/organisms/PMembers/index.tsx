import { PLink } from "@/components/atoms";
import { PMember } from "@/components/molecules";
import { Style } from "@/helpers";

type Props = {
  members: React.ComponentProps<typeof PMember>["member"][];
};

export const PMembers: React.FC<Props> = ({ members }) => {
  return (
    <div>
      <ul className="grid gap-x-[5%] gap-y-8 grid-cols-5 px-4">
        {members?.map((member, index) => (
          <li key={index}>
            <PMember member={member} />
          </li>
        ))}
      </ul>
      <div
        className={Style.clsx(
          "mt-16 mx-auto ",
          "font-bold text-sm hover:opacity-50",
          "border rounded",
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
