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
      publishedYear:2001,
      favorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Php",
      author: "Jon Duckett",
      thumbnail: "https://i.ibb.co/z8c1m0Q/book.png",
      price: 62,
      rating: "4",
      publishedYear:2021,
      favorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "C",
      author: "Jon Duckett",
      thumbnail: "https://i.ibb.co/z8c1m0Q/book.png",
      price: 62,
      rating: "4",
      publishedYear:2011,
      favorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Paython",
      author: "Jon Duckett",
      thumbnail: "https://i.ibb.co/z8c1m0Q/book.png",
      price: 62,
      rating: "4",
      publishedYear:2020,
      favorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Java",
      author: "Jon Duckett",
      thumbnail: "https://i.ibb.co/z8c1m0Q/book.png",
      price: 62,
      rating: "4",
      publishedYear:2023,
      favorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Ruby",
      author: "Jon Duckett",
      thumbnail: "https://i.ibb.co/z8c1m0Q/book.png",
      price: 62,
      rating: "4",
      publishedYear:1990,
      favorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "HTML",
      author: "Jon Duckett",
      thumbnail: "https://i.ibb.co/z8c1m0Q/book.png",
      price: 62,
      rating: "4",
      publishedYear:1980,
      favorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Wordpress",
      author: "Jon Duckett",
      thumbnail: "https://i.ibb.co/z8c1m0Q/book.png",
      price: 62,
      rating: "4",
      publishedYear:1995,
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
const handleSortBy=(sortBy)=>{
if (sortBy === "year_asc") {
   return setBooks(defaultBooks.sort((a,b)=>{
      return a.publishedYear - b.publishedYear
   }));
}else if(sortBy === "year_desc"){
   return setBooks(defaultBooks.sort((a,b)=>{
      return b.publishedYear - a.publishedYear
   }));
} else if(sortBy === "name_desc"){
   return setBooks(defaultBooks.sort((a, b) => {
      let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();
  
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  }));
} else if(sortBy === "name_asc"){
   return setBooks(defaultBooks.sort((a, b) => {
      let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();
  
      if (fa > fb) {
          return -1;
      }
      if (fa < fb) {
          return 1;
      }
      return 0;
  }));
} 
}

  return (
    <div className="my-10 lg:my-14">
      <MainHeader  onSearch={handleSearch} sortBy={handleSortBy}  />
      <Books books={books} isFavorite={handleFavorite} />
    </div>
  );
};

export default Main;
