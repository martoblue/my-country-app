import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryCard from '@/components/CountryCard.jsx';

const mockCountry = {
  name: {
    common: 'Myanmar',
  },
  flags: {
    png: 'https://flagcdn.com/w320/mm.png',
  },
};

describe('CountryCard Component', () => {
  test('renders country card with name and flag', () => {
    render(<CountryCard country={mockCountry} />);

    const countryNameElement = screen.getByText(mockCountry.name.common);
    expect(countryNameElement).toBeInTheDocument();

    const flagImageElement = screen.getByAltText(
      `${mockCountry.name.common} flag`,
    );
    expect(flagImageElement).toBeInTheDocument();
  });
});
