import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import data from './data'
import axios from 'axios';
jest.mock('axios');



beforeEach(() => {
  //call api before each test
  axios.get.mockImplementationOnce(() => Promise.resolve(data));

  axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)),)
});
// test('fetches successfully data from an API', () => {
//   axios.get.mockImplementationOnce(() => Promise.resolve(data));
// })
// const errorMessage = 'Network Error';

// test('fetches erroneously data from an API', () => {
//   axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)),)
// })


test('renders app', () => {
  render(<App />);
   waitForElementToBeRemoved(() => screen.getByText(/loading/i));
   expect(screen.getByText(/Nasa Meteorite Data/i)).toBeInTheDocument()
   expect(screen.getByText(/(Filter by any field by clicking the ellipse in the column header)/i)).toBeInTheDocument()
   expect(screen.getByText(/(Click a row to add to your favorites list to gdig into the data)/i)).toBeInTheDocument()
   // local storage api:
   jest.spyOn(window.localStorage.__proto__, 'setItem');
   window.localStorage.__proto__.setItem = jest.fn();
// assertions as usual:
  expect(localStorage.setItem).toBeDefined;
//screen.debug()
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
  //data.forEach((d) => expect(screen.getByText(d.name)).toBeInTheDocument())
})
