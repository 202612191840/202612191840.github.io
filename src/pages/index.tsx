import Head from "next/head";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import { useState } from "react";
import JsonData from "@/data.json";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Greeting = dynamic(() => import("@/components/Greeting"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const MusicToggle = dynamic(() => import("@/components/MusicToggle"), {
  ssr: false,
});
const CongratulatoryMoney = dynamic(
  () => import("@/components/CongratulatoryMoney"),
  { ssr: false }
);
const ArticleView = dynamic(() => import("@/components/ArticleView"), { ssr: false });

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/GroovePaper.png)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

export default function Home() {
  const [showArticle, setShowArticle] = useState(false);
  return (
    <>
            <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#BCAAA4" />
        <meta name="description" content="김희웅과 배연정의 결혼식에 초대합니다. 2026년 12월 19일, 두 사람의 새로운 시작을 함께 축복해 주세요." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://202612191840.github.io/" />
        <meta property="og:title" content="김희웅 💖 배연정 결혼식에 초대합니다!" />
        <meta property="og:description" content="2026.12.19(토) 18:40 더베뉴지 베뉴지홀" />
        <meta property="og:image" content="https://202612191840.github.io/assets/optimized/KYJ_2588.jpg" />
        <meta property="og:image:secure_url" content="https://202612191840.github.io/assets/optimized/KYJ_2588.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="2000" />
        <meta property="og:image:height" content="1333" />
        <meta property="og:image:alt" content="김희웅과 배연정의 웨딩 사진" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="김희웅 ♥ 배연정 결혼식에 초대합니다!" />
        <meta name="twitter:description" content="2026.12.19(토) 18:40 더베뉴지 베뉴지홀" />
        <meta name="twitter:image" content="https://202612191840.github.io/assets/optimized/KYJ_2588.jpg" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>김희웅 ❤ 배연정 결혼식에 초대합니다</title>
      </Head>
      <main>
        <div className="floating-controls">
          <button className="article-toggle" type="button" aria-pressed={showArticle} onClick={() => setShowArticle((visible) => !visible)}>
            {showArticle ? "청첩장" : "기사버전"}
          </button>
          <MusicToggle />
        </div>

        {showArticle ? <ArticleView data={JsonData} /> : <>
        <Title data={JsonData} />
        <Greeting data={JsonData} />
        <Location />
        <Gallery />
        <CongratulatoryMoney data={JsonData} />
        <Footer>Copyright © 2026 yeonjungbae</Footer>
        </>}
      </main>
    </>
  );
}
