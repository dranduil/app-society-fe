import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import apiClient from '@/api/apiClient';
import { AxiosError } from 'axios';

export interface Job {
    id: number,
    title: string,
    description: string,
    url: string,
    companyName: string,
    logoCompany: string,
    location: string,
    salary: string,
}

export interface jobResponse {
    id: number,
    title: string,
    description: string,
    url: string,
    company_name: string,
    logo_company: string,
    location: string,
    salary: string,
}

interface Pagination {
    totalElement?: number | null,
    page?: number | null,
    elements?: Array<Job>,
    isLoading: boolean
}

interface Response {
    total_elements: number,
    page: number,
    elements: Array<jobResponse>,
}

const initialState: Pagination = {
    totalElement: null,
    page: null,
    elements: [],
    isLoading: true,
}
export interface getParams{
    page:number,
    query?:string
}

export const getJobs = createAsyncThunk<Response, getParams>(
    'job/get',
    async (params, { rejectWithValue }) => {
        try {
            let endPoint = `/api/jobs?page=${params.page}`
            endPoint = params.query ? `${endPoint}&search=${params.query}` : endPoint
            const response = await apiClient.get(endPoint)
            return response.data
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                return rejectWithValue(error.response?.data.message)
            }
        }
    }
)

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getJobs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getJobs.fulfilled, (state, action: PayloadAction<Response>) => {
                state.totalElement = action.payload.total_elements
                state.page = action.payload.page
                state.elements = action.payload.elements.map((element: jobResponse): Job => ({
                    id: element.id,
                    title: element.title,
                    description: element.description,
                    url: element.url,
                    companyName: element.company_name,
                    logoCompany: element.logo_company,
                    location: element.location,
                    salary: element.salary
                }))
                state.isLoading = false
            })
            .addCase(getJobs.rejected, (state) => {
                state.isLoading = false;
            })
    },
})

export default jobsSlice.reducer