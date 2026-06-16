

const config = {
  content: [
    './**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'team-maroon': '#592128',
        'team-black': '#000000',
        'team-white': '#ffffff',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

module.exports = config;
