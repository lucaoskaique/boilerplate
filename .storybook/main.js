/** @type { import('@storybook/nextjs-vite').StorybookConfig } */
const config = {
  stories: ['../src/components/**/stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {}
  },
  staticDirs: ['../public']
}

export default config
