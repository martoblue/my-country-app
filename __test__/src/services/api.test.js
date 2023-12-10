import axios from 'axios';
import { getAllCountries, getCountryByName } from '@/services/api.js';
import mockCountries from './mocks/countries.mock';

jest.mock('axios');

describe('API Requests', () => {
  beforeEach(() => {
    axios.get.mockReset();
  });

  test('getAllCountries should return countries data', async () => {
    axios.get.mockResolvedValue({ data: mockCountries });

    const result = await getAllCountries();
    expect(result).toEqual(mockCountries);
    expect(axios.get).toHaveBeenCalledWith(expect.any(String));
  });

  test('getCountryByName should return country data for a valid country name', async () => {
    const mockCountryName = 'Canada';

    axios.get.mockResolvedValue({ data: [mockCountries[0]] });

    const result = await getCountryByName(mockCountryName);
    expect(result).toEqual(mockCountries[0]);
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining(mockCountryName),
    );
  });

  test('getCountryByName should handle 404 error gracefully', async () => {
    const mockCountryName = 'NonexistentCountry';

    axios.get.mockRejectedValue({ response: { status: 404 } });

    await expect(
      getCountryByName(mockCountryName),
    ).rejects.toThrowErrorMatchingSnapshot();
  });
});
