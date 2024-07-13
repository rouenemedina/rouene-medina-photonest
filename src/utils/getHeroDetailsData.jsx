import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

async function getHeroDetailsData(userId) {
  console.log(`${API_URL}/hero/${userId}`);

  try {
    const response = await axios.get(`${API_URL}/hero/${userId}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export default getHeroDetailsData;
