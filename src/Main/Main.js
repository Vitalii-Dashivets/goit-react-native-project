import ApplicationNavigator from "../ApplicationNavigator/ApplicationNavigator";
import { useAuth } from "../hooks/useAuth";
import Spinner from "react-native-loading-spinner-overlay";
import { usePosts } from "../hooks/usePosts";

export const Main = () => {
  const { isLoading } = useAuth();
  const { isLoadingData } = usePosts();

  return (
    <>
      <ApplicationNavigator></ApplicationNavigator>
      {(isLoading || isLoadingData) && (
        <Spinner
          visible={true}
          animation={"slide"}
          size={"large"}
          textContent={"Loading..."}
          color={"#FF6C00"}
          textStyle={{ color: "#FF6C00" }}
          overlayColor={"rgba(0, 0, 0, 0.4)"}
        />
      )}
    </>
  );
};
