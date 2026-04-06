// export const API_BASE_URL = "http://localhost:5000";
export const API_BASE_URL = "https://foundit-ai.onrender.com";


export const getImageUrl = (imagePath = "") => {
  if (!imagePath) return "";
  if (imagePath.startsWith("http")) return imagePath;
  return `${API_BASE_URL}${imagePath}`;
};

export const apiRequest = async (endpoint, method = "GET", body, token) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let response;

  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });
  } catch (error) {
    throw new Error("Could not connect to the backend server");
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};
