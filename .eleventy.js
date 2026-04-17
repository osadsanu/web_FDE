export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "staticwebapp.config.json": "staticwebapp.config.json" });

  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("isCurrentPath", (currentUrl, targetUrl) => {
    if (!currentUrl || !targetUrl) {
      return false;
    }

    if (targetUrl === "/") {
      return currentUrl === "/";
    }

    return currentUrl.startsWith(targetUrl);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}
