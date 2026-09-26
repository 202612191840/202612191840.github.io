import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontFamily: '"MaruBuri", serif',
  color: "#795548",
  fontSize: "clamp(18px, 2.2vh, 22px)",
  fontWeight: 600,
  opacity: 0.95,
  marginBottom: 0,
});

const Content = styled("div", {
  fontSize: "clamp(16px, 2vh, 19px)",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 16,
  width: "100%",
  textAlign: "center",
});

const GroomBride = styled("p", {
  fontSize: "clamp(15px, 2vh, 20px)",
  fontWeight: 600,
  lineHeight: 1.75,
  opacity: 0.85,
  marginBottom: 0,
  width: "100%",
  textAlign: "center",
});

type GreetingProps = {
  data?: Data;
};

export default function Greeting({ data }: GreetingProps) {
  return (
    <Wrapper>
      <Content>
        {data?.greeting?.split("\n")?.map((value, index) => {
          return (
            <div key={index}>
              {value}
              <br />
            </div>
          );
        })}
      </Content>
      <GroomBride>
        <b>
        {data?.groom?.parents?.father?.name} ·{" "}
          {data?.groom?.parents?.mother?.name}</b>의 장남 <b>{data?.groom?.name}</b>
        <br />
        <b>
        {data?.bride?.parents?.father?.name} ·{" "}
        {data?.bride?.parents?.mother?.name}</b>의 장녀 <b>{data?.bride?.name}</b>
        <br />
        <br />
      </GroomBride>
    </Wrapper>
  );
}
