export interface User {
    id:number,
    name:string,
    surname:string,
    email:string,
    profile:Profile
}

interface Profile{
    biography:string,
    link:string,
    username:string,
    imageUrl:string,
    genderId:number,
    nationalityId:number,
}