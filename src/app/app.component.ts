import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	
	<!--	Billson	: One-way Data Binding: Example Code components-ex100	-->
	<h1>{{title}}</h1>
	<p>Length: {{title.length}}</p>
	<p>Reversed: {{getReversed(title)}}</p>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'welcome to app!';
  
  //	Billson	: One-way Data Binding: Example Code components-ex100
  getReversed(str: string){
	  let reversed= '';
	  for (let i=str.length-1;i>=0;i--){
		  reversed += str.substring(i, i+1);
	  }
	  return reversed;
  }
}
