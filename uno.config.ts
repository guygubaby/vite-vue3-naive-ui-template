import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

const rawIconCollection: Record<string, string> = {
  home: ``,
}

export const MyIconCollection = Object.entries(rawIconCollection).reduce((acc, [key, value]) => {
  acc[key] = value
    .replace(/fill="(\w*)"/g, (match, p1) => match.replace(p1, 'currentColor'))
  return acc
}, {} as Record<string, string>)

export default defineConfig({
  theme: {
    colors: {
      primary: '#374EFC',
      black: '#252525',
      dim: '#eaeaea',
    },
  },
  shortcuts: [
    ['wh-full', 'w-full h-full'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        bryce: {
          ...MyIconCollection,
        },
      },
    }),
  ],
})
