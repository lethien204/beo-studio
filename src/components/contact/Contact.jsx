import "./contact.css";

const Contact = ({ ContactInfo }) => {
  return (
    <div className="contact pulse">
      <div className="contact-name">
        <h3>{ContactInfo.company}</h3>
        <p>Monday - Saturday: 7am - 9pm</p>
      </div>
      <div className="contact-info">
        <div className="contact-info-text">
          <h3>Address:</h3>
          <p>{ContactInfo.address}</p>
        </div>
        <div className="contact-info-text">
          <h3>Phone:</h3>
          <p>{ContactInfo.phone}</p>
        </div>
        <p className="contact-guide">
          Please feel free to give us a call if the location is hard to find.
          See you soon...!
        </p>
      </div>
    </div>
  );
};

export default Contact;
