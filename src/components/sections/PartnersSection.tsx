import React from 'react';
import Image from 'next/image';
import mdsLogo from '../../assets/images/mds.png';
import ensiaLogo from '../../assets/images/ensia.png';
import baridLogo from '../../assets/images/barid.png';
import telecommLogo from '../../assets/images/telecomm.png';

interface Partner {
  id: number;
  name: string;
  logo: any;
}

const PartnersSection: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 1,
      name: 'MDS',
      logo: mdsLogo
    },
    {
      id: 2,
      name: 'ENSIA',
      logo: ensiaLogo
    },
    {
      id: 3,
      name: 'Barid',
      logo: baridLogo
    },
    {
      id: 4,
      name: 'Telecom',
      logo: telecommLogo
    }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">شركاؤنا</h2>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-item">
              <Image src={partner.logo} alt={partner.name} className="partner-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;