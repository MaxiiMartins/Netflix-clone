const {REACT_APP_APY_URL,REACT_APP_APY_KEY} = process.env

const apiConfig = {
    baseUrl: REACT_APP_APY_URL,
    apiKey: REACT_APP_APY_KEY,
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  };
  

export default apiConfig;