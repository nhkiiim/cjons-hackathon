import React from "react";
import * as S from "./style";
import {results} from "../../utils/srcs";

function Result() {
	console.log(results);

	return (
		<>
			<S.WholeContainer>
				<S.ResultContainer>
					<S.ResultImg src={`./results/${results[0]}.png`} />
				</S.ResultContainer>

				<S.HistoryContainer>
					<S.HistoryItem>
						<S.HistoryImg />
						<S.HistoryData></S.HistoryData>
					</S.HistoryItem>
				</S.HistoryContainer>
			</S.WholeContainer>
		</>
	);
}

export default Result;
