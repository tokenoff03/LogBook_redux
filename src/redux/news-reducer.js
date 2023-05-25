const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_POST = "UPDATE_POST";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const DELETE_POST = "DELETE_POST";
let initialState = {
    posts: [{
        id: 1,
        message: "Hello bro",
    }],
    newPostText: '',
    newMessageText: ''
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
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {...state, newMessageText: action.newMessageText}
        }

        case UPDATE_POST:{
            let posts = state.posts;
            for(let i = 0; i <posts.length;i++){
                if(posts[i].id==action.id){
                    posts[i].message = state.newMessageText;
                    
                }
            }
            return { ...state, posts: [...posts] };
        }
        case DELETE_POST:{
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.id),
              };
        }
        default:
            return state;
        
    }
    
    
}

export const addPostActionCreater = () => ({type: ADD_POST});

export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const updateNewMessageTextActionCreater = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export const updatePostActionCreater = (id) => ({ type: UPDATE_POST, id: id });

export const deletePostActionCreater = (id) => ({type: DELETE_POST,id:id});

export default newsReducer;