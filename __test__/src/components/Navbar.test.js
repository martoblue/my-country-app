import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '@/components/Navbar';

describe('Navbar Component', () => {
  test('renders navbar links', () => {
    const { getByText } = render(<Navbar />);

    const homeLink = getByText('Home');
    const aboutLink = getByText('About Us');
    const contactLink = getByText('Contact');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
