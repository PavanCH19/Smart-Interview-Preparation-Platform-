import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    token: null,
    status: 'idle',
    error: null,
};

// REGISTER
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await axios.post('/api/register', { email, password });
            return res.data; // should return { user, token }
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || err.message);
        }
    }
);

// LOGIN
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await axios.post('/api/login', { email, password });
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || err.message);
        }
    }
);

// PASSWORD RESET
export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (email, { rejectWithValue }) => {
        try {
            const res = await axios.post('/api/reset-password', { email });
            return res.data.message;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || err.message);
        }
    }
);

// GOOGLE LOGIN (you can customize this endpoint to your backend)
export const googleLogin = createAsyncThunk(
    'auth/googleLogin',
    async (tokenId, { rejectWithValue }) => {
        try {
            const res = await axios.post('/api/google-login', { tokenId });
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || err.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('authToken');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('authToken', action.payload.token);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('authToken', action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            .addCase(resetPassword.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(resetPassword.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            .addCase(googleLogin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(googleLogin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(googleLogin.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('authToken', action.payload.token);
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
