import React, { useState } from "react";

import { SRLWrapper } from "simple-react-lightbox";

import GalleryItem from "./GalleryItem";

import nextIcon from "../../images/teams/next-arrow.png";
import previousIcon from "../../images/teams/prev-arrow.png";

//images
import space1 from "../../images/gallery/space-1.jpg";
import space2 from "../../images/gallery/space-2.jpg";
import space3 from "../../images/gallery/space-3.jpg";
import space4 from "../../images/gallery/space-4.jpg";
import space5 from "../../images/gallery/space-5.jpg";
import space6 from "../../images/gallery/space-6.jpg";
import space7 from "../../images/gallery/space-7.jpg";
import space8 from "../../images/gallery/space-8.jpg";
import space9 from "../../images/gallery/space-9.jpg";
import space10 from "../../images/gallery/space-10.jpg";
import space11 from "../../images/gallery/space-11.jpg";
import space12 from "../../images/gallery/space-12.jpg";

function Gallery() {
  const options = {
    settings: {
      overlayColor: "rgba(22,27,32, 0.9)",
    },
    buttons: {
      backgroundColor: "transparent",
      iconColor: "#484d52",
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      size: "32px",
    },
    caption: {
      captionColor: "#fdfdff",
      captionFontFamily: "Montserrat",
      captionFontSize: "12px",
      captionFontWeight: "700",
    },
    thumbnails: {
      showThumbnails: false,
    },
    icons: {
      nextIcon,
      previousIcon,
    },
  };

  return (
    <div className="gallery-section-wrapper" id="impressions">
      <h4 className="gallery-section__title">look at all those stars!</h4>
      <p className="gallery-section__text">
        Some impressions from our trips to frickin outer space, enjoy!
      </p>
      <SRLWrapper options={options}>
        <ul className="gallery-list">
          <GalleryItem spaceImg={space1} />
          <GalleryItem spaceImg={space2} />
          <GalleryItem spaceImg={space3} />
          <GalleryItem spaceImg={space4} />
          <GalleryItem spaceImg={space5} />
          <GalleryItem spaceImg={space6} />
          <GalleryItem spaceImg={space7} />
          <GalleryItem spaceImg={space8} />
          <GalleryItem spaceImg={space9} />
          <GalleryItem spaceImg={space10} />
          <GalleryItem spaceImg={space11} />
          <GalleryItem spaceImg={space12} />
        </ul>
      </SRLWrapper>
    </div>
  );
}

export default Gallery;
