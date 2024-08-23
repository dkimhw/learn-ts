import { Loader } from "@googlemaps/js-api-loader"
import { User } from "./User";
import { Company } from "./Company";

// instructions to every other class
// on how they can be an argument to `addMarker`
interface Mappable {
  location: {
    lat: number,
    lng: number
  }
}

export class CustomMap {
  private googleMapLoader: Loader;
  private map : google.maps.Map;

  constructor(api_key: string) {
    this.googleMapLoader = new Loader({
      apiKey: api_key,
      version: "weekly",
    });
  }

  async initMap(divId: string, center: google.maps.LatLngLiteral): Promise<void> {
    try {
      const { Map } = await this.googleMapLoader.importLibrary("maps") as google.maps.MapsLibrary;
      const map = new Map(document.getElementById(divId) as HTMLElement, {
        center: center, zoom: 1.75, mapId: '1'
      });
      this.map = map;
    } catch (e) {
      throw new Error(e);
    }
  }

  async addMarker(mappable: Mappable): Promise<void> {
    try {
      const { AdvancedMarkerElement } = await this.googleMapLoader.importLibrary("marker");
      new AdvancedMarkerElement({
        map: this.map,
        position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });
    } catch (e) {
      throw new Error(e);
    }
  }
}
