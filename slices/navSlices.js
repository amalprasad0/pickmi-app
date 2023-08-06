import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
    userCredentials: null,
    booking: null,
    vehicle: null,
};


export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
        setUserCredentials: (state, action) => { // Add setUserCredentials reducer
            state.userCredentials = action.payload;
        },
        setBooking: (state, action) => { // Add setBooking reducer
            state.booking = action.payload;
        },
        setVehicle: (state, action) => { 
    
            state.vehicle = action.payload;
        },
    }       
});

export const { setOrigin, setDestination, setTravelTimeInformation,setBooking,setUserCredentials,setVehicle } = navSlice.actions;
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectUserCredentials = (state) => state.nav.userCredentials; // Add selectUserCredentials selector
export const selectBooking = (state) => state.nav.booking; // Add selectBooking selector
export const selectVehicle = (state) => state.nav.vehicle; // Add selectVehicle selector
export default navSlice.reducer;