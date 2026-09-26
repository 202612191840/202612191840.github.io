import Head from "next/head";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
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
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta content="김희웅❤배연정 결혼식에 초대합니다!" name="Title" />
        <meta
          content="2026년 12월 19일 토요일 오후 6시 40분"
          name="Description"
        />
        <meta content="2026년 12월 19일 토요일 오후 6시 40분" name="Keyword" />
        <meta property="og:title" content="김희웅❤배연정 결혼식에 초대합니다" />
        <meta
          property="og:description"
          content="2026년 12월 19일 토요일 오후 6시 40분"
        />
        <meta name="theme-color" content="#BCAAA4" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>김희웅❤배연정 결혼식에 초대합니다</title>
      </Head>
      <main>
        <MusicToggle />

        <Title data={JsonData} />
        <Greeting data={JsonData} />
        <Location />
        <Gallery />
        <CongratulatoryMoney data={JsonData} />
        <Footer>Copyright © 2026 yeonjungbae</Footer>
      </main>
    </>
  );
}
