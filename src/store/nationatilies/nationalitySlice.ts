import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '@/api/apiClient';
import { AxiosError } from 'axios';

interface NationalityResponse {
    id:number
    name:string
    code:string
    phone_code:string
    flag_emoji:string
}

export interface Nationality {
    id:number,
    name:string,
    code:string,
    phoneCode:string,
    flagEmoji:string
}

interface NationalityState {
    isLoading:boolean,
    nationalities:Array<Nationality|null>
}

const initialState:NationalityState = {
    isLoading:false,
    nationalities: []
}

export const getNationalities = createAsyncThunk(
    'nationality/getNationalities',
    async(_, {rejectWithValue}) => {
        try {
            const response = await apiClient.get('/api/countries')
            return response.data
        } catch(error:unknown){
            if( error instanceof AxiosError)
                {
                    return rejectWithValue(error.response?.data.message)
                }
        }
    }
)

const nationalitySlice = createSlice({
    name:'nationality',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getNationalities.fulfilled, (state, action) => {
            state.nationalities = []
            action.payload.map((country:NationalityResponse) => {
                state.nationalities.push(
                    {
                        id: country.id,
                        name: country.name,
                        code: country.code,
                        phoneCode: country.phone_code,
                        flagEmoji: country.flag_emoji
                    }
                )
            })
            state.isLoading = false
        })
        builder.addCase(getNationalities.pending, (state) => {
            state.isLoading = true
        })
    },
})

export default nationalitySlice.reducer