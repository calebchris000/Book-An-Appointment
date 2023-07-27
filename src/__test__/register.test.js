import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Register from '../components/Register/Register';
import store from '../redux/configureStore';

describe('Register tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Register page has sign up button', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Sign Up')).toBeTruthy();
  });

  it('Sign up page has a log in link', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Log in')).toBeTruthy();
  });
});
