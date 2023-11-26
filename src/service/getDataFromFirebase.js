import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

export const registerUserFB = ({ email, password, name }) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const userData = userCredential.user;

      return updateProfile(userData, {displayName: name,});
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
};