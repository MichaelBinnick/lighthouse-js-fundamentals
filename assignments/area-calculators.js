const calculateRectangleArea = (length, width) => {
  if (length >= 1 && width >= 1){
    return length * width;
  }
}

const calculateTriangleArea = (base, height) => {
  if (base >= 1 && height >= 1) {
    return (base * height) / 2;
  }
}

const calculateCircleArea = (radius) => {
  if (radius >= 1) {
    return Math.PI * (radius * radius);
  }
}