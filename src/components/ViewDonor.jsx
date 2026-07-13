import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const ViewDonors = () => {
  const [data, changeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);

    axios
      .get("https://host-demo-app.onrender.com/api/donors")
      .then((response) => {
        changeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">View All Donors</h2>

        {loading ? (
          <h4 className="text-center text-primary">Loading...</h4>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Blood Group</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Weight (kg)</th>
                </tr>
              </thead>

              <tbody>
                {data.map((value) => (
                  <tr key={value.id}>
                    <td>{value.donor_name}</td>
                    <td>{value.age}</td>
                    <td>{value.gender}</td>
                    <td>{value.blood_group}</td>
                    <td>{value.phone}</td>
                    <td>{value.city}</td>
                    <td>{value.weight_kg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDonors;