import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { setUser, clearUser } from '../store/slices/authSlice';
import { serializeUser, serializeProfile } from '../utils/serializers';
import { authService } from '../services/authService';

export default function useAuthListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async fbUser => {
      if (fbUser) {
        const rawProfile = await authService.getProfile(fbUser.uid);
        dispatch(setUser({
          user: serializeUser(fbUser),
          profile: serializeProfile(rawProfile)
        }));
      } else {
        dispatch(clearUser());
      }
    });
    return unsubscribe;
  }, [dispatch]);
}
