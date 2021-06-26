import mockData from '../mockData'
import  Favorites  from './Favorites'
import { columns }  from '../Constants/Constant'
import { render, cleanup } from '@testing-library/react'



beforeEach(cleanup);
afterEach(() => {
	jest.clearAllMocks();
});
describe('<Favorites /> tests', () => {
	test('renders app', () => {
		render(<Favorites columns={columns} favorites={mockData}/>)
	})
});