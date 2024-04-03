import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class HousesController {
  constructor() {
    console.log('🎮');
    // this.connectionTest()
    this.getHouses()
    AppState.on('houses', this.drawHouses)
    AppState.on('account', this.drawHouses)
    AppState.on('account', this.showHouseForm)
    // this.drawHouses()
    this.showHouseForm()
  }


  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error('🙅', error)
      Pop.toast("Couldn't get Houses, please try again later", 'error')
    }
  }

  drawHouses() {
    const houses = AppState.houses
    let houseCards = ''
    houses.forEach(house => houseCards += house.houseCards)
    setHTML('house-cards', houseCards)
  }

  async addHouse() {
    try {
      event.preventDefault()
      console.log('adding house to sell');
      const form = event.target
      const houseData = getFormData(form)
      console.log(houseData);
      await housesService.addHouse(houseData)
    } catch (error) {
      console.error('🛌 🚽 🙅 ', error)
      Pop.toast("Couldn't list your house ", 'error')
    }
  }


  // async updateHouse(houseId) {
  //   console.log('ready to update a house');
  //   try {
  //     const result = await Pop.confirm('Are you sure you want to edit this listing?')
  //     if (result == false) return
  //     await housesService.updateHouse(houseId)
  //   } catch (error) {
  //     console.error('🐡 error updating house', error)
  //     Pop.toast("Sorry, couldn't update this listing", "error")
  //   }



  //   try {
  //     event.preventDefault()
  //     console.log('preparing to update house');
  //     const form = event.target
  //     const houseData = getFormData(form)
  //     console.log(houseData);
  //     await housesService.addHouse(houseData)
  //   } catch (error) {
  //     console.error('🛌 🚽 🙅 ', error)
  //     Pop.toast("Couldn't list your house ", 'error')
  //   }
  // }


  showHouseForm() {
    const account = AppState.account
    if (account) {
      const houseForm = document.getElementById('new-house-form')
      houseForm.classList.remove('d-none')
    }
  }

  async deleteHouse(houseId) {
    console.log('ready to delete a house');
    try {
      const result = await Pop.confirm('Are you sure you want to delete this listing?')
      if (result == false) return
      await housesService.deleteHouse(houseId)
    } catch (error) {
      console.error('🗑️ error deleting house', error)
      Pop.toast("Sorry, couldn't delete this listing", "error")
    }
  }

  // connectionTest() {
  //   housesService.connectionTest('passed')
  // }

}
