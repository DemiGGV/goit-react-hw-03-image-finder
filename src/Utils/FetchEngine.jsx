import axios from 'axios';

export const fetchGetImgs = async (querry, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '35847487-2de85eaec6e65c1cfed73bf95',
    q: querry,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  });
  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
};
