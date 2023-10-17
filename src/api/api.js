export async function loadRandomActivity() {
  try {
    const response = await fetch('http://www.boredapi.com/api/activity');
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