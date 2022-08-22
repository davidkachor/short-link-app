import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Header = styled(Link)`
	display: flex;
	align-items: center;
	font-weight: 700;
	font-size: 24px;
	line-height: 29px;
	font-style: normal;
	position: relative;
	color: black;

	&:before {
		content: '';
		width: 87.5px;
		height: 8.29px;
		position: absolute;
		z-index: -1;
		left: -12px;
		top: 19px;
		border: 4px solid;
		border-color: #f0b80d transparent transparent transparent;
		border-radius: 50%/16px 16px 0 0;
		transform: rotate(-14.82deg);
	}
	&:after {
		content: '®';
		font-size: 18px;
		font-weight: bold;
		position: absolute;
		left: 100%;
		top: 8px;
	}
`

const Logo = () => {
	return <Header to='/'>asd.link</Header>
}

export default Logo
