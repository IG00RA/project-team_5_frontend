import axios from 'axios';

export const fetchReviewsData = async () => {
  try {
    const response = await axios.get(`/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
}