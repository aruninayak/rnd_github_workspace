import React from 'react';

const pricingOptions = [
  {
    tier: 'Basic',
    price: '$5/month',
    features: [
      '10 GB Storage',
      'Basic Support',
      'Access to Photos and Videos',
    ],
  },
  {
    tier: 'Pro',
    price: '$15/month',
    features: [
      '100 GB Storage',
      'Priority Support',
      'Access to Photos, Videos, and Folders',
      'Sync Functionality',
    ],
  },
  {
    tier: 'Enterprise',
    price: '$30/month',
    features: [
      '1 TB Storage',
      '24/7 Support',
      'All Pro Features',
      'Custom Solutions',
    ],
  },
];

const PricingCards: React.FC = () => {
  return (
    <div className="pricing-cards">
      {pricingOptions.map((option) => (
        <div className="pricing-card" key={option.tier}>
          <h3>{option.tier}</h3>
          <p>{option.price}</p>
          <ul>
            {option.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="subscribe-button">Subscribe</button>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;