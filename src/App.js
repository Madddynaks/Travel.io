import {React , useEffect , useState} from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import { CssBaseline , Grid } from '@material-ui/core'
import { getPlacesData } from './api/TravelAdvisor'

export default function App() {

  const [places , setPlaces] = useState([]);
  const [coordinates , setCoordinates] = useState();
  const [bounds , setBounds] = useState({ne:0 , sw:0});

  const [filteredPlaces,setfilteredPlaces] = useState([]);

  const [type,setType] = useState('restaurants');
  const [rating , setRating] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setfilteredPlaces(filteredPlaces);
  },[rating])


  useEffect(() => {
    getPlacesData(type , bounds.sw , bounds.ne)
    .then((data) => {
      // console.log(data);
      setfilteredPlaces([]);
      setPlaces(data);
    });
  },[type ,coordinates , bounds]);


  return (
    <div>
      <CssBaseline></CssBaseline>
      <Header setCoordinates={setCoordinates}></Header>
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List places={filteredPlaces.length ? filteredPlaces : places} type={type} setType={setType} rating={rating} setRating={setRating}></List>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={places}></Map>
        </Grid>
      </Grid>
    </div>
  )
}

