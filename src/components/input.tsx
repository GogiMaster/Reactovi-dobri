type InputProps = {
  rounded?: boolean;
  label?: string;
  validation?: string;
  placehold?:string;
};

const Input = ({ rounded, label, validation, placehold }: InputProps) => {
  return (
    <>
      {label ? <label htmlFor={label}>{label}</label> : ""}

      <input
      placeholder={placehold}
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
