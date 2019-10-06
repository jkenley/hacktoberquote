import React, { useState } from "react";
import { NextPage } from "next";

const quotes = [
  {
    text:
      "In open source, we feel strongly that to really do something well, you have to get a lot of people involved.",
    people: "Linus Torvald"
  },
  {
    text:
      "My own personal dream is that the majority of the web runs on open source software.",
    people: "Matt Mullenweg"
  },
  {
    text:
      "I am a lazy person, which is why I like open source, for other people to do work for me.",
    people: "Linus Torvald"
  },
  {
    text: "Software is like sex: it's better when it's free.",
    people: "Linus Torvalds"
  },
  {
    text:
      "The power of Open Source is the power of the people. The people rule.",
    people: "Philippe Kahn"
  }
];

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const Home: NextPage = () => {
  const [quote, setQuote] = useState(randomQuote());

  return (
    <>
      <div className="refresh">
        <a title="Refresh" onClick={() => setQuote(randomQuote())}>
          <i className="icofont-refresh"></i>
        </a>
      </div>
      <div className="container">
        <div className="quote">
          <blockquote>{quote.text}</blockquote>
          <div className="name">{`- ${quote.people}`}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
