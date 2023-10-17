const { VITE_APP_API_URL } = import.meta.env
export async function loadRandomActivity() {
  try {
    const response = await fetch(VITE_APP_API_URL);
    if (response) {
      const data = await response.json();
      return data;
    } else {
      console.error('Error loading the activity');
      return null;
    }
  } catch (error) {
    console.error('Error loading the activity:', error);
    return null;
  }
}