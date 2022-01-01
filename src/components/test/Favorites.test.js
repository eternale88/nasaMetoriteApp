import mockData from '../../mockData'
import  Favorites  from '../Favorites'
import { render, cleanup } from '@testing-library/react'
import { AppProvider, AppContext } from '../../context'



beforeEach(cleanup)
afterEach(() => {
	jest.clearAllMocks()
})

describe('<Favorites /> tests', () => {
	test('renders app', () => {
		render(
		<AppProvider>
			<AppContext.Consumer>
			{(value) => <Favorites {...value} />	}
			</AppContext.Consumer>
		</AppProvider>
			
			)
	})
})