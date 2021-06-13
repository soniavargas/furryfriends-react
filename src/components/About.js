
import React from 'react';

function About(props) {
    return (
        <React.Fragment>
            <div id="aboutus" className="container">
                <div className="row">
                    <div className="col pt-5 text-center">
                        <h2>Welcome to Furry Friends </h2>
                        <h3>Pet Concierge</h3>
                        <p>At Furry Friends Pet Concierge, we care for all breeds, including those with special needs! We keep the needs of you and your pet top-of-mind, and cater to each pet's unique personality. Stop by to see why WE are the perfect place for your furry friend. We look forward to seeing your pets and providing the same level of care as always. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="feature-box col-md-4 text-center">
                            <i className="icon fa fa-check-circle fa-4x"></i>
                            <h3 className="feature-title">Services.</h3>
                            <p>A Pet Concierge will visit your home to walk your dog, play ball in the yard or give them some love and attention complete with belly rubs and head scratches. </p>
                    </div>

                    <div className="feature-box col-md-4 text-center">
                            <i className="icon fa fa-bath fa-4x"></i>
                            <h3 className="feature-title">Grooming.</h3>
                            <p>Bath, Nail Trimming, Ear Cleaning, Blow Dry & Fifteen Minute brush out.</p>
                    </div>

                    <div className="feature-box col-md-4 text-center">
                            <i className="icon fa fa-taxi fa-4x"></i>
                            <h3 className="feature-title">Pet Concierge.</h3>
                            <p>Do you need someone to pick-up your fur baby from the vet or clinic? We’ll take care of it!</p>
                    </div>
                </div>  
            </div>
        </React.Fragment>
    );
}


export default About;