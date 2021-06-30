import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfo from './LocationInfo'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title})} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys = {{key: 'AIzaSyBb2ReL8oY1sm0ChXpVJUKF46xRyaI3W5w'}}
                defaultCenter = { center }
                defaultZoom = { zoom }
            >
                {markers}

            </GoogleMapReact>
            {locationInfo && <LocationInfo info={locationInfo} />}
            
        </div>
    )
}

Map.defaultProps = {
    center : {
        lat: 42.3265,
        lng: -122.8756,
    },
    zoom: 6
}

export default Map
