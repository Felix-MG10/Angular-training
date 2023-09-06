import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username: string = 'JohnDoe';
  email: string = 'john@example.com';
  
  joinedDate: Date = new Date();

}
