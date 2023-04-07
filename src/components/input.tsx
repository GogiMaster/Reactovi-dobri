type InputProps = {
  rounded?: boolean;
  label?: string;
  validation?: string;
};

const Input = ({ rounded, label, validation }: InputProps) => {
  return (
    <>
      {label ? <label htmlFor={label}>{label}</label> : ""}

      <input
        id={label}
        className={`input ${rounded ? "input--rounded input--focused" : ""}`}
      />
      {validation ? (
        <p className="validation--true">Ovo je text</p>
      ) : (
        <p className="validation--false">Nema ničeg</p>
      )}
    </>
  );
};

export default Input;
