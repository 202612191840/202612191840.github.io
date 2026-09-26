import { styled } from "@stitches/react";

const Layout = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
});

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  textShadow: "-1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e",
  animation: "fadein 3s",
  "-moz-animation": "fadein 3s" /* Firefox */,
  "-webkit-animation": "fadein 3s" /* Safari and Chrome */,
  "-o-animation": "fadein 3s" /* Opera */,
});

const ImageBackground = styled("img", {
  display: "block",
  opacity: 0.9,
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
  minHeight: 480,
});

const WeddingInvitation = styled("p", {
  fontFamily: '"MaruBuri", serif',
  fontSize: "1.5vh",
  fontWeight: 300,
  opacity: 0.45,
  marginBottom: 16,
});

const GroomBride = styled("p", {
  fontFamily: '"MaruBuri", serif',
  fontSize: "3.5vh",
  fontWeight: 600,
  opacity: 0.9,
  marginBottom: 16,
});

const Schedule = styled("p", {
  fontSize: "2vh",
  fontWeight: 300,
  opacity: 0.65,
  marginBottom: 24,
});

type TitleProps = {
  data?: Data;
};

export default function Title({ data }: TitleProps) {
  return (
    <Layout>
      <ImageBackground
        src="/assets/KYJ_0663.jpg"
        alt=""
        aria-hidden="true"
        draggable={false}
        onContextMenu={(event) => event.preventDefault()}
        onDragStart={(event) => event.preventDefault()}
      />
      <TitleWrapper>
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          {data?.groom?.name} &#38; {data?.bride?.name}
        </GroomBride>
        <Schedule>
          {data?.date}
          <br />
          {data?.location}
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
}
