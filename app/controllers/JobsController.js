import { AppState } from "../AppState.js";
import { Job } from "../models/Job.js";
import { jobsService } from "../services/JobsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class JobsController {
  constructor() {
    this.getJobs()
    AppState.on('jobs', this.drawJobs)
    this.drawJobs()
  }

  async getJobs() {
    console.log('getting jobs');
    try {
      await jobsService.getJobs()
    } catch (error) {
      console.log('🙅 ', error);
    }
  }


  drawJobs() {
    const jobs = AppState.jobs
    let jobCards = ''
    jobs.forEach(job => jobCards += job.jobCards)

    setHTML('job-cards', jobCards)
  }


  async addJob() {
    try {
      event.preventDefault()
      console.log('adding new job');
      const form = event.target
      const jobData = getFormData(form)
      await jobsService.addJob(jobData)
    } catch (error) {
      console.log('new job creation error', error);
      Pop.toast("Sorry, couldn't post your job")
    }
  }



  // connectionTest() {
  //   console.log('🎮 job controller loaded');
  //   jobsService.connectionTest('passed')
  // }
}