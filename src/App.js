import React, { useEffect, useState } from "react";
import { search, searchUsingIdAndToken } from "./api";
import countriesAndDirectories from './data/countries_and_directories.json';
import countryNames from './data/country_names.json';
import { useForm } from 'react-hook-form';
import Loader from './components/Loader';
import NotManagedTable from './components/NotManagedTable';
import ManagedTable from './components/ManagedTable';
import SearchHistory from './components/SearchHistory';
import Header from './components/Header';
import { PieChart } from 'react-minimal-pie-chart';
import './styles/card.css';
const App = () => {
  const [getData, setGetData] = useState([]);
  const [error, setError] = useState(null);
  const [pieChartData, setPieChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alreadyManagedMode, setAlreadyManagedMode] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();

  const parseCountry = (data) => {
    return data.country.includes(":") ? data.country.split(" : ")[0] : data.country;
  };
  
  const createPayload = (data, country) => {
    return {
      name: data.name,
      street: data.streetAndNo,
      zip: data.zip,
      country
    };
  };
  
  const saveToSearchHistory = (result) => {
    const existingHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    existingHistory.push({
      name: result.response.searchData.name,
      city: result.response.searchData.city,
      time: new Date().getTime(),
      streetAndNo: result.response.searchData.streetAndNo,
      zip: result.response.searchData.zip,
      country: result.response.searchData.country
    });
    localStorage.setItem("searchHistory", JSON.stringify(existingHistory));
    setSearchHistory(existingHistory);
  };
  
  const fetchAdditionalData = async (searchData, country) => {
    const promises = countriesAndDirectories[country].map(directory =>
      searchUsingIdAndToken(searchData.id, searchData.token, directory)
    );
    return Promise.all(promises);
  };
  
  const processResultData = (resultData) => {
    const successData = resultData.filter(res => res.status === "SUCCESS");
    const missingDataNumber = calculateMissingData(successData);
    const incorrectDataNumber = calculateInorrectData(successData);
    const correctDataNumber = calculateCorrectData(successData);
  
    const chartData = [
      { title: 'MISSING', value: missingDataNumber, color: '#dd0018' },
      { title: 'INCORRECT', value: incorrectDataNumber, color: '#ff902f' },
      { title: 'CORRECT', value: correctDataNumber, color: '#00c653' },
    ];
  
    setAlreadyManagedMode(successData.some(res => res.response.alreadyManaged === true));
    setPieChartData(chartData);
    setGetData(successData);
  };
  
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const country = parseCountry(data);
      const payload = createPayload(data, country);
  
      // First API call
      const response = await search(payload);
      if (!response.ok) throw new Error("Network response was not ok");
  
      const result = await response.json();
      saveToSearchHistory(result);
  
      // Additional data fetch and processing
      const res = await fetchAdditionalData(result.response.searchData, country);
      const resultData = await Promise.all(res.map(response => response.json()));
      processResultData(resultData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const calculateMissingData = (successData) => {
    return successData.filter(data => data.response.result.listingId === null).length
  }
  const calculateCorrectData = (successData) => {
    return successData.filter(data => data.response.result.listingId != null && data.response.result.nameStatus == "MATCH" && data.response.result.streetAndNoStatus == "MATCH" && data.response.result.phoneStatus == "MATCH" && data.response.result.websiteStatus == "MATCH").length
  }
  const calculateInorrectData = (successData) => {
    return calculateMissingData(successData) + calculateCorrectData(successData);
  }

  useEffect(() => {
    const existingHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(existingHistory);
  }, [])
  return (
    <div>
      <Header></Header>
      {!loading && <><form onSubmit={handleSubmit(onSubmit)}>
        <div className="info-container"><label htmlFor="country">Country</label>
          <select
            id="country"
            {...register("country", { required: "Country is required" })}
            className={errors.country ? "input-error" : ""}
          >
            <option value="">Select Country</option>
            {Object.keys(countryNames).map((country) => (
              <option key={country} value={`${country} : ${countryNames[country]}`}>
                {country} : {countryNames[country]}
              </option>
            ))}
          </select>
          {errors.country && <p className="error-message">{errors.country.message}</p>}</div>


        <div className="info-container"><label htmlFor="name">Company Name</label>
          <input
            id="name"
            type="text"
            placeholder="Company name"
            {...register("name", { required: "Company name is required", maxLength: 100 })}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}</div>


        <div className="info-container"><label htmlFor="streetAndNo">Street and Number</label>
          <input
            id="streetAndNo"
            type="text"
            placeholder="Street and Number"
            {...register("streetAndNo", { required: "Street and number are required" })}
            className={errors.streetAndNo ? "input-error" : ""}
          />
          {errors.streetAndNo && <p className="error-message">{errors.streetAndNo.message}</p>}</div>


        <div className="info-container"><label htmlFor="zip">ZIP/Postcode</label>
          <input
            id="zip"
            type="number"
            placeholder="ZIP/Postcode"
            {...register("zip", { required: "ZIP/Postcode is required", maxLength: 12 })}
            className={errors.zip ? "input-error" : ""}
          />
          {errors.zip && <p className="error-message">{errors.zip.message}</p>}</div>


        <input className="submit" type="submit" value="CHECK NOW" />
      </form>
        <div>
          <h3 className="search-history-title">
            Previous searches:
          </h3>
          <SearchHistory data={searchHistory} handleSubmit={onSubmit}></SearchHistory>
        </div></>}

      <div>
        {loading && <Loader></Loader>}
        {(alreadyManagedMode && getData.length != 0 && !loading) && <ManagedTable data={getData}></ManagedTable>}
        {(!alreadyManagedMode && getData.length != 0 && !loading) && <>
          <PieChart style={{
            height: "250px"
          }}
            data={pieChartData}
          />
          <NotManagedTable data={getData}></NotManagedTable>
        </>}
      </div>

    </div>
  );
};

export default App;
