import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Key Figures',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

const heading = html`<!-- text - start -->
  <div class="mb-8 md:mb-10">
    <h3 class="text-3xlarge md:text-4xlarge xl:text-5xlarge font-semibold leading-dense text-center mb-4 text-title">
      <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1"
        >Headline</span
      >
      Consectetur adipiscing elit
    </h3>
    <p class="mx-auto max-w-screen-md text-center text-paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.
    </p>
  </div>
  <!-- text - end -->`;

export const Stats1: StoryObj = {
  name: 'Key Figures 1',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      ${heading}

      <div class="grid grid-cols-2 gap-8 lg:grid-cols-4 md:gap-0">
        <!-- stat - start -->
        <div class="flex flex-col items-center md:p-4">
          <div class="text-4xl font-bold text-primary sm:text-5xl md:text-6xl leading-dense text-center">200</div>
          <div class="text-sm sm:text-lg font-semibold sm:text-base">People</div>
        </div>
        <!-- stat - end -->

        <!-- stat - start -->
        <div class="flex flex-col items-center md:p-4">
          <div class="text-4xl font-bold text-primary sm:text-5xl md:text-6xl leading-dense text-center">500+</div>
          <div class="text-sm sm:text-lg font-semibold sm:text-base">People</div>
        </div>

        <!-- stat - start -->
        <div class="flex flex-col items-center md:p-4">
          <div class="text-4xl font-bold text-primary sm:text-5xl md:text-6xl leading-dense text-center">1000+</div>
          <div class="text-sm sm:text-lg font-semibold sm:text-base">Customers</div>
        </div>
        <!-- stat - end -->

        <!-- stat - start -->
        <div class="flex flex-col items-center md:p-4">
          <div class="text-4xl font-bold text-primary sm:text-5xl md:text-6xl leading-dense text-center">A couple</div>
          <div class="text-sm sm:text-lg font-semibold sm:text-base">Coffee breaks</div>
        </div>
        <!-- stat - end -->
      </div>
    </div>
  `
};

export const Stats2: StoryObj = {
  name: 'Key Figures 2',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      ${heading}

      <div class="grid grid-cols-2 gap-6 bg-primary p-6 lg:grid-cols-4 md:gap-8 md:p-8">
        <!-- stat - start -->
        <div class="flex flex-col items-center md:p-4">
          <div class="text-4xl font-bold text-white sm:text-5xl md:text-6xl leading-dense text-center">200</div>
          <div class="text-sm sm:text-lg font-semibold sm:text-base text-primary-200">People</div>
        </div>
        <!-- stat - end -->

        <!-- stat - start -->
        <div class="flex flex-col items-center md:p-4">
          <div class="text-4xl font-bold text-white sm:text-5xl md:text-6xl leading-dense text-center">500+</div>
          <div class="text-sm sm:text-lg font-semibold sm:text-base text-primary-200">People</div>
        </div>

        <!-- stat - start -->
        <div class="flex flex-col items-center md:p-4">
          <div class="text-4xl font-bold text-white sm:text-5xl md:text-6xl leading-dense text-center">1000+</div>
          <div class="text-sm sm:text-lg font-semibold sm:text-base text-primary-200">Customers</div>
        </div>
        <!-- stat - end -->

        <!-- stat - start -->
        <div class="flex flex-col items-center md:p-4">
          <div class="text-4xl font-bold text-white sm:text-5xl md:text-6xl leading-dense text-center">A couple</div>
          <div class="text-sm sm:text-lg font-semibold sm:text-base text-primary-200">Coffee breaks</div>
        </div>
        <!-- stat - end -->
      </div>
    </div>
  `
};

export const Stats3: StoryObj = {
  name: 'Key Figures 3',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      ${heading}

      <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
        <!-- stat - start -->
        <div class="flex flex-col items-center justify-center rounded-lg bg-neutral-100 p-4 lg:p-8">
          <awc-icon
            name="person"
            class="text-3xl text-primary-400 sm:text-4xl md:text-5xl text-center mb-2 sm:mb-4"
          ></awc-icon>
          <div class="text-4xl font-bold text-primary sm:text-5xl md:text-6xl leading-dense text-center">200</div>
          <div class="text-sm sm:text-lg font-semibold sm:text-base">People</div>
        </div>
        <!-- stat - end -->

        <!-- stat - start -->
        <div class="flex flex-col items-center justify-center rounded-lg bg-neutral-100 p-4 lg:p-8">
          <awc-icon
            name="person-standing"
            class="text-3xl text-primary-400 sm:text-4xl md:text-5xl text-center mb-2 sm:mb-4"
          ></awc-icon>
          <div class="text-4xl font-bold text-primary sm:text-5xl md:text-6xl leading-dense text-center">500+</div>
          <div class="text-sm sm:text-lg font-semibold sm:text-base">People</div>
        </div>

        <!-- stat - start -->
        <div class="flex flex-col items-center justify-center rounded-lg bg-neutral-100 p-4 lg:p-8">
          <awc-icon
            name="person-hearts"
            class="text-3xl text-primary-400 sm:text-4xl md:text-5xl text-center mb-2 sm:mb-4"
          ></awc-icon>
          <div class="text-4xl font-bold text-primary sm:text-5xl md:text-6xl leading-dense text-center">1000+</div>
          <div class="text-sm sm:text-lg font-semibold sm:text-base">Customers</div>
        </div>
        <!-- stat - end -->

        <!-- stat - start -->
        <div class="flex flex-col items-center justify-center rounded-lg bg-neutral-100 p-4 lg:p-8">
          <awc-icon
            name="cup-hot-fill"
            class="text-3xl text-primary-400 sm:text-4xl md:text-5xl text-center mb-2 sm:mb-4"
          ></awc-icon>
          <div class="text-4xl font-bold text-primary sm:text-5xl md:text-6xl leading-dense text-center">A couple</div>
          <div class="text-sm sm:text-lg font-semibold sm:text-base">Coffee breaks</div>
        </div>
        <!-- stat - end -->
      </div>
    </div>
  `
};
