package org.ferhat.book_store.service;

import org.ferhat.book_store.dao.BookRepository;
import org.ferhat.book_store.dao.CheckoutRepository;
import org.ferhat.book_store.entity.Book;
import org.ferhat.book_store.entity.Checkout;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Optional;

@Service
@Transactional
public class BookService {

    private BookRepository bookRepository;
    private CheckoutRepository checkoutRepository;

    public BookService(BookRepository bookRepository, CheckoutRepository checkoutRepository) {
        this.bookRepository = bookRepository;
        this.checkoutRepository = checkoutRepository;
    }

    public Book checkoutBook(String userEmail, Long bookId) throws Exception {
        // Debug: Check user email
        System.out.println("User Email: " + userEmail);
        System.out.println("Book ID: " + bookId);

        Optional<Book> book = bookRepository.findById(bookId);

        // Debugging output: Check if the book exists
        System.out.println("Book present: " + book.isPresent());

        Checkout validateCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);

        // Debugging output: Has the user borrowed the book before?
        System.out.println("User already checked out: " + (validateCheckout != null));

        // Debugging output: Check the number of copies available
        if (book.isPresent()) {
            System.out.println("Copies available: " + book.get().getCopiesAvailable());
        }

        // Conditions that trigger the error message
        if (!book.isPresent() || validateCheckout != null || book.get().getCopiesAvailable() <= 0) {
            throw new Exception("Book doesn't exist or already checked out by user.");
        }

        // Reduce the number of copies and update the database
        book.get().setCopiesAvailable(book.get().getCopiesAvailable() - 1);
        bookRepository.save(book.get());

        Checkout checkout = new Checkout(
                userEmail,
                LocalDate.now().toString(),
                LocalDate.now().plusDays(7).toString(),
                book.get().getId()
        );
        checkoutRepository.save(checkout);

        return book.get();
    }

    public Boolean checkoutBookByUser(String userEmail, Long bookId){
        Checkout validateCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);
        if(validateCheckout != null){
            return true;
        } else {
            return false;
        }
    }

    public int currentLoansCount(String userEmail){
        return checkoutRepository.findBooksByUserEmail(userEmail).size();
    }
}
