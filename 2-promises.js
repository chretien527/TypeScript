function getGitInfo(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userInfo = {
                login: username,
                name: username === 'octocat' ? 'The Octocat' : `${username} User`,
                bio: username === 'octocat' ? 'GitHub\'s mascot' : 'Software developer',
                public_repos: 8
            };
            resolve(userInfo);
        }, 500);
    });
}

function getRepos(username){
    return new Promise((resolve) => {
        setTimeout(() => {
            const repos = [
                {name: 'Hello-World', description: 'My first repository'},
                {name: 'octocat', description:'GitHub mascot project'},
                {name:'Spoon-Knife', description:'A test repository'}
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
                        message: 'Initial commit: Add README and basic structure',
                        author: {
                            name: username === 'octocat' ? 'The Octocat':`{username}`,
                            date: '2024-01-15T10:30:00Z'
                        }
                    }
                },
                {
                    commit: {
                        message: 'update documentation and fix typos',
                        author: {
                            name: username === 'octocat' ? 'The Octocat' : `${username}`,
                            date: '2024-01-20T14:45::00Z'
                        }
                    }
                },
                {
                    commit: {
                        message: 'Add new feature: user authentication',
                        author: {
                            name: username === 'octocat' ? 'The Octocat' : `${username}`,
                            date:'2024-01-25T09:15:00Z'
                        }
                    }
                }
            ];
            resolve(commits);
        }, 500);
    });
}

function demonstratePromises(username){
    console.log('\n=== PROMISES EXAMPLE ===\n');
    console.log('Getting user info, repos, and commits for:',username);
    console.log('Notice the flat structure and chaining...\n');

    getGitInfo(username)
    .then((userInfo) => {
        console.log(`User: ${userInfo.name || userInfo.login }`);
        console.log(`Bio: ${userInfo.bio || 'No bio'}`);
        console.log(` Public Repos: ${userInfo.public_repos}\n`);

        return getRepos(username);
    })
    .then((repos) => {
        console.log(`Found ${repos.length} repositories`);
        if(repos.length > 0){
            const firstRepo = repos[0];
            console.log(`First repo: ${ firstRepo.name}\n`);

            return getCommits(username, firstRepo.name);
        } else {
            throw new Error('No repositories found');
        }
    })
    .then((commits) => {
        console.log(`Found ${commits.length} commits`);
        if(commits.length > 0){
            const firstCommit = commits[0];
            console.log(`Latest commit: ${firstCommit.commit.message.substring(0,50)}...`);
            console.log(`Author: ${firstCommit.commit.author.name}`);
            console.log(`Date: ${firstCommit.commit.authore.date}`);
        }
        console.log('\n=== PROMISES COMPLETE ===\n');
    })
    .catch((error) => {
        console.error('Error:',error.message);
        console.log('\n=== PROMISES COMPLETE ===\n');
    });
}

function demonstrateParallelPromises(username){
    console.log(`\n=== PARALLEL PROMISES EXAMPLE ===\n`);
    console.log('Getting user info and repos in parallel...\n');

    Promise.all([
        getGitInfo(username),
        getRepos(username)
    ])
    .then(([userInfo, repos]) => {
        console.log(`User: ${userInfo.name || userInfo.login}`);
        console.log(`Found ${repos.lenght} repositories`);
        console.log('n\Both operations completed in parallel!');
        console.log('\n=== PARALLEL PROMISES COMPLETE ===\n');
    })
    .catch((error) => {
        console.error('Error:',error.message);
        console.log('\n=== PARALLEL PROMISES COMPLETE ===\n');
    });
}

if(required.main === module){
    const username = processFetch.arve[2] || 'octocat';
    demonstratePromises(username);
}

module.exports = {
    getGitInfo,
    getCommits,
    demonstratePromises,
    getRepos,
    demonstrateParallelPromises
};