import React, { Component } from 'react';

const Item = ({title, url, imgUrl}) => {

	return (
		<li className="item">
			<a href={url} target="_blank" title={title} className="img">
				<img src={imgUrl} />
			</a>
			<p className="title">
				<a href={url} target="_blank">
					{title}
				</a>
			</p>
		</li>
	)
}

const ListCont = ({ items }) => {
	let listAry = [];
	items.forEach(( item, idx ) => {
		listAry.push(<Item key={idx} title={item.TitleCN} url={item.SourceUrl} imgUrl={item.PreviewImage} />);
	})
	return (
		<div className="shuhua-exchange" id="searchList">
			<div className="shuhua-tab"></div>
			<div className="exchange-ctn">
				<div className="ex-con" id="shuhuaListResponse">
					<ul>
						{listAry}
					</ul>
				</div>
			</div>
		</div>
	)
}
export default ListCont;