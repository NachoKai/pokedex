import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
	padding: 0.5rem;
	display: flex;

	a {
		text-decoration: none;
	}
`;

const SingleCard = styled.div`
	width: 100%;
	min-width: 270px;
	max-width: 350px;
	margin: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0 1rem 1rem;
	background-color: gray;
	border-radius: 1rem;
	max-height: 90px;
	transition: all 0.2s ease;

	&:hover {
		cursor: pointer;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.09);
	}
`;

const CardImg = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	top: -10px;
	height: auto;
	width: 100%;

	img {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: auto;
		max-width: 150px;
		z-index: 0;
	}
`;

const CardDataId = styled.div`
	span {
		font-size: 0.9rem;
		font-weight: 600;
		color: #212529;
	}
`;

const CardDataName = styled.div`
	span {
		font-weight: 600;
		font-size: 1.5rem;
		color: #fff;
	}
`;

const CardDataTypes = styled.div`
	align-items: center;
	margin: 0.5rem 0;
	display: flex;

	.fas {
		margin-right: 0.2rem;
	}
`;

const CardDataTypeA = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		display: flex;
		font-size: 0.8rem;
		padding: 0.3rem;
		margin: 0 0.2rem 0 0;
		background-color: #212529;
		color: #fff;
		border-radius: 0.4rem;
	}
`;

const CardDataTypeB = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		display: flex;
		font-size: 0.8rem;
		padding: 0.3rem;
		margin: 0 0 0 0.2rem;
		background-color: #495057;
		color: #fff;
		border-radius: 0.4rem;
	}
`;

const CardImgCircle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: auto;
	background-color: ${p => (p.theme === "dark" ? p.theme.circle : p.theme.circle)};
	border-radius: 50%;
	text-align: center;
`;

const CardDataKanji = styled.div`
	span {
		color: #ffffffb6;
		font-size: 1rem;
		width: 200px;
	}
`;

const Card = ({ id, name, kanji, typeAicon, typeA, typeBicon, typeB, img, theme }) => {
	return (
		<Link to='/modal'>
			<CardContainer>
				<SingleCard>
					<div>
						<CardDataId>
							<span>#{id}</span>
						</CardDataId>

						<CardDataName>
							<span>{name}</span>
							<CardDataKanji>
								<span>{kanji}</span>
							</CardDataKanji>
						</CardDataName>
						<CardDataTypes>
							<CardDataTypeA>
								<span>
									<i className={typeAicon}></i>
									{typeA}
								</span>
							</CardDataTypeA>
							{typeB && (
								<CardDataTypeB>
									<span>
										<i className={typeBicon}></i>
										{typeB}
									</span>
								</CardDataTypeB>
							)}
						</CardDataTypes>
					</div>

					<CardImgCircle theme={theme}>
						<CardImg>
							<img alt='' src={img} />
						</CardImg>
					</CardImgCircle>
				</SingleCard>
			</CardContainer>
		</Link>
	);
};

export default Card;
