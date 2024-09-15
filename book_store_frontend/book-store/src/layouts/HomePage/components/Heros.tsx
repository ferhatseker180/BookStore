import { useOktaAuth } from "@okta/okta-react";
import React from "react";
import { Link } from "react-router-dom";

export const Heros = () => {
  const { authState } = useOktaAuth();

  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-2 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-6 col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <h1>What Have You Been Reading?</h1>
              <p className="lead">
                The library team would love to know what have you been reading.
                Whether it is to learn a new skill or grow within one, we will
                be able to provide the top content for you!
              </p>
              {authState?.isAuthenticated ? (
                <Link
                  type="button"
                  className="btn main-color btn-lg text-white"
                  to="search"
                >
                  Explore top box
                </Link>
              ) : (
                <Link to="/login" className="btn main-color btn-lg text-white">
                  Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-6 col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                Try to check in daily as our collection is always changing! We
                work nonstop to provide the most accurate book selection
                possible for our Luv 2 Read students! We are diligent about our
                book selection and our book selection and our books are always
                going to be our top priority.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>

      {/* Mobile Heros */}
      <div className="d-lg-none">
        <div className="container">
          <div className="row m-2">
            <div className="col-12">
              <div className="col-image-left"></div>
            </div>
            <div className="col-12 mt-2">
              <h1>What Have You Been Reading?</h1>
              <p className="lead">
                The library team would love to know what have you been reading.
                Whether it is to learn a new skill or grow within one, we will
                be able to provide the top content for you!
              </p>
              {authState?.isAuthenticated ? (
                <Link
                  type="button"
                  className="btn main-color btn-lg text-white"
                  to="search"
                >
                  Explore top box
                </Link>
              ) : (
                <Link to="/login" className="btn main-color btn-lg text-white">
                  Sign Up
                </Link>
              )}
            </div>
          </div>
          <div className="row m-2">
            <div className="col-12">
              <div className="col-image-right"></div>
            </div>
            <div className="col-12 mt-2">
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                Try to check in daily as our collection is always changing! We
                work nonstop to provide the most accurate book selection
                possible for our Luv 2 Read students! We are diligent about our
                book selection and our book selection and our books are always
                going to be our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
