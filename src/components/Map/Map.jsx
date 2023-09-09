import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Typography , useMediaQuery } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating';
import useStyles from './style'

import mapstyles from './MapStyles'

export default function Map({setCoordinates , setBounds , coordinates , places}) {

  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter = {coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={{disableDefaultUI: true , zoomControl: true , styles: mapstyles}}
        onChange={(e) => {
          // console.log(e);
          setCoordinates({lat: e.center.lat , lng: e.center.lng});
          setBounds({ne: e.marginBounds.ne , sw: e.marginBounds.sw});
        }}
        onChildClick={''}
      >
        {places?.map((place , i) => {
          // console.log(place);
          <div
            className={classes.markerContainer}
            lat = {Number(place.latitude)}
            lng = {Number(place.longitude)}
            key={i}
          >
            {
              isDesktop ? (
                {i}
              ):(
                {i}
              )
            }
          </div>
        })}

      </GoogleMapReact>
    </div>
  )
}
