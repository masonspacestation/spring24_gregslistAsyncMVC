import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { House } from "../models/House.js";

class HousesService {
  connectionTest(test) {
    console.log('service connection test', test);
  }

  async getHouses() {
    const response = await api.get('api/house')
    console.log('🏡 🪓');
    const houses = response.data.map(house => new House(house))
    AppState.house = houses
  }




}


export const housesService = new HousesService()