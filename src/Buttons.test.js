import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Buttons from './Buttons.js';

Enzyme.configure({ adapter: new Adapter() })

describe('<Buttons />', () => {
  it('renders four buttons', () => {
    const buttons = shallow(<Buttons />)
    expect(buttons.find('button').length).toEqual(4);
  })
  
  it('each button invokes its respective onClick fn passed down as props', () => {
    const mockCallBackSort = jest.fn();
    const mockCallBackFilter = jest.fn();
    const mockCallBackClear = jest.fn();

    const buttons = shallow((<Buttons onSortClick={mockCallBackSort} onFilterClick={mockCallBackFilter} clearFilter={mockCallBackClear}>TestBtn</Buttons>));

    buttons.find('#sort-Btn').simulate('click');
    expect(mockCallBackSort.mock.calls.length).toEqual(1);

    buttons.find('#pg-13-Btn').simulate('click');
    buttons.find('#g-Btn').simulate('click');
    expect(mockCallBackFilter.mock.calls.length).toEqual(2);

    buttons.find('#clear-Btn').simulate('click');
    expect(mockCallBackClear.mock.calls.length).toEqual(1);
  });
});