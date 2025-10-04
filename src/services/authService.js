import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig';

export const authService = {
  async register({ email, password, name, role = 'user' }) {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email,
      name,
      role,
      createdAt: new Date(),
    });
    return user;
  },
  async login({ email, password }) {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  },
  async logout() {
    await signOut(auth);
  },
  async resetPassword(email) {
    await sendPasswordResetEmail(auth, email);
  },
  onAuthStateChanged(callback) {
    return onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const profileSnap = await getDoc(doc(db, 'users', firebaseUser.uid));
        callback(firebaseUser, profileSnap.exists() ? profileSnap.data() : null);
      } else {
        callback(null, null);
      }
    });
  },
  async getProfile(uid) {
    const profileSnap = await getDoc(doc(db, 'users', uid));
    return profileSnap.exists() ? profileSnap.data() : null;
  }
};
