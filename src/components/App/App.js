import React, { Component } from "react";
import { ReactDOM } from "react";

import './App.css';


import BusinessList from '../BusinessList/BusinessList'
import SearchBar from "../SearchBar/SearchBar";

function App() {
  // Array of businesses
  const restaurantObjects = [
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Bordertown',
      state: 'NY',
      zipCode: '10101',
      category: 'ITALIAN',
      rating: 4.5,
      reviewCount: 90
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Tonys Trattoria',
      address: '456 Pepperoni Lane',
      city: 'Foodsville',
      state: 'TX',
      zipCode: '54321',
      category: 'ITALIAN',
      rating: 4.2,
      reviewCount: 75
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Margheritas Pizza Palace',
      address: '123 Main Street',
      city: 'Pizza Town',
      state: 'CA',
      zipCode: '98765',
      category: 'ITALIAN',
      rating: 4.8,
      reviewCount: 120
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Tonys Trattoria',
      address: '456 Pepperoni Lane',
      city: 'Foodsville',
      state: 'TX',
      zipCode: '54321',
      category: 'ITALIAN',
      rating: 4.2,
      reviewCount: 75
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Luigis Pasta Paradise',
      address: '789 Spaghetti Street',
      city: 'Italianville',
      state: 'IL',
      zipCode: '24680',
      category: 'ITALIAN',
      rating: 4.6,
      reviewCount: 110
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Ristorante Buon Gusto',
      address: '101 Gourmet Avenue',
      city: 'Foodieville',
      state: 'FL',
      zipCode: '30303',
      category: 'ITALIAN',
      rating: 4.4,
      reviewCount: 95
    }
  ];
  return (
    <div className="app-container">
      <div className="ravenous-header">ravenous</div>
      <SearchBar />
      <BusinessList businessObjects={restaurantObjects}/>
    </div>
  )
}

export default App;