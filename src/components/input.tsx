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
        className={`input ${rounded ? "input--rounded" : ""}`}
      />
      {validation ? <p className="validation--true">Ovo je text</p> : ""}
    </>
  );
};

export default Input;
