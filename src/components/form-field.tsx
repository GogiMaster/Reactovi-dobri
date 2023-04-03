const FormField = () => {
  return (
    <div className="form">
      <label className="form__label" htmlFor="form">
        Label
      </label>
      <input
        className="form__input"
        type="text"
        placeholder="Placeholder"
        id="form"
        required
      />
      <p className="form__validation">Validation Message</p>
    </div>
  );
};

export default FormField;
