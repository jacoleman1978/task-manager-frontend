import {createContext} from 'react';

export const DeleteTaskContext = createContext({
    delFlag: false,
    handleDelClick: () => {}
});