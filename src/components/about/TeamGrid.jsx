// Team grid 
import React from 'react';
import { Mail, Phone, Linkedin, Award, Users, BookOpen } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import { organizationData } from '../../data/organizationData';

/**
 * Team Grid Component
 * Displays board members and team
 */
const TeamGrid = () => {
  const boardMembers = organizationData.boardMembers;

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Heritage Officer",
      expertise: "Archaeological Conservation",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      email: "sarah@zahefo.com",
      phone: "+255 777 111222",
      linkedin: "#"
    },
    {
      name: "Mohamed Hassan",
      role: "Records Manager",
      expertise: "Information Systems",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      email: "mohamed@zahefo.com",
      phone: "+255 777 333444",
      linkedin: "#"
    },
    {
      name: "Amina Ali",
      role: "Community Liaison",
      expertise: "Stakeholder Engagement",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      email: "amina@zahefo.com",
      phone: "+255 777 555666",
      linkedin: "#"
    },
    {
      name: "James Kimani",
      role: "Training Coordinator",
      expertise: "Capacity Building",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      email: "james@zahefo.com",
      phone: "+255 777 777888",
      linkedin: "#"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Board of Directors Section */}
        <div className="mb-20">
          <SectionTitle
            subtitle="Leadership"
            title="Board of Directors"
            description="Experienced leaders guiding ZAHEFO's strategic direction and heritage conservation mission"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {boardMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="relative h-64 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-5xl group-hover:scale-110 transition-transform duration-300">
                    {member.name.charAt(0)}
                  </div>
                  
                  {/* Role Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 text-center">
                    <span className="text-sm font-semibold text-amber-900">{member.role}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{member.expertise}</p>

                  {/* Contact Info */}
                  <div className="space-y-2 border-t border-gray-100 pt-4">
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-3 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </a>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>{member.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <SectionTitle
            subtitle="Our Team"
            title="Meet the Experts"
            description="Dedicated professionals bringing together diverse expertise in heritage conservation"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Social Links Overlay */}
                    <div className="absolute inset-0 bg-amber-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-amber-100 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-amber-900" />
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-amber-100 transition-colors"
                      >
                        <Phone className="w-5 h-5 text-amber-900" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-amber-100 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-amber-900" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-amber-600 font-medium text-sm mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.expertise}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Departments Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Departments
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Heritage Conservation",
                description: "Expert team managing preservation projects across Zanzibar",
                members: 8
              },
              {
                icon: Users,
                title: "Community Programs",
                description: "Engaging local communities in heritage protection initiatives",
                members: 6
              },
              {
                icon: BookOpen,
                title: "Training & Education",
                description: "Developing capacity through comprehensive training programs",
                members: 5
              }
            ].map((dept, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <dept.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{dept.title}</h4>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="text-sm text-amber-600 font-semibold">
                  {dept.members} Team Members
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Passionate about heritage conservation? We're always looking for talented 
            individuals to join our mission.
          </p>
          <button className="px-8 py-4 bg-white text-amber-900 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Simple Team List (Alternative)
 */
export const SimpleTeamList = () => {
  return (
    <div className="py-16">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Our Leadership
      </h3>
      
      <div className="max-w-3xl mx-auto space-y-6">
        {organizationData.boardMembers.map((member, idx) => (
          <div key={idx} className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-md">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-amber-600">
                {member.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 text-lg">{member.name}</h4>
              <p className="text-amber-600 text-sm">{member.role}</p>
            </div>
            
            <a
              href={`tel:${member.phone}`}
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;