// Import global styles in all stories
import "../src/assets/styles/index";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  options: {
    storySort: {
      method: "alphabetical",
    },
  },
};
