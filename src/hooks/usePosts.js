import { useSelector } from "react-redux";

import {
  selectItems,
  selectIsLoading,
  selectComments,
} from "../redux/posts/postsSelectors";

export const usePosts = () => {
  const posts = useSelector(selectItems);
  const isLoadingData = useSelector(selectIsLoading);
  const comments = useSelector(selectComments);
  return { posts, isLoadingData, comments };
};
