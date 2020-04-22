import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
  }
  changeLanguage(lang) {
    this.translationService.changeLanguage(lang);
    this.translationService.statusUpdated.emit(lang);
  }
}
