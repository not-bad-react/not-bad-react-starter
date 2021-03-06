import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import App from '../index';

describe('<App />', () => {
  test('renders', () => {
    const fakeStore = {
      default: () => {},
      subscribe: () => {},
      dispatch: () => {},
      getState: () => ({
        config: { title: 'test' },
        home: () => {},
      }),
    };

    const tree = renderer.create(
      <Provider store={fakeStore}>
        <StaticRouter location={''} context={{}}>
          <App appConfig={{ title: 'test' }} />
        </StaticRouter>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
