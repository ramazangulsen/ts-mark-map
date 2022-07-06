import {faker} from '@faker-js/faker';

export class Cargo {
    trackingId: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.trackingId = faker.datatype.uuid();
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
    }
}