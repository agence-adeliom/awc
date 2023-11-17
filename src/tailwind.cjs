module.exports = {
    darkMode: ['class', '.awc-theme-dark'],
    theme: {
        // Generated from https://jsfiddle.net/qur6m2yf/1/
        extend: {
            colors: {
                neutral: {
                    0: 'var(--awc-color-neutral-0)',
                    50: 'var(--awc-color-neutral-50)',
                    100: 'var(--awc-color-neutral-100)',
                    200: 'var(--awc-color-neutral-200)',
                    300: 'var(--awc-color-neutral-300)',
                    400: 'var(--awc-color-neutral-400)',
                    500: 'var(--awc-color-neutral-500)',
                    600: 'var(--awc-color-neutral-600)',
                    700: 'var(--awc-color-neutral-700)',
                    800: 'var(--awc-color-neutral-800)',
                    900: 'var(--awc-color-neutral-900)',
                    950: 'var(--awc-color-neutral-950)',
                    1000: 'var(--awc-color-neutral-1000)'
                },
                primary: {
                    50: 'var(--awc-color-primary-50)',
                    200: 'var(--awc-color-primary-200)',
                    400: 'var(--awc-color-primary-400)',
                    600: 'var(--awc-color-primary-600)',
                    800: 'var(--awc-color-primary-800)',
                    950: 'var(--awc-color-primary-950)',
                    DEFAULT: 'var(--awc-color-primary-600)'
                },
                secondary: {
                    50: 'var(--awc-color-secondary-50)',
                    200: 'var(--awc-color-secondary-200)',
                    400: 'var(--awc-color-secondary-400)',
                    600: 'var(--awc-color-secondary-600)',
                    800: 'var(--awc-color-secondary-800)',
                    950: 'var(--awc-color-secondary-950)',
                    DEFAULT: 'var(--awc-color-secondary-600)'
                },
                tertiary: {
                    50: 'var(--awc-color-tertiary-50)',
                    200: 'var(--awc-color-tertiary-200)',
                    400: 'var(--awc-color-tertiary-400)',
                    600: 'var(--awc-color-tertiary-600)',
                    800: 'var(--awc-color-tertiary-800)',
                    950: 'var(--awc-color-tertiary-950)',
                    DEFAULT: 'var(--awc-color-tertiary-600)'
                },
                success: {
                    50: 'var(--awc-color-success-50)',
                    200: 'var(--awc-color-success-200)',
                    400: 'var(--awc-color-success-400)',
                    600: 'var(--awc-color-success-600)',
                    800: 'var(--awc-color-success-800)',
                    950: 'var(--awc-color-success-950)',
                    DEFAULT: 'var(--awc-color-success-600)'
                },
                warning: {
                    50: 'var(--awc-color-warning-50)',
                    200: 'var(--awc-color-warning-200)',
                    400: 'var(--awc-color-warning-400)',
                    600: 'var(--awc-color-warning-600)',
                    800: 'var(--awc-color-warning-800)',
                    950: 'var(--awc-color-warning-950)',
                    DEFAULT: 'var(--awc-color-warning-600)'
                },
                danger: {
                    50: 'var(--awc-color-danger-50)',
                    200: 'var(--awc-color-danger-200)',
                    400: 'var(--awc-color-danger-400)',
                    600: 'var(--awc-color-danger-600)',
                    800: 'var(--awc-color-danger-800)',
                    950: 'var(--awc-color-danger-950)',
                    DEFAULT: 'var(--awc-color-danger-600)'
                },
                gray: {
                    50: 'var(--awc-color-gray-50)',
                    100: 'var(--awc-color-gray-100)',
                    200: 'var(--awc-color-gray-200)',
                    300: 'var(--awc-color-gray-300)',
                    400: 'var(--awc-color-gray-400)',
                    500: 'var(--awc-color-gray-500)',
                    600: 'var(--awc-color-gray-600)',
                    700: 'var(--awc-color-gray-700)',
                    800: 'var(--awc-color-gray-800)',
                    900: 'var(--awc-color-gray-900)',
                    950: 'var(--awc-color-gray-950)'
                },
                white: {
                    light: 'var(--awc-color-neutral-0)',
                    dark: 'var(--awc-color-neutral-1000)',
                    DEFAULT: 'var(--awc-color-neutral-0)'
                },
                black: {
                    light: 'var(--awc-color-neutral-1000)',
                    dark: 'var(--awc-color-neutral-0)',
                    DEFAULT: 'var(--awc-color-neutral-1000)'
                },
                title: 'var(--awc-text-title-color)',
                paragraph: 'var(--awc-text-paragraph-color)'
            },
            spacing: {
                '3x-small': 'var(--awc-spacing-3x-small)',
                '2x-small': 'var(--awc-spacing-2x-small)',
                'x-small': 'var(--awc-spacing-x-small)',
                small: 'var(--awc-spacing-small)',
                medium: 'var(--awc-spacing-medium)',
                large: 'var(--awc-spacing-large)',
                'x-large': 'var(--awc-spacing-x-large)',
                '2x-large': 'var(--awc-spacing-2x-large)',
                '3x-large': 'var(--awc-spacing-3x-large)',
                '4x-large': 'var(--awc-spacing-4x-large)',
                '5x-large': 'var(--awc-spacing-5x-large)',
                '6x-large': 'var(--awc-spacing-6x-large)',
                '7x-large': 'var(--awc-spacing-7x-large)'
            },
            boxShadow: {
                'x-small': 'var(--awc-shadow-x-small)',
                small: 'var(--awc-shadow-small)',
                medium: 'var(--awc-shadow-medium)',
                large: 'var(--awc-shadow-large)',
                'x-large': 'var(--awc-shadow-x-large)'
            },
            borderRadius: {
                small: 'var(--awc-border-radius-small)',
                medium: 'var(--awc-border-radius-medium)',
                large: 'var(--awc-border-radius-large)',
                'x-large': 'var(--awc-border-radius-x-large)',
                circle: 'var(--awc-border-radius-circle)',
                pill: 'var(--awc-border-radius-pill)'
            },
            transitionDuration: {
                'x-slow': 'var(--awc-transition-x-slow)',
                slow: 'var(--awc-transition-slow)',
                medium: 'var(--awc-transition-medium)',
                fast: 'var(--awc-transition-fast)',
                'x-fast': 'var(--awc-transition-x-fast)'
            },
            zIndex: {
                drawer: 'var(--awc-z-index-drawer)',
                dialog: 'var(--awc-z-index-dialog)',
                dropdown: 'var(--awc-z-index-dropdown)',
                'alert-group': 'var(--awc-z-index-alert-group)',
                tooltip: 'var(--awc-z-index-tooltip)'
            }
        },
        lineHeight: {
            looser: 'var(--awc-line-height-looser)',
            loose: 'var(--awc-line-height-loose)',
            normal: 'var(--awc-line-height-normal)',
            dense: 'var(--awc-line-height-dense)'
        },
        fontFamily: {
            sans: 'var(--awc-font-sans)',
            serif: 'var(--awc-font-serif)',
            mono: 'var(--awc-font-mono)'
        },
        fontSize: {
            '2x-small': 'var(--awc-font-size-2x-small)',
            'x-small': 'var(--awc-font-size-x-small)',
            small: 'var(--awc-font-size-small)',
            medium: 'var(--awc-font-size-medium)',
            large: 'var(--awc-font-size-large)',
            'x-large': 'var(--awc-font-size-x-large)',
            '2x-large': 'var(--awc-font-size-2x-large)',
            '3x-large': 'var(--awc-font-size-3x-large)',
            '4x-large': 'var(--awc-font-size-4x-large)',
            '5x-large': 'var(--awc-font-size-5x-large)',
            '6x-large': 'var(--awc-font-size-6x-large)',
            '7x-large': 'var(--awc-font-size-7x-large)',
            '8x-large': 'var(--awc-font-size-8x-large)',
            '9x-large': 'var(--awc-font-size-9x-large)',
            '10x-large': 'var(--awc-font-size-10x-large)',
            '2xs': 'var(--awc-font-size-2x-small)',
            xs: 'var(--awc-font-size-x-small)',
            sm: 'var(--awc-font-size-small)',
            md: 'var(--awc-font-size-medium)',
            base: 'var(--awc-font-size-medium)',
            lg: 'var(--awc-font-size-large)',
            xl: 'var(--awc-font-size-x-large)',
            '2xl': 'var(--awc-font-size-2x-large)',
            '3xl': 'var(--awc-font-size-3x-large)',
            '4xl': 'var(--awc-font-size-4x-large)',
            '5xl': 'var(--awc-font-size-5x-large)',
            '6xl': 'var(--awc-font-size-6x-large)',
            '7xl': 'var(--awc-font-size-7x-large)',
            '8xl': 'var(--awc-font-size-8x-large)',
            '9xl': 'var(--awc-font-size-9x-large)',
            '10xl': 'var(--awc-font-size-10x-large)'
        }
    }
};