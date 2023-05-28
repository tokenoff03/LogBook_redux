const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    currentUser: {
        login: "",
        name: "",
        isAuth: false,
        photoProfile: "",
        images: ""
    },
    mainUser: [{
        id: 1,
        followed: false,
        login: "ad1lek",
        name: "Adil Token",
        location: {city: "Almaty", country: "Kazakshtan"},
        photoProfile: "ad1lek.jpeg",
        images: [
            "adil1.jpeg","adil2.jpeg","adil3.jpeg"
        ]
    }],
    users: [
        
    ],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW: 
            return {...state, users: state.users.map(u => {
                if (u.id == action.userId){
                    return {...u, followed: true}
                }
                return u
            })}

        case UNFOLLOW: 
            return {...state, users: state.users.map(u => {
                if (u.id == action.userId){
                    return {...u, followed: false}
                }
                return u
            })}

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default: 
            return state;
    }
    
}

export const checkUsers = ()=>  {
    initialState.mainUser.forEach((element) => {
        if (element.login == initialState.currentUser.login) {
            initialState.currentUser.photoProfile = element.photoProfile;
            initialState.currentUser.images = element.images;
            initialState.currentUser.name = element.name;
        }
    }); 
}

export const FollowAC = (userId)=> ({type: FOLLOW, userId});
export const UnFollowAC = (userId)=> ({type: UNFOLLOW, userId});
export const setUsersAC = (users)=> ({type: SET_USERS, users});
export default usersReducer;