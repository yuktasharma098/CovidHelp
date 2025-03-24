import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop"

export default function Medicine() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: "1eAOeEziMEpXFjLDMoZiL5csLZNw18XPaGFDHJ6oLYW8",
            simpleSheet: true
        })
            .then((data) => setData(data))
            .catch((err) => console.warn(err));
    }, []);

    return (
        <>

            <>
                <h1 className="abouthead text-center mt-5">Plasma Availability </h1>
                <h1 className="abouthead mt-0 text-center">Details</h1>
                <ul>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">State</th>
                                <th scope="col"> Resource</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Addresss</th>

                                <th scope="col">Last Verified</th>
                            </tr>
                        </thead>
                        {data.map((item, i) => (
                            <Fragment key={i}>
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>{item.State}</td>
                                        <td>{item.resource}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.address}</td>
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
