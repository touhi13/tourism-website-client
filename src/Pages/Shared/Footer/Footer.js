import React from 'react';

const Footer = () => {
    return (
        <>
            {/* <div className="container"> */}
            <footer className="d-flex flex-wrap justify-content-around align-items-center py-3 mt-4 border-top shadow-lg">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src={"https://i.ibb.co/JQh4S11/logo-dark.png"} className="bi" width="128" alt="..." />
                    </a>
                    <span className="text-muted">&copy; 2021 Company, Inc</span>

                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#"><i class="fab fa-facebook"></i></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><i class="fab fa-twitter"></i></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><i class="fab fa-youtube"></i></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
                {/* <div class="col-lg-4 col-xs-12 location">
                    <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                    <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                    <p class="mb-0"><i class="fa fa-phone mr-3"></i>(541) 754-3010</p>
                    <p><i class="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>

                </div> */}
            </footer>
            {/* </div> */}
            {/* <div class="mt-5 pt-5 pb-5 footer bg-tripo">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-xs-12 about-company">
                            <h2>Heading</h2>
                            <p class="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
                            <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
                        </div>
                        <div class="col-lg-3 col-xs-12 links">
                            <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                            <ul class="m-0 p-0">
                                <li>- <a href="#">Lorem ipsum</a></li>
                                <li>- <a href="#">Nam mauris velit</a></li>
                                <li>- <a href="#">Etiam vitae mauris</a></li>
                                <li>- <a href="#">Fusce scelerisque</a></li>
                                <li>- <a href="#">Sed faucibus</a></li>
                                <li>- <a href="#">Mauris efficitur nulla</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-xs-12 location">
                            <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                            <p class="mb-0"><i class="fa fa-phone mr-3"></i>(541) 754-3010</p>
                            <p><i class="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col copyright">
                            <p class=""><small class="text-white-50">© 2019. All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    );
};

export default Footer;