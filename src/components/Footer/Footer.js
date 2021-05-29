import React from "react";


export const Footer = () => {
  return (
    //  Footer
    // <!-- Footer -->
    <footer className="page-footer font-small  pt-2 border-top">
      {/* <!-- Footer Links --> */}
      <div className="container-fluid text-center ">
        <h5 className="text-uppercase">Contactame</h5>
        <a href="https://open.spotify.com/artist/3epdpagxhESfkc2tTfTruj?si=vSREMOKtRby8AAUWxqmpNg">
          <i className="fab fa-2x fa-spotify m-2"></i>
        </a>
        <a href="https://www.instagram.com/chinomangiantini/?hl=es-la">
          <i className="fab fa-2x fa-instagram"></i>
        </a>
      </div>

      {/* <!-- Copyright --> */}
      <div className="footer-celular text-center py-1">
        Cel | (+54) 9 341 393 9592
      </div>
      <div className="footer-copyright text-center">
        © copyright 2021
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};
