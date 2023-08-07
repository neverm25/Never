import instance from "@Axios/axios-user";
import { DJOBS_API_PATHS } from "@DJobs/DjobsUtils/API-Paths";
const getCity = body => {
  return instance.post(DJOBS_API_PATHS.city, body);
};

type CityData = {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
};
const getCityOptions = async (city: string, country: string) => {
  const formData = new FormData();
  formData.append("query", city);
  formData.append("cc", country);

  const response = await instance.post(DJOBS_API_PATHS.city, formData);
  const cityOptions: CityData[] = response.data.data;
  return cityOptions;
};
export const HeaderAPI = {
  getCity,
  getCityOptions,
};
