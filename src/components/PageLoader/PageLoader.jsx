import React from "react";
import PropTypes from "prop-types";
import { ThreeDots } from "react-loader-spinner";

const PageLoader = ({
  color = "#00D7FF",
  horizontalAlignment = "center",
  verticalAlignment = "center",
  children,
}) => {
  return (
    <>
      <ThreeDots
        width="100"
        radius="9"
        color={color}
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: horizontalAlignment,
          alignItems: verticalAlignment,
        }}
        visible={true}
      >
        {children}
      </ThreeDots>
    </>
  );
};

PageLoader.propTypes = {
  horizontalAlignment: PropTypes.oneOf(["start", "end", "left", "right", "center"]),
  verticalAlignment: PropTypes.oneOf(["start", "end", "center", "stretch"]),
};

export default PageLoader;
