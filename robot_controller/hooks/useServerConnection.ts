import * as roslib from "roslib";

export default class ServerConnection {

    static async getRobotDescription(ros: roslib.Ros): Promise<Object> {

        const description_param: roslib.Param = new roslib.Param({
            ros: ros,
            name: "robot_description"
        });

        return new Promise( (resolve, reject) => {
            description_param.get(
                (value: Object) => {
                    resolve(value);
                }, 
                (error: string) => {
                    console.error(error);
                    reject(error);
                }
            );
        });
    }
}
