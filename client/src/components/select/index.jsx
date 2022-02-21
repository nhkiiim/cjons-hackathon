import React from "react";
import * as S from "./style";
import {eyes, bases, lips} from "../../utils/srcs";

function Select({character, eye, setEye, base, setBase, lip, setLip}) {
	const onClickEye = (e) => {
		console.log(e.target.closest("img").dataset.src);
		setEye(e.target.closest("img").dataset.src);
	};

	const onClickBase = (e) => {
		console.log(e.target.closest("img").dataset.src);
		setBase(e.target.closest("img").dataset.src);
	};

	const onClickLip = (e) => {
		console.log(e.target.closest("img").dataset.src);
		setLip(e.target.closest("img").dataset.src);
	};

	return (
		<>
			<S.SelectContainer>
				<S.CharacterContainer>
					<S.Character src={`./faces/${character}.png`} />
				</S.CharacterContainer>

				<S.ItemContainer>
					<S.CardContainer>
						<S.CardType>Eye</S.CardType>
						<S.CardList onClick={onClickEye}>
							{eyes.map((eye) => (
								<S.Card>
									<S.CardImg
										src={`./eyes/${eye}.png`}
										data-src={eye}
									></S.CardImg>
									<S.CardTitle>{eye}</S.CardTitle>
								</S.Card>
							))}
						</S.CardList>
					</S.CardContainer>
					<S.CardContainer>
						<S.CardType>Base</S.CardType>
						<S.CardList onClick={onClickBase}>
							{bases.map((base) => (
								<S.Card>
									<S.CardImg
										src={`./bases/${base}.png`}
										data-src={base}
									></S.CardImg>
									<S.CardTitle>{base}</S.CardTitle>
								</S.Card>
							))}
						</S.CardList>
					</S.CardContainer>
					<S.CardContainer>
						<S.CardType>Lips</S.CardType>
						<S.CardList onClick={onClickLip}>
							{lips.map((lip) => (
								<S.Card>
									<S.CardImg
										src={`./lips/${lip}.png`}
										data-src={lip}
									></S.CardImg>
									<S.CardTitle>{lip}</S.CardTitle>
								</S.Card>
							))}
						</S.CardList>
					</S.CardContainer>
				</S.ItemContainer>

				<S.SelectedContainer>
					<S.SelectedItem>
						<S.CardType>Eyes</S.CardType>
						<S.CardImg src={`./eyes/${eye}.png`} />
						<S.CardTitle>{eye}</S.CardTitle>
					</S.SelectedItem>
					<S.SelectedItem>
						<S.CardType>Base</S.CardType>
						<S.CardImg src={`./bases/${base}.png`} />
						<S.CardTitle>{base}</S.CardTitle>
					</S.SelectedItem>
					<S.SelectedItem>
						<S.CardType>Lips</S.CardType>
						<S.CardImg src={`./lips/${lip}.png`} />
						<S.CardTitle>{lip}</S.CardTitle>
					</S.SelectedItem>
				</S.SelectedContainer>
			</S.SelectContainer>
		</>
	);
}

export default Select;
