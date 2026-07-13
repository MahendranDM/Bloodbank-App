import React from 'react'

const AddDonor = () => {
  return (
    <div>
        

<div className="container mt-4">
  <div className="row">
    <div className="col-12">

      <div className="row g-3">

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Donor Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label d-block">Gender</label>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
            />
            <label className="form-check-label">Male</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
            />
            <label className="form-check-label">Female</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
            />
            <label className="form-check-label">Other</label>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Blood Group</label>
          <select className="form-select">
            <option>Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">City</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Weight (kg)</label>
          <input type="number" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Last Donation Date</label>
          <input type="date" className="form-control" />
        </div>

        <div className="col-12">
          <button className="btn btn-danger">
            Register Donor
          </button>
        </div>

      </div>

    </div>
  </div>
</div>




    </div>
  )
}

export default AddDonor