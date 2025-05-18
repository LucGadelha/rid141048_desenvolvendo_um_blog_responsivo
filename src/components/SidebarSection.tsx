
import React from 'react';

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="bg-brand-teal-light text-white text-lg font-semibold py-2 px-4 rounded-t-md">{title}</h2>
      <div className="bg-white p-4 rounded-b-md shadow">
        {children}
      </div>
    </section>
  );
};

export default SidebarSection;
