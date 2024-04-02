import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";


export class HousesController {
  constructor() {
    console.log('🎮');
    this.connectionTest()
    this.getHouses()
  }


  async getHouses() {
    try {
      await housesService, this.getHouses()
    } catch (error) {
      console.error('🙅', error)
      Pop.toast("Couldn't get Houses, please try again later", 'error')
    }
  }





  connectionTest() {
    housesService.connectionTest('passed')
  }

}
