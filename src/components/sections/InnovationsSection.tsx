import React from 'react';
import InnovationCard from '@/components/ui/InnovationCard';
import SectionTitle from '@/components/common/SectionTitle';
import type { Innovation } from '@/data/types';

interface InnovationsSectionProps {
  innovations: Innovation[];
  visibleItems: Set<string>;
  registerElement: (element: Element | null) => void;
}

const InnovationsSection: React.FC<InnovationsSectionProps> = ({
                                                                 innovations,
                                                                 visibleItems,
                                                                 registerElement
                                                               }) => {
  return (
    <section className="mb-12">
      <SectionTitle>Key Innovations</SectionTitle>
      <div
        id="innovations"
        ref={registerElement}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {innovations.map((innovation, index) => (
          <InnovationCard
            key={innovation.id}
            innovation={innovation}
            index={index}
            isVisible={visibleItems.has('innovations')}
          />
        ))}
      </div>
    </section>
  );
};

export default InnovationsSection;
