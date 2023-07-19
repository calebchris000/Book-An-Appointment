import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars: [
      { name: Honda, image: '', description: '', model: '2003', engine: '20cc', price: 1000, milage:'22' },
    
    ],
  };
  
  const deleteCarSlice = createSlice({
    name: 'deleteCar',
    initialState,
    reducers: {
      deleteCar: (state, action) => {
        const carId = action.payload;
        state.cars = state.cars.filter((car) => car.id !== carId);
      },
    },
  });

  export const { deleteCar } = deleteCarSlice.actions;

export default deleteCarSlice.reducer;

  