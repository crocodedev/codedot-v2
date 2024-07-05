import preprocessor from 'svelte-preprocess'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  preprocess: preprocessor({
    postcss: true,
  }),
}

export default config
