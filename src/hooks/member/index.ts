import { fetchMember } from "@/infra/api/members";
import { useEffect, useState } from "react";
import { Member } from "@/domain/member";

export const useMembers = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchMember();
      setMembers(data);
    })();

    // return () => {};
  }, [setMembers]);

  return {
    members,
  };
};
