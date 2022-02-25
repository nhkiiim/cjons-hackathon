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

import { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

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
import W20 from "assets/images/faces/20w.png";
// import W30 from "assets/images/faces/30대 여성.png";
// import W40 from "assets/images/faces/40대 여성.png";
// import W50 from "assets/images/faces/50대 여성.png";

// Eye Type Images
import E1 from "assets/images/eyes/milk.png";
import E2 from "assets/images/eyes/clio_sharp.png";
import E3 from "assets/images/eyes/clio_kill.png";
import EC1 from "assets/images/eye-colors/eye-color-1.png";
import EC2 from "assets/images/eye-colors/eye-color-2.png";
import EC3 from "assets/images/eye-colors/eye-color-3.png";
import EC4 from "assets/images/eye-colors/eye-color-4.png";
import EA0 from "assets/images/eye-apply/eye-apply-0.png";
import EA1 from "assets/images/eye-apply/eye-apply-1.png";
import EA2 from "assets/images/eye-apply/eye-apply-2.png";
import EA3 from "assets/images/eye-apply/eye-apply-3.png";
import EA4 from "assets/images/eye-apply/eye-apply-4.png";

// Base Type Images
import B1 from "assets/images/bases/bglow.png";
import B2 from "assets/images/bases/fresh.png";
import B3 from "assets/images/bases/killcover.png";
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
import L1 from "assets/images/lips/bbia.png";
import L2 from "assets/images/lips/peripera.png";
import L3 from "assets/images/lips/mac.png";
import LC1 from "assets/images/lip-colors/lip-color-1.png";
import LC2 from "assets/images/lip-colors/lip-color-2.png";
import LC3 from "assets/images/lip-colors/lip-color-3.png";
import LC4 from "assets/images/lip-colors/lip-color-4.png";
import LA0 from "assets/images/lip-apply/lip-apply-0.png";
import LA1 from "assets/images/lip-apply/lip-apply-1.png";
import LA2 from "assets/images/lip-apply/lip-apply-2.png";
import LA3 from "assets/images/lip-apply/lip-apply-3.png";
import LA4 from "assets/images/lip-apply/lip-apply-4.png";

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

const eyeColors = [EC1, EC2, EC3, EC4];
const eyeApplys = [EA0, EA1, EA2, EA3, EA4];

const baseColors = [BC1, BC2, BC3, BC4];
const baseApplys = [BA0, BA1, BA2, BA3, BA4];

const lipColors = [LC1, LC2, LC3, LC4];
const lipApplys = [LA0, LA1, LA2, LA3, LA4];

function Select({ setStep }) {
  useEffect(() => {
    window.scrollTo(0, 510);
  }, []);

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
          <MKTypography variant="h3" verticalAlign="middle" mb={6}>
            여기에 내용을 적어주세요. 스타일을 변경하고 싶으시다면 sx 안에 CSS 를 작성해주세요.
            variant=h1, h2, h3, ..., h6
          </MKTypography>
        </Grid>
        <Grid container mt={0.1} spacing={2} xs={12} direction="row" id="scroll-container">
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
            {/* Eye */}
            <Grid container item xs={12} spacing={3}>
              <MKTypography variant="h5">Eyes</MKTypography>
              <Grid container item xs={12} spacing={3}>
                {eyes.map((eye, i) => (
                  <>
                    <Grid
                      item
                      xs={6}
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
                                <Grid item lg="3" onClick={() => setShowEye(1 + eyeColorIndex)}>
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
                              variant="gradient"
                              color="dark"
                              onClick={() => toggleModal(i)}
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

            {/* Base */}
            <Grid container item xs={12} spacing={3}>
              <MKTypography variant="h5" mt={4}>
                Bases
              </MKTypography>
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
                                <Grid item lg="3" onClick={() => setShowBase(1 + baseColorIndex)}>
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
                              variant="gradient"
                              color="dark"
                              onClick={() => toggleModal(3 + i)}
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
            <Grid container item xs={12} spacing={3}>
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
                                <Grid item lg="3" onClick={() => setShowLip(1 + lipColorIndex)}>
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
                              variant="gradient"
                              color="dark"
                              onClick={() => toggleModal(6 + i)}
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

            <Grid container justifyContent="flex-end">
              <Button size="large" variant="contained" color="info" onClick={onClickNext}>
                선택 완료
              </Button>
            </Grid>
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
