import axios from "axios";
import { Response } from "../App/App.types";

const requestImg = async (
  searchValue: string,
  page: number
): Promise<Response> => {
  const key: string = "YUAMiDrMwWnPFtt_LIE888GJKdUMBYG4pKF0WJvk1Bw";
  const url: string = `https://api.unsplash.com/search/photos/?page=${page}&per_page=12&client_id=${key}&query=${searchValue}`;

  const { data } = await axios.get(url);
  return data;
};

export default requestImg;
