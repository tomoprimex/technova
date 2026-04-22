"use client"
import React from "react"

export default function Signin(){
    return(
        <div>
            {/* Button triggers modal */}
      <button
        className="btn btn-success mt-3"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#signInModal"
      >
        Get Started
      </button>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="signInModal"
        tabIndex="-1"
        aria-labelledby="signInModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signInModalLabel">
                Sign In
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {/* Sign-In Form */}
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Sign In
                </button>
              </form>

              <p className="text-center mt-3">
                <a href="#">Forgot password?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}