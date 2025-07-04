const Footer = () => {
  return (
    <div className='container-fluid footerContainer'>
      <div className='row text-center px-5 py-4 footerContent'>
        <div className="col-12 col-md-3 mb-3">
          <h6 className="footerTitle">ABOUT</h6>
          <ul className='footerList'>
            <li>Who we are?</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="col-12 col-md-3 mb-3">
          <h6 className="footerTitle">HELP</h6>
          <ul className='footerList'>
            <li>Support</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="col-12 col-md-3 mb-3">
          <h6 className="footerTitle">CONTACT</h6>
          <ul className='footerList'>
            <li>Terms & Condition</li>
            <li>Return & Exchange Policy</li>
          </ul>
        </div>
        <div className="col-12 col-md-3 mb-3">
          <h6 className="footerTitle">FOLLOW US</h6>
          <ul className='footerList'>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
