import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { House } from "../models/House.js";

class HousesService {
  async deleteHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)
    console.log('api delete response ', response);
    const indexToDelete = AppState.houses.findIndex(house => house.id == houseId)
    AppState.houses.splice(indexToDelete, 1)
  }


  async addHouse(houseData) {
    console.log('houseData in the house ', houseData);
    const response = await api.post('api/houses', houseData)
    console.log('new house service ', response);
    const house = new House(response.data)
    AppState.houses.push(house)
  }
  // 

  async getHouses() {
    const response = await api.get('api/houses')
    console.log('🏡 🪓', response);
    const houses = response.data.map(house => new House(house))
    AppState.houses = houses
  }



  // connectionTest(test) {
  //   console.log('service connection test', test);
  // }
}


export const housesService = new HousesService()