import "./formEmailBtn.css";

const FormEmailBtn = ({ FormEmailBtnLabel }) => {
  return (
    <div className="form-emailbtn">
      <input type="email" placeholder="Your Email Address"></input>
      <button type="button">{FormEmailBtnLabel}</button>
    </div>
  );
};

export default FormEmailBtn;
