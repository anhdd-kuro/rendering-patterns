import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = React.ComponentProps<typeof ToastContainer>;

export const PToast: React.FC<Props> = (props) => {
  const config: Props = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    ...props,
  };

  return <ToastContainer {...config} />;
};
