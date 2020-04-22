import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"]
})
export class ProjectComponent implements OnInit {
  @Input() img;
  @Input() title;
  @Input() description;
  @Input() technologies;
  @Input() live_url;
  @Input() github;

  techs;

  constructor() { }

  ngOnInit() {
    // console.log(this.technologies.split(","));
    this.techs = this.technologies.split(",");

  }
}
