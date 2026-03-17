import "dotenv/config";

export default function (eleventyConfig) {
    // pass files from these directories to _site
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/images");

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data",
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    };
}
