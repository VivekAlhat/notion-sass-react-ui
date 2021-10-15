import { useState, useEffect } from "react";
import { FcViewDetails } from "react-icons/fc";
import Titlebar from "./Titlebar";
import "./styles/readinglist.scss";

const ReadingList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./src/data/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="readinglist__container">
      <Titlebar />
      <div className="readinglist__container__main">
        <div className="readinglist__container__main_header">
          <FcViewDetails />
          <h1>Reading List</h1>
        </div>
        <div className="readinglist__container__main_options">
          <p>List View</p>
          <div className="readinglist__container__main_options_items">
            <p>Properties</p>
            <p>Filter</p>
            <p>Sort</p>
            <p>Search</p>
            <button type="button">New</button>
          </div>
        </div>
        <div className="readinglist__container__main_books">
          {books.map((book, key) => (
            <div key={key} className="book_details">
              <p>{book.book}</p>
              <p className="book_details_status">{book.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingList;
