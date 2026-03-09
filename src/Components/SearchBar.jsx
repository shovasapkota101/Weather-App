import React, { useState } from 'react'

const SearchBar = (fetchWeather) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim) {
            fetchWeather(city)
            setCity('');
        }
    }
  return (
    <form className='flex' onSubmit={handleSubmit} action="">
        <input type="text" placeholder='Enter city name' value={city} onChange={(e) => setCity(e.target.value)}
        className='flex-1 p-2 border border-r-0 border-gray-300 rounded-l-lg outline-none' />
        <button className='bg-blue-500 border cursor-pointer p-2 hover:bg-blue-600 rounded-r-lg' type='submit'>Search</button>
    </form>
  )
}

export default SearchBar