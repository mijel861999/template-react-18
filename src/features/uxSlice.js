import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	tasks: []
}

export const uxSlice = createSlice({
	name: 'ux',
	initialState,
	reducers: {
		changeState: (state, action) => {
			// La información que te envían es aquí: action.payload
			// El estado actual es : state
			state.loading = true
			console.log(state, action)
		},
		deleteTask: (state, action) => {
			
		}
	}
})

export const { changeState, deleteTask }  = uxSlice.actions

export default uxSlice.reducer
