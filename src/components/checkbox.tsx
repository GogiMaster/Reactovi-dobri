const Checkbox = () => {
  return (
    <div className="checkbox__wrapper">
      <input className="checkbox" type="checkbox" value="bike" id="bike" />
      <label className="label" htmlFor="bike">
        Ja imam bicikli
      </label>
    </div>
  );
};

export default Checkbox;
