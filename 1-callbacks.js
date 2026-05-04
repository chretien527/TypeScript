function getGitInfo(username, callback){
    setTimeout(() => {
        const userInfo = {
            login: username,
            name: username === 'octocat' ? 'The Octocat' : `${username} User`,
            bio : username === 'octocat' ? 'GitHub\'s mascot' : 'Software developer',
            public_repos: 8
        };
        callback(null, userInfo);
    }, 500);
}

function getRepos(username, callback){
    setTimeout(() => {
        const repos = [
            {name: 'Hello-World', description: 'My first repository' },
            {name: 'octocat', description: 'GitHub mascot project'},
            {name: 'Spoon-Knife', description: 'A test repository'}
        ];
        callback(null,repos);
    }, 500);
}

function getCommits(username, repoName, callback) {
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
                    message: 'Add new features: user authentication',
                    author: {
                        name: username === 'octocat' ? 'The Octocat' : `${username}`,
                        date: '2024-01-25T09:30:00Z'
                    }
                }
            },
        ];

        callback(null, commits);
    }, 500);
}

function demonstrateCallbackHell(username) {
    console.log('\n=== CALLBACK HELL EXAMPLE ===\n');
    console.log('Getting user info, repos, and commits for:', username);
    console.log('Notice the deep nesting and pyramid shape...\n');

    getGitInfo(username,(error, userInfo) => {
        if(error){
            console.error('Error getting user info:', error.message);
            return;
        }

        console.log(` User: ${userInfo.name || userInfo.login}`);
        console.log(` Bio: ${userInfo.bio || 'No bio'}`);
        console.log(`Public Repos: ${userInfo.public_repos}\n`);

        getRepos(username, (error,repos) => {
            if(error){
                console.error('Error getting repos:',error.message);
                return;
            }

            console.log(`Found ${repos.length} repositories`);
            if(repos.length > 0){
                const firstRepo = repos[0];
                console.log(`First repo: ${firstRepo.name}\n`);

                getCommits(username, firstRepo.name, (error,commits) => {
                    if(error){
                        console.error('Error getting commits:',error.message);
                        return;
                    }

                    console.log(`Found ${commits.length} commits in ${firstRepo.name}`);
                    if(commits.length > 0){
                        const firstCommit = commits[0];
                        console.log(`Latest commit: ${firstCommit.commit.message.substring(0,50)}...`);
                        console.log(`Author: ${firstCommit.commit.author.name}`);
                        console.log(` Date:${firstCommit.commit.author.date}`);
                    }

                    console.log("\n=== CALLBACK HELL COMPLETE ===\n");
                });
            } else {
                console.log('No repositories found');
                console.log('\n=== CALLBACK HELL COMPLETE ===\n');
            }
        });
    });
}

if (required.main === module) {
    const username = processFetch.argv[2] || 'octocat';
    demonstrateCallbackHell(username);
}

module.exports = {
    getGitInfo,
    getRepos,
    getCommits,
    demonstrateCallbackHell
};

