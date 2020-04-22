import { Project } from '../shared/project.model';
import { TranslateService } from '@ngx-translate/core';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TranslationService {
    private projectsEN: Project[] = [
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

    private projectsES: Project[] = [
        new Project(
            "assets/projects/employment-management.png",
            "Administrador de Empleados",
            "Centraliza la informacion de los empleados, Orientado al Frontend y Backend",
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
            "App de Noticias",
            "Una PWA desplegada en firebase, utiliza la API 'newsapi.org'. Orientado al Frontend",
            ["Ionic", "newsAPI"],
            "https://ionic-pwa-12eda.firebaseapp.com",
            "https://github.com/andres-cox/news-app"
        ),
        new Project(
            "assets/projects/turism_page.png",
            "Pagina de Turismo",
            "Pagina Turistica de Tarija. Orientado al Frontend",
            ["Laravel", "SASS"],
            "https://desolate-garden-35444.herokuapp.com/",
            "https://github.com/andres-cox/turism-page"
        ),
        new Project(
            "assets/projects/ecommerce.png",
            "E-commerce",
            "Un app basica de e-commerce. Orientado al Backend",
            ["Laravel", "Bootstrap"],
            "https://frightful-vampire-58690.herokuapp.com/",
            "https://github.com/andres-cox/e-commerce"
        ),
        new Project(
            "assets/projects/monitor-system.png",
            "Sistema de monitoreo",
            "Controla el funcionamiento de una red. Tambien brinda estadisticas.",
            ["HTML", "CSS", "PHP", "MySQL", "Bash/Shell"],
            "https://github.com/andres-cox/monitor-system",
            "https://github.com/andres-cox/monitor-system"
        )
    ];
    public activeLang = 'es';
    statusUpdated = new EventEmitter<string>();

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang(this.activeLang);

    }

    getProjects(lang) {
        if (lang == "en") {
            // this.changeLanguage('en');
            return this.projectsEN.slice();
        } else {
            return this.projectsES.slice();
        }
    }

    changeLanguage(lang) {
        this.activeLang = lang;
        this.translate.use(lang);
    }
} 