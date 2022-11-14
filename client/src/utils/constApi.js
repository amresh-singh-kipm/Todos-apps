const BASE_URL = "http://localhost:3000/api/v1/task";
// export const getToken = () =>{
//   return token;
// }
let token = localStorage.getItem("token");

export const config = {
  host: BASE_URL,
  task: {
    create: "/create",
    delete: "/delete",
    read: "/read",
    update: "/update",
  },
  headers:{
    Accpet:"application/json",
    "Content-Type":"application/json"
  },
  headersWithToken:{
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
},
  auth:{
    signIn:'/user/signin',
    signUp:'/user/signup'
  }
};
