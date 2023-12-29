import React, { useEffect, useState } from "react";
import axios from "axios";
import "./quote.css";

function Quote(props) {
  const [color, setColor] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const apiUrl = "https:api.quotable.io/random";
  const fetchNewQuote = () => {
    setLoading(true);

    axios
      .get(apiUrl)
      .then((response) => {
        setQuote(response.data.content);
        setAuthor(response.data.author);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error fetching data");
      });
  };

  useEffect(() => {
    if (props.Color) {
      setColor(props.Color);
      setLoading(true);
      fetchNewQuote()
      // axios
      //   .get(apiUrl)
      //   .then((response) => {
      //     setQuote(response.data.content);
      //     setAuthor(response.data.author);
      //     setLoading(false);
      //     console.log(author);
      //   })
      //   .catch((error) => {
      //     setLoading(false);
      //     console.log("error fetching data");
      //   });
    }
  }, [props.Color]);

  return (
    <>
      <div className="quoteContainer">
        <h2 className="title">Quote of the Day</h2>
        

        {loading ? (
          <h2 style={{color: color }}>Loading....</h2>
        ) : (
          <h2 className="quote" style={{ color: color }}>
            "{quote}"
          </h2>
        )}
        {loading ?(<p className='author' style={{color:color}}>Loading....</p>):(<p className="author" style={{ color: color }}>
          -{author}
        </p>)}
        <button onClick={fetchNewQuote} style={{ backgroundColor:color }}>New Quote</button>
      </div>
    </>
  );
}

export default Quote;
