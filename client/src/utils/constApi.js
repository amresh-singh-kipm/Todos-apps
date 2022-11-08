const BASE_URL = "http://localhost:3000/api/v1/task";

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
  auth:{
    signIn:'/user/signin',
    signUp:'/user/signup'
  }
};
