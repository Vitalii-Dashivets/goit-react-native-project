import { useSelector } from "react-redux";

import {
  selectUser,
  selectIsLoading,
  selectUsersList,
  selectIsLoggedIn,
} from "../redux/auth/authSelectors";

export const useAuth = () => {
  const user = useSelector(selectUser);
  const displayName = user.displayName;
  const uid = user.uid;
  const email = user.email;
  const avatarUrl = user.avatarUrl;
  const isLoading = useSelector(selectIsLoading);
  const usersList = useSelector(selectUsersList);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return {
    displayName,
    uid,
    email,
    avatarUrl,
    isLoading,
    user,
    isLoggedIn,
    usersList,
  };
};
