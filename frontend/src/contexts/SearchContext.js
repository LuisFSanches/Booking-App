import {createContext} from 'react'

const INITIAL_STATE = {
    city:undefined,
    dates:[],
    options:{
        adult:undefined,
        children:undefined,
        room:undefined
    }
}

export const SeachContext = createContext(INITIAL_STATE)
