const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [{
        id: 1,
        message: "Hello bro",
    }],
    newPostText: ''
};
const newsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id: state.posts.length+1,
                message: state.newPostText,
            }
            return {...state,posts:[...state.posts, newPost], newPostText: ""}
            
        }
        case UPDATE_NEW_POST_TEXT:{
            return {...state, newPostText: action.newText}
        }
        default:
            return state;
        
    }
    
    
}

export const addPostActionCreater = () => ({type: ADD_POST});

export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default newsReducer;