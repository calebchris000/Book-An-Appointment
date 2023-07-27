import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AddCar from '../components/AddCar';
import store from '../redux/configureStore';

describe('Add car form tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddCar />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Add car page has a "add" button', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <AddCar />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Submit')).toBeTruthy();
  });
});
