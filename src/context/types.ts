export interface AppContextInterface {
    user?: IUser | null,
    setUser: (data: IUser | null) => void
}

export interface IUser {
    fullName: string
    email: string
    role: 'user' | 'admin'
    token: string
}