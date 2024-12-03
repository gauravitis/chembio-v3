'use client';

import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  email: string;
  phone: string;
}

interface SimpleModalProps {
  isOpen: boolean;
  onClose: () => void;
  department: string;
  members: TeamMember[];
}

export function SimpleModal({ isOpen, onClose, department, members }: SimpleModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-gradient-to-br from-gray-900/95 via-gray-900 to-black p-8 rounded-2xl w-full max-w-4xl border border-gray-800/50 shadow-2xl"
        style={{ maxHeight: 'calc(100vh - 2rem)' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:rotate-90 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-10 relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-gradient-to-b from-accent-blue to-accent-purple rounded-full" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            {department}
          </h2>
          <p className="text-gray-400 mt-2 text-lg">Meet our dedicated professionals</p>
        </div>

        {/* Team members grid */}
        <div className="overflow-y-auto pr-2 custom-scrollbar" style={{ maxHeight: 'calc(100vh - 15rem)' }}>
          <div className="grid md:grid-cols-2 gap-6">
            {members.map((member, index) => (
              <div 
                key={member.name + index}
                className="group relative rounded-xl bg-gradient-to-br from-gray-800/20 via-gray-900/20 to-black/20 hover:from-accent-blue/10 hover:via-accent-purple/10 hover:to-black/20 transition-all duration-500"
              >
                {/* Animated border gradient */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-accent-blue/30 to-accent-purple/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                
                {/* Content container */}
                <div className="relative p-6 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800/50 group-hover:border-gray-700/50 transition-colors duration-500">
                  <div className="flex items-start gap-5">
                    {/* Avatar with animated gradient */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full animate-spin-slow opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                      <div className="relative rounded-full bg-gradient-to-br from-gray-800 to-gray-900 w-16 h-16 flex items-center justify-center border border-gray-700/50 group-hover:border-gray-600/50 transition-colors duration-500">
                        <svg
                          className="w-8 h-8 text-gray-400 group-hover:text-accent-blue/60 transition-colors duration-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-w-0 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1 truncate group-hover:text-accent-blue transition-colors duration-500">
                          {member.name}
                        </h3>
                        <p className="text-accent-purple/80 text-sm font-medium">{member.role}</p>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-500">
                        {member.experience}
                      </p>
                      
                      {/* Contact info */}
                      <div className="space-y-2.5 text-sm pt-2">
                        <a 
                          href={`mailto:${member.email}`} 
                          className="flex items-center gap-3 text-gray-400 hover:text-accent-blue transition-all duration-300 group/link"
                        >
                          <span className="p-2 rounded-lg bg-gray-800/50 group-hover/link:bg-accent-blue/10 transition-colors duration-300">
                            <svg
                              className="w-4 h-4 text-gray-400 group-hover/link:text-accent-blue transition-colors duration-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </span>
                          <span className="truncate group-hover/link:translate-x-1 transition-transform duration-300">
                            {member.email}
                          </span>
                        </a>
                        <a 
                          href={`tel:${member.phone.replace(/\s/g, '')}`} 
                          className="flex items-center gap-3 text-gray-400 hover:text-accent-blue transition-all duration-300 group/link"
                        >
                          <span className="p-2 rounded-lg bg-gray-800/50 group-hover/link:bg-accent-blue/10 transition-colors duration-300">
                            <svg
                              className="w-4 h-4 text-gray-400 group-hover/link:text-accent-blue transition-colors duration-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                          </span>
                          <span className="truncate group-hover/link:translate-x-1 transition-transform duration-300">
                            {member.phone}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
