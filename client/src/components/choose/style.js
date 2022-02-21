import styled from "styled-components";

export const ChooseContainer = styled.div`
	border: 2px solid red;
	display: flex;
	flex-direction: column;
	width: 85%;
	margin-left: auto;
	margin-right: auto;
`;

export const GenderContainer = styled.div`
	border: 1px solid green;
	display: flex;
	margin-left: auto;
	margin-right: auto;
`;

export const FaceContainer = styled.button`
	border: 1px solid green;
	background: none;
	box-sizing: content-box;
	height: 290px;
	margin: 10px 10px;
	&:focus {
		margin: 9px 9px;
		border: 2px solid red;
	}
`;

export const Face = styled.img`
	border: 1px solid blue;
	width: 200px;
	height: 250px;
	&:hover {
		cursor: pointer;
	}
`;

export const FaceName = styled.div`
	/* border: 1px solid black; */
	width: 200px;
	height: 30px;
	text-align: center;
	margin-top: 3px;
	font-size: 1.5em;
`;
