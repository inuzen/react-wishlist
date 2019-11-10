import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';

const Select = ({title, list}) => {
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
  const selectItem = (text) => {
    if (text === 'none') {
      setHeaderTitle(mainTitle);
    } else {
      setHeaderTitle(text);
    }
    setListOpen(false);
  }

  return (
    <div className={listOpen? "select-filter-container list-open" : "select-filter-container"}>
    <div className="select-header" onClick={toggleList}>
      <div className="select-header-title">{headerTitle}</div>
    </div>
    {
      listOpen && <ul className="custom-list" onClick={e => e.stopPropagation()}>
          {
            list.map((item) => (<li className="custom-list-item" key={item.id} onClick={() => selectItem(item.title)}>
              {item.title}
            </li>))
          }
        </ul>
    }
  </div>)
}

Select.propTypes = {};

export default Select;
