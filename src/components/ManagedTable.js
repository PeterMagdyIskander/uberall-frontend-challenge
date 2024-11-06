
import React from "react";
import '../styles/card.css';
import directoryLogos from '../data/directory_logos.json'

const NotManagedTable = ({ data }) => {
    return (
        <div className="table_component" role="region" tabIndex="0">
            <h3 className="table-title">
                This Location is already registered and is being optimized
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>
                            <div>Directory</div>
                        </th>

                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((res,index) => <tr key={index}>
                            <td>
                                <div className="info-container-managed">
                                    <img className="directory-logo" src={directoryLogos[res.response.result.directoryType]} alt={`${res.response.result.directoryType}'s Logo`} />
                                    <p>{res.response.result.directoryType}</p>
                                </div>
                            </td>
                            <td>
                                {/* {res.response.result.syncStatus === "IN_SYNC" && <img src="./assets/present.svg" alt="present img" />}
                                {res.response.result.syncStatus === "NOT_IN_SYNC" && <img src="./assets/missing.svg" alt="missing img" />}
                                {res.response.result.syncStatus === "NOT_APPLICABLE" && <img src="./assets/not_available.svg" alt="not applicable img" />}
                                {res.response.result.syncStatus === "NOT_APPLICABLE" && <img src="./assets/not_available.svg" alt="not applicable img" />} */}
                                Status should be Here
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default NotManagedTable;