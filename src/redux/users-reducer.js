
let initialState = {
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
const usersReducer = (state = initialState, action) => {
    return state;
}

export const checkUsers = ()=>  {
    initialState.users.forEach((element) => {
        if (element.login == initialState.currentUser.login) {
            initialState.currentUser.photoProfile = element.photoProfile;
            initialState.currentUser.images = element.images;
            initialState.currentUser.name = element.name;
        }
    }); 
}

export default usersReducer;