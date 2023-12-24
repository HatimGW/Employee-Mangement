import {combineReducers} from "redux"
import Reducer from "./Reducer"

const root = combineReducers({
    item:Reducer,
})
export default root