
import axios from "axios";

export const getApi = (apiURL, setter) => {

	axios
		.get(apiURL)
		.then(res => {
			setter(res.data);
		})
		.catch(err => console.log('Error:', err));

};
