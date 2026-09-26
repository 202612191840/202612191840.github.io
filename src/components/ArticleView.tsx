import { styled } from "@stitches/react";

const Page = styled("article", {
  minHeight: "100vh",
  maxWidth: 760,
  margin: "0 auto",
  padding: "24px 16px 60px",
  color: "#222",
  background: "#fff",
  boxSizing: "border-box",
  boxShadow: "0 0 30px rgba(0,0,0,.06)",
});
const Brand = styled("div", { color: "#F6491E", fontSize: 18, fontWeight: 700, paddingBottom: 14, borderBottom: "2px solid #F6491E" });
const Headline = styled("h1", { fontFamily: "Arial, sans-serif", fontSize: "clamp(25px, 7vw, 34px)", lineHeight: 1.38, letterSpacing: "-1.2px", margin: "24px 0 18px", fontWeight: 800 });
const Meta = styled("div", { fontFamily: "Arial, sans-serif", color: "#888", fontSize: 13, paddingBottom: 18, borderBottom: "1px solid #eee" });
const Hero = styled("img", { display: "block", width: "100%", margin: "22px 0", aspectRatio: "4 / 3", objectFit: "cover" });
const Copy = styled("div", { fontSize: 17, lineHeight: 2, wordBreak: "normal", textAlign: "justify", textJustify: "inter-word", "p": { margin: "0 0 20px" }, "strong": { fontWeight: 600 } });
const Caption = styled("div", { fontSize: 12, color: "#999", textAlign: "center", marginTop: -14, marginBottom: 24 });
const MoreStories = styled("section", { marginTop: 38, paddingTop: 22, borderTop: "8px solid #f3f4f6" });
const MoreTitle = styled("h2", { fontFamily: "Arial, sans-serif", fontSize: 20, margin: "0 0 16px", letterSpacing: "-0.5px" });
const Story = styled("article", { display: "flex", gap: 14, padding: "14px 0", borderTop: "1px solid #eee", alignItems: "center" });
const StoryImage = styled("img", { width: 112, height: 78, borderRadius: 4, objectFit: "cover", flexShrink: 0 });
const StoryText = styled("div", { fontFamily: "Arial, sans-serif", fontSize: 15, lineHeight: 1.45, fontWeight: 700, color: "#292929", "small": { display: "block", marginTop: 7, color: "#999", fontSize: 12, fontWeight: 400 } });

type Props = { data?: Data };

export default function ArticleView({ data }: Props) {
  return <Page>
    <Brand>월간스포츠 <span style={{ color: "#777", fontSize: 13, fontWeight: 400 }}>라이프</span></Brand>
    <Headline>[특종] 김희웅♥배연정, 마침내 결혼에 골인 </Headline>
    <Meta>입력 2026. 12. 19. 오후 6:40　|　결혼 소식</Meta>
    <Hero src="/assets/optimized/KYJ_3469.jpg" alt="두 사람의 웨딩 사진" />
    <Caption>예비신랑과 예비신부. 사진=미세인트스튜디오</Caption>
    <Copy>
      <p><strong>오랜 인연이 사랑으로 결실을 맺었다.</strong> 두 사람이 오는 2026년 12월 19일 오후 6시 40분, 새로운 삶을 향한 첫걸음을 함께 내딛는다.</p>
      <p>서로의 가장 든든한 편이 되어온 두 사람은 이날 가족과 가까운 이들의 축복 속에 부부의 연을 맺는다. 함께 웃고 같은 방향을 바라보며 쌓아온 시간이 두 사람을 결혼이라는 결승선이자 새로운 출발선으로 이끌었다.</p>
      <p>예식은 서울 더베뉴지에서 진행된다. 두 사람은 “바쁜 걸음 중에 함께해 주시는 마음을 오래 간직하며, 서로 아끼고 사랑하는 부부로 살아가겠다”고 전했다.</p>
      <p>새로운 시즌을 시작하는 두 사람에게 따뜻한 응원이 모이고 있다. 인생이라는 긴 경기에서 같은 팀이 된 두 사람의 앞날에 행복한 순간들이 이어지길 기대한다.</p>
      <p style={{ color: "#777", fontSize: 15 }}>일시:　2026년 12월 19일 토요일 오후 6시 40분<br />장소:　더베뉴지 서울, 2층 베뉴지홀</p>
    </Copy>
    <MoreStories>
      <MoreTitle>함께 보면 좋은 이야기</MoreTitle>
      {[
        ["/assets/optimized/KYJ_1338.jpg", "한 팀이 된 두 사람", "라이프"],
        ["/assets/optimized/KYJ_2588.jpg", "나란히 걷는 두 사람의 새로운 시작", "웨딩 화보"],
      ].map(([src, title, category]) => (
        <Story key={src}>
          <StoryImage src={src} alt="두 사람의 웨딩 사진" loading="lazy" />
          <StoryText>{title}<small>{category}　·　사진</small></StoryText>
        </Story>
      ))}
    </MoreStories>
  </Page>;
}
