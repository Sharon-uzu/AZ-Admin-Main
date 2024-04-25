module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    // screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        gray: {
          50: "#fafafa",
          100: "#f7f6f6",
          200: "#f0f0f0",
          300: "#e6e2e2",
          400: "#bdbdbd",
          500: "#a5a5a5",
          600: "#697076",
          800: "#4d4c4c",
          900: "#142023",
          "50_01": "#fbfbfb",
          "50_02": "#fffafa",
          "50_03": "#fbfafa",
          "50_db": "#fcfcfcdb",
          "50_af": "#fffafaaf",
          "400_04": "#bfbfbf",
          "400_01": "#c2bfbf",
          "400_03": "#b8bcc0",
          "400_02": "#d4c5c5",
          "100_01": "#f6f7f7",
          "800_75": "#3b3b3b75",
          "600_cc": "#697076cc",
          "600_01": "#858585",
          "800_3f": "#4444443f",
          "700_07": "#6e636307",
          "800_19": "#44444419",
        },
        red: {
          200: "#d48c8c",
          300: "#ce7b7b",
          400: "#f55454",
          500: "#f53636",
          600: "#eb3223",
          700: "#c92f2f",
          800: "#cf2222",
          A700_09: "#ff0d0d",
          A700_08: "#ee000e",
          A700_05: "#ff0000",
          A400: "#fb001e",
          "200_16": "#e0abab16",
          A200: "#ff4a4a",
          A700_04: "#ff0101",
          A700_07: "#f20a0a",
          A700_af: "#f20a0aaf",
          A700_02: "#ff0303",
          A700_01: "#ff0505",
          "400_01": "#f54a4a",
          "800_01": "#d61f1f",
          A700_06: "#c80c0c",
          A700: "#de0808",
          "500_cc": "#ff3636cc",
          "500_01": "#ff3636",
          "500_6c": "#ff36366c",
          A700_03: "#f50909",
        },
        white: { A700_af: "#ffffffaf", A700: "#ffffff" },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_4c": "#0000004c",
          "900_33": "#00000033",
        },
        amber: {
          400: "#fece2f",
          A400_01: "#ffc000",
          A200: "#ffd042",
          A400: "#ffc300",
        },
        yellow: { 800: "#fead1d", A400_01: "#dde105", A400: "#fff400" },
        purple: { A400: "#ee1abf" },
        light_blue: { A700_01: "#0080ff", A700: "#0091e3" },
        light_green: {
          300: "#9dc284",
          400: "#8bee5d",
          500: "#8ac53e",
          A700_01: "#14ff00",
          A700: "#30cf22",
          A700_02: "#32df16",
        },
        blue: {
          700: "#1e74c8",
          800: "#115ebc",
          A100: "#82ade3",
          "800_01": "#2248cf",
          "700_96": "#2e77d296",
        },
        teal: { A400: "#13d9cd" },
        blue_gray: {
          100: "#d9d9d9",
          400: "#8093a5",
          900: "#2e2e2e",
          "900_01": "#292d32",
          "900_af": "#292d32af",
          "900_02": "#303030",
          "400_01": "#828990",
        },
        pink: { 800: "#ac2253" },
        green: {
          700: "#27b403",
          800: "#248e1b",
          A700: "#23d61f",
          A700_63: "#14be7763",
          A200_63: "#53e78b63",
        },
        indigo: { 600: "#2d68a2", "400_59": "#4f5ccf59" },
        colors: "#f53636ff",
      },
      fontFamily: {
        manrope: "Manrope",
        opensans: "Open Sans",
        bentonsansregular: "BentonSans Regular",
        poppins: "Poppins",
      },
      boxShadow: {
        bs9: "0px 2.6px  2px 0px #4444443f",
        bs6: "inset 0px 4px  4px 0px #00000033",
        bs8: "inset 0px 4.9px  4px 0px #00000033",
        bs: "0px 12px  24px 0px #44444419",
        bs5: "inset 0px 3.94px  3px 0px #00000033",
        bs3: "inset 0px 4.51px  4px 0px #00000033",
        bs10: "0px 7.26px  14px 0px #44444419",
        bs4: "0px 7.99px  15px 0px #44444419",
        bs2: "0px 9.28px  18px 0px #44444419",
        bs1: "0px 9.56px  19px 0px #44444419",
        bs7: "0px 17.36px  34px 0px #44444419",
      },
      textShadow: {
        ts3: "0px 4px  4px #0000003f",
        ts4: "0px 4.9px  4px #0000003f",
        ts5: "0px 2.45px  2px #0000003f",
        ts2: "0px 4.31px  4px #0000003f",
        ts: "0px 12px  24px #44444419",
        ts1: "0px 9.56px  19px #44444419",
      },
      backgroundImage: {
        gradient: "linear-gradient(139deg ,#53e78b63,#14be7763)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};