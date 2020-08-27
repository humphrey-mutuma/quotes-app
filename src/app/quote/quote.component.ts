
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, '“ Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code ”', 'Dan Salomon', 234, 12, new Date(2018, 7, 2), 'Francis'),
    new Quote(2, '“ Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away ”', ' Antoine de Saint', 122, 15, new Date(2019, 8, 22), 'Hellena'),
    new Quote(3, '“ Code is like humor. When you have to explain it, it’s bad ” ', 'Cory House Einsten', 452, 22, new Date(2018, 6, 15), 'Martineli'),
    new Quote(4, '“ First, solve the problem. Then, write the code.” ', ' John Johnson', 434, 23, new Date(2017, 4, 12), 'Martineli')

  ];
  constructor() { }

  ngOnInit(): void {
  }

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(index) {
    const toDelete = confirm(`Are you sure you want to delete '${this.quotes[index].detail}'?`);

    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }
  upVoteQuote(index) {
    index.upVote += 1;
  }
  downVoteQuote(index) {
    index.downVote += 1;
  }
  findMax() {
    return Math.max.apply(Math, this.quotes.map((quote) => quote.upVote));
  }
}
