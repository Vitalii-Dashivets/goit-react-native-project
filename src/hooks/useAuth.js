import { useSelector } from "react-redux";

import { selectUser, selectIsLoading } from "../redux/auth/authSelectors";

export const useAuth = () => {
  const user = useSelector(selectUser);
  const displayName = user.displayName;
  const uid = user.uid;
  const email = user.email;
  const avatarUrl = user.avatarUrl;
  const isLoading = useSelector(selectIsLoading);
  return { displayName, uid, email, avatarUrl, isLoading };
};
