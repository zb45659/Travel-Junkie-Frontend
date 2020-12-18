import React, {useState, useEffect, useRef} from 'react'
import {Link,Route} from 'react-router-dom';
import Geocode from "react-geocode";
import MapContainer from "./map/Map"

Geocode.setApiKey("AIzaSyALqkD9f1jRZEwX-Qtn7dt47CdgPegY56Q");
Geocode.setLanguage("en");


let place = {
    name:"",
    lat: Number,
    lng: Number
}


let autoComplete;

const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
  
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }
  
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };
  
  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { componentRestrictions: { country: "us" } }
    );
    autoComplete.setFields(["formatted_address", "name", "geometry"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
  }
  
  async function handlePlaceSelect(updateQuery) {
      
    const addressObject = autoComplete.getPlace();
    // console.log(addressObject)
    const query = addressObject.name ;
    updateQuery(query);
    place.name = query
    // console.log(addressObject);
    Geocode.fromAddress(`${addressObject}`).then(
      response => {
        const {lat, lng} = response.results[0].geometry.location;
        // console.log(lat, lng);
        place.lat = lat
        place.lng = lng
      },
      error => {
        console.error(error);
      }
      );
      MapPlaces()
    
    
  }

function MapPlaces() {
   setPlaces(JSON.parse(JSON.stringify(place)))
   console.log(places)
const [places, setPlaces] = useState({
    name:"",
    lat: Number,
    lng: Number
})

return (
<div>
    <Route exact path='/map' render={(prevProps) =>
        <MapContainer {...prevProps} {...this.state}/>}/>
    <Link to='/map' className='map'>
        <i class="material-icons">Map it!</i>
    </Link>
</div>
)
}

function GuideDetail(props) {
// let places = []    


const guideDetail = props.guides.find(guide => {
    return guide.id == props.match.params.id
})

const guideReviews = guideDetail.Reviews.map(review => {
    return <li key={review.id}>{review.title}</li>
})
// console.log(guideReviews)
const [query, setQuery] = useState("");
const autoCompleteRef = useRef(null);


useEffect(() => {
    loadScript(
        `https://maps.googleapis.com/maps/api/js?key=AIzaSyALqkD9f1jRZEwX-Qtn7dt47CdgPegY56Q&libraries=places`,
        () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);
    
    return(
        <div>
<h2>{guideDetail.name}</h2>
<h5>Edit Guide</h5>
<form onSubmit={props.updateGuide}>
<input type="hidden" name="guideId"
value={guideDetail.id} ></input>

<input type="text" name="name">
</input>
<input type="submit" value="Edit Guide"></input>
</form>

<h5> Add a new review</h5>
<form onSubmit={
    props.addReview
    }>
<input 
type="hidden" name="guideId"
value={guideDetail.id} />
<input
    ref={autoCompleteRef}
    onChange={event => 
    setQuery(event.target.value)
    }
    placeholder="Enter a Location"
    type="text" name="title"
    value={query}
    />
<input type="submit" value="Add Spot"></input>
</form> 
<ul>{guideReviews}</ul>

</div>
)
}


export default GuideDetail