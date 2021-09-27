import React from "react";

function GalleryItem({ spaceImg }) {
  return (
    <>
        <li className="gallery-list__item" >
          <img src={spaceImg} className="gallery-item__image" alt="Well, this was amazing!" />
        </li>
    </>
  );
}

export default GalleryItem;
