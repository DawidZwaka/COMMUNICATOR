import React, { forwardRef } from 'react';
import Header from '../../UI/Header/Header';
import Styled from 'styled-components';

const CircleImg = Styled.img`
	border-radius: 50%;
	width: 50px;
	height: 50px;
	
	//temporary styling
	background-color: white;
`;

const CardCnt = Styled.div`
	display: flex;
`;

const ContactCard = (props, ref) => {
	let render;
	const { loading, header, imgUrl } = props;

	if (loading) render = <CardCnt></CardCnt>;
	else
		render = (
			<CardCnt ref={ref}>
				<CircleImg url={imgUrl} />
				<Header size='h5'>{header}</Header>
				<p>{content}</p>
			</CardCnt>
		);

	return render;
};

export default forwardRef(ContactCard);
