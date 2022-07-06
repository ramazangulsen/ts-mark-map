import { Destination } from "./Destination";
import { Cargo } from "./Cargo";
import { TrackingMap } from "./TrackingMap";




const destinations = new Destination();
console.log(destinations);
const cargo = new Cargo();
console.log(cargo);



const trackingMap = new TrackingMap('map');
trackingMap.attachMarker(destinations);
trackingMap.attachMarker(cargo);



