import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { FunFactsService, FunFact } from '../../services/fun-facts.service';

@Component({
  selector: 'app-fun-fact',
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.scss'],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule
    
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class FunFactComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  funFacts: FunFact[] = [];

  constructor(
    private funFactsService: FunFactsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.funFactsService.getAll().subscribe((data: FunFact[]) => {
      this.funFacts = data;
      this.cdr.markForCheck();
    });
  }
}