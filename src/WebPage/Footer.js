import React from "react";

const Footer = () => {
  

  return (
      <div>
        <section class="">
  <footer className="bg-body-tertiary">
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">Footer Content</h5>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
            aliquam voluptatem veniam, est atque cumque eum delectus sint!
          </p>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-body">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-body">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-body">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-body">Link 4</a>
            </li>
          </ul>
        </div>

        
      </div>
    </div>

    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
      © 2020 Copyright:
      <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
  </footer>
</section>
      </div>
  );
};

export default Footer;
