const style = {
  border: "0",
  borderRadius: "15px",
};

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.744834304517!2d106.69034377043431!3d10.829932764557205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529221f677b0b%3A0x2b73780d71c57b95!2zSGnhu4d1IOG6o25oIEJlbyBCZW8gLSBNckJlbyBTdHVkaW8gLSBDaOG7pXAg4bqjbmggY2jDom4gZHVuZywgcHJvZmlsZSwgc-G6o24gcGjhuqltLOKApg!5e0!3m2!1svi!2s!4v1699589682048!5m2!1svi!2s"
      width="100%"
      height="600vh"
      style={style}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Map;
