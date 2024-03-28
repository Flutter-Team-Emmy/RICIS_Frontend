import axios from "axios";

export const apiCall = async (url, method, data, token) => {
	const header = {
		"Content-Type": "application/json",
		"Accept": "application/json",
	};

	console.log(data);
	try {
		const response = await axios({
			method: method,
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/${url}`,
			data: data,
			headers: header,
		});
		return response.data;
	} catch (error) {
		console.error("API call error:", error);
		throw error;
	}
};
