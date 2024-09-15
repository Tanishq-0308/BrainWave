import React, { useContext, useEffect, useRef, useState } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { defaults } from "ol/control";
import XYZ from "ol/source/XYZ";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Style, Stroke } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";
import Terrain from "../../assets/Terrain.png";
import Standard from "../../assets/Standard.png";
import Toner from "../../assets/TonerImg.png";
import WorldImaginary from "../../assets/WorldImg.png";
import WaterColor from "../../assets/WaterColor.png";
import OutDoor from "../../assets/OutDoor.png";
import Topo from "../../assets/topo.png";
import { SearchContext } from "../SearchContext";
import TileWMS from "ol/source/TileWMS";
import { data } from "autoprefixer";

const indiaGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.837451, 35.49401],
            [78.912269, 34.321936],
            [78.811086, 33.506198],
            [79.208892, 32.994395],
            [79.176129, 32.48378],
            [78.458446, 32.618164],
            [78.738894, 31.515906],
            [79.721367, 30.882715],
            [81.111256, 30.183481],
            [80.476721, 29.729865],
            [80.088425, 28.79447],
            [81.057203, 28.416095],
            [81.999987, 27.925479],
            [83.304249, 27.364506],
            [84.675018, 27.234901],
            [85.251779, 26.726198],
            [86.024393, 26.630985],
            [87.227472, 26.397898],
            [88.060238, 26.414615],
            [88.174804, 26.810405],
            [88.043133, 27.445819],
            [88.120441, 27.876542],
            [88.730326, 28.086865],
            [88.814248, 27.299316],
            [88.835643, 27.098966],
            [89.744528, 26.719403],
            [90.373275, 26.875724],
            [91.217513, 26.808648],
            [92.033484, 26.83831],
            [92.103712, 27.452614],
            [91.696657, 27.771742],
            [92.503119, 27.896876],
            [93.413348, 28.640629],
            [94.56599, 29.277438],
            [95.404802, 29.031717],
            [96.117679, 29.452802],
            [96.586591, 28.830979],
            [96.248833, 28.411031],
            [97.327114, 28.261583],
            [97.402561, 27.882536],
            [97.051989, 27.699059],
            [97.133999, 27.083774],
            [96.419366, 27.264589],
            [95.124768, 26.573572],
            [95.155153, 26.001307],
            [94.603249, 25.162495],
            [94.552658, 24.675238],
            [94.106742, 23.850741],
            [93.325188, 24.078556],
            [93.286327, 23.043658],
            [93.060294, 22.703111],
            [93.166128, 22.27846],
            [92.672721, 22.041239],
            [92.146035, 23.627499],
            [91.869928, 23.624346],
            [91.706475, 22.985264],
            [91.158963, 23.503527],
            [91.46773, 24.072639],
            [91.915093, 24.130414],
            [92.376202, 24.976693],
            [91.799596, 25.147432],
            [90.872211, 25.132601],
            [89.920693, 25.26975],
            [89.832481, 25.965082],
            [89.355094, 26.014407],
            [88.563049, 26.446526],
            [88.209789, 25.768066],
            [88.931554, 25.238692],
            [88.306373, 24.866079],
            [88.084422, 24.501657],
            [88.69994, 24.233715],
            [88.52977, 23.631142],
            [88.876312, 22.879146],
            [89.031961, 22.055708],
            [88.888766, 21.690588],
            [88.208497, 21.703171],
            [86.975704, 21.495562],
            [86.499351, 20.151638],
            [85.060266, 19.478579],
            [83.941006, 18.30201],
            [83.189217, 17.671221],
            [82.192792, 17.016636],
            [82.191242, 16.556664],
            [81.692719, 16.310219],
            [80.791999, 15.951972],
            [80.324896, 15.899185],
            [80.025069, 15.136415],
            [80.233273, 13.835771],
            [80.286294, 13.006261],
            [79.862547, 12.056215],
            [79.857999, 10.357275],
            [79.340511, 10.308854],
            [78.885345, 9.546136],
            [79.18972, 9.216544],
            [78.277941, 8.933047],
            [77.941165, 8.252959],
            [77.539898, 7.965535],
            [76.592979, 8.899276],
            [76.130061, 10.29963],
            [75.746467, 11.308251],
            [75.396101, 11.781245],
            [74.864816, 12.741936],
            [74.616717, 13.992583],
            [74.443859, 14.617222],
            [73.534199, 15.990652],
            [73.119909, 17.92857],
            [72.820911, 19.208234],
            [72.824475, 20.419503],
            [72.630533, 21.356009],
            [71.175273, 20.757441],
            [70.470459, 20.877331],
            [69.16413, 22.089298],
            [69.644928, 22.450775],
            [69.349597, 22.84318],
            [68.176645, 23.691965],
            [68.842599, 24.359134],
            [71.04324, 24.356524],
            [70.844699, 25.215102],
            [70.282873, 25.722229],
            [70.168927, 26.491872],
            [69.514393, 26.940966],
            [70.616496, 27.989196],
            [71.777666, 27.91318],
            [72.823752, 28.961592],
            [73.450638, 29.976413],
            [74.42138, 30.979815],
            [74.405929, 31.692639],
            [75.258642, 32.271105],
            [74.451559, 32.7649],
            [74.104294, 33.441473],
            [73.749948, 34.317699],
            [74.240203, 34.748887],
            [75.757061, 34.504923],
            [76.871722, 34.653544],
            [77.837451, 35.49401],
          ],
        ],
      },
      properties: {
        name: "India",
      },
    },
  ],
};
const apiKey='91aea2a0-a743-4039-9799-1c74242fc418';

const MapComponent = ({
  sidebar,
  resetMap,
  fullscreen,
  toggleScreen,
  toggleMap,
  openLayer,
  location,
}) => {
  const { country, exlayer } = useContext(SearchContext);
  const [center, setCenter] = useState([78.9629, 20.5937]);
  const [layers, setLayers] = useState("");
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  const initialView = {
    center: fromLonLat([78.9629, 20.5937]),
    zoom: 5,
  };

  useEffect(() => {
    setLayers(exlayer);
  }, [exlayer]);

  useEffect(() => {
    if (location) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const coord = fromLonLat([longitude, latitude]);
            map.getView().setCenter(coord);
            map.getView().setZoom(12);
            console.log({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting location:", error);
          },
          {
            enableHighAccuracy: true, // Enable high accuracy for better precision
            timeout: 5000, // Timeout after 5 seconds if the location isn't found
            maximumAge: 0, // Force the browser to get a fresh location
          }
        );
      }
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [location]);
  useEffect(() => {
    const indiaBorderLayer = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(indiaGeoJson, {
          featureProjection: "EPSG:3857", // Projecting to Web Mercator (the default projection for OpenLayers)
        }),
      }),
      style: new Style({
        stroke: new Stroke({
          color: "Black", // Border color
          width: 2, // Border thickness
        }),
      }),
    });

    const watercolor = new TileLayer({
      source: new XYZ({
        url: `https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=91aea2a0-a743-4039-9799-1c74242fc418`,
        // apiKey: 'OPTIONAL'
      }),
    });

    const toner = new TileLayer({
      source: new XYZ({
        url: `https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}@2x.png?key=${apiKey}`,
      }),
    });
    const outdoor = new TileLayer({
      source: new XYZ({
        url: `https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}@2x.png?key=${apiKey}`,
        attributions: [
          '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>',
          '&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>',
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
        ],
        tilePixelRatio: 2,
        maxZoom: 20,
      }),
    });
    const terrain = new TileLayer({
      source: new XYZ({
        url: `https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}@2x.png?key=${apiKey}`,
        attributions:
          "Map data © OpenStreetMap contributors, SRTM | OpenTopoMap (CC-BY-SA)",
      }),
      title: "terrain",
    });
    const standardOSM = new TileLayer({
      source: new OSM({
        url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      }),
      visible: true,
      title: "OSMStandard",
    });
    const worldImaginary = new TileLayer({
      source: new XYZ({
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      }),
    });

    const topoMap = new TileLayer({
      source: new XYZ({
        url: "https://tile.opentopomap.org/{z}/{x}/{y}.png",
        attributions:
          '&copy; <a href="https://www.opentopomap.org/">OpenTopoMap</a>',
      }),
      visible: true,
    });
    const initmap = new Map({
      target: mapRef.current,
      view: new View({
        center: fromLonLat(center), // Center the map (in EPSG:3857 coordinates)
        zoom: initialView.zoom, // Initial zoom level
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      controls: defaults({
        attribution: false,
      }),
    });
    setMap(initmap);

    switch (layers) {
      case "terrain":
        initmap.addLayer(terrain);
        resetMap();
        break;
      case "watercolor":
        initmap.addLayer(watercolor);
        break;
      case "standard":
        initmap.addLayer(standardOSM);
        break;
      case "outdoor":
        initmap.addLayer(outdoor);
        break;
      case "worldimaginary":
        initmap.addLayer(worldImaginary);
        break;
      case "toner":
        initmap.addLayer(toner);
        break;
      case "topographical":
        initmap.addLayer(topoMap);
        break;
    }

    const resetMapFn = () => {
      initmap.getView().setCenter(initialView.center);
      initmap.getView().setZoom(initialView.zoom);
    };

    resetMap(() => resetMapFn);

    return () => initmap.setTarget(null); // Cleanup on unmount
  }, [resetMap, layers]);
  useEffect(() => {
    if (country && map) {
      const fetchCountryLocation = async () => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${country}&format=json&addressdetails=1`
          );
          const data = await response.json();

          if (data.length > 0) {
            const { lat, lon } = data[0];
            setCenter([parseFloat(lon), parseFloat(lat)]);
            map
              .getView()
              .setCenter(fromLonLat([parseFloat(lon), parseFloat(lat)]));
            map.getView().setZoom(5); // Adjust zoom
          }
        } catch (error) {
          console.error("Error fetching country location:", error);
        }
      };

      fetchCountryLocation();
    }
  }, [country, map]);

  return (
    <div
      ref={mapRef}
      className={`${sidebar ? "w-[calc(100%-390px)]" : "w-[calc(100%-70px)]"} ${
        fullscreen
          ? "w-full h-screen absolute top-0"
          : "absolute h-[calc(100vh-80px)] top-[80px] "
      } right-0 transition-all duration-500`}
    >
      <button
        onClick={toggleScreen}
        className={`text-black absolute top-4 right-6 ${
          !fullscreen ? "hidden" : "block"
        } w-8 z-10`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18 7H22V9H16V3H18V7ZM8 9H2V7H6V3H8V9ZM18 17V21H16V15H22V17H18ZM8 15V21H6V17H2V15H8Z"></path>
        </svg>
      </button>
      <button
        className="text-black  absolute bottom-16 right-6 w-8 z-10 "
        onClick={openLayer}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.0834 15.1999L21.2855 15.9212C21.5223 16.0633 21.599 16.3704 21.457 16.6072C21.4147 16.6776 21.3559 16.7365 21.2855 16.7787L12.5145 22.0412C12.1979 22.2313 11.8022 22.2313 11.4856 22.0412L2.71463 16.7787C2.47784 16.6366 2.40106 16.3295 2.54313 16.0927C2.58536 16.0223 2.64425 15.9634 2.71463 15.9212L3.91672 15.1999L12.0001 20.0499L20.0834 15.1999ZM20.0834 10.4999L21.2855 11.2212C21.5223 11.3633 21.599 11.6704 21.457 11.9072C21.4147 11.9776 21.3559 12.0365 21.2855 12.0787L12.0001 17.6499L2.71463 12.0787C2.47784 11.9366 2.40106 11.6295 2.54313 11.3927C2.58536 11.3223 2.64425 11.2634 2.71463 11.2212L3.91672 10.4999L12.0001 15.3499L20.0834 10.4999ZM12.5145 1.30864L21.2855 6.5712C21.5223 6.71327 21.599 7.0204 21.457 7.25719C21.4147 7.32757 21.3559 7.38647 21.2855 7.42869L12.0001 12.9999L2.71463 7.42869C2.47784 7.28662 2.40106 6.97949 2.54313 6.7427C2.58536 6.67232 2.64425 6.61343 2.71463 6.5712L11.4856 1.30864C11.8022 1.11864 12.1979 1.11864 12.5145 1.30864ZM12.0001 3.33233L5.88735 6.99995L12.0001 10.6676L18.1128 6.99995L12.0001 3.33233Z"></path>
        </svg>
      </button>
      <div
        onClick={openLayer}
        className={` absolute z-10 rounded-lg bg-white right-16 top-24 w-auto h-auto p-8 grid grid-cols-3 gap-x-7 gap-y-5 ${
          toggleMap ? "grid" : "hidden"
        }`}
      >
        <div
          className="w-[150px] cursor-pointer"
          onClick={() => setLayers("standard")}
        >
          <img src={Standard} alt="" loading="lazy"/>
          <p>Standard </p>
        </div>
        <div
          className="w-[150px] cursor-pointer"
          onClick={() => setLayers("watercolor")}
        >
          <img src={WaterColor} alt="" loading="lazy"/>
          <p>Watercolor</p>
        </div>
        <div
          className="w-[150px] cursor-pointer"
          onClick={() => setLayers("terrain")}
        >
          <img src={Terrain} alt="" loading="lazy"/>
          <p>Terrain</p>
        </div>
        <div
          className="w-[150px] cursor-pointer"
          onClick={() => setLayers("outdoor")}
        >
          <img src={OutDoor} alt="" loading="lazy"/>
          <p>Outdoor</p>
        </div>
        <div
          className="w-[150px] cursor-pointer"
          onClick={() => setLayers("toner")}
        >
          <img src={Toner} alt="" loading="lazy"/>
          <p>Toner</p>
        </div>
        <div
          className="w-[150px] cursor-pointer"
          onClick={() => setLayers("worldimaginary")}
        >
          <img src={WorldImaginary} alt="" loading="lazy"/>
          <p>World Imaginary</p>
        </div>
        <div
          className="w-[150px] cursor-pointer"
          onClick={() => setLayers("topographical")}
        >
          <img src={Topo} alt="" loading="lazy"/>
          <p>Topographical</p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
