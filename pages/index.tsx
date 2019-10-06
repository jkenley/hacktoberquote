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

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function twitterShareUrl(text: string, url: string): string {
  const baseUrl = "https://twitter.com/intent/tweet";
  const textParam = "text=" + encodeURIComponent(text);
  const urlParam = "url=" + encodeURIComponent(url);
  const otherParams = "hashtags=hacktoberquote, hacktoberfest";

  return baseUrl + "?" + textParam + "&" + urlParam + "&" + otherParams;
}

const Home: NextPage = (): JSX.Element => {
  const [quote, setQuote] = useState(getRandomQuote());

  return (
    <>
      <div className="refresh">
        <a title="Refresh" onClick={() => setQuote(getRandomQuote())}>
          <i className="icofont-refresh"></i>
        </a>
      </div>
      <div className="container">
        <div className="quote">
          <blockquote>{quote.text}</blockquote>
          <div className="name">{`- ${quote.people}`}</div>
          <div className="s-twitter">
            <a
              href={twitterShareUrl(quote.text, "https://hacktoberquote.com/")}
              target="_blank"
            >
              <i className="icofont-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
