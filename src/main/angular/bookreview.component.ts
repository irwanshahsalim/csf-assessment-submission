import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent implements OnInit {
  reviews: any[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.reviews = JSON.parse(params['reviews']);
    });
  }

  onBack() {
    this.router.navigate(['/book-detail']);
  }
}
