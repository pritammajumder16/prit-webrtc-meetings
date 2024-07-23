import { useContext } from "react";
import Button from "./ui/Button";
import { SocketContext } from "../context/MSocketContext";
import CallIcon from "../assets/svgComponents/Call";
import { SocketContextType } from "../types/interface";

const Notifications = () => {
  const context = useContext<SocketContextType | undefined>(SocketContext);
  return (
    <div className="text-black dark:text-white mt-5">
      {context?.call?.isReceivedCall && !context.callAccepted && (
        <div className="flex justify-center items-center">
          <span>{context?.call?.callerName}&nbsp;is calling:&nbsp;</span>
          <Button
            variant="primary"
            className="!bg-green-600"
            onClick={context.answerCall}
          >
            <CallIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Notifications;
