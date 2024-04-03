import { AppState } from "../AppState.js"

export class Job {
  constructor(data) {
    this.id = data.id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = data.updatedAt
  }


  get jobCards() {
    return `
    <div class="col-4 p-2">
      <div class="card rounded rounded-3">
        <div class="card-header justify-items-between align-items-middle p-2 pb-0">
          <h3 class="text-start col-12">${this.jobTitle}</h3>
          <p>${this.company}</p>
          <small class="text-start col-12">Posted: ${this.createdAt.toDateString()}</small>
        </div>
        <div class="card-body d-row justify-items-between align-items-middle px-2 pt-3">
          <h5 class="text-start col-8 d-inline-block">$${this.rate}<span class="fs-6 fw-light">/annual</span></h5>
          <small class="text-end col-4 d-inline">${this.hours}</small>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
  </section>
</section>
  `
  }


  get modifyButtons() {
    if (this.creatorId == AppState.account?.id) {
      return `
      <button onclick="app.JobsController.updateJob('${this.id}')" class="btn text-end fs-3 w-auto px-3"><i class="text-danger mdi mdi-repeat"></i></button>
      <button onclick="app.JobsController.deleteJob('${this.id}')" class="btn text-end fs-3 w-auto px-3"><i class="text-danger mdi mdi-delete-forever"></i></button>
      `
    }
    return ''
  }








}
// company: String, required
// jobTitle: String, required
// hours: Number, required
// rate: Number, required
// description: String, 
// creatorId: String (References Account Id), 
// *creator: Object (Virtual Added by Database)
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)