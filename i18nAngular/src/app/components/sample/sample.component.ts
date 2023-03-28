import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit{
  locales = [
    { code: 'en-US', name: 'English' },
    { code: 'fr', name: 'French' },
  ];

  ngOnInit(): void {
    debugger
      this.router.navigate(['/','en-US'])
  }

  constructor(@Inject(LOCALE_ID) public activeLocale: any, private router : Router){

  }
  onChange() {
    window.location.href = `/${this.activeLocale}`;
  }

  goToSampleOne(){
    this.router.navigate(['/','sampleOne'])
  }


}
