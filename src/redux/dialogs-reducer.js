const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    usersDialog: [
    {id: 1, name: "Адиль Токен"},
    {id: 2, name: "Чингиз Ахулбай"},
    {id: 3, name: "Асхат Каим"},
    {id: 4, name: "Алия Шахуали"},
    {id: 5, name: "Тамерлан Жайсанов"},
    {id: 6, name: "Айнур Даулетова"},
    {id: 7, name: "Бауыржан Рахманбек"},
    {id: 8, name: "Ермек Тауекелов"},
    {id: 9, name: "Нурлан Танирберген"},
    {id: 10, name: "Жанибек Мухамедкали"}
    ],
    messages: [
        {id:1, message: "Привет"},
        {id:2, message: "Что делаешь"},
        {id:3, message: "che tam"},
        {id:4, message: "da nuuuu"},

    ],
    newMessageText: ""
};
const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case SEND_MESSAGE:
            state.messages.push({id: state.messages.length+1, message: state.newMessageText});
            state.newMessageText = "";
            return state;
        default: 
            return state;
    }
    
}

export const sendMessageActionCreater = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreater = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;