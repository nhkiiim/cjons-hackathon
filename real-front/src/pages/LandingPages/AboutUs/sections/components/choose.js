// import { useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// Face Type Images
// import M20 from "assets/images/faces/20m.png";
// import M30 from "assets/images/faces/30m.png";
// import M40 from "assets/images/faces/40m.png";
// import M50 from "assets/images/faces/50m.png";
import W20 from "assets/images/faces/20w.png";
import W30 from "assets/images/faces/30w.png";
import W40 from "assets/images/faces/40w.png";
import W50 from "assets/images/faces/50w.png";

// const mFaces = [
//   [M20, "20대 남성"],
//   [M30, "30대 남성"],
//   [M40, "40대 남성"],
//   [M50, "50대 남성"],
// ];

const wFaces = [
  [W20, "TAN 톤"],
  [W30, "WARM 톤"],
  [W40, "BEIGE 톤"],
  [W50, "FAIR 톤"],
];

function Choose({ setStep }) {
  // useEffect(() => {
  //   window.scrollTo(0, 510);
  // }, []);

  const onClick = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <MKBox component="section" py={3}>
      <Container>
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
            variant=h1, h2, ..., h6
          </MKTypography>
        </Grid>

        <Grid
          container
          mt={0.1}
          spacing={-12}
          columns={24}
          justifyContent="center"
          alignItems="center"
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          {/* {mFaces.map((face) => (
            <Grid item xs={3} lg={5} sx={{ ml: "auto", mr: "auto", mt: { xs: 3, lg: 0 }, mb: 2 }}>
              <CenteredBlogCard image={face[0]} title={face[1]} onClick={onClick} />
            </Grid>
          ))} */}

          <Grid item xs={12} lg={20} mt={2} mb={2} />

          {wFaces.map((face) => (
            <Grid item xs={3} lg={5} sx={{ ml: "auto", mr: "auto", mt: { xs: 3, lg: 0 } }}>
              <CenteredBlogCard image={face[0]} title={face[1]} onClick={onClick} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

Choose.defaultProps = {
  setStep: () => {},
};

Choose.propTypes = {
  setStep: () => {},
};

export default Choose;
