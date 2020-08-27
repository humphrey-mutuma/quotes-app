import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() upVoteQuote: EventEmitter<Quote> = new EventEmitter();
  @Output() downVoteQuote: EventEmitter<Quote> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  upVote(quote) {
    this.upVoteQuote.emit(quote);
  }
  downVote(quote) {
    this.downVoteQuote.emit(quote);
  }
}