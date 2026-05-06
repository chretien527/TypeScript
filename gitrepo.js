function getUserByUsername(username,callback){
    setTimeout(() => {
        callback(null,{id:1,username:username,name:"chretien"})
    })
}

function getRepos(id,callback){
    setTimeout(() => {
        const Repos = [
            {userId:1,RepoId:1,name:"Repo1"},
            {userId:2,RepoId:2,name:"Repo2"},
        ]
        callback(null, Repos)
    })
}

function getCommits(repo, callback){
    setTimeout(() => {
        const commits = [
            {id:1,commitId:1,commit:"commit1",repoId:repo.id},
            {id:2,commitId:2,commit:"commit2",repoId:repo.id},
        ]
        callback(null,commits)
    })
}
getUserByUsername('Chretien',(error,user) => {
    if(error)
        console.log("error occured")
    console.log(user)
    const userId = user.id

    getRepos(userId,(error,repos) => {
        if(error)
            console.log(error)
        console.log(repos)
        const repoId = repos[0]
        getCommits(repoId,(error,commits) => {
            if(error)
                console.log(error)
            console.log(commits)
        })
    })
})

