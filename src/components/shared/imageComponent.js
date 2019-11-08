import React from "react";

/**
 * This generic component can be used to display images in the project.
 * We will be using ".webp" format. ".png" will be the default format.
 * 1x, 2x, 3x images will be displayed as per density of the browser.
 * Images will be displayed in mobile as well as web view.
 * Reference: https://html.com/attributes/img-srcset/
 */

const getImageSources = src => {
  console.log("src==============", src);
  const strings = src.split(".png");
  console.log("strings==============", strings[0]);
  return [
    
    `${strings[0]}.png`,
    
    `${strings[0]}@2x.png`,
    
    `${strings[0]}@3x.png`
  ];
};

export const WebImageComponent = props => {
  const { alt, src, className, image } = props;
  import("assets/images/home/go_girls_19@2x.png").then(response => {
      console.log("response: ", response)
  })
  console.log("============^^^^^^^^^^^^^^66=======", src)

  const imageSources = getImageSources(src);

  console.log("Image sources===============", imageSources)

  return null;
//   return (
//     <img
//       srcSet={`${require(`assets/images/home/go_girls_19.png`) } 960w,
      
//       ${require(`assets/images/home/go_girls_19@2x.png`) }  1920w,
    
//       ${require(`assets/images/home/go_girls_19@3x.png`) }  2880w,
          
//           `}
//       src={src}
//       alt={alt}
//       className={className}
//     />
//   );
};

export const MobileImageComponent = props => {
  const { alt, src, className } = props;
  const imageSources = getImageSources(src);
  return (
    <img
      srcSet={`${imageSources[0]} 360w,
        ${imageSources[1]} 720w
        ${imageSources[2]} 1080w`}
      src={src}
      alt={alt}
      className={className}
    />
  );
};
