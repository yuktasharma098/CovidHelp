import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop"

export default function Medicine() {
       const [data, setData] = useState([]);

       useEffect(() => {
              Tabletop.init({
                     key: "1a7OS6eNClcAb2CSh39o40fTh24SEiQlu7e3R7i0nocc",
                     simpleSheet: true
              })
                     .then((data) => setData(data))
                     .catch((err) => console.warn(err));
       }, []);

       return (
              <>

                     <>
                            <h1 className="abouthead text-center mt-5">Medicine Availability </h1>
                            <h1 className="abouthead mt-0 text-center">Details</h1>
                            <ul>
                                   <table classNames="table table-striped">
                                          <thead>
                                                 <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col">State</th>
                                                        <th scope="col"> Contacts</th>
                                                        <th scope="col">Address</th>
                                                        <th scope="col">Medicine</th>
                                                        <th scope="col">Availability</th>
                                                        <th scope="col">Last Verified</th>
                                                 </tr>
                                          </thead>
                                          {data.map((item, i) => (
                                                 <Fragment key={i}>
                                                        <tbody>
                                                               <tr>
                                                                      <th scope="row"></th>
                                                                      <td>{item.state}</td>
                                                                      <td>{item.contact}</td>
                                                                      <td>{item.address}</td>
                                                                      <td>{item.medicine}</td>
                                                                      <td>{item.availability}</td>
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
