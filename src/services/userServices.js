import { URL_API } from "../utils/constants";
import { USER_DATA } from "../utils/constants";

const URL_API_BACKEND = `${URL_API}/api`

console.log(URL_API_BACKEND)

export const loginUser = async (data) => {
	const dataForSend = data 
	try {
		const response = await fetch(`${URL_API_BACKEND}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataForSend)
		})
		 
		const data = await response.json()

		if(!data.ok) {
			throw new Error(data.message)
		}

		localStorage.setItem(USER_DATA, JSON.stringify(data.user))

		return data
	} catch(e) {
		console.log(e)
		throw new Error(e)
	}
}

export const registerUser = async (data) => {
	const dataForSend = {
		name: data.names,
		email: data.email,
		password: data.password,
		password_confirmation: data.repeatPassword
	}

	try {
		const response = await fetch(`${URL_API_BACKEND}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataForSend)
		})

		const data = await response.json()

		if (!data.ok) {
			throw new Error(data.message)
		}

		return data
	} catch(e) {
		console.log(e)
		throw new Error(e)
	}
}

export const checkTokenValid = async(token) => {
	try {
		const response = await fetch(`${URL_API_BACKEND}/checkTokenValid`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				token
			})
		})

		const data = await response.json()

		if (!data.ok) {
			throw new Error(data.message)
		}

		console.log(data)

		return data
	} catch(e) {
		console.log(e)
		throw new Error(e)
	}
}
