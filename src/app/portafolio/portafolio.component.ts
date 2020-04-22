import { Component, OnInit } from "@angular/core";
import { Project } from "../shared/project.model";
import { TranslationService } from '../services/translation.service';
@Component({
  selector: "app-portafolio",
  templateUrl: "./portafolio.component.html",
  styleUrls: ["./portafolio.component.scss"]
})
export class PortafolioComponent implements OnInit {
  projects: Project[];
  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.projects = this.translationService.getProjects('es')
    this.translationService.statusUpdated.subscribe(
      (status: string) => this.projects = this.translationService.getProjects(status)
    );

    // console.log(this.projects);
  }
}
