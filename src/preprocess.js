import { toCSS, toJSON } from "cssjson";
import cssString from "!raw-loader!./components/tabbed_window_body/tabbed_window_body.css";

const styles = toJSON(cssString);

const positionTransform = {
  to: {
    top: {
      from: {
        top: "top",
        bottom: "bottom",
        left: "left",
        right: "right",

        "top-left": "top-left",
        "top-right": "top-right",
        "bottom-left": "bottom-left",
        "bottom-right": "bottom-right",
      },
    },
    bottom: {
      from: {
        top: "bottom",
        bottom: "top",
        left: "left",
        right: "right",

        "top-left": "bottom-left",
        "top-right": "bottom-right",
        "bottom-left": "top-left",
        "bottom-right": "top-right",
      },
    },
    left: {
      from: {
        top: "left",
        bottom: "right",
        left: "bottom",
        right: "top",

        "top-left": "bottom-left",
        "top-right": "top-left",
        "bottom-left": "bottom-right",
        "bottom-right": "top-right",
      },
    },
    right: {
      from: {
        top: "right",
        bottom: "left",
        left: "top",
        right: "bottom",

        "top-left": "top-right",
        "top-right": "bottom-right",
        "bottom-left": "top-left",
        "bottom-right": "bottom-left",
      },
    },
  },
};

const positionalAttributeRegex =
  /(?<attributeName>(?:.+-)*(?<position>top-left|top-right|bottom-left|bottom-right|top|bottom|left|right)(?:-.+)*)/;

function transformCSS(styles, toPosition) {
  const transformedStyles = JSON.parse(JSON.stringify(styles));
  for (const key in styles) {
    const selectorStyle = styles[key].attributes;
    for (const attributeName in selectorStyle) {
      const result = attributeName.match(positionalAttributeRegex);
      if (result != null) {
        const name = result.groups.attributeName;
        const position = result.groups.position;
        const transformedAttr = attributeName.replace(
          position,
          positionTransform.to[toPosition].from[position]
        );
        delete transformedStyles[key].attributes[attributeName];
        transformedStyles[key].attributes[transformedAttr] =
          selectorStyle[attributeName];
      }
    }
  }
  return toCSS(transformedStyles);
}

const topPositionedCSS = transformCSS(styles, "top");
const bottomPositionedCSS = transformCSS(styles, "bottom");
const leftPositionedCSS = transformCSS(styles, "left");
const rightPositionedCSS = transformCSS(styles, "right");
