import React, { useEffect } from "react";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Chat from "./components/chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./components/login/Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from "./utils/ErrorFallBack";

function App() {
  const user = useAppSelector((state) => state.user);
  // const user = null;
  // console.log(user);

  const dispatch = useAppDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            displayName: loginUser.displayName,
            email: loginUser.email,
            photo: loginUser.photoURL,
          })
        );
      }else{
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return(
  <div className="App">
    { user ?(
      <>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <Sidebar></Sidebar>
          <Chat></Chat>
        </ErrorBoundary>
      </>
    ) : (
      <>
        <Login></Login>
      </>
    )}
  </div>
  );
}

export default App;
