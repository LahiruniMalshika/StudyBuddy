import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the Book interface based on OpenLibrary's response
interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  description?: string;
  status: string;  // For demo purposes, assume status is passed
}

// Define the context properties for managing selected books
interface CountContextProps {
  bookCount: number;
  setBookCount: (count: number) => void;
  selectedBooks: Book[];
  setSelectedBooks: (books: Book[]) => void;
  fetchBooks: (query: string) => Promise<void>;
  books: Book[];
}

// Create the context
const CountContext = createContext<CountContextProps | undefined>(undefined);

// Create the CountProvider component
export const CountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookCount, setBookCount] = useState(0);
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([]);
  const [books, setBooks] = useState<Book[]>([]);

  // Function to fetch books from OpenLibrary based on a search query
  const fetchBooks = async (query: string) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await response.json();
      const booksData = data.docs.map((book: any) => ({
        key: book.key,
        title: book.title,
        author_name: book.author_name,
        cover_i: book.cover_i,
        description: book.first_sentence?.join(' ') || 'No description available',
        status: 'Available', // Assume all books are "Available" for now
      }));
      setBooks(booksData); // Store the books from the API response
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <CountContext.Provider
      value={{
        bookCount,
        setBookCount,
        selectedBooks,
        setSelectedBooks,
        fetchBooks,
        books,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

// Custom hook to access the context
export const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
