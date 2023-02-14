import useAppContext from "./useAppContext";

export const useAdmin = () => {
    const {user} = useAppContext();
    return user?.role === 'admin'
}