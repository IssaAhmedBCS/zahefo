// Heritage modal 
import React, { useState } from 'react';
import { 
  X, Award, MapPin, Calendar, ExternalLink, Share2, 
  Download, ChevronLeft, ChevronRight, CheckCircle2,
  Info, Camera, Users, Clock
} from 'lucide-react';
import Button from '../shared/Button';
import Badge from '../shared/Badge';

/**
 * Heritage Modal Component
 * Detailed modal view for heritage sites
 * @param {object} site - Heritage site data
 * @param {function} onClose - Close callback
 */
const HeritageModal = ({ site, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock additional images (in real app, these would come from site.images)
  const images = [site.image, site.image, site.image];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'highlights', label: 'Highlights', icon: CheckCircle2 },
    { id: 'gallery', label: 'Gallery', icon: Camera },
    { id: 'conservation', label: 'Conservation', icon: Users }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: site.name,
        text: site.description,
        url: window.location.href
      });
    } else {
      alert('Share functionality not supported');
    }
  };

  const handleDownload = () => {
    alert('Download heritage site information');
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden animate-scale-in shadow-2xl">
        
        {/* Header */}
        <div className="relative">
          {/* Image Gallery */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt={site.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Action Buttons */}
            <div className="absolute top-6 left-6 flex gap-3">
              <button
                onClick={handleShare}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
              >
                <Share2 className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleDownload}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
              >
                <Download className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Site Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="primary" className="backdrop-blur-sm">
                  {site.category}
                </Badge>
                <Badge variant="success" className="backdrop-blur-sm">
                  {site.status}
                </Badge>
                {site.unesco && (
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-semibold text-gray-900">UNESCO World Heritage</span>
                  </div>
                )}
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-2">{site.name}</h2>
              
              <div className="flex flex-wrap gap-4 text-white/90">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Built in {site.year}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Stone Town, Zanzibar
                </span>
              </div>
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 bg-gray-50">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-4 font-semibold transition-all whitespace-nowrap
                    ${activeTab === tab.id
                      ? 'text-amber-600 border-b-2 border-amber-600 bg-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(95vh-28rem)]">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About This Site</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {site.description}
              </p>

              {/* Quick Facts */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-amber-50 rounded-2xl p-6">
                  <Calendar className="w-8 h-8 text-amber-600 mb-3" />
                  <div className="text-sm text-gray-600 mb-1">Year Built</div>
                  <div className="text-2xl font-bold text-gray-900">{site.year}</div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <Award className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="text-sm text-gray-600 mb-1">Status</div>
                  <div className="text-lg font-bold text-gray-900">{site.status}</div>
                </div>

                <div className="bg-green-50 rounded-2xl p-6">
                  <MapPin className="w-8 h-8 text-green-600 mb-3" />
                  <div className="text-sm text-gray-600 mb-1">Location</div>
                  <div className="text-lg font-bold text-gray-900">Stone Town</div>
                </div>
              </div>

              {/* Historical Significance */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Historical Significance</h4>
                <p className="text-gray-700 leading-relaxed">
                  This heritage site represents an important chapter in Zanzibar's cultural history, 
                  showcasing the unique blend of African, Arab, Indian, and European influences that 
                  characterize the island's architectural and cultural heritage.
                </p>
              </div>
            </div>
          )}

          {/* Highlights Tab */}
          {activeTab === 'highlights' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
              {site.highlights && site.highlights.length > 0 ? (
                <div className="space-y-4">
                  {site.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">{highlight}</p>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No highlights available for this site.</p>
              )}

              {/* Visitor Information */}
              <div className="mt-8 bg-blue-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                  Visitor Information
                </h4>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Opening Hours:</strong> Daily 9:00 AM - 5:00 PM</p>
                  <p><strong>Entry Fee:</strong> Tourists: $10 | Locals: TSh 5,000</p>
                  <p><strong>Guided Tours:</strong> Available upon request</p>
                  <p><strong>Photography:</strong> Permitted (no flash inside buildings)</p>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className="relative h-48 rounded-xl overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={img}
                      alt={`${site.name} - ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conservation Tab */}
          {activeTab === 'conservation' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Conservation Efforts</h3>
              
              <div className="space-y-8">
                {/* ZAHEFO's Work */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">ZAHEFO's Contribution</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    ZAHEFO has been actively involved in the preservation and restoration of this heritage site 
                    since 2010, working closely with local communities and international partners to ensure 
                    its protection for future generations.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Structural assessment and stabilization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Community awareness programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Documentation and digital archiving</span>
                    </li>
                  </ul>
                </div>

                {/* Partners */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Conservation Partners</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['UNESCO', 'World Bank', 'Local Govt', 'NGO Network'].map((partner, idx) => (
                      <div key={idx} className="bg-white border-2 border-gray-100 rounded-xl p-4 text-center hover:border-amber-400 transition-colors">
                        <div className="text-3xl mb-2">🏛️</div>
                        <div className="font-semibold text-gray-900 text-sm">{partner}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Get Involved */}
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white text-center">
                  <h4 className="text-2xl font-bold mb-4">Support Conservation Efforts</h4>
                  <p className="text-amber-100 mb-6">
                    Help us preserve this important heritage site for future generations
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" className="bg-white text-amber-900 hover:bg-gray-100">
                      Make a Donation
                    </Button>
                    <Button variant="outline">
                      Volunteer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeritageModal;