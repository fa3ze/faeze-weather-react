import "./Toggle.css";

export default function Toggle(props) {
  function handleClick(event) {
    const isChecked = event.target.checked;
    props.toggleHandler(isChecked);
    /* if (isChecked) {
    weatherapp.classList.add("dark-theme");
  } else {
    weatherapp.classList.remove("dark-theme");
  } */
  }

  return (
    <div className="toggle">
      <input type="checkbox" id="toggle" onChange={handleClick} />
      <label htmlFor="toggle"></label>
    </div>
  );
}
