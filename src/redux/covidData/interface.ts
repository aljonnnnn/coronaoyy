export interface IGlobalCovidData {
  active: string;
  cases: number;
  critical: number;
  deaths: number;
  recovered: number;
  tests: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
}

export interface ICountryCovidData extends IGlobalCovidData {
  countryName: string;
  flag: string;
}
