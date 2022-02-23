/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";

function ImageCard({ image, title, eye, base, lip }) {
  return (
    <Card>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MKBox>
      <MKBox p={3} mt={-1} textAlign="center">
        <Container>
          <Grid container justifyContent="center">
            <Stack direction="row" alignItems="normal" spacing={3}>
              <MKAvatar src={eye} alt="xxl" size="xxl" />
              <MKAvatar src={base} alt="xxl" size="xxl" />
              <MKAvatar src={lip} alt="xxl" size="xxl" />
            </Stack>
          </Grid>
        </Container>
      </MKBox>
    </Card>
  );
}

// Typechecking props for the ImageCard
ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  eye: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
  lip: PropTypes.string.isRequired,
};

export default ImageCard;
