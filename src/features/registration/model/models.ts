export interface IUserInfo {
    username: string,
    email: string,
    password: string,
}

export interface IUserRegistrationResponse {
    email: string,
    token: string,
    username: string,
    bio: string,
    image: string
}
