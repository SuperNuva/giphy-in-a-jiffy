import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


jest.mock('./services/trending')

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

// jest.unmock();
// jest.mock('./services/searching')

// it('fetches the results when a search query is made', (done) => {
//   const wrapper = shallow(<App />)
//   setTimeout(() => {
//     wrapper.update();

//     const state = wrapper.instance().state;
//     // expect(state.onLoad).toEqual(false);
//     // expect(state.query).toHaveLength();
//     // expect(state.results.length).toEqual(2);

//     expect(wrapper.find('Trending').length).toEqual(0);
//     expect(wrapper.find('searchResults').length).toEqual(1);

//     done();
//   });
// })