module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F61',
        secondary: '#FF9A8B',
        backgroundLight: '#f7f7f7',
        textPrimary: '#333333',
        textSecondary: '#555555',
        gray50: '#CBCBCB',
        gray100: '#EBEBEB',
        gray150: '#EBEBEB',
        gray200: '#474B57',
        gray450: '#5C5F6A',
        gray500: '#5C5F6A',
        blue800: '#1D2231',
        blue900: '#0E1422',
        blue950: '#0E1422',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
