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

const SubContent = styled("p", {
  fontSize: "2vh",
  fontWeight: 300,
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

const ContactButton = styled("div", {
  display: "inline-block",
  textAlign: "center",
  marginLeft: 24,
  marginRight: 24,
  marginBottom: 24,
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
      <ContactButton onClick={() => setGroomVisible(true)}>
        <SubContent>🤵🏻‍♂️신랑측 계좌번호</SubContent>
      </ContactButton>
      /
      <ContactButton onClick={() => setBrideVisible(true)}>
        <SubContent>👰🏻‍♀️신부측 계좌번호</SubContent>
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
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>
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
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>
        </div>
      </Modal>
    </Wrapper>
  );
}
