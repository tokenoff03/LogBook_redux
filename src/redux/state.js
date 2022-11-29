const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

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

        currentUser: {
            login: "",
            isAuth: false,
            photoProfile: "",
            images: ""
        },

        users: [
             {
                login: "ad1lek",
                photoProfile: "ad1lek.jpeg",
                images: [
                    "","",""
                ]
            },
             {
                login: "chapaev",
                photoProfile: "chapaev.jpeg",
                images: [
                    "","",""
                ]
            },
             {
                login: "askhat",
                photoProfile: "askhat.png",
                images: [
                    "","",""
                ]
            }
        ]

        
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
    checkUsers ()  {
        this.getState().users.forEach((element) => {
            if (element.login == this.getState().currentUser.login) {
                this.getState().currentUser.photoProfile = element.photoProfile;
                this.getState().currentUser.images = element.images;
            }
        });
        
        
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: this.getState().newsPage.posts.length+1,
                message: this.getState().newsPage.newPostText,
            }
            this.getState().newsPage.posts.push(newPost);
            this.getState().newsPage.newPostText = "";
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this.getState().newsPage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this.getState().dialogsPage.newMessageText = action.newText;
            this._callSubscriber();
        } else if (action.type === SEND_MESSAGE){
            this.getState().dialogsPage.messages.push({id: this.getState().dialogsPage.messages.length+1, message: this.getState().dialogsPage.newMessageText});
            this.getState().dialogsPage.newMessageText = "";
            this._callSubscriber();
        }
    }
}

 
export const addPostActionCreater = () => ({type: ADD_POST});

export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageActionCreater = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreater = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default store;
window.store = store;