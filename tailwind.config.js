export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Ensure it scans the correct files
    ],
    theme: {
      extend: {
        colors: {
            'primary': '#ff49db',
        },
        fontFamily: {
            'sans': ['Helvetica', 'Arial', 'sans-serif'],
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        }
      },
    },
    plugins: [],
  }
  