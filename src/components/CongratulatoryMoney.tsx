import { CheckCircleTwoTone } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, Modal, message } from "antd";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  paddingBottom: 18,
  width: "100%",
  textAlign: "center",
});

const Title = styled("p", {
  fontFamily: '"MaruBuri", serif',
  color: "#795548",
  fontSize: "2vh",
  fontWeight: 600,
  opacity: 0.95,
  marginBottom: 0,
});

const Content = styled("p", {
  fontSize: "1.5vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const Description = styled("p", {
  fontSize: "1.3vh",
  fontWeight: 300,
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: 8,
});

const ContactButton = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginLeft: 8,
  marginRight: 8,
  marginBottom: 24,
  padding: "10px 16px",
  border: "1px solid rgba(121, 85, 72, 0.25)",
  borderRadius: 999,
  background: "rgba(255, 255, 255, 0.72)",
  boxShadow: "0 3px 10px rgba(75, 55, 45, 0.12)",
  color: "#795548",
  cursor: "pointer",
  transition: "transform 160ms ease, box-shadow 160ms ease",
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: "0 5px 14px rgba(75, 55, 45, 0.18)",
  },
  "&:focus-visible": {
    outline: "2px solid #795548",
    outlineOffset: 3,
  },
});

const ContactLabel = styled("span", {
  fontSize: "1.7vh",
  fontWeight: 700,
  lineHeight: 1.4,
});

type CongratulatoryMoneyProps = {
  data?: Data;
};

export default function CongratulatoryMoney({
  data,
}: CongratulatoryMoneyProps) {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>마음 전하실 곳</Title>
      </Divider>
      <Content></Content>
      <ContactButton
        type="button"
        onClick={() => setGroomVisible(true)}
      >
        <ContactLabel>🤵🏻‍♂️신랑측 계좌번호 보기</ContactLabel>
      </ContactButton>
      /
      <ContactButton
        type="button"
        onClick={() => setBrideVisible(true)}
      >
        <ContactLabel>👰🏻‍♀️신부측 계좌번호 보기</ContactLabel>
      </ContactButton>
      <Modal
        title={<b>신랑측 계좌번호</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        {data?.groom?.parents?.father && (
          <div>
            <b>(부) {data?.groom?.parents?.father?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard
              text={data?.groom?.parents?.father?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.groom?.parents?.father?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.groom?.parents?.mother && (
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b>(모) {data?.groom?.parents?.mother.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={data?.groom?.parents?.mother.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.groom?.parents?.mother.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.groom && (
          <div>
            <b>신랑 {data?.groom?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={data?.groom?.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.groom?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        <div>
          <Description>계좌번호를 누르면 복사돼요.</Description>
        </div>
      </Modal>
      <Modal
        title={<b>신부측 계좌번호</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        {data?.bride?.parents?.father && (
          <div>
            <b>(부) {data?.bride?.parents?.father?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard
              text={data?.bride?.parents?.father?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.bride?.parents?.father?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.bride?.parents?.mother && (
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b>(모) {data?.bride?.parents?.mother?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard
              text={data?.bride?.parents?.mother?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.bride?.parents?.mother?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.bride && (
          <div>
            <b>신부 {data?.bride?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={data?.bride?.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.bride?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        <div>
          <Description>계좌번호를 누르면 복사돼요.</Description>
        </div>
      </Modal>
    </Wrapper>
  );
}

