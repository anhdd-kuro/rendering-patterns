import '@/styles/globals.css';
// import Image from 'next/image';

// Image.defaultProps = {
//   unoptimized: true,
// };

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
