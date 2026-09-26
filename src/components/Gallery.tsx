import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontFamily: '"MaruBuri", serif',
  color: "#795548",
  fontSize: "2vh",
  fontWeight: 600,
  opacity: 0.95,
  marginBottom: 0,
});

const images = [
  {
    original: "/assets/optimized/13KYJ_1796-1.jpg",
    thumbnail: "/assets/optimized/13KYJ_1796-1.jpg",
  },
  {
    original: "/assets/optimized/KYJ_0022.jpg",
    thumbnail: "/assets/optimized/KYJ_0022.jpg",
  },
  {
    original: "/assets/optimized/14KYJ_2103-1.jpg",
    thumbnail: "/assets/optimized/14KYJ_2103-1.jpg",
  },
  {
    original: "/assets/optimized/17KYJ_3286-1.jpg",
    thumbnail: "/assets/optimized/17KYJ_3286-1.jpg",
  },
  {
    original: "/assets/optimized/22KYJ_2441-1.jpg",
    thumbnail: "/assets/optimized/22KYJ_2441-1.jpg",
  },
  {
    original: "/assets/optimized/KYJ_0795.jpg",
    thumbnail: "/assets/optimized/KYJ_0795.jpg",
  },
  {
    original: "/assets/optimized/KYJ_2626.jpg",
    thumbnail: "/assets/optimized/KYJ_2626.jpg",
  },
  {
    original: "/assets/optimized/KYJ_0600.jpg",
    thumbnail: "/assets/optimized/KYJ_0600.jpg",
  },
  {
    original: "/assets/optimized/KYJ_1696.jpg",
    thumbnail: "/assets/optimized/KYJ_1696.jpg",
  },
  {
    original: "/assets/optimized/KYJ_1758.jpg",
    thumbnail: "/assets/optimized/KYJ_1758.jpg",
  },
  {
    original: "/assets/optimized/KYJ_1858.jpg",
    thumbnail: "/assets/optimized/KYJ_1858.jpg",
  },
  {
    original: "/assets/optimized/KYJ_0837.jpg",
    thumbnail: "/assets/optimized/KYJ_0837.jpg",
  },
];

export default function Gallery() {
  return (
    <Wrapper
      onContextMenuCapture={(event) => {
        if (event.target instanceof HTMLImageElement) event.preventDefault();
      }}
      onDragStartCapture={(event) => {
        if (event.target instanceof HTMLImageElement) event.preventDefault();
      }}
    >
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Gallery</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        lazyLoad
        items={images}
      />
    </Wrapper>
  );
}
