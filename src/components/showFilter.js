import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { filters, defaultFilter, filtersTitle } from '../actions/showFilter';

const FilterNavItem = ({type, filterObj, text, onClick}) => {
  return (
    <a href="javascript:;"
     onClick={(event) => {
        event.preventDefault();
        onClick(type, text);
      }} 
      className={
        text === defaultFilter ?
          filterObj[type] === '' || filterObj[type] === defaultFilter ?
            "cur" : "" :
              filterObj[type] === text ?
                "cur" : ""
      }
      >
      {text}
    </a>
  )
};

class FilterNav extends Component {
  render() {
    const { type, title, items, filterObj } = this.props;
    let filterNavItems = [];
    items.forEach((item, idx) => {
      filterNavItems.push(<FilterNavItem key={idx} text={item} onClick={this.props.onClick} filterObj={filterObj} type={/country[12]/.test(type) ? 'country' : type} />);
    });
    return (
      <dl>
        <dt data-type={type}>
          {title}
        </dt>
        <dd>
          {filterNavItems}
        </dd>
      </dl>
    );
  }
}

class Filter extends Component {
  render() {
    let filterAry = []
    for(let key in filters) {
      let type = key;
      let items = filters[type];
      let title = filtersTitle[type];
      filterAry.push(<FilterNav key={key} title={title} type={type} items={items} onClick={this.props.onFilterClick} filterObj={this.props.filterObj} />)
    }
    return (
      <div className="filter-ctn"> 
        <div className="filter-con">
          {filterAry}
        </div>
      </div>
    )
  }
}

FilterNavItem.propTypes = {
  text: PropTypes.string.isRequired
}
FilterNav.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}



export default Filter;