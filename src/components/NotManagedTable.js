
import React from "react";
import '../styles/card.css';
import directoryLogos from '../data/directory_logos.json'

const NotManagedTable = ({ data }) => {
    return (
        <div className="table_component" role="region" tabIndex="0">
             <h3 className="table-title">
             Your online business listing visibility 
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>
                            <div>Directory</div>
                        </th>
                        <th>
                            <div>Business Info</div>
                        </th>
                        <th>Hours</th>
                        <th>Photos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((res,index) => <tr key={index} >
                            <td>
                                <div className="info-container">
                                    <img className="directory-logo" src={directoryLogos[res.response.result.directoryType]} alt={`${res.response.result.directoryType}'s Logo`} />
                                    <p>{res.response.result.directoryType}</p>
                                </div>
                            </td>
                            <td>{res.response.result.listingId ? <div
                                className="info-container">
                                <p className={res.response.result.nameStatus == "MATCH" ? "" : "error-message"}>{res.response.result.name}</p>
                                <p className={res.response.result.streetAndNoStatus == "MATCH" ? "" : "error-message"}>{res.response.result.streetAndNo}, {res.response.result.city} </p>
                                <p className={res.response.result.phoneStatus == "PRESENT" ? "" : "error-message"}>{res.response.result.phoneStatus == "MISSING" ? "Phone number missing":res.response.result.phone }</p>
                                <p className={res.response.result.websiteStatus == "PRESENT" ? "" : "error-message"}>{res.response.result.websiteStatus == "MISSING" ?"Website missing": res.response.result.website }</p>
                            </div> :
                                <p className="error-message">Listing not found
                                </p>}</td>
                            <td>
                                {res.response.result.openingHoursStatus === "PRESENT" && <img src="./assets/present.svg" alt="present img" />}
                                {res.response.result.openingHoursStatus === "MISSING" && <img src="./assets/missing.svg" alt="missing img" />}
                                {res.response.result.openingHoursStatus === "NOT_APPLICABLE" && <img src="./assets/not_available.svg" alt="not applicable img" />}
                            </td>
                            <td>{res.response.result.photosStatus === "PRESENT" && <img src="./assets/present.svg" alt="present img" />}
                                {res.response.result.photosStatus === "MISSING" && <img src="./assets/missing.svg" alt="missing img" />}
                                {res.response.result.photosStatus === "NOT_APPLICABLE" && <img src="./assets/not_available.svg" alt="not applicable img" />}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default NotManagedTable;