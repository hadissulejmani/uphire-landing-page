/* module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

 */
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import tailwindConfig from "./src/css/tailwind.config.js";

export default module.exports = {
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
