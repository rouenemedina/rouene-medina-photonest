import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

async function getAllAboutData() {
    try {
        const response = await axios.get(`${API_URL}/about`);
        return response.data;
      } catch (err) {
        console.log(err);
      }
}
export default getAllAboutData;