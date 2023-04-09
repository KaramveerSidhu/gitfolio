import * as profile from "./profile";
import * as common from "./common";

type propTypes = {
  url: string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  title?: string;
};

const Icon = (props: propTypes) => {
  const { url = "", width, height, fill, stroke, title } = props;

  let iconPack;
  const splitUrl = url.split("-");
  const [path, iconName] = splitUrl;

  switch (path) {
    case "pr":
      iconPack = profile;
      break;
    default:
      iconPack = common;
  }

  const iconMeta = iconPack[iconName || path];
  const h = height || iconMeta.height;
  const w = width || iconMeta.width;
  const fill1 = fill || iconMeta.fill;
  const stroke1 = stroke || iconMeta.stroke;

  const svg = iconMeta.svg(fill1, stroke1, title);

  return (
    <div style={{ height: h, width: w, position: "relative" }}>
      <svg
        viewBox={`0 0 ${iconMeta.viewBoxWidth || iconMeta.width} ${
          iconMeta.viewBoxHeight || iconMeta.height
        }`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {svg}
      </svg>
    </div>
  );
};

export default Icon;
