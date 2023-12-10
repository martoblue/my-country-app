import axios from 'axios';

const API_URL_ALL_COUNTRIES =
  'https://restcountries.com/v3.1/all?fields=name,flags';

export const getAllCountries = async () => {
  try {
    const response = await axios.get(API_URL_ALL_COUNTRIES);
    return response.data;
  } catch (error) {
    handleApiError(error, 'all countries');
    throw error;
  }
};

export const getCountryByName = async (countryName) => {
  const API_URL_COUNTRY_BY_NAME = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  try {
    const response = await axios.get(API_URL_COUNTRY_BY_NAME);
    console.log(response.data);
    return response.data[0];
  } catch (error) {
    handleApiError(error, countryName);
    throw error;
  }
};

const handleApiError = (error, additionalInfo) => {
  if (error.response) {
    if (error.response.status === 404) {
      console.warn(`Recibido error 404 para la solicitud ${additionalInfo}.`);
    } else {
      console.error(
        `Error en la respuesta del servidor para la solicitud ${additionalInfo}:`,
        error.response.data,
      );
    }
  } else if (error.request) {
    console.error(`No se recibió respuesta del servidor ${additionalInfo}.`);
  } else {
    console.error(
      `Error al configurar la solicitud ${additionalInfo}:`,
      error.message,
    );
  }
};
