import { createContext, useEffect, useState } from "react";
import * as roslib from 'roslib';
import RosContext from "./RosContext";

const RosContextProvider = ({ children }: { children: React.ReactNode}) => {
    const [isConnected, setIsConnected] = useState<boolean>(false);

    const ros: roslib.Ros = new roslib.Ros({
        url: "ws://192.168.1.95:9090",
        transportLibrary: "websocket",
    }); 
    
    // useEffect(() => {
    ros?.on("connection", () => {
        setIsConnected(true);
        console.log("Connected to ws server ejaitch");
    });
    
    ros?.on("close", () => {
        setIsConnected(false);
        console.log("Connection to ws server cancelled ejaitch");
    });
    
    ros?.on("error", () => {
        setIsConnected(false);
        console.log("Error when connecting to ws server ejaitch");
    });
    // }, [ros])

    return (
        <RosContext.Provider value={{ros, isConnected}}>
            {children}
        </RosContext.Provider>
    )
}
export default RosContextProvider;