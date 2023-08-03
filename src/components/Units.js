import React, { useEffect, useState } from 'react'
import '../App.css'
function Units() {
  // Use state to store the units data
  const [units, setUnits] = useState([])

  // Use state to store the filter value
  const [filter, setFilter] = useState('all')

  // Use useEffect hook to fetch data from localhost
  useEffect(() => {
    // Use axios or fetch to make the request
    fetch('http://localhost:3001/unit')
      .then(response => response.json()) // Parse the response as JSON
      .then(data => setUnits(data)) // Set the units data in state
      .catch(error => console.error(error)) // Handle any errors
  }, []) // Provide an empty dependencies array to run only once

  // Use a function to handle filter change
  const handleFilterChange = (value) => {
    // Set the filter value in state
    setFilter(value)
  }

  // Use a function to filter the units by status
  const filterUnits = (units) => {
    // If the filter value is 'all', return all the units
    if (filter === 'all') {
      return units
    }

    // Otherwise, return only the units that match the filter value
    return units.filter(unit => unit.status === filter)
  }

  // Use map to render each unit as a card
  return (
    <div className="container">
      {/* Use buttons to create the filter options */}
      <div className="filter">
        <button className={`filter-button ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('all')}>All</button>
        <button className={`filter-button ${filter === 'paid' ? 'active' : ''}`} onClick={() => handleFilterChange('paid')}>Paid</button>
        <button className={`filter-button ${filter === 'unpaid' ? 'active' : ''}`} onClick={() => handleFilterChange('unpaid')}>Unpaid</button>
        <button className={`filter-button ${filter === 'vacant' ? 'active' : ''}`} onClick={() => handleFilterChange('vacant')}>Vacant</button>
      </div>
      {/* Use the filterUnits function to display only the filtered units */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {filterUnits(units).map(unit => (
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden" key={unit.id}>
            <div className="card-body p-4">
              <h4 className="card-title text-xl font-bold">Unit {unit.id}</h4>
              <p className="card-text text-gray-600">House number: {unit.houseNumber}</p>
              <p className="card-text text-gray-600">Floor number: {unit.floorNumber}</p>
              <p className="card-text text-gray-600">Tenant name: {unit.tenantName}</p>
              <p className="card-text text-gray-600">Rent amount: {unit.rentAmount}</p>
              <p className="card-text text-gray-600">House type: {unit.houseType}</p>
            </div>
            {/* Use different colors to indicate the status of the unit */}
            <div className={`card-footer p-2 text-white text-center ${unit.status === 'paid' ? 'bg-green-500' : unit.status === 'unpaid' ? 'bg-red-500' : 'bg-yellow-500'}`}>
              {unit.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Units


