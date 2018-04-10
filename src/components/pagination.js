import React, { Component } from 'react';
import PropTypes from 'prop-types';

// <span>1</span>
// <span><a href="">2</a></span>


const PaginationItem = ({ pageNum, curPage, total, onClick }) => {
	return (
		<span>
			{curPage + 1 === pageNum
				? pageNum
				: <a href="" onClick={event => {
						event.preventDefault();
						onClick(total, pageNum - 1);
					}
				}>{pageNum}</a>
			}
		</span>
	)
}

const Pagination = ({ pagination, onPaginationClick }) => {
	const { total, cur } = pagination;
	let paginations = [];
	for(let i=1; i <= total; i++) {
		paginations.push(<PaginationItem key={i} pageNum={i} curPage={cur} total={total} onClick={onPaginationClick} />);
	}
	return (
		<div className="page clearb" id="pagination">
			<div className="fp_page_bar">
				{
					cur == 0 ?
						<span className="page_pre">上一页</span> :
						<span className="page_pre" onClick={event => {
							event.preventDefault();
							onPaginationClick(total, cur-1);
						}}><a href="">上一页</a></span>
				}
				{paginations}
				{
					cur === total - 1 ?
						<span className="page_next">下一页</span> :
						<span className="page_next" onClick={event => {
							event.preventDefault();
							onPaginationClick(total, cur+1);
						}}><a href="">下一页</a></span>
				}
			</div>
		</div>
	);
}


export default Pagination;

PaginationItem.propTypes = {
	pageNum: PropTypes.number.isRequired,
	curPage: PropTypes.number.isRequired
}

Pagination.propTypes = {
	pagination: PropTypes.objectOf(PropTypes.number).isRequired,
	onPaginationClick: PropTypes.func.isRequired
}