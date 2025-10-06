// Board members 
import React from 'react';
import { Phone, Mail, Linkedin, Award, Briefcase } from 'lucide-react';
import { organizationData } from '../../data/organizationData';

/**
 * Board Members Component
 * Displays board of directors information
 */
const BoardMembers = () => {
  const boardMembers = organizationData.boardMembers;

  return (
    <div className="my-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Board of Directors</h3>
        <p className="text-gray-200 max-w-3xl mx-auto text-lg">
          ZAHEFO is governed by our distinguished Board representing diverse expertise 
          in heritage management, archives, and community development.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {boardMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group"
          >
            {/* Avatar Section */}
            <div className="relative h-64 bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
              <div className="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-6xl border-4 border-white/30 group-hover:scale-110 transition-transform duration-300">
                {member.name.charAt(0)}
              </div>
              
              {/* Role Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 text-center shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <Briefcase className="w-4 h-4 text-amber-600" />
                  <span className="font-bold text-amber-900">{member.role}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2 group-hover:text-amber-300 transition-colors">
                {member.name}
              </h4>
              
              <p className="text-gray-200 text-sm mb-4">{member.expertise}</p>

              {member.bio && (
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>
              )}

              {/* Contact Info */}
              <div className="space-y-3 border-t border-white/20 pt-4">
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-3 text-sm text-gray-200 hover:text-amber-300 transition-colors group/link"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{member.phone}</span>
                </a>

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-sm text-gray-200 hover:text-amber-300 transition-colors group/link"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>{member.email}</span>
                  </a>
                )}

                <a
                  href="#"
                  className="flex items-center gap-3 text-sm text-gray-200 hover:text-amber-300 transition-colors group/link"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span>View Profile</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Governance Info */}
      <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-300" />
              Governance Structure
            </h4>
            <p className="text-gray-200 leading-relaxed">
              Our Board of Directors provides strategic oversight and guidance, ensuring ZAHEFO 
              maintains the highest standards of governance, accountability, and ethical conduct 
              in all our heritage conservation activities.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Board Responsibilities</h4>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                <span>Strategic direction and policy formulation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                <span>Financial oversight and resource allocation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                <span>Stakeholder engagement and partnerships</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                <span>Quality assurance and impact monitoring</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Simple Board Members List (Alternative)
 */
export const SimpleBoardMembers = () => {
  const boardMembers = organizationData.boardMembers;

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center text-white mb-8">Board of Directors</h3>
      
      {boardMembers.map((member, idx) => (
        <div
          key={idx}
          className="flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
        >
          <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
            {member.name.charAt(0)}
          </div>
          
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white">{member.name}</h4>
            <p className="text-amber-300 text-sm mb-1">{member.role}</p>
            <p className="text-gray-300 text-sm">{member.expertise}</p>
          </div>

          
          <a
            href={`tel:${member.phone}`}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      ))}
    </div>
  );
};

/**
 * Board Members Grid with Photos (If photos available)
 */
export const BoardMembersWithPhotos = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {organizationData.boardMembers.map((member, idx) => (
        <div key={idx} className="group">
          <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h4 className="text-2xl font-bold mb-1">{member.name}</h4>
              <p className="text-amber-300 text-sm">{member.role}</p>
            </div>
          </div>
          <p className="text-gray-200 text-sm">{member.expertise}</p>
        </div>
      ))}
    </div>
  );
};

export default BoardMembers;