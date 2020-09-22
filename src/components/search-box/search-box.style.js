import styled from 'styled-components';

export const Container = styled.input`
	-webkit-appearence: none;
	border: none;
	outline: none;
	padding-left: 50px;
	width: 33%;
	height: 50px;
	border-radius: 4px;
	line-height: 30px;
	margin-bottom: 30px;
	font-size: 16px;
	box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.15);

	&:hover {
		box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.15);
		transition: box-shadow .2s ease-in-out;
	}
`;
