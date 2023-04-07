type InputProps = {
  rounded?: boolean;
  label?: string;
  validation?: string;
  focus?:boolean;
};

const Input = ({ rounded, label, validation,focus }: InputProps) => {
  return (
    <>
      {label ? <label htmlFor={label}>{label}</label> : ""}

      <input
        id={label}
        className={`input ${rounded ? "input--rounded input--focused" : ""}`}
       
      />
      {validation ? <p className="validation--true">Ovo je text</p> : <p className="validation--false">Nema ničeg</p> }
      
      <input type="text"  className={`input ${focus ? 'input--focused':''}`}/>
    </>
  );
};

export default Input;
