

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1b7c9dae36msh6b8c294b0bce038p1e17e8jsnf41dc6064b78',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}