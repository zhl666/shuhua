// 容器
import { connect } from 'react-redux'
import React, { Component } from 'react';

import Filter from '../components/showFilter'
import List from '../components/list'
import Pagination from '../components/pagination'
import { show_list, fetchPostsIfNeed } from '../actions/'
import { set_filter, defaultFilter, getFilter } from '../actions/showFilter'
import { set_pagination, default_pagination, initPagination, setPagination } from '../actions/pagination'

import callAPI from '../utils/index';
import GetListUrl from '../constants/ApiConstants'


class App extends Component {
	constructor(props) {
		super(props);
		this.handleFilterClick = this.handleFilterClick.bind(this)
		this.state = {
			a: 1,
			b: 2
		}
	}

	componentDidMount() {
		const { dispatch, pagination } = this.props;
		const { cur } = pagination;
		const filterArr = Object.values(this.handleGetHash());
		const defaultFilterArr = Object.entries(this.handleGetHash());
		defaultFilterArr.forEach(item => {
			item[1] !== '' ?
				dispatch(getFilter(item[0], decodeURIComponent(item[1]))) : null;
		});
		dispatch(fetchPostsIfNeed(cur, decodeURIComponent(this.handleFilterValueStr(filterArr))));
	}

	componentWillReceiveProps(nextProps) {
		const { dispatch, pagination, filter } = this.props;
		const { cur } = pagination;
		const filterArr = Object.values(filter);
		const nextFilterAry = Object.values(nextProps.filter)
		this.handleSetHash(Object.entries(filter));
		// page fetch
		if (nextProps.pagination.cur !== undefined && cur !== undefined && nextProps.pagination.cur !== cur) {
			dispatch(fetchPostsIfNeed(nextProps.pagination.cur, this.handleFilterValueStr(filterArr)))
		}
		// filter fetch
		if (this.handleFilterValueStr(filterArr) !== this.handleFilterValueStr(nextFilterAry)) {
			dispatch(fetchPostsIfNeed(0, this.handleFilterValueStr(nextFilterAry)));
		}
	}

	handleFilterClick(typeValue, text) {
		const { dispatch, filter } = this.props;
		if (filter[typeValue] === text) {
			dispatch(getFilter(typeValue, ''));
			return;
		}
		dispatch(getFilter(typeValue, text));
	}

	handleFilterValueStr(arr) {
		const newFilterArr = [];
		arr.map(item => {
			item !== '' ? 
				item !== defaultFilter ?
					newFilterArr.push(item) :
					 null :
					 	null;
		});
		return newFilterArr.join();
	}

	handleSetHash(arr) {
		if(!arr) return;
		let hashArr = [];
		arr.forEach(item => {
			item[1] !== '' ? 
				hashArr.push(item.join('=')) :
					null
		});
		window.location.hash = hashArr.join('&');
	}

	handleGetHash() {
		let hashValue = window.location.hash;
		if (hashValue === '') {
			return {};
		}
		hashValue = hashValue.split('#')[1];
		const hashArr = hashValue.split('&');
		const filterObj = new Object();
		hashArr.forEach(item => {
			let itemArr = item.split('=');
			filterObj[itemArr[0]] = itemArr[1];
		})
		return filterObj;
	}

	render() {
		const { dispatch, list, filter, pagination } = this.props;
		return (
			<div>
				<Filter
					filterObj={filter}
					onFilterClick={this.handleFilterClick} />
				<List items={list} />
				<Pagination
					onPaginationClick={(total, idx) => {
							return dispatch(initPagination(total, idx));
						}
					}
					pagination={pagination} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		filter: state.filter,
		list: state.list,
		pagination: state.pagination
	}
}
export default connect(mapStateToProps)(App);