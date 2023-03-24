import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <div className="icons">
      <a
        href="https://www.twitter.com/intent/tweet"
        id="tweet-quote"
        className="links"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="" className="links">
        <FontAwesomeIcon icon={faTumblr} />
      </a>
    </div>
  );
}
export default Socials;
