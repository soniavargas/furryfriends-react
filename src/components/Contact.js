import React from 'react';

function Contact(props) {
    return (
        <React.Fragment>
            <div id="contactus" className="container contact-section">
                <div className="row">
                    <div className="col-12 title-section">
                        <h2>Get in touch</h2>
                    </div>
                    <div className="col-lg-6 col-m-12">
                        <form>
                            <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-submit">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-m-12">

                        <a role="button" className="btn " href="1110LeeRd,WinterPark,FL."><i className="fa fa-map-marker"></i> 1110 Lee Rd, Winter Park, FL.</a>
                            <br />
                        <a role="button" className="btn " href="tel:+14075551425"><i className="fa fa-phone"></i> 1-407-555-1425</a>
                            <br />
                        <a role="button" className="btn " href="mailto:furryfriends@gmail.com"><i className="fa fa-envelope-o"></i> furryfriends@gmail.com</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;