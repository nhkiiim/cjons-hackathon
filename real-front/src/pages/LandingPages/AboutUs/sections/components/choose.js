// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// Face Type Images
import M20 from "assets/images/faces/20대 남성.png";
import M30 from "assets/images/faces/30대 남성.png";
import M40 from "assets/images/faces/40대 남성.png";
import M50 from "assets/images/faces/50대 남성.png";
import W20 from "assets/images/faces/20대 여성.png";
import W30 from "assets/images/faces/30대 여성.png";
import W40 from "assets/images/faces/40대 여성.png";
import W50 from "assets/images/faces/50대 여성.png";

const mFaces = [
  [M20, "20대 남성"],
  [M30, "30대 남성"],
  [M40, "40대 남성"],
  [M50, "50대 남성"],
];

const wFaces = [
  [W20, "20대 여성"],
  [W30, "30대 여성"],
  [W40, "40대 여성"],
  [W50, "50대 여성"],
];

function Choose({ setStep }) {
  const onClick = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Select
          </MKTypography>
        </Grid>
        <Grid container spacing={4} columns={24} alignItems="center">
          {mFaces.map((face) => (
            <Grid item xs={12} lg={6} sx={{ ml: "auto", mt: { xs: 3, lg: 0 }, mb: 2 }}>
              <CenteredBlogCard image={face[0]} title={face[1]} onClick={onClick} />
            </Grid>
          ))}

          {wFaces.map((face) => (
            <Grid item xs={12} lg={6} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
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
