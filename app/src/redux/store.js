import { combineReducers, createStore } from "redux";

let initialState = {
  users: [
    {email: "ivan@gmail.com",name:"ivan",age:24 }
  ],
};

const TAGS = {
  GET_USERS: "GET_USERS",
  ADD_USER: "ADD_USER",
  DELETE_USER:"DELETE_USER",
  UPDATE_USER:"UPDATE_USER"
};

function actionUpdatedUser(email,name,age){
    return{
        type:TAGS.UPDATE_USER,
        user:{
            email,
            name,
            age
        }
    }
}
function actionDeleteUser(email){
    return{
        type:TAGS.DELETE_USER,
        user:{
            email,
        }
    }
}

function actionAddUser(email,name,age){
    return{
        type:TAGS.ADD_USER,
        user:{
            email,
            name,
            age
        }
    }
}
function actionGetUsers(){
   return{
    type:TAGS.GET_USERS
   }
}

const fnDeleteUser=(state,action)=>{
    /* let {email}=users; */
    return{
        ...state,
        users:[...state.users.filter((el)=>el.email!==action.user.email)]
    }
}
const fnUpdateUser=(state,action)=>{
    return {
        ...state,
        users: [...state.users.map(element =>{
            if(element.email === action.user.email){
                element.name = action.user.name;
                element.age = action.user.age;
            }
            return element;
        })]
    }
}

function reducer(state, action) {
  switch (action.type) {
    case TAGS.GET_USERS:
      return state;
    case TAGS.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case TAGS.DELETE_USER:
      return fnDeleteUser(state,action);
    case TAGS.UPDATE_USER:
      return fnUpdateUser(state,action);
    default:
      return state;
  }
}

let store = createStore(reducer,initialState);

export{
    TAGS,
    actionAddUser,
    actionGetUsers,
    actionDeleteUser,
    actionUpdatedUser
}

export default store;
