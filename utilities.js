export const BASE_API_URL = 'domain.com/api'
 
const convertCurrency = (usdAmount) => {
  return usdAmount * 0.9;
};

export default convertCurrency;