// Map embed 
import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Maximize2 } from 'lucide-react';
import Button from '../shared/Button';

/**
 * Map Embed Component
 * Displays location map
 */
const MapEmbed = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Old Fort coordinates
  const location = {
    lat: -6.1619,
    lng: 39.1909,
    name: "Old Fort, Forodhani",
    address: "Stone Town, Zanzibar"
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Visit our office at the historic Old Fort in Stone Town, Zanzibar
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Map Container */}
        <div className="relative h-96 bg-gray-100">
          {!mapLoaded ? (
            // Map Placeholder
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <MapPin className="w-16 h-16 text-amber-600 mb-4" />
              <p className="text-gray-600 mb-6">Click to load interactive map</p>
              <Button
                variant="primary"
                onClick={() => setMapLoaded(true)}
              >
                Load Map
              </Button>
            </div>
          ) : (
            // Interactive Map (iframe)
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDknNDIuOCJTIDM5wrAxMScyNy4yIkU!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ZAHEFO Location Map"
            ></iframe>
          )}

          {/* Fullscreen Button */}
          {mapLoaded && (
            <button
              onClick={() => window.open(googleMapsUrl, '_blank')}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Open in fullscreen"
            >
              <Maximize2 className="w-5 h-5 text-gray-700" />
            </button>
          )}
        </div>

        {/* Map Info Bar */}
        <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{location.name}</h4>
                <p className="text-gray-600 text-sm">{location.address}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-all"
              >
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-amber-600 text-amber-900 rounded-xl font-semibold hover:bg-amber-50 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View on Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Directions Info */}
        <div className="p-6 bg-white">
          <h4 className="font-bold text-gray-900 mb-4">How to Find Us</h4>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">1</span>
                By Car
              </h5>
              <p className="text-gray-600 text-sm">
                Free parking available at Forodhani Gardens. The Old Fort is a 2-minute walk from the parking area.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold">2</span>
                By Public Transport
              </h5>
              <p className="text-gray-600 text-sm">
                Take a dala dala (local bus) to Stone Town center. Ask for "Ngome Kongwe" or "Old Fort."
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm font-bold">3</span>
                Walking
              </h5>
              <p className="text-gray-600 text-sm">
                Located in the heart of Stone Town, easily accessible from most hotels within a 10-15 minute walk.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Landmarks */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { name: "House of Wonders", distance: "100m" },
          { name: "Forodhani Gardens", distance: "50m" },
          { name: "Stone Town Ferry", distance: "200m" }
        ].map((landmark, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3">
            <MapPin className="w-5 h-5 text-amber-600" />
            <div>
              <div className="font-semibold text-gray-900 text-sm">{landmark.name}</div>
              <div className="text-xs text-gray-600">{landmark.distance} away</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Simple Map (Alternative - Static Image)
 */
export const SimpleMap = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl">
      <img
        src="https://via.placeholder.com/1200x400/d97706/ffffff?text=Map+Location"
        alt="Map Location"
        className="w-full h-64 object-cover"
      />
      <div className="bg-white p-6">
        <h4 className="font-bold text-gray-900 mb-2">Visit Our Office</h4>
        <p className="text-gray-600 mb-4">
          Old Fort, Forodhani, Stone Town, Zanzibar
        </p>
        <Button variant="primary" icon={Navigation}>
          Get Directions
        </Button>
      </div>
    </div>
  );
};

/**
 * Map with Multiple Locations
 */
export const MultiLocationMap = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState(0);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Map */}
      <div className="h-96 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <MapPin className="w-16 h-16 text-amber-600" />
        </div>
      </div>

      {/* Location Selector */}
      <div className="p-6 border-t">
        <h4 className="font-bold text-gray-900 mb-4">Our Locations</h4>
        <div className="space-y-2">
          {locations.map((location, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedLocation(idx)}
              className={`
                w-full text-left p-4 rounded-xl transition-all
                ${selectedLocation === idx
                  ? 'bg-amber-50 border-2 border-amber-600'
                  : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                }
              `}
            >
              <div className="font-semibold text-gray-900">{location.name}</div>
              <div className="text-sm text-gray-600">{location.address}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapEmbed;