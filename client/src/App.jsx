import React, {createContext, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Choose from "./components/choose";
import Select from "./components/select";
import Result from "./components/result";

// TODO. 전체 상태 저장 구조 생성 (Context API)
// export const AppContext = createContext({
// 	state: {
// 		character: "",
// 		eye: "",
// 		base: "",
// 		lips: "",
// 		history: [],
// 	},
// 	actions: {
// 		setCharacter: () => {},
// 		setEye: () => {},
// 		setBase: () => {},
// 		setLips: () => {},
// 		setHistory: () => {},
// 	},
// });

const App = () => {
	const [character, setCharacter] = useState("20대 남성");
	const [eye, setEye] = useState("선택 안함");
	const [base, setBase] = useState("선택 안함");
	const [lip, setLip] = useState("선택 안함");
	const [history, setHistory] = useState([]);

	return (
		<>
			{/* <AppContext.Provider> */}
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route
						exact
						path="/choose"
						element={<Choose setCharacter={setCharacter} />}
					/>
					<Route
						exact
						path="/select"
						element={
							<Select
								character={character}
								eye={eye}
								setEye={setEye}
								base={base}
								setBase={setBase}
								lip={lip}
								setLip={setLip}
							/>
						}
					/>
					<Route exact path="/result" element={<Result />} />
				</Routes>
			</BrowserRouter>
			{/* </AppContext.Provider> */}
		</>
	);
};

export default App;

// Ref. https://velog.io/@kcdoggo/Switch-is-not-exported-from-react-router-dom-%EC%97%90%EB%9F%AC
