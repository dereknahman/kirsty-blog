// TODO: maybe I should use 11ty Fetch instead?

export default async function () {
    const apiUsername = process.env.RAVELRY_USERNAME;
    const apiPassword = process.env.RAVELRY_PASSWORD;
    const user = process.env.RAVELRY_USER;

    // TODO: Add old projects from the old account

    const auth = Buffer.from(`${apiUsername}:${apiPassword}`).toString(
        "base64",
    );

    const response = await fetch(
        `https://api.ravelry.com/projects/${user}/list.json`,
        {
            headers: {
                Authorization: `Basic ${auth}`,
                "User-Agent": "eleventy-blog",
            },
        },
    );

    const json = await response.json();
    return json.projects;
}
