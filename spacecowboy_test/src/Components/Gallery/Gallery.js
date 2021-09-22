import React from "react";

//images
import space1 from '../../images/gallery/space-1.jpg';
import space2 from '../../images/gallery/space-2.jpg';
import space3 from '../../images/gallery/space-3.jpg';
import space4 from '../../images/gallery/space-4.jpg';
import space5 from '../../images/gallery/space-5.jpg';
import space6 from '../../images/gallery/space-6.jpg';
import space7 from '../../images/gallery/space-7.jpg';
import space8 from '../../images/gallery/space-8.jpg';
import space9 from '../../images/gallery/space-9.jpg';
import space10 from '../../images/gallery/space-10.jpg';
import space11 from '../../images/gallery/space-11.jpg';
import space12 from '../../images/gallery/space-12.jpg';

function Gallery() {
  return (
    <div className="gallery-section-wrapper">
     <h4 className="gallery-section__title">look at all <br/>  those stars!</h4>
     <p className="gallery-section__text">Some impressions from our trips to  frickin outer space, enjoy!</p>

     <ul className="gallery-list">
         <li className="gallery-list__item">
             <img src={space1} className="gallery-item__image" alt="space" />
         </li>
         <li className="gallery-list__item">
             <img src={space2} className="gallery-item__image" alt="space" />
         </li>
         <li className="gallery-list__item">
             <img src={space3} className="gallery-item__image" alt="space" />
         </li>
         <li className="gallery-list__item">
             <img src={space4} className="gallery-item__image" alt="space" />
         </li>
         <li className="gallery-list__item">
             <img src={space5} className="gallery-item__image" alt="space" />
         </li>
         <li className="gallery-list__item">
             <img src={space6} className="gallery-item__image" alt="space" />
         </li>
         <li className="gallery-list__item">
             <img src={space7} className="gallery-item__image" alt="space" />
         </li>
         <li className="gallery-list__item">
             <img src={space8} className="gallery-item__image" alt="space" />
         </li>
         <li className="gallery-list__item">
             <img src={space9} className="gallery-item__image" alt="space" />
         </li>
         <li className="gallery-list__item">
             <img src={space10} className="gallery-item__image" alt="space" />
         </li>
         <li className="gallery-list__item">
             <img src={space11} className="gallery-item__image" alt="space" />
         </li>
         <li className="gallery-list__item">
             <img src={space12} className="gallery-item__image" alt="space" />
         </li>
     </ul>
    </div>
  );
}

export default Gallery;