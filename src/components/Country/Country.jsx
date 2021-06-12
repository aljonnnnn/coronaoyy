import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import globalICon from '../../assets/img/global.svg'

const Country = () => {
    const country = useSelector(state => state.covidData.countryData)    
    
    return useMemo(() => {
        return (
            <div className="country">
                <span className='country__name'>{country ? country.countryName : 'Global'}</span>
                <img className='country__flag' src={country ? country.flag : globalICon} alt=""/>
            </div>
        )
    }, [country])
}

export default Country;