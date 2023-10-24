import { configureStore } from '@reduxjs/toolkit'
import uiReducer from '../src/features/uxSlice'

export const store = configureStore({
	reducer: {
		ui: uiReducer	
	}
})

