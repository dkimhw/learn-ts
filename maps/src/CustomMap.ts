import { Loader } from "@googlemaps/js-api-loader"
import { User } from './User';
import { Company } from './Company'

export class CustomMap {
  private googleMapLoader: Loader;
  private map : google.maps.Map;
  private mapOptions = {
    center: { lat: 37.4239163, lng: -122.0947209 },
    zoom: 4,
    mapId: '1',
  };

  constructor(api_key: string) {
    this.googleMapLoader = new Loader({
      apiKey: api_key,
      version: "weekly",
    });
  }

  async init_map(divId: string): Promise<void> {
    try {
      const { Map } = await this.googleMapLoader.importLibrary("maps") as google.maps.MapsLibrary;
      const map = new Map(document.getElementById(divId) as HTMLElement, this.mapOptions);
      this.map = map;
    } catch (e) {
      throw new Error(e);
    }
  }

  async add_marker(): Promise<void> {
    try {
      const { AdvancedMarkerElement } = await this.googleMapLoader.importLibrary("marker");
      const map = this.map;
      new AdvancedMarkerElement({
        map,
        position: { lat: 37.4239163, lng: -122.0947209 },
    });
    } catch (e) {
      throw new Error(e);
    }
  }
}
