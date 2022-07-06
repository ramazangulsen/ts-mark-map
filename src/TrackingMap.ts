
import { Destination } from "./Destination";
import {Cargo} from "./Cargo";

export class TrackingMap {

  private googleMap: google.maps.Map;



  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(elementId) as HTMLDivElement,
      {
        center: { lat: 0, lng: 20 },
        zoom: 1.6,
      }
    );
    }

    attachMarker(entity: Destination | Cargo) {
      const marker = new google.maps.Marker({
        map: this.googleMap,
        position: {
            lat: entity.location.lat, 
            lng: entity.location.lng },
       
        
      });
    }


}
