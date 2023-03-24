import React, { useState, useEffect } from "react";
import "./styles.css";
import Quote from "./components/Quote";
import Author from "./components/Author";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

export default function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNumber = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNumber];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <>
      <div className="App">
        <div id="quote-box">
          <Quote quote={quote} />
          <Author author={author} />
          <Buttons onClick={handleClick} />
        </div>
      </div>
      <Footer />
    </>
  );
}
