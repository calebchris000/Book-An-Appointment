import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import DeleteCar from '../components/DeleteCar';
import store from '../redux/configureStore';

describe('Delete car form tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <DeleteCar />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Delete car page has a "delete" button', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <DeleteCar />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Delete')).toBeTruthy();
  });
});
