const Form = () => {
  return (
    <div className="formular">
      <h1>Form Field</h1>
      <form>
        <label>Label</label> <br />
        <input type="text" placeholder="Placeholder" required /> <br />
        <label>Validation Message</label>
      </form>
    </div>
  );
};

export default Form;
