import { styled } from "@stitches/react";
import { Divider } from "antd";
import { useEffect, useState } from "react";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
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

const MapContainer = styled("div", {
  width: "100%",
  height: 320,
  overflow: "hidden",
});

const MapMessage = styled("p", {
  margin: "0 auto",
  padding: 24,
  color: "#6d5d56",
});

const GuideList = styled("div", {
  width: "100%",
  maxWidth: 640,
  boxSizing: "border-box",
  padding: "24px 20px 0",
  margin: "0 auto",
  textAlign: "left",
});

const GuideCard = styled("section", {
  display: "grid",
  gridTemplateColumns: "64px 1fr",
  gap: 12,
  padding: "18px 16px",
  background: "rgba(255, 255, 255, 0.48)",
  borderBottom: "1px solid rgba(109, 93, 86, 0.14)",
  "&:first-child": {
    borderRadius: "10px 10px 0 0",
  },
  "&:last-child": {
    borderBottom: 0,
    borderRadius: "0 0 10px 10px",
  },
});

const GuideLabel = styled("h3", {
  margin: 0,
  color: "#6d5d56",
  fontSize: 16,
  fontWeight: 600,
});

const GuideText = styled("p", {
  margin: 0,
  color: "#6d5d56",
  fontSize: 14,
  fontWeight: 300,
  lineHeight: 1.8,
  whiteSpace: "pre-line",
});

const travelGuides = [
  { title: "주소", text: "서울특별시 강서구 강서로 388\n더베뉴지 2층, 베뉴지홀" },
  { title: "지하철", text: "5호선 발산역 3번 출구 도보 1분\n9호선 양천향교역 6번 출구 도보 10분" },
  { title: "버스", text: "지선 6630, 6632, 6642, 6645, 6648\n간선 601, 605, 652, 654, 661\n일반 60-88 / 직행 3000" },
  { title: "주차", text: "웨딩홀 주차장 2시간 무료\n(추가 10분 1000원)" },
];

const KAKAO_MAP_SCRIPT_ID = "kakao-maps-sdk";
const VENUE_LATITUDE = 37.560195;
const VENUE_LONGITUDE = 126.839346;

declare global {
  interface Window {
    kakao?: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (latitude: number, longitude: number) => unknown;
        Map: new (container: HTMLElement, options: { center: unknown; level: number }) => unknown;
        Marker: new (options: { map: unknown; position: unknown }) => unknown;
      };
    };
  }
}

export default function Location() {
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;
    if (!appKey) {
      setMapError(true);
      return;
    }

    const initializeMap = () => {
      if (!window.kakao?.maps) {
        setMapError(true);
        return;
      }

      window.kakao.maps.load(() => {
        const container = document.getElementById("kakao-map");
        if (!container || !window.kakao) return;

        const position = new window.kakao.maps.LatLng(
          VENUE_LATITUDE,
          VENUE_LONGITUDE
        );
        const map = new window.kakao.maps.Map(container, {
          center: position,
          level: 4,
        });
        new window.kakao.maps.Marker({ map, position });
      });
    };

    const existingScript = document.getElementById(KAKAO_MAP_SCRIPT_ID);
    if (window.kakao?.maps) {
      initializeMap();
    } else if (existingScript) {
      existingScript.addEventListener("load", initializeMap, { once: true });
      existingScript.addEventListener(
        "error",
        () => setMapError(true),
        { once: true }
      );
    } else {
      const script = document.createElement("script");
      script.id = KAKAO_MAP_SCRIPT_ID;
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(
        appKey
      )}&autoload=false`;
      script.async = true;
      script.onload = initializeMap;
      script.onerror = () => setMapError(true);
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      {mapError && <MapMessage>지도를 불러오지 못했습니다.</MapMessage>}
      <MapContainer id="kakao-map" role="img" aria-label="예식장 위치 지도" />
      <GuideList aria-label="교통 및 주차 안내">
        {travelGuides.map(({ title, text }) => (
          <GuideCard key={title}>
            <GuideLabel>{title}</GuideLabel>
            <GuideText>{text}</GuideText>
          </GuideCard>
        ))}
      </GuideList>
    </Wrapper>
  );
}
