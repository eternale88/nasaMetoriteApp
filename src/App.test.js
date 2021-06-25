import { render, cleanup, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import mockData from './mockData'
import axios from 'axios';


beforeEach(cleanup);
jest.mock('axios');


const errorMessage = 'Network Error';

beforeEach(() => {
  //call api before each test
  axios.get.mockImplementationOnce(() => Promise.resolve(mockData));

  axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)),)
});


test('renders app', () => {
  render(<App />);
  waitForElementToBeRemoved(() => screen.getByText(/loading/i));

   // local storage api:
   jest.spyOn(window.localStorage.__proto__, 'setItem');
   window.localStorage.__proto__.setItem = jest.fn();

   jest.spyOn(window.localStorage.__proto__, 'getItem');
   window.localStorage.__proto__.getItem = jest.fn();
   
// assertions as usual:
  expect(localStorage.setItem).toBeDefined;
  expect(localStorage.getItem).toBeDefined;
//screen.debug()
})
