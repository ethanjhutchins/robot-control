import * as roslib from "roslib";

export function useServerConnection() {
    const ros = new roslib.Ros({
        url: "ws://192.168.1.95:9090",
        transportLibrary: "websocket",
      }); 

    ros.on("connection", () => {
        console.log("Connected to ws server ejaitch");
    });

    ros.on("close", () => {
        console.log("Connection to ws server cancelled ejaitch");
    })

    ros.on("error", () => {
        console.log("Error when connecting to ws server ejaitch");
    });
}
