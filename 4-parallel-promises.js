function getGitInfo(username){
    return new Promise((resolve) => {
        setTimeout(() => {
            const userInfo = {
                login: username,
                name: username === 'octocat' ? 'The Octocat': `${username} user`,
                bio: username === 'octocat' ? 'GitHub\'s mascot' : 'Software developer',
                public_repos: 8
            };
            resolve(userInfo);
        }, 500);
    });
}

function getRepos(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const repos = [
                { name: 'Hello-World', description: 'My first repository'},
                { name: 'octocat', description: 'GitHub mascot project'},
                { name: 'Spoon-Knife', description: 'A test repository'}
            ];
            resolve(repos);
        }, 500);
    });
}

function getCommits(username, repoName){
    return new Promise((resolve) => {
        setTimeout(() => {
            const commits = [
                {
                    commit: {
                        message:'Initial commit: Add README and basic structure',
                        author: {
                            name: username === 'octocat' ? 'The Octocat' : `${username}`,
                            date: '2024-01-15T10:30:00Z'
                        }
                    }
                },
                {
                    commit: {
                        message:'Update documentation and fix typos',
                        author:{
                            name: username === 'octocat' ? 'The Octocat' : `${username}`,
                            date: '2024-01-20T14:45:00Z'
                    }             
                }
            }
            ];
            resolve(commits);
        }, 500);
    });
}

async function demonstrateSequential(username){
    console.log('\n=== SEQUENTIAL EXECUTION ===\n');
    console.log('Running operations one after another...\n');

    const startTime = Date.now();

    try {
        const userInfo = await getGitInfo(username);
        console.log(`User: ${userInfo.name || userInfo.login} (${Date.now() - startTime}ms)`);

        const repos = await getRepos(username);
        console.log(`Repos: ${repos.length} found (${Date.now() - startTime}ms)`);

        const totalTime = Date.now() - startTime;
        console.log(`\n Total time: ${totalTime}ms (sequential)`);
        console.log('Each operation waited for the previous one to finish.\n');
    } catch(error){
        console.error('Error:',error.message);
    }
}


async function demonstrateParallel(username){
    console.log('\n=== PARALLEL EXECUTION ===\n');
    console.log('Running operations simultaneously...\n');

    const startTime = Date.now();

    try{
        const [userInfo, repos, commits] = await Promise.all([
            getGitInfo(username),
            getRepos(username),
            getCommits(username, 'Hello-World')
        ]);

        const totalTime = Date.now() - startTime;

        console.log(` User: ${userInfo.name || userInfo.login} (${totalTime}ms) `);
        console.log(` Repos: ${repos.length} found (${totalTime}ms)`);
        console.log(` Commits: ${commits.length} found (${totalTime}ms)`);

        console.log(`\n Total time: ${totalTime}ms (parallel)`);
        console.log(' All operations ran simultaneously!\n');
    } catch(error){
        console.error('Error:', error.message);
    }
}

async function demonstrateMixed(username){
    console.log('\n=== MIXED EXECUTION (Sequential + Parallel) ===\n');
    console.log('First get user info, then get repos and commits in parallel...');

    const startTime = Date.now();

    try {
        const userInfo = await getGitInfo(username);
        console.log(`User: ${userInfo.name || userInfo.login} (${Date.now() - startTime}ms)\n`);
        
        const [repos, commits] = await Promise.all([
            getRepos(username),
            getCommits(username, 'Hello-World')
        ]);

        const totalTime = Date.now() - startTime;

        console.log(`Repos: ${repos.length} found (${totalTime}ms)`);
        console.log(`Commits: ${commits.length} found (${totalTime}ms)`);

        console.log(`\n Total time: ${totalTime}ms`);
        console.log( 'User info first, then repos and commits in parallel.\n');
    } catch(error){
        console.error('Error:',error.message);
    }
}

async function demonstrateParallelWithError(){
    console.log('\n=== PARALLEL WITH ERROR HANDLING ===\n');
    
    const failingPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Simulated error'));
        }, 300);
    });

    try{
        await Promise.all([
            getGitInfo('octocat'),
            getRepos('octocat'),
            failingPromise
        ]);
    } catch(error){
        console.log('Promise.all() failed because one promise rejected:');
        console.log(` ${error.message}\n`);
    }

    console.log('Using Promise.allSettled() to handle partial failures:\n');

    const results = await Promise.allSettled([
        getGitInfo('octocat'),
        getRepos('octocat'),
        failingPromise
    ]);

    results.forEach((result, index) => {
        if (result.status === 'fulfilled'){
            console.log(`Promise ${index + 1}: Success`);
        } else {
            console.log(`Promise ${index + 1}: ${result.reason.message}`);
        }
    });
    
    console.log('\n=== PARALLEL WITH ERROR HANDLING COMPLETE ===\n');
}

if(require.main === module) {
    const username = process.argv[2] || 'octocat';

    demonstrateSequential(username)
    .then(() => {
        return demonstrateParallel(username);
    })
    .then(() => {
        return demonstrateMixed(username);
    })
    .then(() => {
        return demonstrateParallelWithError();
    })
    .catch(console.error);
}

module.exports = {
    getGitInfo,
    getRepos,
    getCommits,
    demonstrateSequential,
    demonstrateParallel,
    demonstrateMixed,
    demonstrateParallelWithError
};
