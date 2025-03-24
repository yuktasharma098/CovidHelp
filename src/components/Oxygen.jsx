import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop"

export default function Oxygen() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: "1-vVN1gKmj91M9ypS6z64U6Uf3lIcNlKkUBSKH6qe_vY",
            simpleSheet: true
        })
            .then((data) => setData(data))
            .catch((err) => console.warn(err));
    }, []);

    return (
        <>

            <>
                <h1 className="abouthead text-center mt-5">Oxygen Cylinders Availability </h1>
                <h1 className="abouthead mt-0 text-center">Details</h1>
                <ul>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">State</th>
                                <th scope="col">Address</th>
                                <th scope="col">Contacts</th>
                                <th scope="col">Status</th>
                                <th scope="col">Last Verified</th>
                            </tr>
                        </thead>
                        {data.map((item, i) => (
                            <Fragment key={i}>
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>{item.state}</td>

                                        <td>{item.address}</td>

                                        <td>{item.contact}</td>
                                        <td>{item.status}</td>
                                        <td>{item.lastVerified}</td>

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
