import { api } from "./AxiosService.js"
import { Job } from "../models/Job.js";
import { AppState } from "../AppState.js";



class JobsService {
  async getJobs() {
    const response = await api.get('api/jobs')
    console.log('jobs response', response);
    const jobs = response.data.map(job => new Job(job))
    AppState.jobs = jobs
  }




















  // connectionTest(passed) {
  //   console.log('service connection test: ', passed);
  // }
}


export const jobsService = new JobsService()