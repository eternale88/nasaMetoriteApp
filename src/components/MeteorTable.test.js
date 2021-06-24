import mockData from '../mockData'
import { MeteorTable } from './MeteorTable'
import { columns }  from '../App'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';



//getByRole('button', {name: /submit/i})
describe('<MeteorTable /> tests', () => {
	test('renders app', () => {
		render(<MeteorTable columns={columns} meteorData={mockData}/>);
		//check that name and id cols, and name and id filter text labels are there
		expect(screen.getByText(/name/i)).toBeInTheDocument();
		expect(screen.getByText(/id/i)).toBeInTheDocument();
		//simulate user interactions with name and id filters
		userEvent.click(screen.getByText(/name/i));
		userEvent.click(screen.getByText(/id/i));



		//screen.debug()
		//expect(screen.queryByText(/Aachen/i)).toBeInTheDocument();


	
	})
  // it('should render todo item properly', () => {
  //   render(<TodoItem todo={mockData[0]} />);
  //   expect(screen.queryByText(/eat breakfast/i)).toBeInTheDocument();
  //   expect(screen.getByTestId('close-btn-1')).toBeInTheDocument();
  // });
});
