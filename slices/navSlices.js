import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
    userCredentials: null,
    booking: null,
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
        }
    },         
});

export const { setOrigin, setDestination, setTravelTimeInformation,setBooking,setUserCredentials } = navSlice.actions;
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectUserCredentials = (state) => state.nav.userCredentials; // Add selectUserCredentials selector
export const selectBooking = (state) => state.nav.booking; // Add selectBooking selector
export default navSlice.reducer;