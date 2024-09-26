import { createContext } from 'react';
import * as roslib from 'roslib';

interface RosContextState {
    ros: roslib.Ros | null;
    isConnected: boolean;
}

const RosContext = createContext<RosContextState>({
    ros: null,
    isConnected: false,
})

export default RosContext;