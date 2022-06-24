import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth();

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem('token', user.accessToken);
    return { user };
  } catch (error) {
    return { error };
  }
};

export const signup = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    localStorage.setItem('token', user.accessToken);
    return { user };
  } catch (error) {
    return { error };
  }
};
