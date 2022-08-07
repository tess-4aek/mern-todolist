import { createStore, combineReducers, applyMiddleware } from "redux";
import { addTaskReducer } from "./addTaskReducer";
import { inputReducer } from "./inputReducer";
import { composeWidthDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    tasks: addTaskReducer,
    input: inputReducer
})

// export const store = createStore(rootReducer, composeWidthDevTools(applyMiddleware(thunk)));
export const store = createStore(rootReducer);