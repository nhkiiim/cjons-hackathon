import React, {useContext} from "react";
import * as S from "./style";
import {mFaces, wFaces} from "../../utils/srcs";
// import {AppContext} from "../../App";

function Choose({setCharacter}) {
	const onClickChar = (e) => {
		e.preventDefault();

		console.log(e.target.closest("img").dataset.src);
		setCharacter(e.target.closest("img").dataset.src);
	};

	return (
		<>
			<S.ChooseContainer onClick={onClickChar}>
				<S.GenderContainer>
					{mFaces.map((face) => (
						<S.FaceContainer>
							<S.Face src={`./faces/${face}.png`} data-src={face}></S.Face>
							<S.FaceName>{face}</S.FaceName>
						</S.FaceContainer>
					))}
				</S.GenderContainer>
				<S.GenderContainer>
					{wFaces.map((face) => (
						<S.FaceContainer>
							<S.Face src={`./faces/${face}.png`} data-src={face}></S.Face>
							<S.FaceName>{face}</S.FaceName>
						</S.FaceContainer>
					))}
				</S.GenderContainer>
			</S.ChooseContainer>
		</>
	);
}

export default Choose;
