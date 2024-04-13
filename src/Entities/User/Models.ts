export interface IUserInfo {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
}

export interface IUser {
    user: IUserInfo
}
