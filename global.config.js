const COLOR_THEME = {
  primary: {
    50: "#fce6eb",
    100: "#f8bfce",
    200: "#f497ae",
    300: "#ef708e",
    400: "#e95677",
    500: "#e54462",
    600: "#d43f5e",
    700: "#be3a5a",
    800: "#a93556",
    900: "#832d4d",
  },
  secondary: {
    50: "#d8f9f3",
    100: "#9eefde",
    200: "#44e5c7",
    300: "#00d7b0",
    400: "#00c99e",
    500: "#00bc8e",
    600: "#00ad80",
    700: "#009b6e",
    800: "#008b60",
    900: "#006d41",
  },
  background: "#f0ffff",
};

const FONT_FAMILY = {
  sans: ["ui-sans-serif", "system-ui"],
  serif: ["ui-serif", "Georgia"],
  mono: ["ui-monospace", "SFMono-Regular"],
  heading: ["Poppins", "sans-serif"],
  body: ["Nunito", "sans-serif"],
};

///////////////////////////////////////////////////////////////////////////////////////

class Font {
  static tailwind() {
    return FONT_FAMILY;
  }

  static chakra() {
    const res = {};

    for (let key in FONT_FAMILY) {
      const value = FONT_FAMILY[key];
      let temp = ``;

      for (let j = 0; j < value.length; j++) {
        temp += `'${value[j]}'`;

        if (j != value.length - 1) {
          temp += ", ";
        }
      }

      res[key] = temp;
    }

    return res;
  }
}

class Color {
  static tailwind() {
    return COLOR_THEME;
  }

  static chakra() {
    return COLOR_THEME;
  }
}

module.exports = { Color, Font };
