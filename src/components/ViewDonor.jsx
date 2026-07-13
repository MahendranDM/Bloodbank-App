import React, { useEffect, useState } from "react";
import axios from "axios";


const ViewDonors = () => {

  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://host-demo-app.onrender.com/api/donors")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
  

      <div className="container mt-4">

        <h2 className="text-center mb-4">
          View All Donors
        </h2>

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover text-center align-middle">

            <thead className="table-dark">
              <tr>
                <th>Donor Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Blood Group</th>
                <th>Phone</th>
                <th>Email</th>
                <th>City</th>
                <th>Weight (kg)</th>
                <th>Last Donation</th>
                <th>Created At</th>
              </tr>
            </thead>

            <tbody>
              {data.map((value, index) => (
                <tr key={index}>
                  <td>{value.donor_name}</td>
                  <td>{value.age}</td>
                  <td>{value.gender}</td>
                  <td>{value.blood_group}</td>
                  <td>{value.phone}</td>
                  <td>{value.email ? value.email : "-"}</td>
                  <td>{value.city}</td>
                  <td>{value.weight_kg}</td>
                  <td>
                    {value.last_donation_date
                      ? value.last_donation_date
                      : "-"}
                  </td>
                  <td>{value.created_at}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default ViewDonors;