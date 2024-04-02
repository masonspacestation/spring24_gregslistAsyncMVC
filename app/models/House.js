import { AppState } from "../AppState.js";

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
  }

  get houseCards() {
    return `
    <div class="col-4">
    <div class="card rounded rounded-3">
    <img class="card-img-top" src="${this.imgUrl}" alt="">
    <div class="d-flex bg-secondary justify-items-around align-items-middle w-100 pb-0">
      <div class="col-3 text-start p-3">
        <p class="card-text fw-bold"><i class="mdi mdi-bed-king-outline"></i>${this.bedrooms}</p>
      </div>
      <div class="col-3 text-start p-3">
        <p class="card-text fw-bold"><i class="mdi mdi-shower"></i>${this.bathrooms}</p>
      </div>
      <div class="col-6 text-start p-3">
        <p class="card-text fw-bold"><i class="mdi mdi-hammer"></i>${this.year}</p>
      </div>
    </div>

    <div class="card-body">
      <p class="card-text">
        ${this.description}
      </p>
      <div class="d-flex justify-content-between">
      <span class="text-start w-auto px-3 fs-4 fw-bold">$${this.price}</span>
      <span onClick="app.HousesController.deleteHouse(${this.id})" role="button" class="text-end fs-3 w-auto px-3"><i class="text-danger mdi mdi-delete-forever"></i></span>
    </div>
    </div>
    </div>
  </div>
  `
  }



}
