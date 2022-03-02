// @mui material components
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
// import AvatarCard from "examples/Cards/BlogCards/AvatarCard";

// Material Kit 2 React examples
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import p1 from "assets/images/p1.png";
import p2 from "assets/images/p2.png";
import p4 from "assets/images/p4.png";

// Face Type Images
// import M20 from "assets/images/faces/20m.png";
// import M30 from "assets/images/faces/30m.png";
// import M40 from "assets/images/faces/40m.png";
// import M50 from "assets/images/faces/50m.png";
// import W20 from "assets/images/faces/20w.png";
// import W30 from "assets/images/faces/30w.png";
// import W40 from "assets/images/faces/40w.png";
// import W50 from "assets/images/faces/50w.png";

// const mFaces = [
//   [M20, "20대 남성"],
//   [M30, "30대 남성"],
//   [M40, "40대 남성"],
//   [M50, "50대 남성"],
// ];

// const wFaces = [
//   [W20, "20대 여성"],
//   [W30, "30대 여성"],
//   [W40, "40대 여성"],
//   [W50, "50대 여성"],
// ];

function Home({ setStep }) {
  const onClick = (e) => {
    e.preventDefault();
    setStep(1);
  };

  // variant: "text", "contained", "outlined", "gradient"
  // color:"default", "white", "primary", "secondary", "info", "success", "warning", "error", "light", "dark",

  return (
    <MKBox component="section" py={3}>
      <Container>
        <div align="center">
          <MKTypography variant="h3" color="black" fontWeight="light" opacity={1} mt={3} mb={1}>
            아름다움을 담다
          </MKTypography>
          <MKTypography variant="body2" color="black" opacity={0.8} mt={1} mb={4}>
            버추얼 휴먼으로 화장품을 테스트 해보세요
          </MKTypography>
          <div align="center">
            <img height="400" src={p1} alt="no" /> &nbsp;
            <img height="400" src={p4} alt="no" /> &nbsp;
            <img height="400" src={p2} alt="no" /> &nbsp;
          </div>
          <MKTypography mt={1}>&nbsp;</MKTypography>
          <MKButton
            onClick={onClick}
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#ff9d8c",
              color: "white",
              "&:hover": { backgroundColor: "#ff9d8c" },
            }}
          >
            START
          </MKButton>
          <MKTypography mt={1}>&nbsp;</MKTypography>
        </div>
        {/* <Grid
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
          spacing={-22}
          columns={24}
          justifyContent="center"
          alignItems="center"
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          {mFaces.map((face) => (
            <Grid item xs={3} lg={5} sx={{ ml: "auto", mr: "auto", mt: { xs: 3, lg: 0 }, mb: 2 }}>
              <CenteredBlogCard image={face[0]} title={face[1]} onClick={onClick} />
            </Grid>
          ))}

          <Grid item xs={12} lg={20} mt={2} mb={2} />

          {wFaces.map((face) => (
            <Grid item xs={3} lg={5} sx={{ ml: "auto", mr: "auto", mt: { xs: 3, lg: 0 } }}>
              <CenteredBlogCard image={face[0]} title={face[1]} onClick={onClick} />
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </MKBox>
  );
}

Home.defaultProps = {
  setStep: () => {},
};

Home.propTypes = {
  setStep: () => {},
};

export default Home;
