import React from "react";

const sizeClasses = {
  txtManropeMedium1441: "font-manrope font-medium",
  txtOpenSansRomanBold14Amber400: "font-bold font-opensans",
  txtOpenSansRomanRegular8: "font-normal font-opensans",
  txtOpenSansRomanBold13Gray10001: "font-bold font-opensans",
  txtOpenSansRomanRegular10Red700: "font-normal font-opensans",
  txtOpenSansRomanBold14YellowA40001: "font-bold font-opensans",
  txtOpenSansRomanBold14AmberA40001: "font-bold font-opensans",
  txtManropeMedium182: "font-manrope font-medium",
  txtOpenSansRomanBold16Gray10001: "font-bold font-opensans",
  txtManropeMedium1969: "font-manrope font-medium",
  txtOpenSansRomanRegular16Blue700: "font-normal font-opensans",
  txtOpenSansRomanRegular14Gray600: "font-normal font-opensans",
  txtOpenSansRomanBold2467: "font-bold font-opensans",
  txtOpenSansBold40: "font-bold font-opensans",
  txtOpenSansRomanBold16: "font-bold font-opensans",
  txtOpenSansRomanLight10RedA70005: "font-light font-opensans",
  txtOpenSansRomanBold14: "font-bold font-opensans",
  txtManropeBold36: "font-bold font-manrope",
  txtOpenSansRomanBold2467TealA400: "font-bold font-opensans",
  txtOpenSansRomanBold19: "font-bold font-opensans",
  txtOpenSansRomanBold2467Gray600: "font-bold font-opensans",
  txtOpenSansRomanRegular10Gray60001: "font-normal font-opensans",
  txtOpenSansRomanLight10RedA200: "font-light font-opensans",
  txtOpenSansRomanBold13: "font-bold font-opensans",
  txtOpenSansRomanBold12: "font-bold font-opensans",
  txtOpenSansRomanBold10: "font-bold font-opensans",
  txtBentonSansRegular1443: "font-bentonsansregular font-normal",
  txtOpenSansRomanBold611: "font-bold font-opensans",
  txtOpenSansRomanSemiBold14Gray600: "font-opensans font-semibold",
  txtOpenSansRomanBold14GreenA700: "font-bold font-opensans",
  txtOpenSansRomanRegular1293: "font-normal font-opensans",
  txtManropeMedium1238: "font-manrope font-medium",
  txtOpenSansRegular19RedA700: "font-normal font-opensans",
  txtOpenSansRegular19: "font-normal font-opensans",
  txtOpenSansRomanRegular19: "font-normal font-opensans",
  txtOpenSansRomanLight14Gray600: "font-light font-opensans",
  txtOpenSansRegular19Gray600: "font-normal font-opensans",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtOpenSansRomanRegular12Blue700: "font-normal font-opensans",
  txtOpenSansRegular13: "font-normal font-opensans",
  txtOpenSansRomanRegular12: "font-normal font-opensans",
  txtOpenSansRomanRegular16Indigo600: "font-normal font-opensans",
  txtOpenSansRomanRegular14: "font-normal font-opensans",
  txtOpenSansRomanRegular13: "font-normal font-opensans",
  txtOpenSansRomanRegular10: "font-normal font-opensans",
  txtOpenSansRomanRegular12RedA400: "font-normal font-opensans",
  txtOpenSansRomanBold40: "font-bold font-opensans",
  txtOpenSansRomanBold16RedA70006: "font-bold font-opensans",
  txtOpenSansRomanBold2467Lightgreen300: "font-bold font-opensans",
  txtOpenSansRomanBold16RedA70009: "font-bold font-opensans",
  txtOpenSansRomanBold3055: "font-bold font-opensans",
  txtOpenSansRomanBold14Gray600: "font-bold font-opensans",
  txtOpenSansRomanBold12Gray600: "font-bold font-opensans",
  txtOpenSansRomanBold2162: "font-bold font-opensans",
  txtOpenSansRomanBold14Red700: "font-bold font-opensans",
  txtOpenSansRomanBold14Yellow800: "font-bold font-opensans",
  txtOpenSansRegular19Green800: "font-normal font-opensans",
  txtManropeMedium1969Red500cc: "font-manrope font-medium",
  txtOpenSansRomanBold19Bluegray900: "font-bold font-opensans",
  txtOpenSansRomanBold16Lightgreen500: "font-bold font-opensans",
  txtOpenSansRomanRegular14BlueA100: "font-normal font-opensans",
  txtManropeBold16: "font-bold font-manrope",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtOpenSansRomanBold2467Pink800: "font-bold font-opensans",
  txtOpenSansRegular19Black900: "font-normal font-opensans",
  txtOpenSansRomanRegular12RedA70008: "font-normal font-opensans",
  txtOpenSansRomanLight14: "font-light font-opensans",
  txtOpenSansRomanLight10: "font-light font-opensans",
  txtOpenSansRomanBold2257: "font-bold font-opensans",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtOpenSansRomanRegular12Gray60001: "font-normal font-opensans",
  txtOpenSansRomanSemiBold10: "font-opensans font-semibold",
  txtOpenSansRomanBold5367: "font-bold font-opensans",
  txtOpenSansRomanSemiBold14: "font-opensans font-semibold",
  txtOpenSansRomanBold25: "font-bold font-opensans",
  txtOpenSansRomanBold16Gray600: "font-bold font-opensans",
  txtOpenSansRomanBold24: "font-bold font-opensans",
  txtOpenSansRomanBold2467Red600: "font-bold font-opensans",
  txtManropeMedium1098Bluegray90002: "font-manrope font-medium",
  txtManropeMedium1098: "font-manrope font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
