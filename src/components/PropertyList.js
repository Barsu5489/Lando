import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PropertyList() {
  const [properties, setProperties] = useState([]); // Store the array of properties
  const [current, setCurrent] = useState(0); // Store the index of the current property
  const [imageIndex, setImageIndex] = useState(0); // Store the index of the current image

  useEffect(() => {
    // Fetch the properties from the API endpoint
    axios
      .get("http://localhost:3000/properties")
      .then((response) => {
        // Set the properties state with the data
        setProperties(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, []); // Run only once on mount

  const handlePrev = (i) => { // Add i as an argument
    if (imageIndex > 0) {
      // If there is a previous image in the current property's images array, decrease the imageIndex
      setImageIndex(imageIndex - 1);
    } else if (i > 0) { // Use i instead of current
      // If there is a previous property in the properties array, decrease the current and set the imageIndex to the last image of that property
      setCurrent(i - 1);
      setImageIndex(properties[i - 1].images.length - 1);
    }
  };

  const handleNext = (i) => { // Add i as an argument
    if (imageIndex < properties[i].images.length - 1) { // Use i instead of current
      // If there is a next image in the current property's images array, increase the imageIndex
      setImageIndex(imageIndex + 1);
    } else if (i < properties.length - 1) { // Use i instead of current
      // If there is a next property in the properties array, increase the current and set the imageIndex to zero
      setCurrent(i + 1);
      setImageIndex(0);
    }
  };

  const handleDot = (i, j) => { // Add i and j as arguments
    // Set the current to i and the imageIndex to j
    setCurrent(i);
    setImageIndex(j);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.length > 0 ? (
          properties.map((property, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-64 md:w-96 lg:w-full h-64 md:h-96 lg:h-full">
                <img
                  className="w-full h-full object-cover"
                  src={property.images[imageIndex].src}
                  alt={property.images[imageIndex].alt}
                />
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 bg-gray-800 bg-opacity-50">
                  <button
                    className="text-white"
                    onClick={() => handlePrev(i)} // Pass i as an argument
                    disabled={current === i && imageIndex === 0}
                  >
                    &lt;
                  </button>
                  <div className="flex space-x-2">
                    {property.images.map((image, j) => (
                      <button
                        key={j}
                        className={`w-4 h-4 rounded-full border border-white ${
                          current === i && imageIndex === j ? "bg-white" : ""
                        }`}
                        onClick={() => handleDot(i, j)} // Pass i and j as arguments
                      ></button>
                    ))}
                  </div>
                  <button
                    className="text-white"
                    onClick={() => handleNext(i)} // Pass i as an argument
                    disabled={
                      current === i &&
                      imageIndex === property.images.length - 1
                    }
                  >
                    &gt;
                  </button>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold">{property.name}</h2>
                <p className="text-gray-500">{property.price}</p>
                <p className="text-gray-500">{property.location}</p>
                <p className="mt-2">{property.images[imageIndex].desc}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
