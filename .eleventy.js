export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "staticwebapp.config.json": "staticwebapp.config.json" });

  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("readableDateEs", (value) => {
    if (!value) {
      return "";
    }

    return new Intl.DateTimeFormat("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    }).format(new Date(value));
  });
  eleventyConfig.addFilter("isoDate", (value) => {
    if (!value) {
      return "";
    }

    return new Date(value).toISOString().slice(0, 10);
  });
  eleventyConfig.addFilter("isCurrentPath", (currentUrl, targetUrl) => {
    if (!currentUrl || !targetUrl) {
      return false;
    }

    if (targetUrl === "/") {
      return currentUrl === "/";
    }

    return currentUrl.startsWith(targetUrl);
  });
  eleventyConfig.addCollection("blogPosts", (collectionApi) =>
    collectionApi
      .getFilteredByTag("blog")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  );

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
