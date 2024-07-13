import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

async function getConnectDetailsData(userId) {

  try {
    const response = await axios.get(`${API_URL}/connect/${userId}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export default getConnectDetailsData;