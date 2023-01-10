function dOl(color) {
  switch (color.toLowerCase()) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";
      break;
    case "blue":
    case "purple":
    case "brown":
      return "dark color";
      break;

    default:
      return "unknown color";
      break;
  }
}
