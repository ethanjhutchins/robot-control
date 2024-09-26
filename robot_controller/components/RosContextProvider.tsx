import { createContext, useEffect, useState } from "react";
import * as roslib from 'roslib';
import RosContext from "./RosContext";

const RosContextProvider = ({ children }: { children: React.ReactNode}) => {
    // const [ros, setRos] = useState<roslib.Ros | null>(null);
    // setRos(ws_connection);

    const ros: roslib.Ros = new roslib.Ros({
        url: "ws://192.168.1.95:9090",
        transportLibrary: "websocket",
    }); 
    
    // useEffect(() => {
    ros?.on("connection", () => {
        console.log("Connected to ws server ejaitch");
    });
    
    ros?.on("close", () => {
        console.log("Connection to ws server cancelled ejaitch");
    });
    
    ros?.on("error", () => {
        console.log("Error when connecting to ws server ejaitch");
    });
    // }, [ros])

    return (
        <RosContext.Provider value={ros}>
            {children}
        </RosContext.Provider>
    )
}
export default RosContextProvider;