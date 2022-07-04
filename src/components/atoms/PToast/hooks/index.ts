import { useEffect, useRef } from "react";
import { toast, Id } from "react-toastify";

type Config = {
  fetchingState: {
    isFetching: boolean;
    error: unknown;
  };
  id: Id;
  autoClose?: number;
};

export const useFetchingToast = ({ fetchingState, id, autoClose = 1000 }: Config) => {
  const toastId = useRef<Id>(id);

  useEffect(() => {
    toast.dismiss(toastId.current);

    if (fetchingState.isFetching) {
      toast.loading("Fetching members", {
        autoClose: false,
        isLoading: true,
        toastId: toastId.current,
      });
    } else
      toast.update(toastId.current, {
        render: "Updated members data",
        type: toast.TYPE.SUCCESS,
        autoClose: autoClose,
        isLoading: false,
      });

    if (fetchingState.error)
      toast.update(toastId.current, {
        render: "Data fetching fail !",
        type: toast.TYPE.ERROR,
        autoClose: autoClose,
        isLoading: false,
      });
  }, [fetchingState, toastId, autoClose]);
};
