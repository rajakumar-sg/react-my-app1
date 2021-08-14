import './GreenButton.css'

function GreenButton({text="Go", onClick=()=>{}}) {
  return (
    <div>
      <button className="GreenButton" onClick={onClick}>{text}</button>
    </div>
  );
}

export default GreenButton