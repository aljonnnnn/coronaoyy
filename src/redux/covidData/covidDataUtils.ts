import {
  countryData,
  covidDataError,
  covidDataRequest,
  globalData,
} from './covidDataActions';
import { ICountryCovidData, IGlobalCovidData } from './interface';

export const fetchGlobalData = () => {
  return (dispatch: any) => {
    dispatch(covidDataRequest());
    fetch('https://disease.sh/v3/covid-19/all')
      .then((response) => response.json())
      .then((data) => {
        const Data: IGlobalCovidData = {
          cases: data.cases,
          deaths: data.deaths,
          recovered: data.recovered,
          active: data.active,
          critical: data.critical,
          tests: data.tests,
          todayRecovered: data.todayRecovered,
          todayDeaths: data.todayDeaths,
          todayCases: data.todayCases,
        };
        setTimeout(() => {
          dispatch(globalData(Data));
        }, 500);
      })
      .catch((error) => {
        dispatch(covidDataError(error.message));
      });
  };
};

export const fetchCountryData = (country: any) => {
  return (dispatch: any) => {
    dispatch(covidDataRequest());
    fetch('https://disease.sh/v3/covid-19/countries/' + country)
      .then((response) => response.json())
      .then((data) => {
        const Data: ICountryCovidData = {
          cases: data.cases,
          deaths: data.deaths,
          recovered: data.recovered,
          active: data.active,
          flag: data.countryInfo.flag,
          countryName: data.country,
          critical: data.critical,
          tests: data.tests,
          todayRecovered: data.todayRecovered,
          todayDeaths: data.todayDeaths,
          todayCases: data.todayCases,
        };
        setTimeout(() => {
          dispatch(countryData(Data));
        }, 500);
      })
      .catch((error) => {
        dispatch(covidDataError(error.message));
      });
  };
};
