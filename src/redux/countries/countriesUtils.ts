import {
  countriesNameFailure,
  countriesNameRequest,
  countriesNameSuccess,
} from './countriesActions';

export const fetchCountriesName = () => {
  return (dispatch: any) => {
    dispatch(countriesNameRequest());
    fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        const allName = data.map((countries: any) => countries.country);
        console.log(allName);
        dispatch(countriesNameSuccess(allName));
      })
      .catch((error) => {
        dispatch(countriesNameFailure(error.message));
      });
  };
};