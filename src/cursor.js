export const getCursor = (color, stroke, scalar = 4) =>
  {
    let svgTemplate = getSvgTemplate(color, stroke*scalar);
    svgTemplate = encodeURIComponent(svgTemplate.replace(/"/g, "'"));
    return {cursor: `url("data:image/svg+xml,${svgTemplate}") 0 ${stroke*scalar}, pointer `};
  };

const getSvgTemplate = (color, size) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 460" height="${size}" width="${size}">
    <polygon fill="#E0D492" points="27.665,330.029 0,459.998 129.967,432.33"/>
    <path fill="${color}" d="M 27.665,330.029 129.967,432.33 459.99619,102.30622 357.69268,0.00270339 Z"/>
    <path fill="${color}" d="M 0,459.998 74.380734,444.70183 14.770642,388.7844 Z"/>
  </svg>`;
