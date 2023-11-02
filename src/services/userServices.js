import { URL_API } from "../utils/constants"; const URL_API_BACKEND = `${URL_API}/api`
import { USER_DATA } from "../utils/constants";

export const loginUser = async (data) => {
	const dataForSend = {
		...data
	}
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
