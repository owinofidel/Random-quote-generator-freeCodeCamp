import Socials from "./Socials";

function Buttons({ onClick }) {
  return (
    <div className="actions">
      <Socials />
      <button id="new-quote" onClick={onClick}>
        New Quote
      </button>
    </div>
  );
}

export default Buttons;
