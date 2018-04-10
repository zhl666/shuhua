import React, { Component } from 'react';
import { render } from 'react-dom';
import Root from './src/containers/Root'


const rootElement = document.getElementById('root');

render(
	<Root />,
	rootElement
);