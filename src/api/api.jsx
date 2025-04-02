const API_BASE_URL = "https://cakewebsite-backend.onrender.com"; // Replace with actual deployed URL

export const fetchCakes = async () => {
  const response = await fetch(`${API_BASE_URL}/cakes`);
  return response.json();
};
