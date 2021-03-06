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

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import ImageList from "@mui/material/ImageList";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import TransparentImageCard from "examples/Cards/BlogCards/TransparentImageCard";
import ImageCard from "examples/Cards/BlogCards/ImageCard";

// Face Type Images
// import M20 from "assets/images/faces/20대 남성.png";
// import M30 from "assets/images/faces/30대 남성.png";
// import M40 from "assets/images/faces/40대 남성.png";
// import M50 from "assets/images/faces/50대 남성.png";
// import W20 from "assets/images/faces/20w.png";
import W30 from "assets/images/faces/30w.png";
// import W40 from "assets/images/faces/40대 여성.png";
// import W50 from "assets/images/faces/50대 여성.png";

// Eye Type Images
import E1 from "assets/images/eyes/eye1.png";
import E2 from "assets/images/eyes/eye2.png";
import E3 from "assets/images/eyes/eye3.png";
import EC1 from "assets/images/eye-colors/eye-color-1.png";
import EC2 from "assets/images/eye-colors/eye-color-2.png";
import EC3 from "assets/images/eye-colors/eye-color-3.png";
import EC4 from "assets/images/eye-colors/eye-color-4.png";
import EA0 from "assets/images/eye-apply/eye-apply-0.png";
import EA1 from "assets/images/eye-apply/eye-color-1.png";
import EA2 from "assets/images/eye-apply/eye-color-2.png";
import EA3 from "assets/images/eye-apply/eye-color-3.png";
import EA4 from "assets/images/eye-apply/eye-color-4.png";

// Base Type Images
import B1 from "assets/images/bases/base1.png";
import B2 from "assets/images/bases/base2.png";
import B3 from "assets/images/bases/base3.png";
import BC1 from "assets/images/base-colors/base-color-1.png";
import BC2 from "assets/images/base-colors/base-color-2.png";
import BC3 from "assets/images/base-colors/base-color-3.png";
import BC4 from "assets/images/base-colors/base-color-4.png";
import BA0 from "assets/images/base-apply/base-apply-0.png";
import BA1 from "assets/images/base-apply/base-apply-1.png";
import BA2 from "assets/images/base-apply/base-apply-2.png";
import BA3 from "assets/images/base-apply/base-apply-3.png";
import BA4 from "assets/images/base-apply/base-apply-4.png";

// Lip Type Images
import L1 from "assets/images/lips/lip1.png";
import L2 from "assets/images/lips/lip2.png";
import L3 from "assets/images/lips/lip3.png";
import LC1 from "assets/images/lip-colors/lip-color-1.png";
import LC2 from "assets/images/lip-colors/lip-color-2.png";
import LC3 from "assets/images/lip-colors/lip-color-3.png";
import LC4 from "assets/images/lip-colors/lip-color-4.png";
import LA0 from "assets/images/lip-apply/lip-apply-0.png";
import LA1 from "assets/images/lip-apply/lip-apply-1.png";
import LA2 from "assets/images/lip-apply/lip-apply-2.png";
import LA3 from "assets/images/lip-apply/lip-apply-3.png";
import LA4 from "assets/images/lip-apply/lip-apply-4.png";

// Result Images
import r1 from "assets/images/results/r1.png";
import r2 from "assets/images/results/r2.png";
import r3 from "assets/images/results/r3.png";
import r4 from "assets/images/results/r4.png";
import r5 from "assets/images/results/r5.png";

const eyes = [
  [E1, "롬앤 망고튤립"],
  [E2, "3CE 아몬드 퍼지"],
  [E3, "페리페라 디핑모먼트"],
];

const bases = [
  [B1, "에스쁘아 비글로우"],
  [B2, "힌스 파운데이션"],
  [B3, "헤라 블랙쿠션"],
];

const lips = [
  [L1, "삐아 라스트 벨벳"],
  [L2, "페리페라 잉크 틴트"],
  [L3, "MAC 립스틱"],
];

const eyeColors = [EC1, EC2, EC3, EC4];
const eyeApplys = [EA0, EA1, EA2, EA3, EA4];

const baseColors = [BC1, BC2, BC3, BC4];
const baseApplys = [BA0, BA1, BA2, BA3, BA4];

const lipColors = [LC1, LC2, LC3, LC4];
const lipApplys = [LA0, LA1, LA2, LA3, LA4];

const faces = [W30, r1, r1, r1, r1, r2, r2, r2, r2, r3, r4, r5, r3];

function Select({ setStep }) {
  // useEffect(() => {
  //   window.scrollTo(0, 510);
  // }, []);

  // Cosmetic State
  const [cosType, setCosType] = useState(0);

  // Face State
  const [faceType, setFaceType] = useState(0);

  const onClickNext = (e) => {
    e.preventDefault();
    setStep(3);
  };

  // Modal State
  const [show, setShow] = useState(Array(9).fill(false));
  const [showLip, setShowLip] = useState(0);
  const [showBase, setShowBase] = useState(0);
  const [showEye, setShowEye] = useState(0);

  const toggleModal = (i) => {
    const newShow = Array(9).fill(false);
    newShow[i] = !show[i];
    setShow(newShow);
    setShowLip(0);
    setShowBase(0);
    setShowEye(0);
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
          <MKTypography variant="h3" color="black" fontWeight="light" opacity={1} mt={3} mb={0}>
            화장품 선택
          </MKTypography>
          <MKTypography variant="body2" color="black" opacity={0.8} mt={1} mb={4}>
            테스트 하고 싶은 화장품을 골라주세요
          </MKTypography>
        </Grid>

        {/* container */}
        <Grid
          container
          item
          mt={0.1}
          spacing={6}
          xs={12}
          direction="row"
          justifyContent="center"
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Grid item xs={4} sm={6} lg={4}>
            <ImageCard image={faces[faceType]} title="WARM 톤" />
          </Grid>

          <Grid xs={0.5} />

          <ImageList
            sx={{
              position: "relative",
              top: 0,
              left: 10,
              width: 500,
              height: 400,
              marginTop: 3,
              paddingTop: 3,
              paddingLeft: 3,
            }}
            cols={1}
            rowHeight={170}
          >
            <Grid container xs={12} spacing={1}>
              {/* Base */}
              <Grid container item xs={12} spacing={3}>
                <MKTypography variant="h5">Bases</MKTypography>
                <Grid container item xs={12} spacing={3}>
                  {bases.map((base, i) => (
                    <>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        lg={4}
                        onClick={() => toggleModal(3 + i)}
                        sx={{
                          padding: "10px 25px 0px 0px",
                        }}
                      >
                        <TransparentBlogCard image={base[0]} title={base[1]} />
                      </Grid>
                      <Modal
                        open={show[3 + i]}
                        onClose={() => toggleModal(3 + i)}
                        sx={{
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <Slide direction="down" in={show[3 + i]} timeout={500}>
                          <MKBox
                            position="relative"
                            width="500px"
                            display="flex"
                            flexDirection="column"
                            borderRadius="xl"
                            bgColor="white"
                            shadow="xl"
                            sx={{
                              "&:focus": {
                                outline: "none",
                              },
                            }}
                          >
                            <MKBox
                              display="flex"
                              alginItems="center"
                              justifyContent="space-between"
                              p={2}
                            >
                              <MKTypography variant="h5">{base[1]}</MKTypography>
                              <CloseIcon
                                fontSize="medium"
                                sx={{ cursor: "pointer" }}
                                onClick={() => toggleModal(3 + i)}
                              />
                            </MKBox>
                            <Divider sx={{ my: 0 }} />
                            <Grid
                              container
                              spacing="25"
                              flexDirection="row"
                              sx={{ mt: "-15px", pl: "25px", pr: "25px" }}
                            >
                              {baseColors.map((baseColor, baseColorIndex) => (
                                <>
                                  <Grid
                                    item
                                    lg="3"
                                    onClick={() => {
                                      setShowBase(1 + baseColorIndex);
                                      setCosType(1 + baseColorIndex);
                                    }}
                                  >
                                    <TransparentImageCard image={baseColor} title="baseColor" />
                                  </Grid>
                                </>
                              ))}
                            </Grid>

                            <Divider sx={{ my: 0 }} />
                            <>
                              <Grid item lg="6" sx={{ mt: "10px", ml: "auto", mr: "auto" }}>
                                <TransparentImageCard
                                  image={baseApplys[showBase]}
                                  title="baseApply"
                                />
                              </Grid>
                            </>

                            <Divider sx={{ my: 0 }} />
                            <MKBox display="flex" justifyContent="flex-end" p={1.5}>
                              <MKButton
                                onClick={() => {
                                  toggleModal(3 + i);
                                  setFaceType(cosType);
                                }}
                                variant="contained"
                                color="primary"
                                sx={{
                                  backgroundColor: "#ff9d8c",
                                  color: "white",
                                  "&:hover": { backgroundColor: "#ff9d8c" },
                                }}
                              >
                                선택 완료
                              </MKButton>
                            </MKBox>
                          </MKBox>
                        </Slide>
                      </Modal>
                    </>
                  ))}
                </Grid>
              </Grid>

              {/* Eye */}
              <Grid container item xs={12} spacing={3}>
                <MKTypography variant="h5" mt={4}>
                  Eyes
                </MKTypography>
                <Grid container item xs={12} spacing={1}>
                  {eyes.map((eye, i) => (
                    <>
                      <Grid
                        item
                        xs={4}
                        sm={6}
                        lg={4}
                        onClick={() => toggleModal(i)}
                        sx={{
                          padding: "10px 20px 0px 0px",
                        }}
                      >
                        <TransparentBlogCard image={eye[0]} title={eye[1]} />
                      </Grid>
                      <Modal
                        open={show[i]}
                        onClose={() => toggleModal(i)}
                        sx={{
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <Slide direction="down" in={show[i]} timeout={500}>
                          <MKBox
                            position="relative"
                            width="500px"
                            display="flex"
                            flexDirection="column"
                            borderRadius="xl"
                            bgColor="white"
                            shadow="xl"
                            sx={{
                              "&:focus": {
                                outline: "none",
                              },
                            }}
                          >
                            <MKBox
                              display="flex"
                              alginItems="center"
                              justifyContent="space-between"
                              p={2}
                            >
                              <MKTypography variant="h5">{eye[1]}</MKTypography>
                              <CloseIcon
                                fontSize="medium"
                                sx={{ cursor: "pointer" }}
                                onClick={() => toggleModal(i)}
                              />
                            </MKBox>
                            <Divider sx={{ my: 0 }} />
                            <Grid
                              container
                              spacing="25"
                              flexDirection="row"
                              sx={{ mt: "-15px", pl: "25px", pr: "25px" }}
                            >
                              {eyeColors.map((eyeColor, eyeColorIndex) => (
                                <>
                                  <Grid
                                    item
                                    lg="3"
                                    onClick={() => {
                                      setShowEye(1 + eyeColorIndex);
                                      setCosType(5 + eyeColorIndex);
                                    }}
                                  >
                                    <TransparentImageCard image={eyeColor} title="eyeColor" />
                                  </Grid>
                                </>
                              ))}
                            </Grid>

                            <Divider sx={{ my: 0 }} />
                            <>
                              <Grid item lg="6" sx={{ mt: "10px", ml: "auto", mr: "auto" }}>
                                <TransparentImageCard image={eyeApplys[showEye]} title="eyeApply" />
                              </Grid>
                            </>

                            <Divider sx={{ my: 0 }} />
                            <MKBox display="flex" justifyContent="flex-end" p={1.5}>
                              <MKButton
                                onClick={() => {
                                  toggleModal(i);
                                  setFaceType(cosType);
                                }}
                                variant="contained"
                                color="primary"
                                sx={{
                                  backgroundColor: "#ff9d8c",
                                  color: "white",
                                  "&:hover": { backgroundColor: "#ff9d8c" },
                                }}
                              >
                                선택 완료
                              </MKButton>
                            </MKBox>
                          </MKBox>
                        </Slide>
                      </Modal>
                    </>
                  ))}
                </Grid>
              </Grid>

              {/* lip */}
              <Grid container item xs={12} spacing={3} mb={1}>
                <MKTypography variant="h5" mt={4}>
                  Lips
                </MKTypography>
                <Grid container item xs={12} spacing={3}>
                  {lips.map((lip, i) => (
                    <>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        lg={4}
                        onClick={() => toggleModal(6 + i)}
                        sx={{
                          padding: "10px 25px 0px 0px",
                        }}
                      >
                        <TransparentBlogCard image={lip[0]} title={lip[1]} />
                      </Grid>
                      <Modal
                        open={show[6 + i]}
                        onClose={() => toggleModal(6 + i)}
                        sx={{
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <Slide direction="down" in={show[6 + i]} timeout={500}>
                          <MKBox
                            position="relative"
                            width="500px"
                            display="flex"
                            flexDirection="column"
                            borderRadius="xl"
                            bgColor="white"
                            shadow="xl"
                            sx={{
                              "&:focus": {
                                outline: "none",
                              },
                            }}
                          >
                            <MKBox
                              display="flex"
                              alginItems="center"
                              justifyContent="space-between"
                              p={2}
                            >
                              <MKTypography variant="h5">{lip[1]}</MKTypography>
                              <CloseIcon
                                fontSize="medium"
                                sx={{ cursor: "pointer" }}
                                onClick={() => toggleModal(6 + i)}
                              />
                            </MKBox>
                            <Divider sx={{ my: 0 }} />
                            <Grid
                              container
                              spacing="25"
                              flexDirection="row"
                              sx={{ mt: "-15px", pl: "25px", pr: "25px" }}
                            >
                              {lipColors.map((lipColor, lipColorIndex) => (
                                <>
                                  <Grid
                                    item
                                    lg="3"
                                    onClick={() => {
                                      setShowLip(1 + lipColorIndex);
                                      setCosType(9 + lipColorIndex);
                                    }}
                                  >
                                    <TransparentImageCard image={lipColor} title="lipColor" />
                                  </Grid>
                                </>
                              ))}
                            </Grid>

                            <Divider sx={{ my: 0 }} />
                            <>
                              <Grid item lg="6" sx={{ mt: "10px", ml: "auto", mr: "auto" }}>
                                <TransparentImageCard image={lipApplys[showLip]} title="lipApply" />
                              </Grid>
                            </>

                            <Divider sx={{ my: 0 }} />
                            <MKBox display="flex" justifyContent="flex-end" p={1.5}>
                              <MKButton
                                onClick={() => {
                                  toggleModal(6 + i);
                                  setFaceType(cosType);
                                }}
                                variant="contained"
                                color="primary"
                                sx={{
                                  backgroundColor: "#ff9d8c",
                                  color: "white",
                                  "&:hover": { backgroundColor: "#ff9d8c" },
                                }}
                              >
                                선택 완료
                              </MKButton>
                            </MKBox>
                          </MKBox>
                        </Slide>
                      </Modal>
                    </>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </ImageList>

          <Grid xs={1} />
        </Grid>

        <Grid container justifyContent="center" sx={{ marginTop: "50px" }}>
          <MKButton
            onClick={onClickNext}
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#ff9d8c",
              color: "white",
              "&:hover": { backgroundColor: "#ff9d8c" },
            }}
          >
            선택 완료
          </MKButton>
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
