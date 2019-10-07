import React, {useEffect, useState} from "react";
import { NextPage } from "next";
import { quotes } from "../data";
import { useInterval } from "../hooks";

type Quote = {
  text: string;
  people: string;
};

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const twitterShareUrl = (text: string, url: string): string => {
  const baseUrl = "https://twitter.com/intent/tweet";
  const textParam = "text=" + encodeURIComponent(text);
  const urlParam = "url=" + encodeURIComponent(url);
  const otherParams = "hashtags=hacktoberquote, hacktoberfest";

  return baseUrl + "?" + textParam + "&" + urlParam + "&" + otherParams;
};

const Home: NextPage = (): JSX.Element => {
  const [quote, setQuote] = useState(getRandomQuote());
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    // setTimer(5);
  }, []);

  useInterval(() => {
    setTimer(timer - 1);
  }, 1000);

  return (
    <>
      <div className="refresh">
        <a title="Refresh" onClick={() => setQuote(getRandomQuote())}>
          <i className="icofont-refresh"/>
        </a>
        <p className="timer">{timer}</p>
      </div>
      <div className="container">
        <div className="quote">
          <blockquote>{quote.text}</blockquote>
          <div className="name">{`- ${quote.people}`}</div>
          <div className="s-twitter">
            <a
              title="Share on twitter"
              href={twitterShareUrl(quote.text, "https://hacktoberquote.com/")}
              target="_blank"
            >
              <i className="icofont-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Code with ♥ by{" "}
          <a href="https://jkenley.me/" target="_blank">
            Kenley Jean
          </a>
          . Licensed under the{" "}
          <a
            href="https://github.com/bedjiken/hacktoberquote/blob/master/LICENCE"
            target="_blank"
          >
            MIT License
          </a>
        </p>
      </footer>
    </>
  );
};

export default Home;
