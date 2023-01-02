export function getTriade(hex: string) {
   const rgb: number[] | null = hexToRgb(hex)
   if (!rgb) return null

   const r = rgb[0]
   const g = rgb[1]
   const b = rgb[2]
   //    rgb works
   console.log('rgb', rgb)

   const hsl = rgbToHsl(r, g, b)
   console.log('hsl', hsl)

   const h = (hsl[0] + 120) % 360
   const s = hsl[1]
   const l = hsl[2]
   const color1 = hslToRgb(h, s, l)
   const color2 = hslToRgb((h + 180) % 360, s, l)

   console.log('color scehme is \n', color1, color2)
   console.log()

   return [hex, rgbToHex(color1), rgbToHex(color2)]
}

const hexToRgb = (hex: string) => {
   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
   return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
   r /= 255
   g /= 255
   b /= 255
   const l = Math.max(r, g, b)
   const s = l - Math.min(r, g, b)
   const h = s ? (l === r ? (g - b) / s : l === g ? 2 + (b - r) / s : 4 + (r - g) / s) : 0
   return [
      60 * h < 0 ? 60 * h + 360 : 60 * h,
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
      (100 * (2 * l - s)) / 2,
   ]
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
   s /= 100
   l /= 100
   const k = (n: number) => (n + h / 30) % 12
   const a = s * Math.min(l, 1 - l)
   const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
   return [255 * f(0), 255 * f(8), 255 * f(4)]
}

function rgbToHex(color: [r: number, g: number, b: number]): string {
   let r = color[0]
   let g = color[1]
   let b = color[2]
   return '#' + ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')
}
