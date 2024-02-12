// uno.config.ts
import { defineConfig } from 'unocss';
import presetWebFonts from '@unocss/preset-web-fonts';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Source Sans 3', 'Source Sans 3:400,500,600,700'],
        montserrat: ['Montserrat', 'Montserrat:400,500,600,700'],
        mono: ['JetBrains Mono', 'JetBrains Mono:400,500,600'],
      },
    }),
  ],
  theme: {
    colors: {
      dark: '#0B101B',
      light: '#C9CED6',
      'dark-gray': '#181E29'
    },
  },
});
