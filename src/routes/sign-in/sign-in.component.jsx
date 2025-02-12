import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  // NOTE: This is not showing any data returned in the console upon signing in with redirect
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if(response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    fetchData();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>This is Sign In page.</h1>
      <button onClick={logGoogleUser}> Sign In with Google popup.</button>
      <button onClick={signInWithGoogleRedirect}>
        {" "}
        Sign In with Google Redirect.
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
