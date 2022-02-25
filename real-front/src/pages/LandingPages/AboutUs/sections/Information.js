/* eslint-disable no-unused-vars */
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";

// Material Kit 2 React components
// import MKBox from "components/MKBox";

// Material Kit 2 React examples
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import React, { useState } from "react";
import Home from "./components/home";
import Choose from "./components/choose";
import Select from "./components/select";
import Result from "./components/result";

function Information() {
  const [step, setStep] = useState(0);

  if (step === 0) {
    return (
      <>
        <Home setStep={setStep} />
      </>
    );
  }
  if (step === 1) {
    return (
      <>
        <Choose setStep={setStep} />
      </>
    );
  }
  if (step === 2) {
    return (
      <>
        <Select setStep={setStep} />
      </>
    );
  }
  return (
    <>
      <Result />
    </>
  );
}

export default Information;
