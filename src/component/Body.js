import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");
  
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    
    // optional chaining 
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
    ) : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input 
              type="text" 
              className="search-box" 
              value={searchText} 
              onChange={(e) => {
                setSearchText(e.target.value)
              }} 
            />
            <button
              onClick={() => {
                console.log(searchText);

                const filteredRestaurant = listOfRestaurants.filter((res) => 
                  res.data.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredRestaurant(filteredRestaurant);

              }}
              >
                Search
              </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setlistOfRestaurants(filteredList);
            }}
            >
              Top Rated Restaurants
          </button>         
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
        </div>
      </div>
    );
  };
  

export default Body;