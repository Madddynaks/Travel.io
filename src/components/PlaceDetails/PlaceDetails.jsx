import React from 'react'
import { Box , Typography , Button , Card , CardMedia , CardContent , CardActions} from '@material-ui/core'
import Chip from '@material-ui/core/Chip';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import { Rating } from '@material-ui/lab'

import useStyles from './style'
import { Place } from '@material-ui/icons'

export default function PlaceDetails({place}) {

  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{height: 350}}
        image={place.photo ? place.photo.images.large.url : 'https://source.unsplash.com/1600x1000/?Error'}
        title = {place.name}
      >
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant='h5'>{place.name}</Typography>
        <Box justifyContent="space-between">
            <Typography variant='subtitle1'>Price : <b>{place.price_level}</b></Typography>
        </Box>
        <Box justifyContent="space-between">
            <Typography variant='subtitle1'>Rating : <b>{place.rating}</b></Typography>
        </Box>
        <Box justifyContent="space-between">
            <Typography variant='subtitle1'>Ranking : <b>{place.ranking}</b></Typography>
        </Box>
        <Box justifyContent="space-between">
            <Typography variant='subtitle1'>{place.open_now_text}</Typography>
        </Box>
        {place.address && (
          <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.address}>
            <LocationOnIcon/>{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
            <PhoneIcon/>{place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size='small' color='primary' onClick={() =>window.open(place.website , '_blank')}>
            Visit Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}
