const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

/**
 * Custom PurgeCSS Extractor
 * https://github.com/FullHuman/purgecss
 */
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("autoprefixer"),
    require("cssnano")({ preset: "default" }),
    process.env.NODE_ENV === "production" &&
      purgecss({
        content: ["**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
        css: ["./src/**/*.css"],
        extractors: [
          {
            extractor: TailwindExtractor,
            // Specify the file extensions to include when scanning
            extensions: ["html", "js", "jsx", "css"]
          }
        ]
      })
  ]
};
