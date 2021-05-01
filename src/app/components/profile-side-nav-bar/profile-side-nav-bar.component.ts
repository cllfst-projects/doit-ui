import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ProjectServiceService} from '../../services/projectService/project-service.service'

@Component({
  selector: 'app-profile-side-nav-bar',
  templateUrl: './profile-side-nav-bar.component.html',
  styleUrls: ['./profile-side-nav-bar.component.css']
})
export class ProfileSideNavBarComponent implements OnInit {
  projects=[]
  
  constructor(private projectService: ProjectServiceService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  addProject(project){
    let newId = this.projects.length+1
    this.projects.push({name: project, id: newId});
    console.log(this.projects)
  }

  //opening and closing side panel
  toggleNav() {
    const panelWidth = document.getElementById("mySidepanel").style.width ;
    if( panelWidth == "250px"){
      document.getElementById("mySidepanel").style.width = "0px";
    }else {
      document.getElementById("mySidepanel").style.width = "250px";
    }
  }
  closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  //opening and closing the modal
  closeModal(){
    // When the user clicks on <span> (x), close the modal
    document.getElementById("myModal").style.display = "none";

  }
  openModal(){
    document.getElementById("myModal").style.display = "block";
  }
 
}
