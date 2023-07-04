import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: any;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.book = JSON.parse(params['book']);
    });
  }

  onFindReview() {
    this.http.get(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${this.book.title}&api-key=2bbsSMadu4KAkBCaBlCJwbE8piqLYfpC`).subscribe((reviews: any) => {
      this.router.navigate(['/book-review', { reviews: JSON.stringify(reviews) }]);
    }, error => {
      if (error.status === 404) {
        alert('No reviews found');
      } else {
        alert('An error occurred');
      }
    });
  }

  onBack() {
    this.router.navigate(['/book-list']);
  }
}
