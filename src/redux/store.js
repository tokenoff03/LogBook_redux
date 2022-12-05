import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";

let store = {
    _state: {
        dialogsPage:{
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
        },
        newsPage: {
            posts: [{
                id: 1,
                message: "Hello bro",
            }],
            newPostText: ''
        },

        usersInfo: {
            currentUser: {
                login: "",
                name: "",
                isAuth: false,
                photoProfile: "",
                images: ""
            },

            users: [
                {
                    login: "ad1lek",
                    name: "Adil Token",
                    photoProfile: "ad1lek.jpeg",
                    images: [
                        "adil1.jpeg","adil2.jpeg","adil3.jpeg"
                    ]
                },
                {
                    login: "chapaev",
                    name: "Chingiz Akhulbay",
                    photoProfile: "chapaev.jpeg",
                    images: [
                        "chingiz1.jpeg"
                    ]
                },
                {
                    login: "askhat",
                    name: "Askhat Kaim",
                    photoProfile: "askhat.png",
                    images: [
                        "askhat1.jpeg", "askhat2.jpeg","askhat3.jpeg","askhat4.jpeg"
                    ]
                }
            ],
        }

        
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log("State changed")
    },
    

    subscribe(observer){
        this._callSubscriber = observer;
    },
    
    dispatch(action){
        this.getState().dialogsPage = dialogsReducer(this.getState().dialogsPage, action);
        this.getState().newsPage = newsReducer(this.getState().newsPage, action);
        this._callSubscriber();
    }
}

export default store;
window.store = store;