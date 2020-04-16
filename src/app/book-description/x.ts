import { Component } from '@angular/core';
@Component({
	selector:'a-r',
	template:`<ul>
		<li ngFor="let u of users">{{u.n}},{{u.a}}</li>
	</ul>`
})
export class AppComponent{
	users=[{"n":"w","a":"w"},
	{"n":"w","a":"w"},
	{"n":"w","a":"w"}]
}