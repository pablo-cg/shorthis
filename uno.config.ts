// uno.config.ts
import { defineConfig } from 'unocss';
import presetWebFonts from '@unocss/preset-web-fonts';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';

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
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  theme: {
    colors: {
      dark: '#0B101B',
      light: '#C9CED6',
      'dark-gray': '#181E29',
    },
  },
});
