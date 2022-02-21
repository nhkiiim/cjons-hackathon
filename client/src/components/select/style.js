import styled from "styled-components";

export const SelectContainer = styled.div`
	border: 2px solid red;
	display: flex;
	width: 85%;
	margin-left: auto;
	margin-right: auto;
`;

// Character
export const CharacterContainer = styled.div`
	width: 320px;
	height: 550px;
	margin-right: 20px;
`;

export const Character = styled.img`
	border: 4px solid purple;
	width: 320px;
	height: 550px;
`;

// Item
export const ItemContainer = styled.div`
	border: 1px solid blue;
	padding: 10px 10px;
	width: 320px;
	height: 550px;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CardType = styled.div`
	width: 100%;
	height: 20px;
	text-align: center;
`;

export const CardList = styled.div`
	border: 1px solid gray;
	width: 100%;
	height: 150px;
	display: flex;
	overflow-x: scroll;
`;

export const Card = styled.button`
	border: 1px solid orange;
	background: none;
	width: 100px;
	height: 150px;
	display: flex;
	flex-direction: column;
	&:hover {
		cursor: pointer;
	}
	&:focus {
		border: 5px solid blue;
	}
`;

export const CardImg = styled.img`
	border: 1px solid black;
	display: block;
	width: 100px;
	height: 110px;
`;

export const CardTitle = styled.div`
	width: 100px;
	height: 40px;
	text-align: center;
`;

// Selected
export const SelectedContainer = styled.div`
	width: 120px;
	height: 550px;
	display: flex;
	flex-direction: column;
`;

export const SelectedItem = styled.div`
	border: 1px solid gray;
	width: 110px;
	height: 170px;
`;
