import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
             <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <iframe title="Google address" className="w-100"  
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14009.348089475194!2d-81.3729364!3d28.619659600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1618450103198!5m2!1sen!2sus" 
                        allowfullscreen="" loading="lazy"></iframe>
                    </div>

                    <div className="col-md-6 text-center">
                        <h5>Follow Us</h5>
                            <a className="btn btn-social-icon btn-instagram btn-lg" href="http://instagram.com/"><i className="fa fa-instagram"/></a>{' '}
                            <a className="btn btn-social-icon btn-facebook btn-lg" href="http://facebook.com/"><i className="fa fa-facebook"/></a>{' '}
                            <a className="btn btn-social-icon btn-twitter btn-lg" href="http://twitter.com/"><i className="fa fa-twitter"/></a>{' '}
                            <a className="btn btn-social-icon btn-google btn-lg" href="http://youtube.com/"><i className="fa fa-youtube"/></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <hr />
                        <p className="text-center">© Copyright 2021 Furry Friends.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;