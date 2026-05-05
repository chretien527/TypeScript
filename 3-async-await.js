function getGitInfo(username){
    return new Promise((resolve) => {
        setTimeout(() => {
            const userInfo = {
                login: username,
                name: username === 'octocat' ? 'The octocat' : `${username} User`,
                bio: username === 'octocat' ? 'GitHub\'s mascot' : 'Software developer',
                public_repos: 8
            };
            resolve(userInfo);
        },500);
    });
}

function getRepos(username){
    return new Promise((resolve) => {
        setTimeout(() => {
            const repos = [
                {name : 'Hello-World', description: 'My first repository'},
                {name:'octocat', description:' GitHub mascot project'},
                {name: 'Spoon-Knife', description:'A test repository'}
            ];
            resolve(repos);
        },500);
    });
}

function getCommits(username, repoName){
    return new Promise((resolve) => {
        setTimeout(() => {
            const commits = [
                {
                    commit: {
                        message: 'Initial commit: Add README and basic structure',
                        author: {
                            name: username === 'octocat' ? 'The Octocat' : `${username}`,
                            date: '2024-01-15T10:30:00Z'
                        }
                    }
                },
                {
                    commit: {
                            message: 'Update documentation and fix typos',
                        author: {
                            name: username === 'octocat' ? 'The Octocat' : `${username}`,
                            date: '2024-01-20T14:30:00Z'
                        }
                    }
                },
                {
                    commit: {
                        message: 'Add new feature: user authentication',
                        author: {
                            name: username === 'octocat' ? 'The Octocat' : `${username}`,
                            date: '2024-01-25T09:15:00Z'
                        }
                    }
                }
            ];
            resolve(commits);
        }, 500);
    });
}

async function demonstrateAsyncAwait(username){
    console.log('\n=== ASYNC/AWAIT EXAMPLE ===\n');
    console.log('Getting user info, repos and commits for :', username);
    console.log('Notice how clean and readable this is...\n');
    
    try{
        const userInfo = await getGitInfo(username);
        console.log(`User: ${userInfo.name || userInfo.login}`);
        console.log(`Bio: ${userInfo.bio || 'No bio'}`);
        console.log(`Public Repos: ${userInfo.public_repos}\n`);

        const repos = await getRepos(username);
        console.log(`Found ${repos.length} repositories`);

        if(repos.length > 0){
            const firstRepo = repos[0];
            console.log(`First repo: ${firstRepo.name}\n`);

            const commits = await getCommits(username, firstRepo.name);
            console.log(`Found ${commits.length} commits in ${firstRepo.name}`);

            if(commits.length > 0){
                const firstCommit = commits[0];
                console.log(`Latest commit: ${firstCommit.commit.message.substring(0,50)}...`);
                console.log(`Author: ${firstCommit.commit.author.name}`);
                console.log(`Date: ${firstCommit.commit.author.date}`);
            }
        } else {
            console.log('No repositories found');
        }
        
        console.log('\n=== ASYNC/AWAIT COMPLETE ===\n');
    } catch(error){
        console.error('Error:',error.message);
        console.log('\n=== ASYNC/AWAIT COMPLETE ===\n');
    }
}

async function demonstrateParallelAsyncAwait(username){
    console.log('\n=== PARALLEL ASYNC/AWAIT EXAMPLE ===\n');
    console.log('Getting user info and repos in parallel...\n');

    try{
        const [userInfo, repos] = await Promise.all([
            getGitInfo(username),
            getRepos(username)
        ]);

        console.log(`User: ${userInfo.name || userInfo.login}`);
        console.log(`Found ${repos.length} repositories`);
        console.log('\nBoth operations completed in parallel!');
        console.log(`\n=== PARALLEL ASYNC/AWAIT COMPLETE ===\n`);
    } catch(error){
        console.error('Error:', error.message);
        console.log('\n=== PARALLEL ASYNC/AWAIT COMPLETE ===\n');
    }
}

async function demonstrateAsyncLoops(username){
    console.log('\n=== ASYNC/AWAIT WITH LOOPS EXAMPLE ===\n');
    console.log('Getting info for multiple repos...\n');

    try {
        const userInfo = await getGitInfo(username);
        console.log(`User: ${userInfo.name} || userInfo.login\n`);

        const repos = await getRepos(username);
        console.log(`Found  ${repos.length} repositories \n`);

        for(let i = 0; i < Math.min(3, repos.length); i++){
            const repo = repos[i];
            const commits = await getCommits(username, repo.name);
            console.log(` ${repo.name}: ${commits.length} commits`);
        }

        console.log('\n=== ASYNC/AWAIT WITH LOOPS COMPLETE ===\n');
    }catch(error){
        console.error('Error:',error.message);
        console.log('\n=== ASYNC/AWAIT WITH LOOPS COMPLETE ===\n');
    }
}


if (require.main === module) {
    const username = process.argv[2] || 'octocat';
    demonstrateAsyncAwait(username)
        .then(() => demonstrateParallelAsyncAwait(username));
}

module.exports = {
    getGitInfo,
    getRepos,
    getCommits,
    demonstrateAsyncAwait,
    demonstrateParallelAsyncAwait,
    demonstrateAsyncLoops
};
