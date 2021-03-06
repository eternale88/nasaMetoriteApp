import { render, cleanup, fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react'
import App from '../../App'
import axios from 'axios'
import { MeteorTable } from '../MeteorTable'
import { columns }  from '../../Constants/Constant'
import mockData from '../../mockData'
import { AppProvider, AppContext } from '../../context'


beforeEach(cleanup)
jest.mock('axios')


const errorMessage = 'Network Error'

beforeEach(() => {
  //call api before each test
  //simulate calls to nasa api
  axios.get.mockImplementationOnce(() => Promise.resolve(mockData));

  axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)),)
});

test('renders app', () => {
  render(
    <AppProvider>
			<AppContext.Consumer>
			{(value) => <App {...value} />	}
			</AppContext.Consumer>
		</AppProvider>
    );
  waitForElementToBeRemoved(() => screen.getByText(/loading/i))

   // local storage api:
   jest.spyOn(window.localStorage.__proto__, 'setItem')
   window.localStorage.__proto__.setItem = jest.fn()

   jest.spyOn(window.localStorage.__proto__, 'getItem')
   window.localStorage.__proto__.getItem = jest.fn()
   
// assertions:
  expect(localStorage.setItem).toBeDefined
  expect(localStorage.getItem).toBeDefined
  //simulate user click
  const { queryByTestId } = render(
    <AppProvider>
			<AppContext.Consumer>
			{(value) => <MeteorTable {...value} />	}
			</AppContext.Consumer>
		</AppProvider>
  )
  //integration test simulate clicking of meteor data table to add item to list
  fireEvent.click(queryByTestId('add-favorite'))
//screen.debug()
})

