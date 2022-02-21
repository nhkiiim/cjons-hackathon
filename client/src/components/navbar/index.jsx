import React from "react";
import * as S from "./style";
import {Link} from "react-router-dom";

function Navbar() {
	return (
		<>
			<S.NavbarContainer>
				<S.NavbarItem>
					<Link to="/">홈</Link>
				</S.NavbarItem>
				<S.NavbarItem>
					<Link to="/choose">캐릭터 선택</Link>
				</S.NavbarItem>
				<S.NavbarItem>
					<Link to="/select">제품 선택</Link>
				</S.NavbarItem>
				<S.NavbarItem>
					<Link to="/result">결과 보기</Link>
				</S.NavbarItem>
			</S.NavbarContainer>
		</>
	);
}

export default Navbar;
