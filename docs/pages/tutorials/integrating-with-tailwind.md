---
meta:
  title: Integrating with Laravel
  description: This page explains how to integrate Adeliom WebComponents with a Laravel app.
---

# Integrating with Tailwind

This page explains how to integrate Adeliom WebComponents with a [Tailwind](https://tailwindcss.com/).

## Requirements

This integration has been tested with the following:

- Tailwind >= 3.0

## Instructions

### Install the Adeliom WebComponents package

```bash
npm install @agence-adeliom/awc
```

### Import the Default Theme

Import the Adeliom WebComponents default theme (stylesheet) in your app:

```css
@import '@agence-adeliom/awc/dist/themes/light.css';
```

### Setup AWC Tailwind Preset

In your Tailwind config setup a [preset](https://tailwindcss.com/docs/presets)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@agence-adeliom/awc/dist/tailwind/preset.js')],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  plugins: []
};
```

Have fun using Adeliom WebComponents tokens with Tailwind!