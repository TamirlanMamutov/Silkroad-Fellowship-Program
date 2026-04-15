/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97L6.5 13h3l-.25-.03C11.34 12.84 13 11.12 13 9V2h-2zm5-3v8h2.5l1.5 1.5V9c0-1.1-.9-2-2-2h-2z"
        }
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
