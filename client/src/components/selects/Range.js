import React, {useState, useEffect, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';

const Range = ({title, maxValue}) => {
  const [listOpen, setListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('');
  const mainTitle = title;

  const close = useCallback(() => {
    setListOpen(false);
  }, []);

  useEffect(() => {

    headerTitle
      ? setHeaderTitle(headerTitle)
      : setHeaderTitle(title)

    if (listOpen) {
      window.addEventListener('click', close)
    } else {
      window.removeEventListener('click', close)
    }

    return() => {
      window.removeEventListener('click', close)
    }
    //eslint-disable-next-line
  }, [listOpen]);

  const toggleList = () => {
    setListOpen(!listOpen);
  }

  const onChange = (e)=>{
    console.log(e.target.name);
    // TODO: based on target name add values to state
  }
  const selectItem = (text) => {
    if (text === 'none') {
      setHeaderTitle(mainTitle);
    } else {
      setHeaderTitle(text);
    }
    setListOpen(false);
  }

  return (<div className={listOpen
      ? "select-filter-container list-open"
      : "select-filter-container"}>
    <div className="select-header" onClick={toggleList}>
      <div className="select-header-title">{headerTitle}</div>
    </div>
    {listOpen&&<div className='custom-range-container' onClick={e=>e.stopPropagation()}>
      <div className='frow column-center'>
        <div className='custom-range__input-row'>
          <div className='frow row-center'>
            <input className='custom-range__input-text col-md-5-12' type="text" name='valueFrom' onChange={onChange}/>
            <span className='col-md-2-12 text-center'>-</span>
            <input className='custom-range__input-text col-md-5-12' type="text" name='valueTo' onChange={onChange}/></div>
        </div>
        <div className='custom-range__range-row'>
          <input className='custom-range__input-range' type="range" min="0" max={maxValue}/>
        </div>
      </div>
    </div>}

  </div>)
}

Range.propTypes = {};

export default Range;
