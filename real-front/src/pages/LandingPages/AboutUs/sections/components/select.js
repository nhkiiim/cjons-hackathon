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
import Button from "@mui/material/Button";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import ImageCard from "examples/Cards/BlogCards/ImageCard";

// Face Type Images
// import M20 from "assets/images/faces/20대 남성.png";
// import M30 from "assets/images/faces/30대 남성.png";
// import M40 from "assets/images/faces/40대 남성.png";
// import M50 from "assets/images/faces/50대 남성.png";
import W20 from "assets/images/faces/20w.png";
// import W30 from "assets/images/faces/30대 여성.png";
// import W40 from "assets/images/faces/40대 여성.png";
// import W50 from "assets/images/faces/50대 여성.png";

// Eye Type Images
import E1 from "assets/images/eyes/milk.png";
import E2 from "assets/images/eyes/clio_sharp.png";
import E3 from "assets/images/eyes/clio_kill.png";

// Base Type Images
import B1 from "assets/images/bases/bglow.png";
import B2 from "assets/images/bases/fresh.png";
import B3 from "assets/images/bases/killcover.png";

// Lip Type Images
import L1 from "assets/images/lips/bbia.png";
import L2 from "assets/images/lips/peripera.png";
import L3 from "assets/images/lips/mac.png";

const eyes = [
  [E1, "밀크터치 올데이 롱앤컬 마스카라"],
  [E2, "클리오 샤프, 쏘 심플 워터프루프 펜슬라이너"],
  [E3, "클리오 킬래쉬 수퍼프루프마스카라"],
];

const bases = [
  [B1, "에스쁘아 비글로우 파운데이션"],
  [B2, "에스쁘아 프레쉬 세팅 파우더"],
  [B3, "클리오 킬커버 광채 파운데이션"],
];

const lips = [
  [L1, "삐아 라스트 벨벳 립 틴트 14종"],
  [L2, "페리페라 잉크 무드 매트 틴트"],
  [L3, "MAC 립스틱"],
];

function Select({ setStep }) {
  const onClickNext = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const onClickCard = (e) => {
    e.preventDefault();
    e.target.closest(".unSelected").classList.add("selected");
  };

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
          sx={{ mx: "auto", textAlign: "center", marginBottom: "10px" }}
        >
          <MKTypography variant="h3" verticalAlign="middle" mb={6}>
            여기에 내용을 적어주세요. 스타일을 변경하고 싶으시다면 sx 안에 CSS 를 작성해주세요.
            variant=h1, h2, h3, ..., h6
          </MKTypography>
        </Grid>
        <Grid container mt={0.1} spacing={2} xs={12} direction="row">
          <Grid item xs={4} sm={6} lg={5}>
            <ImageCard image={W20} title="20대 여성" />
          </Grid>

          <Grid xs={1} />

          <Grid
            container
            xs={6}
            spacing={1}
            sx={{
              "& .selected": {
                borderRadius: "10px",
                boxShadow: "0px 2.5px 5px #c4c4c4",
              },
            }}
          >
            <Grid container item xs={12} spacing={3}>
              <MKTypography variant="h5">Eyes</MKTypography>
              <Grid container item xs={12} spacing={3}>
                {eyes.map((eye) => (
                  <>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      lg={4}
                      className="unSelected"
                      onClick={onClickCard}
                      sx={{
                        padding: "10px 20px 0px 0px",
                      }}
                    >
                      <TransparentBlogCard image={eye[0]} title={eye[1]} />
                    </Grid>
                  </>
                ))}
              </Grid>
            </Grid>

            <Grid container item xs={12} spacing={3}>
              <MKTypography variant="h5" mt={4}>
                Bases
              </MKTypography>
              <Grid container item xs={12} spacing={3}>
                {bases.map((base) => (
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    lg={4}
                    className="unSelected"
                    onClick={onClickCard}
                    sx={{
                      padding: "10px 25px 0px 0px",
                    }}
                  >
                    <TransparentBlogCard image={base[0]} title={base[1]} />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid container item xs={12} spacing={3}>
              <MKTypography variant="h5" mt={4}>
                Lips
              </MKTypography>
              <Grid container item xs={12} spacing={3}>
                {lips.map((lip) => (
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    lg={4}
                    className="unSelected"
                    onClick={onClickCard}
                    sx={{
                      padding: "10px 25px 0px 0px",
                    }}
                  >
                    <TransparentBlogCard image={lip[0]} title={lip[1]} />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Button
              size="large"
              variant="contained"
              color="info"
              sx={{ margin: "0 0 0 420px" }}
              onClick={onClickNext}
            >
              선택 완료
            </Button>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

Select.defaultProps = {
  setStep: () => {},
};

Select.propTypes = {
  setStep: () => {},
};

export default Select;
