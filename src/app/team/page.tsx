'use client';

import { PageHeader } from '@/components/ui/page-header';
import { SimpleModal } from '@/components/ui/simple-modal';
import { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  email: string;
  phone: string;
}

interface DepartmentMembers {
  [key: string]: TeamMember[];
}

export default function TeamPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const leaders = [
    {
      name: 'Jagdish Kaushal',
      role: 'Managing Director',
      bio: 'With over 30 years of experience in the chemical and life sciences industry, Mr. Jagdish Kaushal has been instrumental in establishing Chembio Lifesciences as a leading supplier of high-quality research chemicals and equipment.',
      achievements: [
        'Pioneer in research chemical distribution',
        'Built partnerships with leading global manufacturers',
        'Established nationwide distribution network'
      ]
    },
    {
      name: 'Rajni Kaushal',
      role: 'Managing Director',
      bio: 'Mrs. Rajni Kaushal brings extensive expertise in business operations and customer relations. Her leadership has been crucial in developing strong relationships with research institutions and ensuring customer satisfaction.',
      achievements: [
        'Streamlined business operations',
        'Enhanced customer service standards',
        'Developed institutional partnerships'
      ]
    }
  ];

  const departmentMembers: DepartmentMembers = {
    'Sales & Distribution': [
      {
        name: 'Rahul Sharma',
        role: 'Sales Manager',
        experience: '8 years of experience in chemical sales and distribution',
        email: 'rahul.sharma@chembio.com',
        phone: '+91 98765 43210'
      },
      {
        name: 'Priya Patel',
        role: 'Sales Executive',
        experience: '5 years of experience in B2B sales',
        email: 'priya.patel@chembio.com',
        phone: '+91 98765 43211'
      },
      {
        name: 'Amit Kumar',
        role: 'Distribution Coordinator',
        experience: '4 years of logistics and distribution experience',
        email: 'amit.kumar@chembio.com',
        phone: '+91 98765 43212'
      },
      {
        name: 'Neha Singh',
        role: 'Sales Executive',
        experience: '3 years of technical sales experience',
        email: 'neha.singh@chembio.com',
        phone: '+91 98765 43213'
      }
    ],
    'Quality Control': [
      {
        name: 'Dr. Suresh Kumar',
        role: 'Quality Manager',
        experience: '10 years of experience in chemical quality control',
        email: 'suresh.kumar@chembio.com',
        phone: '+91 98765 43214'
      },
      {
        name: 'Anjali Gupta',
        role: 'Quality Analyst',
        experience: '4 years of laboratory experience',
        email: 'anjali.gupta@chembio.com',
        phone: '+91 98765 43215'
      }
    ],
    'Customer Support': [
      {
        name: 'Vikram Reddy',
        role: 'Support Manager',
        experience: '6 years of technical support experience',
        email: 'vikram.reddy@chembio.com',
        phone: '+91 98765 43216'
      },
      {
        name: 'Meera Kapoor',
        role: 'Technical Support',
        experience: '3 years of customer service in chemical industry',
        email: 'meera.kapoor@chembio.com',
        phone: '+91 98765 43217'
      }
    ],
    'Logistics': [
      {
        name: 'Rajesh Kumar',
        role: 'Logistics Manager',
        experience: '7 years of supply chain experience',
        email: 'rajesh.kumar@chembio.com',
        phone: '+91 98765 43218'
      },
      {
        name: 'Sanjay Verma',
        role: 'Warehouse Coordinator',
        experience: '5 years of inventory management',
        email: 'sanjay.verma@chembio.com',
        phone: '+91 98765 43219'
      }
    ],
    'Accounts': [
      {
        name: 'CA Deepak Agarwal',
        role: 'Senior Accountant',
        experience: '8 years of financial management experience',
        email: 'deepak.agarwal@chembio.com',
        phone: '+91 98765 43220'
      }
    ]
  };

  const departments = [
    {
      name: 'Sales & Distribution',
      description: 'Managing nationwide chemical and equipment distribution.',
      members: 4
    },
    {
      name: 'Quality Control',
      description: 'Ensuring product quality and compliance with standards.',
      members: 2
    },
    {
      name: 'Customer Support',
      description: 'Providing technical assistance and order support.',
      members: 2
    },
    {
      name: 'Logistics',
      description: 'Handling warehousing and timely deliveries.',
      members: 2
    },
    {
      name: 'Accounts',
      description: 'Managing financial operations and transactions.',
      members: 1
    }
  ];

  const handleDepartmentClick = (deptName: string) => {
    console.log('Opening modal for department:', deptName);
    setSelectedDepartment(deptName);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-gradient-custom">
      <PageHeader 
        title="Our Team" 
        subtitle="Meet the visionary leaders behind Chembio Lifesciences" 
      />

      {/* Leadership Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gradient mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader) => (
              <div key={leader.name} className="service-card animate-fade-in group">
                <div className="relative h-80 mb-6 rounded-lg overflow-hidden bg-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-full h-full text-accent-blue/10"
                      fill="currentColor"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <pattern
                          id="grid"
                          width="10"
                          height="10"
                          patternUnits="userSpaceOnUse"
                        >
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid)" />
                      <circle cx="50" cy="35" r="20" className="text-accent-blue/20" />
                      <path
                        d="M50 65 Q50 75 50 85"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle cx="50" cy="25" r="8" className="text-accent-purple/30" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-accent-blue/10 w-32 h-32 flex items-center justify-center border border-accent-blue/20">
                        <svg
                          className="w-16 h-16 text-accent-blue/40"
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
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">{leader.name}</h3>
                    <p className="text-gradient text-lg">{leader.role}</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{leader.bio}</p>
                  <div className="pt-4">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {leader.achievements.map((achievement, index) => (
                        <li 
                          key={index} 
                          className="flex items-center text-gray-300"
                        >
                          <span className="text-accent-blue mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gradient mb-12">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {departments.slice(0, 3).map((dept) => (
              <div 
                key={dept.name} 
                className="service-card animate-fade-in group hover:-translate-y-1 transition-transform cursor-pointer"
                onClick={() => handleDepartmentClick(dept.name)}
                role="button"
                tabIndex={0}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{dept.name}</h3>
                <p className="text-gray-400 mb-4">{dept.description}</p>
                <div className="text-gradient flex items-center gap-2">
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                  {dept.members} team members
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {departments.slice(3).map((dept) => (
              <div 
                key={dept.name} 
                className="service-card animate-fade-in group hover:-translate-y-1 transition-transform cursor-pointer"
                onClick={() => handleDepartmentClick(dept.name)}
                role="button"
                tabIndex={0}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{dept.name}</h3>
                <p className="text-gray-400 mb-4">{dept.description}</p>
                <div className="text-gradient flex items-center gap-2">
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                  {dept.members} team members
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gradient mb-6">Join Our Team</h2>
          <p className="text-gray-300 mb-8">
            We're always looking for talented individuals who are passionate about 
            advancing scientific research and innovation.
          </p>
          <button className="btn-primary">View Open Positions</button>
        </div>
      </section>

      {/* Team Modal */}
      <SimpleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        department={selectedDepartment}
        members={departmentMembers[selectedDepartment] || []}
      />
    </main>
  );
}
