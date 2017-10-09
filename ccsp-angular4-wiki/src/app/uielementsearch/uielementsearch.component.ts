import { Component, OnInit } from '@angular/core';
import { FilterpipeModule } from './../filterpipe/filterpipe.module';

@Component({
  selector: 'app-uielementsearch',
  templateUrl: './uielementsearch.component.html',
  styleUrls: ['./uielementsearch.component.css']
})
export class UielementsearchComponent implements OnInit {

  constructor() { }

  searchitem = [{url:"index" , link: "Dashboard"},
  {url:"" , link: "Charts"},                                
  {url:"table" , link: "Tables" },
  {url:"form" , link: "Forms" },
  { url:"panel-wells", link:"Panels and Wells"},
         { url:"buttons", link:"Buttons"},
         { url:"notifications", link:"Notifications"},
         { url:"typography", link:"Typography"},
         { url:"icons", link:"Icons"},
         { url:"grid", link:"Grid"},
         { url:"input", link:"Input"},
         { url:"select", link:"Select"},
         { url:"dropdown", link:"Dropdown"},
         { url:"tabs", link:"Tabs"},
         { url:"navbar", link:"Navbar"},
         { url:"menu", link:"Menu"},
         { url:"switch", link:"Switch"},
         { url:"label", link:"Label"},
         { url:"datepicker", link:"Date Picker"},
         { url:"loader", link:"Loader"},
         { url:"accordion", link:"Accordion"},
         { url:"fileupload", link:"File Upload"},
         { url:"search", link:"Search"},
         {url:'blank',link:"Blank Page"},
         {url:'login',link:"Login Page"},
         {url:'angularpractice',link:"Angular Best Practices"},
         {url:'typescriptpractice',link:"TypeScript Best Practices"},
         {url:'scsspractices',link:"Scss Best Practices"}
   ];
   searchableList = ['url','link']; 

  ngOnInit() {
  }

}
