import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-language-page',
  templateUrl: './language-page.page.html',
  styleUrls: ['./language-page.page.scss'],
})
export class LanguagePagePage implements OnInit {
  languageList = [];
  searchKey: any

  constructor(private route:Router) { }

  ngOnInit()
  {
    this.managelanglist();
  }

  backbtnclick(){
    this.route.navigateByUrl('dashboard-page');
  }

   managelanglist()
  {
    this.languageList=[{
      name:'English'
    },
    {
      name:'Arabic'
    },
    {
    name:'French'
    },
    {
      name:'Latin'
    },
    {
      name:'Kannada',
    },
    {
      name:'Hindi',
    },
    {
      name:'Janpaniese'
    }]
  }
  

  changeFunction(searchVal: any)
  {
    this.searchKey = searchVal;
    //console.log(searchVal.target.value);
    this.languageList = this.languageList.filter((data) => JSON.stringify(data).toLowerCase().indexOf(this.searchKey.toLowerCase()) != -1);
    console.log(this.languageList);
    console.log(this.searchKey);
    if(this.searchKey == '')
    {
      this.managelanglist();
    }
  }

  onCancel(){
    this.managelanglist();
  }

}
