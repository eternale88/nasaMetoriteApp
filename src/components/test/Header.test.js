import { render, cleanup,  screen, } from '@testing-library/react'
import { Header } from '../Header'

beforeEach(cleanup)
afterEach(() => {
	jest.clearAllMocks()
});
//getByRole('button', {name: /submit/i})
describe('<Header /> tests', () => {
	test('renders Header component', () => {
		render(<Header />);
		expect(screen.getByText(/Nasa Meteorite Data Visualizer/i)).toBeInTheDocument()
    expect(screen.getByText(/(Filter by any field by clicking the ellipse in the column header)/i)).toBeInTheDocument()
    expect(screen.getByText(/(Click a row to add to your favorites list so you can dig into the data)/i)).toBeInTheDocument()
	})
})
