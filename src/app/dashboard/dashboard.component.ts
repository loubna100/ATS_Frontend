import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  click( {target}:any,li1:any,li2:any,li3:any )
{
 
    
  

target.children[0].setAttribute("style","background-color:#faab1a;;box-shadow: 0")
target.setAttribute("style","background-color:#faab1a;;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;")

li1.children[0].setAttribute("style","background-color:white;;box-shadow: 0")
li1.setAttribute("style","background-color:white;;box-shadow: 0")


li2.children[0].setAttribute("style","background-color:white;;box-shadow: 0")

li2.setAttribute("style","background-color:white;;box-shadow: 0")


li3.children[0].setAttribute("style","background-color:white;;box-shadow: 0")

li3.setAttribute("style","background-color:white;box-shadow: 0")

}


onClick({target}:any,)
{
  console.log("click")
  target.setAttribute("style","background-color:yellow;")

}
}
