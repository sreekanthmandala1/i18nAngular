import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'i18nAngular';
  siteLocale:any;
  siteLanguage:any = "English";
  languageList =[
    {code : "en-US" , label : "English"},
    {code : "fr" , label : "French"},
  ]

  ngOnInit(){
    this.siteLocale = window.location.pathname.split('/')[1];
    this.siteLanguage = this.languageList.find(f=>f.code === this.siteLocale)?.label
  }
}
