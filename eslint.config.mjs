// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import eslintConfigPrettier from 'eslint-config-prettier';

// Nuxt/Vue/TS qaydaları (kod keyfiyyəti) + eslint-config-prettier
// (formatı ESLint deyil, Prettier idarə etsin — ikisi dava etməsin).
export default withNuxt().append(eslintConfigPrettier);
