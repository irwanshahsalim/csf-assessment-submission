import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[];
  startWith: string;
  page: number;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.books = JSON.parse(params['books']);
      this.startWith = params['startWith'];
      this.page = 0;
    });
  }

  onPrevious() {
    this.page--;
    this.fetchBooks();
  }

  onNext() {
    this.page++;
    this.fetchBooks();
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onBookClick(book: any) {
    this.http.get(`http://localhost:8080/books/${book.id}`).subscribe((bookDetails: any) => {
      this.router.navigate(['/book-detail', { book: JSON.stringify(bookDetails) }]);
    });
  }

  private fetchBooks() {
    this.http.get(`http://localhost:8080/books?startWith=${this.startWith}&page=${this.page}&size=10`).subscribe((books: any) => {
      this.books = books;
    });
  }
}
