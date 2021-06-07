import React from 'react'
import { Link } from 'react-router-dom'


function vendorregistration() {
    return (
        <div>
            <section>
                <div className="container mt-5 mb-4">
                    <div className="row">
                        <div className="col-md-10 p-5 m-auto shadow rounded bg-light">
                            <h2 className="font-weight-bold text-success mb-3 text-center">Vendor Registeration</h2>
                            <hr  className="mb-4" />

                            <form action="" method="POST">
                                <div class="row">
                                    <div class="col form-group">
                                        <label for="pass">First Name: <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="First name" />
                                    </div>
                                    <div class="col form-group">
                                        <label for="pass">Last Name: <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="Last name" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col form-group">
                                        <label for="pass">Email : <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="Email" />
                                    </div>
                                    <div class="col form-group">
                                        <label for="pass">Store Name: <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="Store name" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col form-group">
                                        <label for="pass">Address 1: <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="Address 1" />
                                    </div>
                                    <div class="col form-group">
                                        <label for="pass">Address 2: <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="Address 2" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col form-group">
                                        <label for="pass">Country: <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="First name" />
                                    </div>
                                    <div class="col form-group">
                                        <label for="pass">City/Town: <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="Last name" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col form-group">
                                        <label for="pass">Postal Code: <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="First name" />
                                    </div>
                                    <div class="col form-group">
                                        <label for="pass">Store Phone: <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="Last name" />
                                    </div>
                                </div>   
                                <div class="row">
                                    <div class="col form-group">
                                        <label for="pass">Password: <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="First name" />
                                    </div>
                                    <div class="col form-group">
                                        <label for="pass">Confirm Password: <span className="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="Last name" />
                                    </div>
                                </div>                                
                                <div className="form-group mt-3">
                                    <button className="btn btn-outline-success btn-block w-25 text-center m-auto">Register</button>
                                </div>
                                <hr className="mt-4" />
                                <p className="m-0">Already have an account? <Link to="/login" className="text-success">Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default vendorregistration

