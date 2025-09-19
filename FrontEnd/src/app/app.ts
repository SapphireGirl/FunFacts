
import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FunFactComponent } from './components/fun-facts/fun-facts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('FunFacts');

  constructor(public router: Router) { }

  goToFunFacts() {

    console.log('I am in gotoFunFacts');
    this.router.navigate(['/fun-facts']);
  }
}
