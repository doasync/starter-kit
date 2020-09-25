// Support imports
declare module '*.jpg' {
  const url: string;
  // noinspection all
  export default url;
}
declare module '*.png' {
  const url: string;
  // noinspection all
  export default url;
}
declare module '*.gif' {
  const url: string;
  // noinspection all
  export default url;
}
declare module '*.woff2' {
  const url: string;
  // noinspection all
  export default url;
}
declare module '*.svg' {
  import { ComponentType } from 'react';

  const Component: ComponentType<Record<string, unknown>>;
  // noinspection all
  export default Component;
}
declare module '*.css';
