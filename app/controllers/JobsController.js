import { AppState } from "../AppState.js";
import { Job } from "../models/Job.js";
import { jobsService } from "../services/JobsService.js";
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






  // connectionTest() {
  //   console.log('🎮 job controller loaded');
  //   jobsService.connectionTest('passed')
  // }
}