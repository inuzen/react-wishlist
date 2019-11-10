import React from 'react';
import PropTypes from 'prop-types';
import Select from '../selects/Select';
import Range from '../selects/Range';

const dropdowns = {
  age: [{
    id: 0,
    title: '10-20',
    selected: false,
    key: 'age'

  },
  {
    id: 1,
    title: '20-30',
    selected: false,
    key: 'age'

  },
  {
    id: 2,
    title: '30-40',
    selected: false,
    key: 'age'
  },
  {
    id: 3,
    title: 'none',
    selected: false,
    key: 'age'
  }],

  hobbies: [
    {
      id: 0,
      title: 'Art',
      selected: false,
      key: 'hobbies'
    },
    {
      id: 1,
      title: 'Gaming',
      selected: false,
      key: 'hobbies'
    },
    {
      id: 2,
      title: 'Sport',
      selected: false,
      key: 'hobbies'
    },{
      id: 3,
      title: 'none',
      selected: false,
      key: 'hobbies'
    }
  ]
}
const Header = () => {

  return (
    <header className='app-header'>
    <div className='frow justify-center '>

      <div className='header-content'>
        <nav className='header-tabs'>
          <div className='frow row-center'>
            <div className='tabs'>
              <span className='tab tab-link active'>
                <a href="!#">My Wishlist</a>
              </span>
              <span className='tab tab-link'>
                <a href="!#">Find Gifts</a>
              </span>
            </div>
          </div>
        </nav>

        <div className='header-input-container'>
        <div className='frow justify-start items-center height-100'>
           <div className='header-filter-container'>
            <div className='frow row-between'>
              <Select title = 'Age' list={dropdowns.age}/>
             <Select title = 'Hobbies' list={dropdowns.hobbies}/>
             <Range title='Cost' maxValue='10000'/>
          </div>
          </div>
          <div className='header-search-input'>
            <input type="text" placeholder='search through your wishes...'/>
          </div>
        </div>
      </div>

      </div>

    </div>
  </header>)
}

Header.propTypes = {};

export default Header;
