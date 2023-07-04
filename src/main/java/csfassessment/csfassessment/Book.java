package csfassessment.csfassessment;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;
    private String authors;
    private int pages;
    private double rating;
    private int ratingCount;
    private String genres;
    private String cover;

    // Getters and setters...
}
