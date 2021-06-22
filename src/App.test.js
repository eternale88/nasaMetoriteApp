import { render, screen } from '@testing-library/react';
import App from './App';
import data from './data'
import axios from 'axios';
jest.mock('axios');


// beforeEach(() => {
//   fetchMock.once(JSON.stringify(data));
// })

test('fetches successfully data from an API', () => {
  axios.get.mockImplementationOnce(() => Promise.resolve(data));
})
const errorMessage = 'Network Error';

test('fetches erroneously data from an API', () => {
  axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)),)
})


test('renders learn react link', () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
  //data.forEach((d) => expect(screen.getByText(d.name)).toBeInTheDocument())
})
