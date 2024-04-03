import { api } from "./AxiosService.js"
import { Job } from "../models/Job.js";
import { AppState } from "../AppState.js";



class JobsService {
  async addJob(jobData) {
    console.log('job data going to work');
    const response = await api.post('api/jobs', jobData)
    const job = new Job(response.data)
    AppState.jobs.push(job)
  }
  async getJobs() {
    const response = await api.get('api/jobs')
    console.log('jobs response', response);
    const job = response.data.map(job => new Job(job))
    AppState.jobs = job
  }




















  // connectionTest(passed) {
  //   console.log('service connection test: ', passed);
  // }
}


export const jobsService = new JobsService()