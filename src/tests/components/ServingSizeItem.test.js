import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ServingSizeItem } from '../../components/ServingSizeItem';


const setUp = () => {
    configure({ adapter: new Adapter() });
    
    const wrapper = shallow(<ServingSizeItem
        key={Math.random()} 
        isEditable={true}
        value= 'child'
        count={0}
        onServingSizePlusClick= {()=>{}}
        onServingSizeMinusClick={()=>{}}
        colors = {{
            reduceBtnColor: 'red',
            increaseBtnColor: 'blue',
            primaryTextColor: 'black'
        }}
    />);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};



describe('renders without crashing with correct values',  () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(wrapper, div);
        ReactDOM.unmountComponentAtNode(div);
        expect(wrapper.length).toBe(1);
      });

      test('render without error', () => {
        const component = findByTestAtrr(wrapper, 'servingSizeComponent');
        expect(component.length).toBe(1);
    });
});