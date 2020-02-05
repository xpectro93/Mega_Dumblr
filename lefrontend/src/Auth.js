// import React, { useEffect, useState } from "react";
// import firebase from "./firebase.js";

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     firebase.auth().onAuthStateChanged(setCurrentUser);
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

Array.prototype.myReduce = function (call, init) {
  let i = 0;
  let acc;
  if (init) {
    acc = init;
  } else {
    acc = this[0];
    i++;
  }
  for (i; i < this.length; i++) {
    acc = call (acc, this[i], i, this);
  }
  return acc;
};
let test = [4, 5, 6, 7];

console.log (test.myReduce ((acc, el) => acc + el));
