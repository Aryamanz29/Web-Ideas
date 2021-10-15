import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Quote = ({isDarkMode}) => {
  const [quote, setQuote] = useState({});
  const [trigger, setTrigger] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setTrigger((prev) => !prev);
  };
    useEffect(() => {
      fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => {
          setQuote(data);
        });
      return () => setQuote({});
    }, [trigger]);
  return (
    <>
      <div className={isDarkMode ? "row my-4 text-light" : "row my-4 text-dark" }>
        <div className=" col-md-8 offset-md-2">
          {!quote.content && (
            <div className="">
              <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
            </div>
          )}
          {quote.content && (
            <div class= {isDarkMode ? "card quote bg-dark shadow p-4" : "card quote bg-light shadow p-4"}>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>{quote.content}</p>
                  {quote.tags.map((tag) => (
                    <small className="border rounded py-1 px-2 mx-2">
                      #{tag}{" "}
                    </small>
                  ))}
                  <footer class="blockquote-footer mt-3">
                    <cite title="Source Title">{quote.author}</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          )}
        </div>
      </div>

      <button className="btn btn-primary mt-5" onClick={handleClick}>
        Random Quote
      </button>
    </>
  );
};

export default Quote;
