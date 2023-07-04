import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonRows = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Y'],
    ['Z'],
    ['0', '1', '2', '3', '4'],
    ['5', '6', '7', '8', '9']
  ];

  constructor(private http: HttpClient, private router: Router) {}

  onButtonClick(button: string) {
    const url = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?title=${button}&api-key=2bbsSMadu4KAkBCaBlCJwbE8piqLYfpC`;
  
    this.http.get(url).subscribe((response: any) => {
      // Assuming the books are in the 'results' property of the response
      const books = response.results;
      this.router.navigate(['/book-list', { books: JSON.stringify(books), startWith: button }]);
    });
  }

}
