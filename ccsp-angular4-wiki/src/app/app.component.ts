import { Component } from '@angular/core';
import { NavbarModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public navbardata = [{url:"index" , link: "Getting Started" ,icon:"fa-dashboard", child:[]},
                       {url:"" , link: "Best Practices" ,icon:"fa-bar-chart-o" , 
                                child:[
                                  {url:"angularpractice" , link: "Angular Best Practices"},
                                {url:"typescriptpractice" , link: "Type Script Best Practices"},
                                {url:"scsspractices" , link: "Scss Best Practices"}
                              ]
                              },         
                       {url:"table" , link: "Tables" ,icon:"fa-table", child:[]},
                       {url:"form" , link: "Forms" ,icon:"fa-edit", child:[]},
                       {url:"uielement" , link: "UI Elements" ,icon:"fa-wrench", child:[
                              { url:"panel-wells", link:"Panels and Wells",child:[]},
                              { url:"buttons", link:"Buttons",child:[]},
                              { url:"notifications", link:"Modal",child:[]},
                              { url:"typography", link:"Typography",child:[]},
                              { url:"icons", link:"Icons",child:[]},
                              { url:"grid", link:"Grid",child:[]},
                              { url:"input", link:"Input",child:[]},
                              { url:"select", link:"Select",child:[]},
                              { url:"dropdown", link:"Dropdown",child:[]},
                              { url:"tabs", link:"Tabs",child:[]},
                              { url:"navbar", link:"Navbar",child:[]},
                              { url:"menu", link:"Menu",child:[]},
                              { url:"switch", link:"Switch",child:[]},
                              { url:"label", link:"Label",child:[]},
                              { url:"masking", link:"Masking",child:[]},
                              { url:"datepicker", link:"Date Picker",child:[]},
                              { url:"loader", link:"Loader",child:[]},
                              { url:"accordion", link:"Accordion",child:[]},
                              { url:"fileupload", link:"File Upload",child:[]},
                              { url:"search", link:"Search",child:[]},
                              { url:"autocomplete", link:"AutoComplete",child:[]},
                              { url:"pagination", link:"Pagination",child:[]}
                         ]},
                      
                       {url:"samplepages" , link: "Sample Pages" ,icon:"fa-files-o",
                           child:[
                             {url:"blank" , link:"Blank" ,child:[{}]},
                             {url:"login" , link:"Login",child:[{}]}
                           ]},
                           {url:"" , link: "Charts" ,icon:"fa-bar-chart-o" , 
                           child:[
                             {url:"flotchart" , link: "Flot Charts"},
                             {url:"morrischarts" , link: "Morris Charts"}
                           ]
                         },
                      ]
}
