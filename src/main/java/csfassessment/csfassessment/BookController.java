package csfassessment.csfassessment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/books")
    public List<Book> getBooks(@RequestParam String startWith, @RequestParam int page, @RequestParam int size) {
        Pageable pageable = PageRequest.of(page, size);
        return bookRepository.findByTitleStartingWith(startWith, pageable).getContent();
    }

    @GetMapping("/books/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    // Here you can add the /reviews/{id} endpoint to fetch the review(s) of a book
}
