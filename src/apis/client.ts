import _URIS from "./uris";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "",
  headers: {
    "Content-type": "application/json",
  },
});

const getSummoner = async (summonerName: string) => {
  const callUri = _URIS.GET_SUMMONER.replace(`{summonerName}`, summonerName);
  const response = await apiClient.get<any>(callUri);
  return response.data;
};

const getMatchDetail = async (summonerName: string, gameId: string) => {
  let callUri = _URIS.GET_MATCHDETAIL.replace(`{summonerName}`, summonerName);
  callUri = callUri.replace(`{gameId}`, gameId);
  const response = await apiClient.get<any>(callUri);
  return response.data;
};

const getMatches = async (summonerName: string) => {
  const callUri = _URIS.GET_MATCHES.replace(`{summonerName}`, summonerName);
  const response = await apiClient.get<any>(callUri);
  return response.data;
};

const getMostInfo = async (summonerName: string) => {
  const callUri = _URIS.GET_MOSTINFO.replace(`{summonerName}`, summonerName);
  const response = await apiClient.get<any>(callUri);
  return response.data;
};

const getItemInfo = async () => {
  const callUri = _URIS.GET_ITEMINFO;
  const response = await apiClient.get<any>(callUri);
  return response.data;
};

const apis = {
  getSummoner,
  getMatchDetail,
  getMatches,
  getMostInfo,
  getItemInfo
};

export default apis;
