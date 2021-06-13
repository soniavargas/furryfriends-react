import React from 'react';

function Services(props) {
    return(
        <React.Fragment>
            <section className=" fun-section">
                <div className="container">
                    <div className="row">
                        <div className="col text-center mb-5">
                            <h2>Tail-wagging and purring guaranteed!</h2>
                            <p>Check out all the options for fun below.</p>
                        </div>
                    </div>   

                    <div className="row align-items-center ">
                        <div className="col-md-4">
                            <img className="d-flex mr-3 w-100 img-thumbnail" src="./assets/images/golden.jpg"/>     
                        </div>
                        <div className="col">
                            <h3>Stay with Us!</h3>
                            <p className="d-none d-sm-block"> 
                                <em>"We offer the best-in-show boarding with sizable suites and fun activity packages, so you and your pet can both enjoy much-deserved vacations." </em>
                                <a href="">Learn more </a>
                            </p>      
                        </div>
                    </div>
                    
                    <div className="row align-items-center ">
                        
                        <div className="col">
                            <h3>Play with Us!</h3>
                            <p className="d-none d-sm-block"> 
                                <em>"Our daycare options give your pet a fun-filled experience with plenty of time to play with all  their friends!" </em>
                                <a href="">Learn more </a>
                            </p>      
                        </div>

                        <div className="col-md-4">
                            <img className="d-flex mr-3 w-100 img-thumbnail" src="./assets/images/katie.jpg"/>     
                        </div>
                    </div>

                    <div className="row align-items-center ">
                        <div className="col-md-4">
                            <img className="d-flex mr-3 w-100 img-thumbnail" src="./assets/images/zoe.jpg"/>     
                        </div>
                        <div className="col">
                            <h3>Spa with Us!</h3>
                            <p className="d-none d-sm-block"> 
                                <em>"Let our grooming experts work their magic. From a simple bath, to head-to-paw pampering – we’ll have your pet looking and feeling fabulous in no time!" </em>
                                <a href="">Learn more </a>
                            </p>      
                        </div>
                    </div>
                    
                </div>
            </section>

            <div className="container my-5">
                <div className="row">
                    <div className="col text-center mb-5">
                        <h2>What we Offer:</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="flipcard">
                            <div className="flipcard-wrap">
                                <div className="card card-front">
                                
                                    <img src="./assets/images/charles.jpg" alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <h5>Pet Sitting</h5>
                                        <p>Dog walking</p>
                                    </div>
                                </div>

                                <div className="card card-back">
                                    <div className="card-body">
                                        Does your dog need relief and a way to burn off their energy while you are away? That’s what we are for. A Pet Concierge will visit your home to walk your dog, play ball in the yard or give them some love and attention complete with belly rubs and head scratches. A 60 minute visit is required for households with 6 or more dogs. We offer 20-30, 45 & 60-minute visit options.
                                    </div>
                                </div>
                                </div>        
                            </div>
                       
                    </div>

                    <div className="col-md-4">
                        <div className="flipcard">
                            <div className="flipcard-wrap">
                                <div className="card card-front">
                                    <img src="./assets/images/kanashi.jpg" alt="" className="card-img-top" />
                                    <div className="card-body">
                                        <h5>Cat care</h5>
                                        <p>Taking care of all your cat's needs</p>
                                    </div>
                                </div>

                                <div className="card card-back">
                                    <div className="card-body">
                                        A Pet Concierge will come to feed and love your cat or small animal: bunnies, birds, reptiles fish and more. We’ll also scoop the litter, bring in the mail, take out the trash and water plants at no extra charge. For optimal care, clients with 6 pets or more are recommended to schedule a 60 Minute Cat Care Visit. We offer 20-30, 45 & 60-minute visit options.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                           <div className="flipcard">
                                <div className="flipcard-wrap">
                                        <div className="card card-front">
                                            <img src="./assets/images/lawrence.jpg" alt="" className="card-img-top"/>
                                            <div className="card-body">
                                                <h5>Pet Taxi</h5>
                                                <p>Taking care of all your pet's needs</p>
                                            </div>
                                        </div>

                                        <div className="card card-back">
                                            <div className="card-body">
                                                $30 per hour / Do you need someone to pick-up your fur baby from the groomer, vet or clinic? We’ll take care of it! Proper documentation from are required when necessary. Vet and groomer bills should be taken care of by the pet owner. This service is normally with a 10 mile distance. *Time is calculated from driver’s start location until pet is dropped off.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>

        </React.Fragment>
    )
}

export default Services;