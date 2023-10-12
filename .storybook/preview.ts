import type {Preview, Story, StoryContext, StoryFn} from '@storybook/web-components';
import { withThemeByDataAttribute } from "@storybook/addon-styling";
import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../dist/custom-elements.json';
import DocumentationTemplate from './template/DocumentationTemplate.mdx';

import '../src/awc.ts'
import '../src/themes/light.css'
import '../src/themes/dark.css'
import './template/story.style.css'

import { setBasePath } from '../src/utilities/base-path.js';

setBasePath('https://cdn.jsdelivr.net/npm/@agence-adeliom/awc/cdn');
setCustomElementsManifest(customElements)

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  })
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    backgrounds: { disable: true },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      page: DocumentationTemplate,
      story: {
        inline: true
      }
    },
    package: customElements.package
  }
};

export default preview;
