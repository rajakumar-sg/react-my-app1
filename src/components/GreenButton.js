import './GreenButton.css'

function GreenButton({text="Go"}) {
  return (
    <div>
      <button className="GreenButton">{text}</button>
    </div>
  );
}

export default GreenButton