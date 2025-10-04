import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../services/authService';
import { serializeUser, serializeProfile } from '../../utils/serializers';

// REGISTER THUNK
export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const fbUser = await authService.register({ name, email, password });
            const rawProfile = await authService.getProfile(fbUser.uid);
            return {
                user: serializeUser(fbUser),
                profile: serializeProfile(rawProfile)
            };
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

// LOGIN THUNK
export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const fbUser = await authService.login({ email, password });
            const rawProfile = await authService.getProfile(fbUser.uid);
            return {
                user: serializeUser(fbUser),
                profile: serializeProfile(rawProfile)
            };
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

// LOGOUT THUNK
export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await authService.logout();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

// RESET PASSWORD THUNK
export const resetPassword = createAsyncThunk(
    'auth/reset',
    async (email, { rejectWithValue }) => {
        try {
            await authService.resetPassword(email);
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        profile: null,
        isAuthenticated: false,
        isAdmin: false,
        loading: false,
        error: null
    },
    reducers: {
        setUser(state, { payload: { user, profile } }) {
            state.user = user;
            state.profile = profile;
            state.isAuthenticated = true;
            state.isAdmin = profile.role === 'admin';
            state.loading = false;
            state.error = null;
        },
        clearUser(state) {
            state.user = null;
            state.profile = null;
            state.isAuthenticated = false;
            state.isAdmin = false;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, state => { state.loading = true; state.error = null; })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload.user;
                state.profile = payload.profile;
                state.isAuthenticated = true;
                state.isAdmin = payload.profile.role === 'admin';
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(loginUser.pending, state => { state.loading = true; state.error = null; })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload.user;
                state.profile = payload.profile;
                state.isAuthenticated = true;
                state.isAdmin = payload.profile.role === 'admin';
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(logoutUser.fulfilled, state => {
                state.user = null;
                state.profile = null;
                state.isAuthenticated = false;
                state.isAdmin = false;
                state.error = null;
            })
            .addCase(resetPassword.pending, state => { state.loading = true; state.error = null; })
            .addCase(resetPassword.fulfilled, state => { state.loading = false; })
            .addCase(resetPassword.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    }
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
