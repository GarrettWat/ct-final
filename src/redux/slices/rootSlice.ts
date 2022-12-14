import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'classic drone',
        price: "2000.00",
        description: "Redefine what's possible",
        camera_quality: '4k',
        flight_time: 'Approx 20mins',
        max_speed: '140 kph',
        dimensions: '255 x 312 x 127mm',
        weight: 'Approx 795g',
        cost_of_production: 450.00,
        series: 'DJI FPV Series'
    },
    reducers:{
        chooseName: (state, action) => { state.name = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload }

    }
})

export const reducer = rootSlice.reducer;
export const {chooseName, choosePrice,chooseDescription} = rootSlice.actions;
