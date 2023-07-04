const parseArgs = () => {
    const args = [];

    process.argv.forEach((prop, index) => {
        if (index > 1 && index % 2 === 0) {
            const argStr = `${prop.slice(2)} is ${process.argv[index + 1]}`;
            args.push(argStr);
        }
    });

    if (args.length) {
        const argsString = args.join(', ');
        console.log(argsString);
    }
};

parseArgs();
