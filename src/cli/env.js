const parseEnv = () => {
    const rssEnvVars = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map((envVar) => envVar.join('='));

    if (rssEnvVars.length) {
        const rssEnvVarsString = rssEnvVars.join('; ');
        console.log(rssEnvVarsString);
    }
};

parseEnv();
