import React from 'react';

const News = () => {
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h3 className="text-center tour-heading mb-5">Latest News Articles</h3>
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            <div className="card-images">
                                <img className="card-img-top" src={"http://layerdrops.com/tripo/assets/images/blog/blog-1-1.jpg"} alt="..." />
                            </div>
                            <div className="card-body mx-auto">
                                <h5 className="card-title fs-3 text-dark mb-1">{"14 Things to see and do when visiting japan"}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <div className="card-images">
                                <img className="card-img-top" src={"http://layerdrops.com/tripo/assets/images/tour/tour-1-2.jpg"} alt="..." />
                            </div>
                            <div className="card-body mx-auto">
                                <h5 className="card-title fs-3 text-dark mb-1">{"Travel the most beautiful places in the world"}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <div className="card-images">
                                <img className="card-img-top" src={"http://layerdrops.com/tripo/assets/images/tour/tour-1-3.jpg"} alt="..." />
                            </div>
                            <div className="card-body mx-auto">
                                <h5 className="card-title fs-3 text-dark mb-1">{"Journeys are best measured in new friends"}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;