import { Component, OnInit } from "@angular/core";
import { Project } from "../shared/project.model";
@Component({
  selector: "app-portafolio",
  templateUrl: "./portafolio.component.html",
  styleUrls: ["./portafolio.component.scss"]
})
export class PortafolioComponent implements OnInit {
  public projects: Project[] = [
    new Project(
      "assets/projects/employment-management.png",
      "Employment Management",
      "Centralizes employees data of a Company. Frontend and Backend",
      [
        "Angular",
        "Bootstrap",
        "NgRx",
        "GraphQL",
        "Apollo",
        "MongoDB",
        "Firebase",
        "Docker"
      ],
      "https://thawing-plains-52078.herokuapp.com/",
      "https://github.com/andres-cox/management-app/tree/master"
    ),
    new Project(
      "assets/projects/news_app.png",
      "News App",
      "A PWA app deployed in firebase, it uses newsapi.org. Frontend oriented",
      ["Ionic", "newsAPI"],
      "https://ionic-pwa-12eda.firebaseapp.com",
      "https://github.com/andres-cox/news-app"
    ),
    new Project(
      "assets/projects/turism_page.png",
      "Turism Page",
      "A turism page of Tarija. Frontend oriented",
      ["Laravel", "SASS"],
      "https://desolate-garden-35444.herokuapp.com/",
      "https://github.com/andres-cox/turism-page"
    ),
    new Project(
      "assets/projects/ecommerce.png",
      "E-commerce",
      "A simple esqueme of an e-commerce page. Backend oriented",
      ["Laravel", "Bootstrap"],
      "https://frightful-vampire-58690.herokuapp.com/",
      "https://github.com/andres-cox/e-commerce"
    ),
    new Project(
      "assets/projects/monitor-system.png",
      "Monitor System",
      "Pings nertwork eventually in order to check they are on. It also brings stadistics.",
      ["HTML", "CSS", "PHP", "MySQL", "Bash/Shell"],
      "https://github.com/andres-cox/monitor-system",
      "https://github.com/andres-cox/monitor-system"
    )
  ];
  constructor() {}

  ngOnInit() {
    console.log(this.projects);
  }
}
