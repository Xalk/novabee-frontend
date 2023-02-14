import useAppContext from "./useAppContext";

export const useAuth = () => {
    const {user} = useAppContext();
    return Boolean(user)
}