import { useState } from "react";
import Books from "./Books";
import MainHeader from "./MainHeader";

const Main = () => {
  const defaultBooks = [
    {
      id: crypto.randomUUID(),
      title: "JavaScript and Jquery",
      author: "Jon Duckett",
      thumbnail: "https://i.ibb.co/z8c1m0Q/book.png",
      price: 62,
      rating: "4",
      favorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "JavaScript",
      author: "Jon Duckett",
      thumbnail: "https://i.ibb.co/z8c1m0Q/book.png",
      price: 62,
      rating: "4",
      favorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Php",
      author: "Jon Duckett",
      thumbnail: "https://i.ibb.co/z8c1m0Q/book.png",
      price: 62,
      rating: "4",
      favorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Paython",
      author: "Jon Duckett",
      thumbnail: "https://i.ibb.co/z8c1m0Q/book.png",
      price: 62,
      rating: "4",
      favorite: false,
    },
  ];
  const [books, setBooks] = useState([...defaultBooks]); 

  const handleFavorite = (bookId) => {
   setBooks(
      books.map((book) => {
        if (book.id === bookId) { 
          return {...book, favorite: !book.favorite};
        } else {
          return book;
        }
      })
    );
  };

  function handleSearch(searchTerm) {  
   const filtered = defaultBooks.filter((book) =>
       book.title.toLowerCase().includes(searchTerm.toLowerCase())
   ); 
   setBooks([...filtered]); 
}

  return (
    <div className="my-10 lg:my-14">
      <MainHeader  onSearch={handleSearch}  />
      <Books books={books} isFavorite={handleFavorite} />
    </div>
  );
};

export default Main;
