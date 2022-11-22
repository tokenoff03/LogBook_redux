let store = {
    _state: {
        dialogsPage:{
            usersDialog: [
            {id: 1, name: "Адиль Токен", messages: ["Привет", "Что делаешь"]},
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
        },
        newsPage: {
            posts: [{
                id: 1,
                message: "Hello bro",
            }],
            newPostText: ''
        }
        
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log("State changed")
    },
    addPost(){
        let newPost = {
            id: this.getState().newsPage.posts.length+1,
            message: this.getState().newsPage.newPostText,
        }
        this.getState().newsPage.posts.push(newPost);
        this.getState().newsPage.newPostText = "";
        this._callSubscriber();
    },
    updateNewPostText(newText){
        this.getState().newsPage.newPostText = newText;
        this._callSubscriber();
    },
    subscribe(observer){
        this._callSubscriber = observer;
    }
}

export default store;