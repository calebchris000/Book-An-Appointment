import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReserveProduct from '../components/ReserveProduct/ReserveProduct';
import store from '../redux/configureStore';

describe('ReserveProduct form tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <ReserveProduct />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('ReserveProduct page has a "Create Reservation" button', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <ReserveProduct />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Book Appointment')).toBeTruthy();
  });
});
