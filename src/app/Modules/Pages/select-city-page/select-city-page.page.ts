import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-city-page',
  templateUrl: './select-city-page.page.html',
  styleUrls: ['./select-city-page.page.scss'],
})
export class SelectCityPagePage implements OnInit {
  cityList: { name: string; }[];

  constructor(private route:Router) { }

  ngOnInit() {
    this.managelanglist();
  }

  navigationdashboard()
  {
    this.route.navigateByUrl('dashboard-page');
  }

  managelanglist()
  {
    this.cityList=[{
      name:'Pthankoat'
    },
    {
      name:'Ambala'
    },
    {
    name:'Amritsir'
    },
    {
      name:'Ludiana'
    },
    {
      name:'Jalandhar',
    }]
  }

  backbuttonclick(){
    this.route.navigateByUrl('dashboard-page');
  }

  changeFunction(searchVal: any)
  {
    //console.log(searchVal.target.value);
    this.cityList = this.cityList.filter((data) => JSON.stringify(data).toLowerCase().indexOf(searchVal.toLowerCase()) != -1);
    console.log(this.cityList);
  }

  onCancel(){
    this.managelanglist();
  }

}
