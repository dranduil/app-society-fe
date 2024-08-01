import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import apiClient from '@/api/apiClient';
import { AxiosError } from 'axios';

export interface ProfileUser {
    id:number,
    biography:string|null,
    link:string|null,
    username:string|null,
    imageUrl:string|null,
    genderId: number|null,
    nationalityId: number|null,
    email:string,
    name:string,
    surname:string,
    nationality: {
        id:number|null,
        name:string|null,
        code:string|null,
        phoneCode:string|null,
        flagEmoji:string|null,
    },
    gender:{
        id:number|null,
        name:string|null
    }
}

export interface ProfileUserResponse {
    id:number,
    biography:string|null,
    link:string|null,
    username:string|null,
    image_url:string|null,
    gender_id: number|null,
    nationality_id: number|null,
    email:string,
    name:string,
    surname:string,
    nationality: {
        id:number|null,
        name:string|null,
        code:string|null,
        phoneCode:string|null,
        flagEmoji:string|null,
    },
    gender:{
        id:number|null,
        name:string|null
    }
}

const initialState: ProfileUser = {
    id: 0,
    biography:null,
    link:null,
    username:null,
    imageUrl:null,
    genderId:0,
    nationalityId:0,
    email:'',
    name:'',
    surname:'',
    nationality: {
        id:0,
        name:'',
        code:'',
        phoneCode:'',
        flagEmoji:''
    },
    gender: {
        id:0,
        name:''
    }
}

export const profileUser = createAsyncThunk(
    'profile/get',
    async(_, {rejectWithValue}) => {
        try {
            const response = await apiClient.get('/api/profile')
            return response.data
        } catch(error:unknown) {
            if( error instanceof AxiosError)
            {
                return rejectWithValue(error.response?.data.message)
            }
        }
    }
)

export const changeImageProfile = createAsyncThunk<ProfileUserResponse, { image_stream: string }>(
    'profile/changeImageProfile',
    async(payload: {image_stream:string}, {rejectWithValue}) => {
        try{
            const response = await apiClient.patch('/api/profile/change-image-profile', payload)
            return response.data
        }catch(error:unknown){
            if( error instanceof AxiosError)
            {
                return rejectWithValue(error.response?.data.message)
            }
        }
    }
)

const profileUserSlice = createSlice({
    name:'profile',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(profileUser.fulfilled, (state, action) => {
                state.id = action.payload.id
                state.biography = action.payload.biography
                state.link = action.payload.link
                state.username = action.payload.username
                state.imageUrl = action.payload.image_url
                state.genderId = action.payload.gender_id
                state.nationalityId = action.payload.nationality_id
                state.email = action.payload.email
                state.name = action.payload.name
                state.surname = action.payload.surname
                state.nationality.id = action.payload.nationality.id
                state.nationality.name = action.payload.nationality.name
                state.nationality.code = action.payload.nationality.code
                state.nationality.phoneCode = action.payload.nationality.phoneCode
                state.nationality.flagEmoji = action.payload.nationality.flagEmoji
                state.gender.id = action.payload.gender.id
                state.gender.name = action.payload.gender.name
            })
            .addCase(changeImageProfile.fulfilled, (state, action:PayloadAction<ProfileUserResponse>) => {
                state.imageUrl = action.payload.image_url
            })
    }
})

export default profileUserSlice.reducer