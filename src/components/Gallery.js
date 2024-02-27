import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const images = [
    {
      original: "../assets/gallery/img1.jpg",
      thumbnail: "../assets/gallery/img1.jpg",
    },
    {
      original: "../assets/gallery/img2.jpg",
      thumbnail: "../assets/gallery/img2.jpg",
    },
    {
      original: "../assets/gallery/img3.jpg",
      thumbnail: "../assets/gallery/img3.jpg",
    },
    {
      original: "../assets/gallery/img4.jpg",
      thumbnail: "../assets/gallery/img4.jpg",
    },
    {
      original: "../assets/gallery/img5.jpg",
      thumbnail: "../assets/gallery/img5.jpg",
    },
    {
      original: "../assets/gallery/img6.jpg",
      thumbnail: "../assets/gallery/img6.jpg",
    },
    {
      original: "../assets/gallery/img7.jpg",
      thumbnail: "../assets/gallery/img7.jpg",
    },
    {
      original: "../assets/gallery/img8.jpg",
      thumbnail: "../assets/gallery/img8.jpg",
    },
    {
      original: "../assets/gallery/img9.jpg",
      thumbnail: "../assets/gallery/img9.jpg",
    },
    {
      original: "../assets/gallery/img10.jpg",
      thumbnail: "../assets/gallery/img10.jpg",
    },
  ];

  return (
    <>
      <ImageGallery
        items={images}
        autoPlay={true}
        showPlayButton={false}
        showBullets={true}
      />
    </>
  );
};

export default Gallery;
