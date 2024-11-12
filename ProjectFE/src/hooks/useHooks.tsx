/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const useHooks = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const conn = io("http://localhost:4411");
    setSocket(conn);

    return () => {
      if (socket) {
        conn.disconnect();
      }
    };
  }, []);

  return socket;
};

export default useHooks;
