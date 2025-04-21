module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
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

