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
	background-color: rgba(238, 238, 238, 0.6);
	border-radius: 50%;
	text-align: center;
`;

// const CardDataTypeB = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: auto;
//   background-color: rgba(255, 255, 255, 0.6);
//   border-radius: 50%;
//   text-align: center;
// `

const CardDataKanji = styled.div`
	span {
		color: #ffffffb6;
		font-size: 1rem;
		width: 200px;
	}
`;

// /* MQ */

// @media all and (min-width: 1024px) {
//   .card-data-name {
//     span {
//       font-size: 1.6rem;
//     }
//   }
//   .card-data-kanji {
//     span {
//       font-size: 1rem;
//     }
//   }

//   .card {
//     min-width: 300px;
//   }
// }
// @media all and (min-width: 768px) {
//   .card-data-name {
//     span {
//       font-size: 1.6rem;
//     }
//   }
//   .card-data-kanji {
//     span {
//       font-size: 1rem;
//     }
//   }

//   .card {
//     min-width: 300px;
//   }
// }

// @media all and (min-width: 480px) {
//   .card-data-name {
//     span {
//       font-size: 1.6rem;
//     }
//   }
//   .card-data-kanji {
//     span {
//       font-size: 1rem;
//     }
//   }

//   .card {
//     min-width: 300px;
//   }
// }

// .type-water {
//   background-color: $water;
// }

// .type-fire {
//   background-color: $fire;
// }

// .type-normal {
//   background-color: $normal;
// }

// .type-fighting {
//   background-color: $fighting;
// }

// .type-flying {
//   background-color: $flying;
// }

// .type-poison {
//   background-color: $poison;
// }

// .type-ground {
//   background-color: $ground;
// }

// .type-rock {
//   background-color: $rock;
// }

// .type-bug {
//   background-color: $bug;
// }

// .type-ghost {
//   background-color: $ghost;
// }

// .type-steel {
//   background-color: $steel;
// }

// .type-grass {
//   background-color: $grass;
// }

// .type-electric {
//   background-color: $electric;
// }

// .type-psychic {
//   background-color: $psychic;
// }

// .type-ice {
//   background-color: $ice;
// }

// .type-dragon {
//   background-color: $dragon;
// }

// .type-dark {
//   background-color: $dark;
// }

// .type-fairy {
//   background-color: $fairy;
// }

// .type-unknown {
//   background-color: $unknown;
// }

const Card = props => {
	return (
		<Link to='/modal'>
			<CardContainer>
				<SingleCard>
					<div>
						<CardDataId>
							<span>#{props.id}</span>
						</CardDataId>

						<CardDataName>
							<span>{props.name}</span>
							<CardDataKanji>
								<span>{props.kanji}</span>
							</CardDataKanji>
						</CardDataName>
						<CardDataTypes>
							<CardDataTypeA>
								<span>
									<i className={props.typeAicon}></i>
									{props.typeA}
								</span>
							</CardDataTypeA>
							{props.typeB && (
								<CardDataTypeB>
									<span>
										<i className={props.typeBicon}></i>
										{props.typeB}
									</span>
								</CardDataTypeB>
							)}
						</CardDataTypes>
					</div>

					<CardImgCircle>
						<CardImg>
							<img alt='' src={props.img} />
						</CardImg>
					</CardImgCircle>
				</SingleCard>
			</CardContainer>
		</Link>
	);
};

export default Card;
