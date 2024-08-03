import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '@/api/apiClient';
import { AxiosError } from 'axios';

interface GenderResponse {
    id:number
    name:string
}

export interface Gender {
    id:number,
    name:string,
}

interface GenderState {
    isLoading:boolean,
    genders:Array<Gender|null>
}

const initialState:GenderState = {
    isLoading:false,
    genders: []
}

export const getGenders = createAsyncThunk(
    'gender/getGenders',
    async(_, {rejectWithValue}) => {
        try {
            const response = await apiClient.get('/api/genders')
            return response.data
        } catch(error:unknown){
            if( error instanceof AxiosError)
                {
                    return rejectWithValue(error.response?.data.message)
                }
        }
    }
)

const genderSlice = createSlice({
    name:'genders',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getGenders.fulfilled, (state, action) => {
            state.genders = []
            action.payload.map((gender:GenderResponse) => {
                state.genders.push(
                    {
                        id: gender.id,
                        name: gender.name,
                    }
                )
            })
            state.isLoading = false
        })
        builder.addCase(getGenders.pending, (state) => {
            state.isLoading = true
        })
    },
})

export default genderSlice.reducer