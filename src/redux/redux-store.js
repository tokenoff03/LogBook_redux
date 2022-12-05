import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import usersReducer from "./users-reducer";
let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    usersInfo:  usersReducer
});

let store = createStore(reducers);

export default store;