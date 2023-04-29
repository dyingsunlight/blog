export function hexaToRgba(hex: string) {
  hex = hex.replace(/^#/, "")

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  const a = parseInt(hex.substring(6, 8), 16)

  return {
    r: isNaN(r) ? 255 : r,
    g: isNaN(g) ? 255 : g,
    b: isNaN(b) ? 255 : b,
    a: isNaN(a) ? 1 : a
  }
}

export function extractRGBValues(rgbString: string) {
  const rgbaNumbers = rgbString
    .replace(/rgba?\(/, "")
    .replace(/\)$/, "");

  const rgbParts = rgbaNumbers
    .split(",")
    .map(val => val.trim())

  const r = parseInt(rgbParts[0])
  const g = parseInt(rgbParts[1])
  const b = parseInt(rgbParts[2])
  const a = parseInt(rgbParts[3])

  return { r: r, g: g, b: b, a }
}
