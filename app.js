import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -logo
 *  -nav-items
 * Body
 *  -Search
 *  -Restaurant Container
 *  -Restaurant Card
 *      -img
 *      -Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo" 
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
                    />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const {resData} = props;

    const {
      cloudinaryImageId, 
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData?.info;

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0" }}>
            <img 
                className="res-logo" 
                alt="res-logo" 
                src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto.9_auto,w_508,h_320,c_fill/" + 
                cloudinaryImageId 
              }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo / 100}</h4>
            <h4>{deliveryTime}Minutes</h4>
        </div>
    );
};

const resList = [{
  "info": {
    "id": "751353",
    "name": "Tim Hortons",
    "cloudinaryImageId": "26c8263d346b308a6a62c003d1d9eca1",
    "locality": "8TH BLOCK",
    "areaName": "KORAMANGALA",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Coffee",
      "Cafe",
      "Beverages",
      "Desserts",
      "sandwich",
      "Fast Food"
    ],
    "avgRating": 4.1,
    "parentId": "258236",
    "avgRatingString": "4.1",
    "totalRatingsString": "100+",
    "sla": {
      "deliveryTime": 28,
      "lastMileTravel": 6.1,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "6.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-06-15 04:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/tim-hortons-8th-block-koramangala-bangalore-751353",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "76879",
    "name": "Art Of Delight - Ice Creams, Sundaes And Desserts",
    "cloudinaryImageId": "k26tlvm4wdapvrtndmdv",
    "locality": "1st Block",
    "areaName": "Kalyan Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Desserts",
      "Ice Cream"
    ],
    "avgRating": 4.5,
    "parentId": "474822",
    "avgRatingString": "4.5",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 34,
      "lastMileTravel": 8.9,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "8.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-06-15 02:30:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/art-of-delight-ice-creams-sundaes-and-desserts-1st-block-kalyan-nagar-bangalore-76879",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "147682",
    "name": "McCafe by McDonald's",
    "cloudinaryImageId": "ks69gkedhk84lkaxwjll",
    "locality": "McCafe, Ashwini Complex",
    "areaName": "Indiranagar",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Beverages",
      "Desserts"
    ],
    "avgRating": 3.1,
    "parentId": "8263",
    "avgRatingString": "3.1",
    "totalRatingsString": "100+",
    "sla": {
      "deliveryTime": 36,
      "lastMileTravel": 6.1,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "6.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-06-15 03:45:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/mccafe-by-mcdonalds-mccafe-ashwini-complex-indiranagar-bangalore-147682",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "395202",
    "name": "McDonald's Gourmet Burger Collection",
    "cloudinaryImageId": "rqdtdkc3iqzxodv6vtyf",
    "locality": "MG Road",
    "areaName": "Central Bangalore",
    "costForTwo": "₹600 for two",
    "cuisines": [
      "Burgers",
      "Beverages",
      "Cafe",
      "Desserts"
    ],
    "avgRating": 4.1,
    "parentId": "10761",
    "avgRatingString": "4.1",
    "totalRatingsString": "100+",
    "sla": {
      "deliveryTime": 27,
      "lastMileTravel": 0.7,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "0.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-06-15 02:45:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-mg-road-central-bangalore-bangalore-395202",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "402714",
    "name": "Indiana Burgers",
    "cloudinaryImageId": "lflq8ulpskdypnl2gbak",
    "locality": "Millars Road",
    "areaName": "Vasanth Nagar",
    "costForTwo": "₹150 for two",
    "cuisines": [
      "Burgers",
      "American",
      "Fast Food",
      "Beverages",
      "Desserts"
    ],
    "avgRating": 3.6,
    "parentId": "5714",
    "avgRatingString": "3.6",
    "totalRatingsString": "100+",
    "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-06-21 00:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹115",
      "discountCalloutInfo": {
        "message": "Free Delivery",
        "logoCtx": {
          "logo": "v1655895371/free_delivery_logo_hqipbo.png"
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/indiana-burgers-millars-road-vasanth-nagar-bangalore-402714",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "420485",
    "name": "Keventers Ice Cream",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/6/c225a4e8-4b98-4c14-939b-361c7bcae118_420485.JPG",
    "locality": "Mantri Square",
    "areaName": "Malleshwaram",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Ice Cream",
      "Desserts"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "272044",
    "avgRatingString": "4.5",
    "totalRatingsString": "50+",
    "sla": {
      "deliveryTime": 33,
      "lastMileTravel": 5,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "5.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-06-15 03:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/keventers-ice-cream-mantri-square-malleshwaram-bangalore-420485",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "38634",
    "name": "Third Wave Coffee",
    "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
    "locality": "Koramangala",
    "areaName": "Koramangala",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Beverages",
      "Bakery",
      "Continental"
    ],
    "avgRating": 4.4,
    "parentId": "274773",
    "avgRatingString": "4.4",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 34,
      "lastMileTravel": 7.5,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "7.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-06-15 03:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/third-wave-coffee-koramangala-bangalore-38634",
    "type": "WEBLINK"
  }
}];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

