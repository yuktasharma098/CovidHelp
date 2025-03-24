import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop"

export default function Beds() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: "1_hQGuxPn0KsQPIPHWDl70eYEk0OwaKWpvHi7eigPaVs",
            simpleSheet: true
        })
            .then((data) => setData(data))
            .catch((err) => console.warn(err));
    }, []);

    return (
        <>

            <>
                <h1 className="abouthead text-center mt-5">Hospital Beds Availability </h1>
                <h1 className="abouthead mt-0 text-center">Details</h1>
                <ul>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">State</th>
                                <th scope="col">Hospital Name</th>
                                <th scope="col">Hospital Address</th>
                                <th scope="col">Contacts</th>
                                <th scope="col">Number Of Beds</th>
                                <th scope="col">Last Verified</th>
                            </tr>
                        </thead>
                        {data.map((item, i) => (
                            <Fragment key={i}>
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>{item.state}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.noofbeds}</td>
                                        <td>{item.lastverified}</td>
                                    </tr>
                                </tbody>




                                <br />
                            </Fragment>

                        ))}
                    </table>
                </ul>
            </>
        </>
    );
}
