import { createContext } from 'react';
import * as roslib from 'roslib';

interface RosContextState {
    ros: roslib.Ros | null;
}

const RosContext = createContext<RosContextState>({
    ros: null,
})

export default RosContext;