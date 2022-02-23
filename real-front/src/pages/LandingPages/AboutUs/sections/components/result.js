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
import R20W1 from "assets/images/results-20-w/20대 여성 결과1.png";
import R20W2 from "assets/images/results-20-w/20대 여성 결과2.png";
// import R20W3 from "assets/images/results-20-w/20대 여성 결과3.png";
// import R20W4 from "assets/images/results-20-w/20대 여성 결과4.png";
// import R20W5 from "assets/images/results-20-w/20대 여성 결과5.png";
// import R20W6 from "assets/images/results-20-w/20대 여성 결과6.png";
// import R20W7 from "assets/images/results-20-w/20대 여성 결과7.png";
import R20W8 from "assets/images/results-20-w/20대 여성 결과8.png";
import R20W9 from "assets/images/results-20-w/20대 여성 결과9.png";

// // Eye Type Images
import E1 from "assets/images/eyes/밀크터치 올데이 롱앤컬 마스카라.png";
import E2 from "assets/images/eyes/클리오 샤프, 쏘 심플 워터프루프 펜슬라이너.png";
import E3 from "assets/images/eyes/클리오 킬래쉬 수퍼프루프마스카라.png";

// // Base Type Images
import B1 from "assets/images/bases/에스쁘아 비글로우 파운데이션.png";
import B2 from "assets/images/bases/에스쁘아 프레쉬 세팅 파우더.png";
import B3 from "assets/images/bases/클리오 킬커버 광채 파운데이션.png";

// // Lip Type Images
import L1 from "assets/images/lips/삐아 라스트 벨벳 립 틴트 14종.png";
import L2 from "assets/images/lips/페리페라 잉크 무드 매트 틴트.png";
import L3 from "assets/images/lips/MAC 립스틱.png";

function Result() {
  return (
    <MKBox component="section" py={3}>
      <Container xs={12}>
        <Grid container item xs={12}>
          <MKTypography variant="h3" mb={6}>
            Result
          </MKTypography>
        </Grid>

        <Grid container spacing={2} xs={12} direction="row">
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
