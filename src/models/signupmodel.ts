type signupdata={
    name:string,
    phonenumber:number|string,
    email:string,
    password:string,
    companyname?:string,
    agency:boolean
}

export default signupdata

export type logindata={
    email:string,
    password:string
}

