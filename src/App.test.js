import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

jest.mock('./services/trending')

describe('<App />', () => {  
  it('fetches trending gifs on mount', (done) => {
    const wrapper = shallow(<App />)
    setTimeout(() => {
      wrapper.update();

      const state = wrapper.instance().state;
      expect(state.onLoad).toEqual(true);
      expect(state.query).toEqual('');
      expect(state.results.length).toEqual(3);

      expect(wrapper.find('Trending').length).toEqual(1);
      expect(wrapper.find('searchResults').length).toEqual(0);

      done();
    });
  })
}) 