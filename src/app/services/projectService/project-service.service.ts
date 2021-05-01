import { Injectable } from '@angular/core';
import {PROJECTS} from '../../mockData/projects'
@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor() { }
  getProjects() {
    const projects = PROJECTS;
    return projects
  }
  
}
