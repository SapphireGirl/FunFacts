import { ChangeDetectionStrategy, Component, OnInit, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FunFactsService, FunFact } from '../../services/fun-facts.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-fun-fact',
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.scss'],
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatAccordion,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class FunFactComponent implements OnInit {
  accordion = viewChild.required(MatAccordion);
  funFacts: FunFact[] = [];

  constructor(private funFactsService: FunFactsService) {
    console.log('I am in FunFactComponent');
  }

  ngOnInit() {
    this.funFactsService.getAll().subscribe(data => {
      this.funFacts = data;
    });
  }
}
