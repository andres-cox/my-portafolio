export class Project {
  constructor(
    public img: string,
    public title: string,
    public description: string,
    public technologies: string[],
    public live_url: string,
    public github: string
  ) {}
}
