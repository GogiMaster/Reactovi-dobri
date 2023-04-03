const FormField = () => {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor="form">
        Label
      </label>
      <input
        className="form-field__input"
        type="text"
        placeholder="Placeholder"
        id="form"
        required
      />
      <p className="form-field__validation">Validation Message</p>
    </div>
  );
};

export default FormField;
