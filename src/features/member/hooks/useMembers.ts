import { useEffect, useState } from "react";
import { fetchMember } from "../services/api";
import { Member } from "../domain";

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
