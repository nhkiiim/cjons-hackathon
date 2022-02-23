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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import ImageCard from "examples/Cards/BlogCards/ImageCard";

// Images
// import post1 from "assets/images/examples/testimonial-6-2.jpg";
// import post2 from "assets/images/examples/testimonial-6-3.jpg";
// import post3 from "assets/images/examples/blog-9-4.jpg";
// import post4 from "assets/images/examples/blog2.jpg";

// https://mui.com/components/buttons/

// Face Type Images
import M20 from "assets/images/faces/20대 남성.png";
import M30 from "assets/images/faces/30대 남성.png";
import M40 from "assets/images/faces/40대 남성.png";
import M50 from "assets/images/faces/50대 남성.png";
import W20 from "assets/images/faces/20대 여성.png";
import W30 from "assets/images/faces/30대 여성.png";
import W40 from "assets/images/faces/40대 여성.png";
import W50 from "assets/images/faces/50대 여성.png";

// Eye Type Images
import E1 from "assets/images/eyes/밀크터치 올데이 롱앤컬 마스카라.png";
import E2 from "assets/images/eyes/클리오 샤프, 쏘 심플 워터프루프 펜슬라이너.png";
import E3 from "assets/images/eyes/클리오 킬래쉬 수퍼프루프마스카라.png";

// Base Type Images
import B1 from "assets/images/bases/에스쁘아 비글로우 파운데이션.png";
import B2 from "assets/images/bases/에스쁘아 프레쉬 세팅 파우더.png";
import B3 from "assets/images/bases/클리오 킬커버 광채 파운데이션.png";

// Lip Type Images
import L1 from "assets/images/lips/삐아 라스트 벨벳 립 틴트 14종.png";
import L2 from "assets/images/lips/페리페라 잉크 무드 매트 틴트.png";
import L3 from "assets/images/lips/MAC 립스틱.png";

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

function Places() {
  (() => [M20, M30, M40, M50, W20, W30, W40, W50])();

  (() => [E1, E2, E3, B1, B2, B3, L1, L2, L3])();

  (() => [eyes, bases, lips])();

  return (
    <MKBox component="section" py={3}>
      <Container xs={12}>
        <Grid container item xs={4}>
          <MKTypography variant="h3" mb={6}>
            Select
          </MKTypography>
        </Grid>
        <Grid container spacing={2} xs={12} direction="row">
          {/* 선택한 얼굴 전시 */}
          <Grid item xs={4} sm={6} lg={3}>
            <ImageCard image={W20} title="20대 여성" />
          </Grid>

          {/* 화장품 선택 메뉴 */}
          <Grid container xs={5} spacing={3}>
            {eyes.map((eye) => (
              <Grid item xs={6} sm={6} lg={3}>
                <TransparentBlogCard
                  image={eye[0]}
                  title={eye[1]}
                  // description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                  action={{
                    type: "internal",
                    route: "/pages/blogs/author",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            ))}
            {bases.map((base) => (
              <Grid item xs={6} sm={6} lg={3}>
                <TransparentBlogCard
                  image={base[0]}
                  title={base[1]}
                  // description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                  action={{
                    type: "internal",
                    route: "/pages/blogs/author",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            ))}
            {lips.map((lip) => (
              <Grid item xs={6} sm={6} lg={3}>
                <TransparentBlogCard
                  image={lip[0]}
                  title={lip[1]}
                  // description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                  action={{
                    type: "internal",
                    route: "/pages/blogs/author",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            ))}
          </Grid>

          {/* 선택한 화장품 목록들 */}
          <Grid container xs={3} spacing={3}>
            <Grid item xs={6} sm={6} lg={3}>
              <TransparentBlogCard
                image={lips[0][0]}
                title={lips[0][1]}
                // description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                action={{
                  type: "internal",
                  route: "/pages/blogs/author",
                  color: "info",
                  label: "read more",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
