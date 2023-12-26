import { useSelector } from "react-redux";

import { selectItems, selectIsLoading } from "../redux/posts/postsSelectors";

export const usePosts = () => {
  const posts = useSelector(selectItems);
  const isLoadingData = useSelector(selectIsLoading);

  return { posts, isLoadingData };
};
