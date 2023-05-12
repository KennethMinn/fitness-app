export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "40baddcaf3msh57c0ef4466c5b4dp103653jsn5c353c514173",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com/video/related",
  headers: {
    "X-RapidAPI-Key": "40baddcaf3msh57c0ef4466c5b4dp103653jsn5c353c514173",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
