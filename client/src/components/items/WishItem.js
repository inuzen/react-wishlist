import React from 'react';
import PropTypes from 'prop-types';

const WishItem = (props) => {

  return (<div className='item-container '>
    <div className="frow column-center">
      <div className="item-input-form">
        <input className="input-field" type="text" name="link-input" placeholder='insert link...'/>

        <div className="item-button-wrapper">
          <div className="frow row-around ">
            <button className='btn btn-delete'>Delete</button>
            <button className='btn btn-done'>Done</button>
            <div className='icon-wrapper'>
              <span className='icon icon-edit'></span>
            </div>
          </div>
        </div>
      </div>
      <div className="item-presentation">
        <div className="frow column-center">
          <p className='item-title'>
            <span className='item-header'>Xiaomi Mi 9 SE</span>
          </p>
          <div className='item-image-wrapper'>
            <img src="https://avatars.mds.yandex.net/get-mpic/1808939/img_id6461173972117630017.jpeg/9hq" alt=''/>
          </div>

        </div>
      </div>
    </div>
  </div>)
}

WishItem.propTypes = {};

export default WishItem;
