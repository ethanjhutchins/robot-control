import * as roslib from "roslib";

export function useServerConnection() {
    let robot_description: Object;

    const ros: roslib.Ros = new roslib.Ros({
        url: "ws://192.168.1.95:9090",
        transportLibrary: "websocket",
    }); 

    ros.on("connection", () => {
        console.log("Connected to ws server ejaitch");
    });

    ros.on("close", () => {
        console.log("Connection to ws server cancelled ejaitch");
    });

    ros.on("error", () => {
        console.log("Error when connecting to ws server ejaitch");
    });

    const description_param: roslib.Param = new roslib.Param({
        ros: ros,
        name: "robot_description"
    });

    description_param.get(
        (value: Object) => {
            robot_description = value;
            console.log(JSON.stringify(value));
        }, 
        (error: string) => {
            console.error(error);
        }
    );
}
