// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuoteLeft } from "@fortawesome/free-brands-svg-icons";

function Quote({ quote }) {
  return (
    <div id="quote-box">
      <div id="text">
        {/* <FontAwesomeIcon icon={faQuoteLeft} /> */}
        <span>{quote}</span>
      </div>
    </div>
  );
}

export default Quote;
