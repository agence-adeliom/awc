import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCButton from './button.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCButton>('awc-button');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: 'awc-button',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },
  render: context => template(context)
} satisfies Meta<AWCButton>;

export default meta;

type Story = StoryObj<AWCButton & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    'default-slot': 'Click me'
  }
};

export const Default: Story = {
  name: 'Default variant',
  args: {
    ...Primary.args
  },
  render: context => html` ${template({ ...context })} `,
  parameters: {
    docs: {
      description: {
        story: 'If no `variant` is provided, the button will use the `default` variant.'
      }
    }
  }
};

export const Variants: Story = {
  name: 'Variants',
  args: {
    ...Primary.args
  },
  render: context => html`
    <h2 class="mb-4 font-semibold">Variants</h2>
    ${template({ ...context, variant: 'primary' })} ${template({ ...context, variant: 'secondary' })}
    ${template({ ...context, variant: 'tertiary' })}

    <h2 class="mb-4 mt-6 font-semibold">Status Variants</h2>
    ${template({ ...context, variant: 'success' })} ${template({ ...context, variant: 'warning' })}
    ${template({ ...context, variant: 'danger' })}

    <h2 class="mb-4 mt-6 font-semibold">Generic Variants</h2>
    ${template({ ...context, variant: 'neutral' })} ${template({ ...context, variant: 'default' })}
    ${template({ ...context, variant: 'ghost' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Set the `variant` attribute to change the button's variant."
      }
    }
  }
};

export const Colored: Story = {
  name: 'Colored',
  args: {
    ...Primary.args,
    colored: true
  },
  render: context => html`
    ${template({ ...context, variant: 'primary' })} ${template({ ...context, variant: 'secondary' })}
    ${template({ ...context, variant: 'tertiary' })} ${template({ ...context, variant: 'success' })}
    ${template({ ...context, variant: 'warning' })} ${template({ ...context, variant: 'danger' })}
  `,
  parameters: {
    docs: {
      description: {
        story: 'Set the `colored` attribute to use color based on the colors shape.'
      }
    }
  }
};

export const Sizes: Story = {
  name: 'Sizes',
  args: {
    ...Primary.args
  },
  render: context => html`
    ${template({ ...context, size: 'small' })} ${template({ ...context, size: 'medium' })}
    ${template({ ...context, size: 'large' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Set the `size` attribute to change the button's variant."
      }
    }
  }
};

export const OutlineButtons: Story = {
  name: 'Outline Buttons',
  args: {
    ...Primary.args,
    outline: true
  },
  render: context => html`
    ${template({ ...context, variant: 'default' })} ${template({ ...context, variant: 'primary' })}
    ${template({ ...context, variant: 'secondary' })} ${template({ ...context, variant: 'tertiary' })}
    ${template({ ...context, variant: 'success' })} ${template({ ...context, variant: 'neutral' })}
    ${template({ ...context, variant: 'warning' })} ${template({ ...context, variant: 'danger' })}
    ${template({ ...context, variant: 'ghost' })}
  `,
  parameters: {
    docs: {
      description: {
        story: 'Use the `outline` attribute to draw outlined buttons with transparent backgrounds.'
      }
    }
  }
};

export const PillButtons: Story = {
  name: 'Pill Buttons',
  args: {
    ...Primary.args,
    pill: true
  },
  render: context => html`
    ${template({ ...context, size: 'small' })} ${template({ ...context, size: 'medium' })}
    ${template({ ...context, size: 'large' })}
  `,
  parameters: {
    docs: {
      description: {
        story: 'Use the `pill` attribute to give buttons rounded edges.'
      }
    }
  }
};

export const IconButtons: Story = {
  name: 'Icon Buttons',
  render: () => html`
    <h2 class="mb-4 mt-6 font-semibold">Square</h2>

    <h2 class="mb-4 font-semibold text-small">Default</h2>
    <awc-button variant="default" icon="square"><awc-icon name="gear" label="Settings"></awc-icon></awc-button>

    <h2 class="mb-4 mt-6 font-semibold text-small">Variants</h2>
    <awc-button variant="primary" icon="square"><awc-icon name="gear" label="Settings"></awc-icon></awc-button>
    <awc-button variant="secondary" icon="square"><awc-icon name="gear" label="Settings"></awc-icon></awc-button>
    <awc-button variant="tertiary" icon="square"><awc-icon name="gear" label="Settings"></awc-icon></awc-button>

    <h2 class="mb-4 mt-6 font-semibold text-small">Colored</h2>
    <awc-button variant="primary" icon="square" colored><awc-icon name="gear" label="Settings"></awc-icon></awc-button>
    <awc-button variant="secondary" icon="square" colored
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="tertiary" icon="square" colored><awc-icon name="gear" label="Settings"></awc-icon></awc-button>

    <h2 class="mb-4 mt-6 font-semibold text-small">Outline</h2>
    <awc-button variant="primary" icon="square" outline><awc-icon name="gear" label="Settings"></awc-icon></awc-button>
    <awc-button variant="secondary" icon="square" outline
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="tertiary" icon="square" outline><awc-icon name="gear" label="Settings"></awc-icon></awc-button>

    <h2 class="mb-4 mt-6 font-semibold">Circle</h2>

    <h2 class="mb-4 font-semibold text-small">Default</h2>
    <awc-button variant="default" icon="circle"><awc-icon name="gear" label="Settings"></awc-icon></awc-button>

    <h2 class="mb-4 mt-6 font-semibold text-small">Variants</h2>
    <awc-button variant="primary" icon="circle"><awc-icon name="gear" label="Settings"></awc-icon></awc-button>
    <awc-button variant="secondary" icon="circle"><awc-icon name="gear" label="Settings"></awc-icon></awc-button>
    <awc-button variant="tertiary" icon="circle"><awc-icon name="gear" label="Settings"></awc-icon></awc-button>

    <h2 class="mb-4 mt-6 font-semibold text-small">Colored</h2>
    <awc-button variant="primary" icon="circle" colored><awc-icon name="gear" label="Settings"></awc-icon></awc-button>
    <awc-button variant="secondary" icon="circle" colored
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="tertiary" icon="circle" colored><awc-icon name="gear" label="Settings"></awc-icon></awc-button>

    <h2 class="mb-4 mt-6 font-semibold text-small">Outline</h2>
    <awc-button variant="primary" icon="circle" outline><awc-icon name="gear" label="Settings"></awc-icon></awc-button>
    <awc-button variant="secondary" icon="circle" outline
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="tertiary" icon="circle" outline><awc-icon name="gear" label="Settings"></awc-icon></awc-button>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Use the `icon` attribute to create icon buttons that can be `square` or `circle`. When this attribute is set, the button expects a single `<awc-icon>` in the default slot.'
      }
    }
  }
};

export const TextButtons: Story = {
  name: 'Text Buttons',
  args: {
    ...Primary.args,
    variant: 'text'
  },
  render: context => html`
    ${template({ ...context, size: 'small' })}
    <br />
    ${template({ ...context, size: 'medium' })}
    <br />
    ${template({ ...context, size: 'large' })}
    <br />
    <awc-button variant="${context.variant}">
      Click me
      <awc-icon slot="suffix" name="arrow-right"></awc-icon>
    </awc-button>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Use the `text` variant to create buttons that share the same size as regular buttons but don't have backgrounds or borders."
      }
    }
  }
};

export const LinkButtons: Story = {
  name: 'Link Buttons',
  args: {
    ...Primary.args,
    variant: 'link'
  },
  render: context => html`
    ${template({ ...context, size: 'small' })}
    <br />
    ${template({ ...context, size: 'medium' })}
    <br />
    ${template({ ...context, size: 'large' })}
    <br />
    <awc-button variant="${context.variant}">
      Click me
      <awc-icon slot="suffix" name="arrow-right"></awc-icon>
    </awc-button>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Use the `link` variant to create buttons that share the same size as regular buttons but don't have backgrounds or borders."
      }
    }
  }
};

export const HrefButtons: Story = {
  name: 'Buttons with href',
  render: () =>
    html`<awc-button href="https://example.com/">Link</awc-button>
      <awc-button href="https://example.com/" target="_blank">New Window</awc-button>
      <awc-button href="/assets/images/wordmark.svg" download="wordmark.svg">Download</awc-button>
      <awc-button href="https://example.com/" disabled>Disabled</awc-button>`,
  parameters: {
    docs: {
      description: {
        story: `It's often helpful to have a button that works like a link. This is possible by setting the \`href\` attribute, which will make the component render an \`<a>\` under the hood. This gives you all the default link behavior the browser provides (e.g. [[CMD/CTRL/SHIFT]] + [[CLICK]]) and exposes the \`target\` and \`download\` attributes.

> When a \`target\` is set, the link will receive \`rel="noreferrer noopener"\` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).`
      }
    }
  }
};

export const CustomWidth: Story = {
  name: 'Setting a Custom Width',
  render: () =>
    html`<awc-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</awc-button>
      <awc-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</awc-button>
      <awc-button variant="default" size="large" style="width: 100%;">Large</awc-button>`,
  parameters: {
    docs: {
      description: {
        story: `As expected, buttons can be given a custom width by setting the \`width\` attribute. This is useful for making buttons span the full width of their container on smaller screens.`
      }
    }
  }
};

export const PrefixSuffix: Story = {
  name: 'Prefix and Suffix Icons',
  render: () =>
    html`<awc-button variant="default" size="small">
        <awc-icon slot="prefix" name="gear"></awc-icon>
        Settings
      </awc-button>

      <awc-button variant="default" size="small">
        <awc-icon slot="suffix" name="arrow-counterclockwise"></awc-icon>
        Refresh
      </awc-button>

      <awc-button variant="default" size="small">
        <awc-icon slot="prefix" name="link-45deg"></awc-icon>
        <awc-icon slot="suffix" name="box-arrow-up-right"></awc-icon>
        Open
      </awc-button>

      <br /><br />

      <awc-button variant="default">
        <awc-icon slot="prefix" name="gear"></awc-icon>
        Settings
      </awc-button>

      <awc-button variant="default">
        <awc-icon slot="suffix" name="arrow-counterclockwise"></awc-icon>
        Refresh
      </awc-button>

      <awc-button variant="default">
        <awc-icon slot="prefix" name="link-45deg"></awc-icon>
        <awc-icon slot="suffix" name="box-arrow-up-right"></awc-icon>
        Open
      </awc-button>

      <br /><br />

      <awc-button variant="default" size="large">
        <awc-icon slot="prefix" name="gear"></awc-icon>
        Settings
      </awc-button>

      <awc-button variant="default" size="large">
        <awc-icon slot="suffix" name="arrow-counterclockwise"></awc-icon>
        Refresh
      </awc-button>

      <awc-button variant="default" size="large">
        <awc-icon slot="prefix" name="link-45deg"></awc-icon>
        <awc-icon slot="suffix" name="box-arrow-up-right"></awc-icon>
        Open
      </awc-button>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`prefix\` and \`suffix\` slots to add icons.`
      }
    }
  }
};

export const Caret: Story = {
  name: 'Caret',
  render: () =>
    html`<awc-button size="small" caret>Small</awc-button>
      <awc-button size="medium" caret>Medium</awc-button>
      <awc-button size="large" caret>Large</awc-button>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`caret\` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.`
      }
    }
  }
};

export const Loading: Story = {
  name: 'Loading',
  args: {
    ...Primary.args,
    loading: true
  },
  render: context => html`
    <h2 class="mb-4 font-semibold">Variants</h2>
    ${template({ ...context, variant: 'primary' })} ${template({ ...context, variant: 'secondary' })}
    ${template({ ...context, variant: 'tertiary' })}
    <h2 class="mb-4 mt-6 font-semibold">Status variants</h2>
    ${template({ ...context, variant: 'success' })} ${template({ ...context, variant: 'danger' })}
    ${template({ ...context, variant: 'warning' })}
    <h2 class="mb-4 mt-6 font-semibold">Generic variants</h2>
    ${template({ ...context, variant: 'default' })} ${template({ ...context, variant: 'neutral' })}
    ${template({ ...context, variant: 'ghost' })}

    <h2 class="mb-4 mt-6 font-semibold">Colored</h2>
    ${template({ ...context, colored: true, variant: 'default' })}
    ${template({ ...context, colored: true, variant: 'primary' })}
    ${template({ ...context, colored: true, variant: 'secondary' })}
    ${template({ ...context, colored: true, variant: 'tertiary' })}
    ${template({ ...context, colored: true, variant: 'success' })}
    ${template({ ...context, colored: true, variant: 'neutral' })}
    ${template({ ...context, colored: true, variant: 'warning' })}
    ${template({ ...context, colored: true, variant: 'danger' })}
    ${template({ ...context, colored: true, variant: 'ghost' })}

    <h2 class="mb-4 mt-6 font-semibold">Outline</h2>
    ${template({ ...context, outline: true, variant: 'default' })}
    ${template({ ...context, outline: true, variant: 'primary' })}
    ${template({ ...context, outline: true, variant: 'secondary' })}
    ${template({ ...context, outline: true, variant: 'tertiary' })}
    ${template({ ...context, outline: true, variant: 'success' })}
    ${template({ ...context, outline: true, variant: 'neutral' })}
    ${template({ ...context, outline: true, variant: 'warning' })}
    ${template({ ...context, outline: true, variant: 'danger' })}
    ${template({ ...context, outline: true, variant: 'ghost' })}
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.'
      }
    }
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    ...Primary.args,
    disabled: true
  },
  render: context => html`
    <h2 class="mb-4 font-semibold">Variants</h2>
    ${template({ ...context, variant: 'primary' })} ${template({ ...context, variant: 'secondary' })}
    ${template({ ...context, variant: 'tertiary' })}

    <h2 class="mb-4 mt-6 font-semibold">Status variants</h2>
    ${template({ ...context, variant: 'success' })} ${template({ ...context, variant: 'warning' })}
    ${template({ ...context, variant: 'danger' })}

    <h2 class="mb-4 mt-6 font-semibold">Generic variants</h2>
    ${template({ ...context, variant: 'neutral' })} ${template({ ...context, variant: 'default' })}
    ${template({ ...context, variant: 'ghost' })}

    <h2 class="mb-4 mt-6 font-semibold">Colored</h2>
    ${template({ ...context, colored: true, variant: 'default' })}
    ${template({ ...context, colored: true, variant: 'primary' })}
    ${template({ ...context, colored: true, variant: 'secondary' })}
    ${template({ ...context, colored: true, variant: 'tertiary' })}
    ${template({ ...context, colored: true, variant: 'success' })}
    ${template({ ...context, colored: true, variant: 'neutral' })}
    ${template({ ...context, colored: true, variant: 'warning' })}
    ${template({ ...context, colored: true, variant: 'danger' })}
    ${template({ ...context, colored: true, variant: 'ghost' })}

    <h2 class="mb-4 mt-6 font-semibold">Outline</h2>
    ${template({ ...context, outline: true, variant: 'default' })}
    ${template({ ...context, outline: true, variant: 'primary' })}
    ${template({ ...context, outline: true, variant: 'secondary' })}
    ${template({ ...context, outline: true, variant: 'tertiary' })}
    ${template({ ...context, outline: true, variant: 'success' })}
    ${template({ ...context, outline: true, variant: 'neutral' })}
    ${template({ ...context, outline: true, variant: 'warning' })}
    ${template({ ...context, outline: true, variant: 'danger' })}
    ${template({ ...context, outline: true, variant: 'ghost' })}

    <h2 class="mb-4 mt-6 font-semibold">Text buttons</h2>
    ${template({ ...context, variant: 'text' })}
    <br />
    <awc-button variant="text" disabled>
      Text
      <awc-icon slot="suffix" name="arrow-right"></awc-icon>
    </awc-button>

    <h2 class="mb-4 mt-6 font-semibold">Link buttons</h2>
    ${template({ ...context, variant: 'link' })}
    <br />
    <awc-button variant="link" disabled>
      Link
      <awc-icon slot="suffix" name="arrow-right"></awc-icon>
    </awc-button>

    <h2 class="mb-4 mt-6 font-semibold">Icon buttons</h2>

    <h2 class="mb-4 mt-6 font-semibold text-small">Square</h2>

    <h2 class="mb-4 font-semibold text-xsmall">Default</h2>
    <awc-button variant="default" icon="square" disabled><awc-icon name="gear" label="Settings"></awc-icon></awc-button>

    <h2 class="mb-4 mt-6 font-semibold text-xsmall">Variants</h2>
    <awc-button variant="primary" icon="square" disabled><awc-icon name="gear" label="Settings"></awc-icon></awc-button>
    <awc-button variant="secondary" icon="square" disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="tertiary" icon="square" disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>

    <h2 class="mb-4 mt-6 font-semibold text-xsmall">Colored</h2>
    <awc-button variant="primary" icon="square" colored disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="secondary" icon="square" colored disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="tertiary" icon="square" colored disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>

    <h2 class="mb-4 mt-6 font-semibold text-xsmall">Outline</h2>
    <awc-button variant="primary" icon="square" outline disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="secondary" icon="square" outline disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="tertiary" icon="square" outline disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>

    <h2 class="mb-4 mt-6 font-semibold text-small">Circle</h2>

    <h2 class="mb-4 font-semibold text-xsmall">Default</h2>
    <awc-button variant="default" icon="circle" disabled><awc-icon name="gear" label="Settings"></awc-icon></awc-button>

    <h2 class="mb-4 mt-6 font-semibold text-xsmall">Variants</h2>
    <awc-button variant="primary" icon="circle" disabled><awc-icon name="gear" label="Settings"></awc-icon></awc-button>
    <awc-button variant="secondary" icon="circle" disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="tertiary" icon="circle" disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>

    <h2 class="mb-4 mt-6 font-semibold text-xsmall">Colored</h2>
    <awc-button variant="primary" icon="circle" colored disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="secondary" icon="circle" colored disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="tertiary" icon="circle" colored disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>

    <h2 class="mb-4 mt-6 font-semibold text-xsmall">Outline</h2>
    <awc-button variant="primary" icon="circle" outline disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="secondary" icon="circle" outline disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
    <awc-button variant="tertiary" icon="circle" outline disabled
      ><awc-icon name="gear" label="Settings"></awc-icon
    ></awc-button>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Use the `disabled` attribute to disable a button.'
      }
    }
  }
};

export const Styling: Story = {
  name: 'Styling Buttons',
  render: () =>
    html`<awc-button class="pink">Pink Button</awc-button>

      <style>
        awc-button.pink::part(base) {
          /* Set design tokens for height and border width */
          --awc-input-height-medium: 48px;
          --awc-input-border-width: 4px;

          border-radius: 0;
          background-color: #ff1493;
          border-top-color: #ff7ac1;
          border-left-color: #ff7ac1;
          border-bottom-color: #ad005c;
          border-right-color: #ad005c;
          color: white;
          font-size: 1.125rem;
          box-shadow: 0 2px 10px #0002;
          transition:
            var(--awc-transition-medium) transform ease,
            var(--awc-transition-medium) border ease;
        }

        awc-button.pink::part(base):hover {
          transform: scale(1.05) rotate(-1deg);
        }

        awc-button.pink::part(base):active {
          border-top-color: #ad005c;
          border-right-color: #ff7ac1;
          border-bottom-color: #ff7ac1;
          border-left-color: #ad005c;
          transform: scale(1.05) rotate(-1deg) translateY(2px);
        }

        awc-button.pink::part(base):focus-visible {
          outline: dashed 2px deeppink;
          outline-offset: 4px;
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button\'s `variant` attribute instead of a class (e.g. `awc-button[variant="primary"]`).'
      }
    }
  }
};

export const Tomato: Story = {
  name: 'Tomato',
  render: () =>
    html`<awc-button class="tomato-button"> Tomato Button </awc-button>
      <style>
        .tomato-button::part(base) {
          background: var(--awc-color-neutral-0);
          border: solid 1px tomato;
        }

        .tomato-button::part(base):hover {
          background: rgba(255, 99, 71, 0.1);
        }

        .tomato-button::part(base):active {
          background: rgba(255, 99, 71, 0.2);
        }

        .tomato-button::part(base):focus-visible {
          box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.33);
        }

        .tomato-button::part(label) {
          color: tomato;
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story: 'Customize buttons with CSS using the `::part` selector to target individual component parts.'
      }
    }
  }
};
