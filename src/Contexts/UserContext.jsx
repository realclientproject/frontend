// import React, { useState, createContext } from "react";
// import { Redirect } from "react-router-dom";
// import { isAuthenticated } from "./AuthService";
// import { useEffect } from 'react';
// import { Login } from "@mui/icons-material";
// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [currentAdmin, setCurrentUser] = useState(undefined);

//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       let cuser = isAuthenticated();
//       if (cuser === null) {
//         localStorage.setItem("user", "");
//         cuser = "";
//       }
//       setCurrentUser(cuser);
//     };
//     checkLoggedIn();
//   }, []);

//   console.log("usercontext", currentUser);

//   return (
//     <UserContext.provider value={[currentUser, setCurrentUser]}>
//       {currentUser?.token ? children : <Login />}
//     </UserContext.provider>
//   );
// };

// export default UserContext;
