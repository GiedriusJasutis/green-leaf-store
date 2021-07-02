module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'raleway-font': ['"Raleway"', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'tree-image': "url('/src/images/treebg.jpg')",
        'forest-image': "url('/src/images/forest.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
