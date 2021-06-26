import mockData from '../mockData'
import { MeteorTable } from './MeteorTable'
import { columns }  from '../Constants/Constant'
import { render, cleanup, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'


beforeEach(cleanup);
afterEach(() => {
	jest.clearAllMocks();
});
describe('<MeteorTable /> tests', () => {
	test('renders app', () => {
		render(<MeteorTable columns={columns} meteorData={mockData} />)

		//check that name and id cols, and name and id filter text labels are there
		expect(screen.getByText(/name/i)).toBeInTheDocument()
		expect(screen.getByText(/id/i)).toBeInTheDocument()
		//integration tests to simulate user interactions with name and id filters
		userEvent.click(screen.getByText(/name/i))
		userEvent.click(screen.getByText(/id/i))

	
	})
});
