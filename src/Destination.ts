import {faker} from '@faker-js/faker';
export class Destination {
    receiver: string;
    location:{
        lat: number;
        lng: number;

    }; 
    constructor(){
        this.receiver = faker.name.firstName();
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
    }


}