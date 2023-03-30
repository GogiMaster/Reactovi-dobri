const FormField = () => {
  return (
    <div className="form">
      <label className="label" htmlFor="form">
        Label
      </label>
      <input
        className="input"
        type="text"
        placeholder="Placeholder"
        id="form"
        required
      />
      <p className="validation">Validation Message</p>
    </div>
  );
};

export default FormField;
