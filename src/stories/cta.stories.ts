import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Call to Action',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Cta1: StoryObj = {
  name: 'CTA 1',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col overflow-hidden bg-neutral-100 sm:flex-row md:h-80">
          <!-- image - start -->
          <div class="order-first h-48 w-full bg-neutral-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <awc-image layout="filled" aspectRatio="1" width="800" src="https://placehold.co/800x800"></awc-image>
          </div>
          <!-- image - end -->

          <!-- content - start -->
          <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h4 class="text-2xlarge md:text-3xlarge xl:text-4xlarge font-semibold leading-dense mb-4 text-title">
              <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1"
                >Headline</span
              >
              Erat suspendisse maecena
            </h4>

            <p class="mb-6 md:mb-8 text-paragraph">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to a real text.
            </p>

            <div class="flex gap-4">
              <awc-button variant="primary" class="w-full md:w-auto">Button</awc-button>
              <awc-button variant="primary" outline class="bg-white w-full md:w-auto">Button</awc-button>
            </div>
          </div>
          <!-- content - end -->
        </div>
      </div>
    </div>
  `
};

export const Cta2: StoryObj = {
  name: 'CTA 2',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col overflow-hidden bg-neutral-100 sm:flex-row md:h-80">
          <!-- image - start -->
          <div class="order-last h-48 w-full bg-neutral-300 sm:h-auto sm:w-1/2 lg:w-2/5">
            <awc-image layout="filled" aspectRatio="1" width="800" src="https://placehold.co/800x800"></awc-image>
          </div>
          <!-- image - end -->

          <!-- content - start -->
          <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h4 class="text-2xlarge md:text-3xlarge xl:text-4xlarge font-semibold leading-dense mb-4 text-title">
              <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1"
                >Headline</span
              >
              Erat suspendisse maecena
            </h4>

            <p class="mb-6 md:mb-8 text-paragraph">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to a real text.
            </p>

            <div class="flex gap-4">
              <awc-button variant="primary" class="w-full md:w-auto">Button</awc-button>
              <awc-button variant="primary" outline class="bg-white w-full md:w-auto">Button</awc-button>
            </div>
          </div>
          <!-- content - end -->
        </div>
      </div>
    </div>
  `
};

export const Cta3: StoryObj = {
  name: 'CTA 3',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h4 class="text-2xlarge md:text-3xlarge xl:text-4xlarge font-semibold leading-dense mb-4 text-title">
            <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1"
              >Headline</span
            >
            Erat suspendisse maecena
          </h4>

          <p class="mb-6 md:mb-8 text-paragraph">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or
            generate text for testing. Filler text is dummy text which has no meaning however looks very similar to a
            real text.
          </p>

          <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <awc-button href="#" variant="primary" size="large">Button</awc-button>
            <awc-button href="#" variant="ghost" size="large">Button</awc-button>
          </div>
        </div>
      </div>
    </div>
  `
};

export const Cta4: StoryObj = {
  name: 'CTA 4',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col items-center sm:justify-between gap-5 bg-neutral-100 p-6 sm:flex-row md:p-10">
          <div>
            <h5 class="text-xlarge md:text-2xlarge xl:text-3xlarge font-semibold leading-dense mb-1 text-title">
              Erat suspendisse maecena
            </h5>
            <p class="text-paragraph">This is a section of some simple filler text, also known as placeholder text.</p>
          </div>
          <div class="flex w-full sm:w-auto gap-4 flex-nowrap">
            <awc-button variant="primary" class="w-full md:w-auto">Button</awc-button>
            <awc-button variant="primary" outline class="bg-white w-full md:w-auto">Button</awc-button>
          </div>
        </div>
      </div>
    </div>
  `
};

export const Cta5: StoryObj = {
  name: 'CTA 5',
  render: () => html`
    <div class="bg-neutral-300 p-6  md:p-10">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col items-center sm:justify-between gap-5 sm:flex-row">
          <div>
            <h5 class="text-xlarge md:text-2xlarge xl:text-3xlarge font-semibold leading-dense mb-1 text-title">
              Erat suspendisse maecena
            </h5>
            <p class="text-paragraph">This is a section of some simple filler text, also known as placeholder text.</p>
          </div>
          <div class="flex w-full sm:w-auto gap-4 flex-nowrap">
            <awc-button variant="primary" class="w-full md:w-auto">Button</awc-button>
            <awc-button variant="primary" outline class="bg-white w-full md:w-auto">Button</awc-button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
};
