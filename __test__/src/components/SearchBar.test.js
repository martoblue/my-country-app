import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';

describe('SearchBar component', () => {
  it('renders without crashing', () => {
    render(<SearchBar />);
  });

  it('calls onSearch with the correct query when input changes', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={onSearchMock} />,
    );

    const input = getByPlaceholderText('Search countries...');
    fireEvent.change(input, { target: { value: 'New Query' } });

    expect(onSearchMock).toHaveBeenCalledWith('New Query');
  });
});
