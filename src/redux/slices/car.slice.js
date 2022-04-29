import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {},
    carForUpdate: null,
};
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);
const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
);
const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCarById({id}));
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);
const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carService.updateById(id, car);
            dispatch(updateCarById({id, car}))
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        deleteCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars.splice(index, 1);
        },
        updateCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index] = {...state.cars[index], ...action.payload.car};
            state.carForUpdate = false;
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car;

        }
    },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.status = 'Loading...'
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'Welcome'
            state.cars = action.payload
        },
        [getAll.rejected]: (state, action) => {
            state.status = 'rejected'
        },
        [create.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars.push(action.payload)
        },
        [create.rejected]: (state, action) => {
            const {status, formErrors} = action.payload;
            state.status = status;
            state.formErrors = formErrors;
        }
    }
});
const {reducer: carReducer, actions: {deleteCarById, updateCarById, setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteById,
    updateById,
    setCarForUpdate,
}
export {
    carReducer,
    carActions
}