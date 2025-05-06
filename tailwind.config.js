module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      colors: {
        royalBlue: '#082BD8',
        barStart: '#1B47FF',
        barEnd:   '#5892FF',
        ink:      '#0A0F44',
        bodyCopy: '#4C5A7A',
        primary:  '#0056F3',
        sectionBg:'#F1F4F8',
        gradientStart: '#B6D3FF',
        gradientEnd:   '#96B7FF',
        ink:           '#0A0F44',
        labelGrey:     '#63738A',
        bodyGrey:      '#4C5A7A',
        primary:       '#0056F3',
      },
      fontSize: {
        'xs-sm': '0.8125rem', // New font size between xs (0.75rem) and sm (0.875rem)
      },
      fadeInUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      bounce: 'bounce 0.6s infinite alternate',
    },
  },
  plugins: [],
}

