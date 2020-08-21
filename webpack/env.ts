export const isDevelopment =
  process.env.WEBPACK_DEV_SERVER === 'true' ||
  process.env.NODE_ENV === 'development';
