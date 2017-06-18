import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import ShowPromo from './ShowPromo';


const showImage = require('../images/tile.jpg');
const showName = 'Home and Away';

describe('ShowPromo component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShowPromo img={showImage} showName={showName} />, div);
  });

  it('Correctly displays the show name', () => {
    const div = document.createElement('div');
    const ShowPromoComponent = mount(
      <ShowPromo img={showImage} showName={showName} />, div
    );
    expect(ShowPromoComponent.find('h2').text()).toBe(showName);
  });

  it('Correctly displays the show image', () => {
    const div = document.createElement('div');
    const ShowPromoComponent = mount(
      <ShowPromo img={showImage} showName={showName} />, div
    );
    expect(ShowPromoComponent.find('img').first().prop('src')).toBe(showImage);
  });
});