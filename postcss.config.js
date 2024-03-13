import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss('./tailwind.config.js'), // Path to your Tailwind config file
    autoprefixer,
  ],
};
