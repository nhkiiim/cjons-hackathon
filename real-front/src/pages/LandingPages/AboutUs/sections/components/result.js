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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import AvatarCard from "examples/Cards/BlogCards/AvatarCard";

// Resylt Images
import R20W1 from "assets/images/results-20-w/r1.png";
import R20W2 from "assets/images/results-20-w/r2.png";
// import R20W3 from "assets/images/results-20-w/20대 여성 결과3.png";
// import R20W4 from "assets/images/results-20-w/20대 여성 결과4.png";
// import R20W5 from "assets/images/results-20-w/20대 여성 결과5.png";
// import R20W6 from "assets/images/results-20-w/20대 여성 결과6.png";
// import R20W7 from "assets/images/results-20-w/20대 여성 결과7.png";
import R20W8 from "assets/images/results-20-w/r8.png";
import R20W9 from "assets/images/results-20-w/r9.png";

// // Eye Type Images
import E1 from "assets/images/eyes/milk.png";
import E2 from "assets/images/eyes/clio_sharp.png";
import E3 from "assets/images/eyes/clio_kill.png";

// // Base Type Images
import B1 from "assets/images/bases/bglow.png";
import B2 from "assets/images/bases/fresh.png";
import B3 from "assets/images/bases/killcover.png";

// // Lip Type Images
import L1 from "assets/images/lips/bbia.png";
import L2 from "assets/images/lips/peripera.png";
import L3 from "assets/images/lips/mac.png";

function Result() {
  return (
    <MKBox component="section" py={3}>
      <Container xs={12}>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h3" verticalAlign="middle" mb={6} sx={{}}>
            여기에 내용을 적어주세요. 스타일을 변경하고 싶으시다면 sx 안에 CSS 를 작성해주세요.
            variant=h1, h2, h3, ..., h6
          </MKTypography>
        </Grid>

        <Grid container mt={0.1} spacing={2} xs={12} direction="row">
          <Grid container xs={5} spacing={1}>
            <Grid item xs={4} sm={6} lg={12}>
              <AvatarCard image={R20W1} title="20대 여성 결과1" eye={E1} base={B1} lip={L1} />
            </Grid>
          </Grid>

          <Grid xs={1} />

          <ImageList
            sx={{ position: "relative", top: -40, width: 540, height: 605, paddingTop: 5 }}
            cols={1}
            rowHeight={164}
          >
            <Grid item xs={4} sm={6} lg={10}>
              <AvatarCard image={R20W2} title="20대 여성 결과2" eye={E2} base={B2} lip={L2} />
            </Grid>
            <Grid item xs={4} mb={10} />
            <Grid item xs={4} sm={6} lg={10}>
              <AvatarCard image={R20W8} title="20대 여성 결과8" eye={E3} base={B3} lip={L3} />
            </Grid>
            <Grid item xs={4} mb={10} />
            <Grid item xs={4} sm={6} lg={10}>
              <AvatarCard image={R20W9} title="20대 여성 결과9" eye={E1} base={B2} lip={L3} />
            </Grid>
            <Grid item xs={4} mb={10} />
          </ImageList>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Result;
