import{_ as i,c as a,a as o,b as e,o as r}from"./app-CSbjnKiP.js";const n={};function s(l,t){return r(),a("div",null,t[0]||(t[0]=[o('<p>As you study this section, answer the following questions:</p><ul><li>Why would you want to use Git?</li><li>What is a Git repository?</li><li>What types of Git repositories exist? What are their functions?</li></ul><p>In this section, you will learn to:</p><ul><li>Install Git</li><li>Create and use a Git repository</li></ul><p>Key terms for this section include the following:</p><table class="terms"><thead><tr><th>Term</th><th>Definition</th></tr></thead><tbody><tr><td>Git</td><td> A distributed version-control system for tracking changes in source code during software development. GIT is most often used for coordinating work among programmers, but it can be used to track changes in any set of files. </td></tr><tr><td>Repository</td><td> A file location where the files related to your project are stored. Every Git directory on every computer is a full-fledged repository with complete history and full version-tracking abilities, independent of network access or a central server. </td></tr></tbody></table><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th>Exam</th><th>Objective</th></tr></thead><tbody><tr><td>CompTIA Linux+ XK0-005</td><td> 3.3 Given a scenario, perform basic version control using Git. <br><ul><li>clone</li><li>push</li><li>pull</li><li>commit</li><li>add</li><li>checkout</li><li>branch</li><li>tag</li><li>gitignore</li></ul><p>3.4 Summarize common infrastructure as code technologies</p><ul><li> Advanced Git topics <ul><li>merge</li><li>rebase</li><li>Pull requests</li></ul></li></ul></td></tr></tbody></table><h2 id="_14-4-1-git-concepts" tabindex="-1"><a class="header-anchor" href="#_14-4-1-git-concepts"><span>14.4.1 Git Concepts</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Git Concepts 00:00-00:36 Today, professionals collaborate on larger projects than ever before, projects that involve hundreds of team members and thousands of files. This situation can be a recipe for disaster. We experience this challenge here at TestOut as we create our courses.</p><p>One way to collaborate more efficiently is to use a distributed version control system such as the Linux program Git. Version control systems track changes to files and help keep all users&#39; files up to date. When many people work on the same files, this helps avoid problems like saving over one anothers&#39; important work and collisions from two people editing a file at once.</p><p>Git Components 00:36-01:57 Git is comprised of four separate storage locations: your workspace,</p><p>the local index, the local repository, and the remote repository.</p><p>The remote Git repository is a copy of your project&#39;s files stored on a remote server. This repository is important for projects that have multiple collaborators. It gives you a central place to store your team members&#39; work. It&#39;s also the only part of Git that&#39;s outside your computer.</p><p>You can create a remote repository on your own Git server, or you can use one of the many Git repositories online. Widely used services include GitHub, GitLab, and Bitbucket.</p><p>The local Git repository is a copy of the remote repository that&#39;s stored on your computer. This is where you make all your additions, changes, and deletions. When you&#39;re ready, you can push all your local changes to the remote repository.</p><p>This local Git repository is a huge advantage. You can make changes to your local repository when you don&#39;t have access to the internet, and then you can apply those changes to the remote repository later, when you&#39;re connected.</p><p>The index is, technically, part of the local repository. The index stores the list of files and tracks changes to the files.</p><p>And finally, we have the development workspace. This is the folder on your computer where you do your work. This is where you add new files to your project, modify files, and remove files. After you make changes to your workspace, you can tell Git to update all the repositories to reflect your changes.</p><p>Clone and Pull 01:57-03:17 To begin working on a project, you will need to create a repository. One way to do this is to use the git init command. The git init command is only used once for the initial setup. You&#39;ll typically run it in the folder where your existing project file are located. It will create a new .git sub-directory in your current working directory and a new master branch for your project (we&#39;ll discuss branches more in a moment). Git init can also be used to create a new remote repository.</p><p>While you can use git init to create a new repository, most projects will already have a remote Git repository that contains the project files. In this case, the command you&#39;ll use is git clone. This command will make a copy of the project repository on your computer. Git clone will create the local working directory, add a .git sub-directory to create the local repository, and then put a copy of all the project&#39;s files on your computer.</p><p>Once you&#39;ve cloned the repository, it&#39;s a good idea to frequently update your local repository from the remote repository. This keeps you working from the latest version of the files in your project and prevents conflicts with your team members.</p><p>You can use the git pull command to update the local repository and your development workspace.</p><p>You can update just the local repository using the git fetch command.</p><p>The git config command is also helpful for setting Git configuration values in configuration files.</p><p>Stage Files 03:17-04:12 As you do your work on the files in your workspace, you need to keep Git informed. There are many commands that let you communicate with Git.</p><p>git add - tells the index to add a file to the next commit for you. This is sometimes called staging the file.</p><p>git mv - moves files just like the mv command, but the git mv command also notifies the index of the change.</p><p>git rm - creates a file or directory delete request in the index. The requested file or directory will be removed from your filesystem and the local Git repository at the next commit.</p><p>The git status command allows you to see which files have changed in your working directory that haven&#39;t been added to the local index.</p><p>If needed, your Git repository can be configured to ignore certain files or directories. This will prevent Git from tracking or saving changes to them. These ignored files are specified in a special file named .gitignore that&#39;s located at the root of your repository.</p><p>Commit and Push 04:12-05:08 After you edit your project files, you&#39;ll want to save your changes to the repository. This is called committing your changes.</p><p>To commit, you&#39;ll use the git commit command. When you do, changes that you&#39;ve indexed will be saved to the local Git repository. This includes any files that you&#39;ve requested be copied, removed, moved, or added.</p><p>The next step is to send your commits to the remote git repository using git push. This allows the rest of your team to have access to your work.</p><p>However, before you do, you should use the git pull command to pull, or download, any changes from the remote repository. This will try to get the latest changes and put them in your local Git repository.</p><p>If there are no conflicts with the changes you&#39;ve been making on your local repository, then you can push your changes out to the remote server.</p><p>If there are conflicts, then you have the option to merge the changes from the remote repository.</p><p>The git log command displays a list of all of your commits so you can review the project history and search for specific changes.</p><p>Revert to a Previous Commit 05:08-06:11 One of the great benefits of using a version control system is that you can go back to previous versions of your work. This is possible because each commit is tracked in your local Git repository and the remote Git repository. This gives you access to any version of your work along the way. If a mistake is made or the project is messed up so badly it&#39;s just easier to revert to a previous version, you can reset or roll back to any of your previous commits.</p><p>Another great benefit of Git is branching. When you want to add a new feature or experiment with something new in your project, you can use git branch to create a new branch for that change. Working in the separate branch makes it harder for you to break the main project with an unstable change. You can later discard the branch, or you can use git merge to merge the changes you made in that branch back into the main project.</p><p>You can work from multiple remote Git repositories for different projects or for different pieces of a project.</p><p>So, you can see how Git allows true multi-user, multi-project collaboration by allowing each user&#39;s workstation its own Git repository that works in conjunction with the remote repository.</p><p>Summary 06:11-06:36 That&#39;s it for this lesson.</p><p>In this lesson, we introduced the distributed version control system called Git.</p><p>We described how to work within Git by cloning, pulling, staging, committing, and pushing files.</p><p>We also discussed the great advantages that Git provides by allowing you to roll back to a previous version, create branches for experimental work, and collaborate with others on multiple projects.</p><h2 id="_14-4-2-installing-git" tabindex="-1"><a class="header-anchor" href="#_14-4-2-installing-git"><span>14.4.2 Installing Git</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Install git 00:00-00:16 In this demo we&#39;ll explore using Git, which is a distributed version control system that allows multiple users to collaborate on projects, such as a software project that requires many engineers to work together on the same code.</p><p>sudo zypper 00:16-01:15 For this demo, I am using OpenSUSE, so OpenSUSE uses YaST, so, to install Git, we&#39;ll need to use sudo&#39;, and then zypper&#39; and install git&#39;.</p><p>We&#39;ll need to enter the root password. And then installation will begin to retrieve the repositories in the information that it needs.</p><p>Now, note that long with git there be 26 packages installed. There is git&#39; and git-core&#39; and all of the dependencies that they depend upon. In addition, you&#39;ll see that there&#39;s eight recommended packages being installed, and some other packages are available, but not installed, if you want to use some of the git advanced features.</p><p>We&#39;ll go ahead and hit y&#39; here to continue to install all of these.</p><p>And now the installation is complete.</p><p>We&#39;ll go ahead and clear the screen so that we can see a little better at the top.</p><p>Create or Initialize a git Repository 01:15-02:59 On my local machine I need a place to keep my project files, so I&#39;m going to go ahead and make a directory called projects where I can keep my project files that I&#39;ll be working on. And then I&#39;m going to change into that directory.</p><p>In that directory, the first thing we&#39;ll do is explore the git init command. git init creates an empty git repository or it can also reinitialize an existing one.</p><p>To see how this works, let&#39;s create a folder in here called my_local_repo&#39;. And we&#39;ll change into that directory also.</p><p>Let&#39;s go ahead and run an ls -a&#39; to verify that that folder is actually empty. Now let&#39;s go ahead and create a couple of files in the folder. We&#39;ll create a file called localfile1. And we&#39;ll create another file called localfile2.</p><p>Now let&#39;s verify the creation of those files with an ls again ls -a&#39;, and you can see that the two files that we created are there in our local repo folder.</p><p>Now suppose we want to convert this my_local_repo&#39; folder into a local git repository so that we can begin diversion controller files.</p><p>This is done with the git init command. By running git init&#39; in this folder, it will take this exact folder and turn it into a local git repo. It&#39;s done that now.</p><p>And now we can do once again and ls -a&#39; and you&#39;ll see that there&#39;s a new folder in this directory called git. This git folder is what makes the folder a git repository.</p><p>It&#39;s where the index and the local repo information are stored.</p><p>View git Repository 02:59-03:19 We can also view the configuration information of the repository using a command called git config -l&#39;. This git config -l command shows that the basics of the repository are created but there isn&#39;t a lot of additional information that you would see if it was a remote repository.</p><p>Remote git Repositories 03:19-03:36 You can also use git init with the --bare&#39; option, that&#39;s b-a-r-e, to create a remote repository. The remote repository is bare because it doesn&#39;t need a working directory.</p><p>A remote repository is required if you&#39;re going to collaborate with others on a project.</p><p>Add Files to the Repository 03:36-04:12 With the local repository, we can add files to the index. With git status&#39;, we can see that the two files we created have not yet been added to the index. So, let&#39;s go ahead and add those. git add localfile1&#39;. And we&#39;ll also go ahead and add localfile2&#39;.</p><p>At this point, if we run git status&#39; again, you&#39;ll see that the files are now green, they been added to the index so there&#39;re staged and ready to be committed.</p><p>Commit Files 04:12-05:04 Let&#39;s go ahead and run git commit&#39; and git commit we&#39;ll add those files to our local repository.</p><p>When you run git commit it opens up a VI window that gives you the chance to put a message that you want to add to the commit. So, we&#39;ll add a message here, &quot;Adding our first files&quot;, and then you can hit escape, a colon, and a wq&#39; to write and quit.</p><p>That finishes the commit and if we do a git status&#39; again, it tells us that on this branch master there&#39;s nothing to commit. Our working tree is clean.</p><p>We&#39;ll also note that the git commit command suggested that maybe we would want to configure an email address and some additional information for the commit, that may give us some better information for the repo.</p><p>Summary 05:04-05:17 That&#39;s it for this demo.</p><p>In this demo, we installed git.</p><p>We configured a local repository and committed the first files to the project.</p><h2 id="_14-4-3-using-a-git-repository" tabindex="-1"><a class="header-anchor" href="#_14-4-3-using-a-git-repository"><span>14.4.3 Using a Git Repository</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Using a Git Repository 00:00-00:32 In this demo we&#39;ll continue to explore using git.</p><p>For this demo, I&#39;ve created a remote repository on Bitbucket. You can see that the repository contains six files. One is the README.md file. One is a special file named .gitignore, and this .gitignore file contains the names of files that we want git to ignore when it&#39;s doing our source control.</p><p>And there four other working files that we created, file1, file2, file3, file4.</p><p>If we click Clone&#39;, up here in the corner, you can see that it will provide us the path to this repository that&#39;s on Bitbucket, that we can use to clone the repository down to our local machine.</p><p>Clone a Repository 00:32-02:24 So, I&#39;ll go ahead and close that.</p><p>Now that I&#39;ve switched back to my Linux machine, I&#39;m currently in my projects folder. So, if I run git clone&#39; from here, it will actually clone the repo that I created to this location, into the projects folder.</p><p>The clone command tells it which project on Bitbucket it took the pull from at Bitbucket.org, and then the name of the repo that we want to clone is the my_git_repo.git&#39;.</p><p>We need to enter the root password. And now that we&#39;ve entered the root password the project has been cloned down.</p><p>If we do an ls command here, you can see that there&#39;s my_git_repo and my_local_repo, that we created in the last demo. If we CD into my_git_repo and we do an ls -a&#39; there, you can see that the files that we saw on the git repo are there, the files 1, 2, 3, 4. The .gitignore, and the README.md file are there. And in addition to that the .git folder which has all of the configuration for the repository is here also. They&#39;ve all been created when we did the clone. We didn&#39;t have to do a separate git init.</p><p>I&#39;m going to CD into the .git folder and if we do an ls -a&#39; there, we see that the files we saw on the remote app have been cloned into our working directory we did that.</p><p>gitignore 02:24-03:00 If we use ls -a we can see the hidden .gitfolder and the hidden .gitignore file also. If we change into the git folder we see that there are several files and directories that make up the index and the local repo. Now let&#39;s go back to the main folder and look at the .gitignore file.</p><p>I&#39;m going to do a cat on the .gitignore file, and you&#39;ll see that the only thing that in that file is *.txt, which means that any file, which is a .txt extension on it will be ignored by git when we try to do an add or a commit.</p><p>Configure the Local Repo 03:00-04:41 Next, we&#39;ll want to configure some settings for the local repo. If you add a username and email address, these are added to your commit so that others can see who committed the files. We&#39;ll say it&#39;s user Bob. We can also do a user email and we&#39;ll call that bob@testout.com.</p><p>One other thing that is a handy configuration to make, is to configure your preferred editor. So, we&#39;ll go ahead and call this the core.editor, and we want our core editor to be nano. It&#39;s a little easier to use than VI, so I want to use nano.</p><p>Okay, now that we&#39;ve made those settings, we want to see what settings are set up for this local repo we can use the git config -l&#39; command. And you can see the information that we added, the username is Bob, the email for Bob@TestOut.com, the editor for the nano&#39;s. So, a lot of the settings that we we saw in the local repo are here. And also it&#39;s interesting to note here that the path to the repo on the remote server is here and the information that we need to be able to push our files up to the remote repository. Note that the information about the remote repository was added to the configuration automatically, right here, when the repo was cloned.</p><p>Now that we have our repo cloned and</p><p>configured, let&#39;s do some work.</p><p>Using git 04:41-06:11 I&#39;m going to go ahead and clear the screen again. Before doing any work, it&#39;s always a good practice to do a git pull to make sure that your local repository has the latest version of the files from all of your coworkers on the projects. So, we&#39;ll do a git pull&#39; and enter the password, our Bitbucket password, and it tells us that we&#39;re already up to date&#39;.</p><p>So, let&#39;s take a look at the folder again. We see our file 1, 2, 3, 4 and our README.md that was there, the .gitignore file is hidden.</p><p>Let&#39;s do some work and we&#39;ll create some new files, newfile1 2, newfile3. And let&#39;s create one called settings.txt, so that I can show you what the .gitignore file does.</p><p>Now, if we do a git status&#39; at this point, you should see that the newfiles&#39; that we added are showing as needed to be added to the index but notice it doesn&#39;t tell you anything about settings.txt because that file is being ignored.</p><p>So, we can go ahead and add these files. We&#39;ll do a git add&#39;, and we&#39;ll tell it to add all of them at once, and it does warn us that this file called settings.txt is being ignored and not being seen.</p><p>So, we went ahead and added those, and if we do the git status&#39; again you&#39;ll see that the files are now green, they&#39;ve been added to the index, and they&#39;re ready to be committed.</p><p>git mv and git rm 06:11-06:44 Just to show you some of the other commands we can also do git mv&#39; and we can change the name of a file if we want, we can call file1, we&#39;ll call it file5.</p><p>We can also remove some files if we want, with git rm&#39; and we&#39;ll go ahead and remove file3. If we do git status&#39; again, you&#39;ll see that the rename files and the move files are also showing in the index as things that need to be added to the commit.</p><p>git commit 06:44-07:10 So, with all of our file changes added to the index we can commit the changes to our local repo and to do that we just do our git commit&#39;. Once again, it opens us up. But this time it opens up a nano, so we&#39;ll give it a commit message of &quot;Adding our new files&quot;, and then we do a Ctrl + o to save that, and Ctrl + x to exit.</p><p>And then it tells us that the commit is completed.</p><p>git push 07:10-08:01 With the changes now in the local repo, we can use git push&#39; to push the changes up to the remote git repository on Bitbucket.</p><p>To do that, we just do a simple git push&#39;, add our password, and the push is made.</p><p>Now I&#39;m going to change back to my Bitbucket page, and I&#39;ll do a refresh on Bitbucket, and all of those changes that we made to the files file2, file4, file5, file3 is gone, newfile 1, 2, 3 are reflected now in our remote repository.</p><p>So, the changes that we made to our working directory, and then we added them to the index, committed to the local repository, and then we pushed them to the remote repository, those changes are all now reflected in the remote repository.</p><p>Branching 08:01-10:38 All right, there&#39;s one other great feature of git, and that&#39;s the ability to create branch I&#39;m going to go ahead and clear the screen again, so can get back to the top a branch allows you to experiment with changes without having to add them to the main repo files until you&#39;re ready to do so. So, you can create all sorts of experimental things, play with them, test them, and they don&#39;t affect the main repository until you decide to do so.</p><p>I&#39;m going to create a branch called test and we&#39;ll need to switch to that branch. The command to do that is checkout test&#39;. So, we&#39;ll switch that branch.</p><p>We can do an ls here and you&#39;ll see because we branched, all of the files that were in the main branch are still in this branch tests but anything that we add is not going to go into the master branch here.</p><p>So, let&#39;s go ahead and add a few files just so that we can see how this happens. I&#39;m going to create a file called branch1 and a file called branch2. You can see that we&#39;ve added those files. We&#39;ll do a git status&#39;, which tells us that we have two files that need to be committed, so we&#39;ll go ahead and add those files and commit them. And it warns us, once again, that we got a file with a .txt extension that&#39;s being ignored.</p><p>And then let&#39;s go ahead and do the git commit&#39;.</p><p>Once again, &quot;Adding branch files&quot;. I&#39;ll do Ctrl + o, Ctrl + x, and it went ahead and committed those to the local repo.</p><p>Now let&#39;s switch back to the master branch, we&#39;re going to go ahead and check out the master branch, git checkout master&#39;.</p><p>I&#39;m going to go ahead and clear the screen so we can get to the top again.</p><p>If we do an ls on the repository now, you&#39;ll see that the branch files that we had added are no longer there. That&#39;s because there in the branch, so let&#39;s suppose that we decide the files we created in the branch are worthy of the project and that we want to have them into the master branch.</p><p>So, to do that we can merge them using git merge&#39; so the git merged&#39; command is used to bring those files that we had in the test branch back into the master branch.</p><p>Let&#39;s go ahead and run that. It tells us that we brought in two files branch1 and branch2 and, if we do an ls now on the repo, you&#39;ll see that the branch1 and the branch2 files are showing up in the repo.</p><p>git log 10:38-11:08 One final command that may come in handy if you need to restore a commit is the git log&#39; command.</p><p>We&#39;ll run the git log&#39; command.</p><p>Here, you see all of the various commit&#39;s that have been made to the project.</p><p>Now this is also a VI file, and so if you want to get out of this, you need to scroll down a little, scroll down to the end of the file, ESC, and then once again, colon q, and it gets you out.</p><p>That&#39;s it for this demo.</p><p>Summary 11:08-11:28 In this demo we showed you how to clone and a configure repository. We added, moved, and remove files to the staging index. We committed and pushed changes. And we branched the repository and then merged the branch back into the master branch.</p><h2 id="_14-4-4-version-control-using-git-facts" tabindex="-1"><a class="header-anchor" href="#_14-4-4-version-control-using-git-facts"><span>14.4.4 Version Control Using Git Facts</span></a></h2><p>Effective and efficient collaboration on projects, large or small, requires a great deal of coordination and version management. Git is a version control system that tracks changes to files and helps keep all user files up to date. Git helps to avoid problems like saving over one another&#39;s important work and collisions from two people editing a file at once.</p><p>This lesson covers the following topics:</p><ul><li>Git storage locations</li><li>Set up a project</li><li>Manage the repository</li><li>Commit and push</li></ul><h3 id="git-storage-locations" tabindex="-1"><a class="header-anchor" href="#git-storage-locations"><span>Git Storage Locations</span></a></h3><p>Git allows true multi-user, multi-project collaboration by allowing each user’s workstation its own Git repository that works in conjunction with the remote repository. You can also work from multiple remote Git repositories for different projects or for different pieces of a project.</p><p>The following table describes the four separate Git storage locations.</p><table><thead><tr><th>Location</th><th>Description</th></tr></thead><tbody><tr><td>Remote repository</td><td> The remote Git repository is a copy of your project’s files stored on a remote server. <ul><li> This repository is important for projects that have multiple collaborators. </li><li> It gives you a central place to store your team members’ work. </li><li> You can create a remote repository on your own Git server, or you can use one of the many Git repositories online. </li></ul></td></tr><tr><td>Local Repository</td><td> The local Git repository is a copy of the remote repository that’s stored on your computer. The local repository: <ul><li>Stores all additions, changes, and deletions.</li><li> Allows you to push all your local changes to the remote repository at the appropriate time. </li><li> Allows you to make changes offline and apply changes when you’re connected to the internet. </li></ul></td></tr><tr><td>Index</td><td> The index is part of the local repository. The index stores the list of files and tracks changes to the files. </td></tr><tr><td>Development Workspace</td><td> This is the folder on your computer where you do your work. <ul><li> You can add new files to your project, modify files, and remove files. </li><li> After you make changes to your workspace, you can tell Git to update all the repositories to reflect your changes. </li></ul></td></tr></tbody></table><h3 id="set-up-a-project" tabindex="-1"><a class="header-anchor" href="#set-up-a-project"><span>Set up a Project</span></a></h3><h4 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init"><span>git init</span></a></h4><p>To begin working on a project, you will need to create a local repository. One way to do this is to use the git init command.</p><p>Be aware that:</p><ul><li>The <b class="fw-bold">git init</b> command is used only once for the initial setup.</li><li>You typically run this command in the folder where your existing project files are located.</li><li>This command creates a new .git subdirectory in your current working directory and a new master branch for your project.</li><li><b class="fw-bold">git init</b> can also be used to create a new remote repository.</li></ul><h4 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone"><span>git clone</span></a></h4>',141),e("ul",null,[e("li",null,"Creates the local working directory"),e("li",null,"Adds a .git subdirectory to create the local repository"),e("li",null,"Puts a copy of all the project’s files on your computer."),e("li",{style:{"list-style":"none",display:"inline"}},[e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null," To ensure that you are working on the latest version of files and to prevent conflicts with changes other team members make, frequently update your local repository from the remote repository.")])])])])])],-1),o('<h4 id="git-branch" tabindex="-1"><a class="header-anchor" href="#git-branch"><span>git branch</span></a></h4><p>When you want to add a new feature or experiment with something new in your project, you can use <code>git branch</code> to create a new branch for that change. Working in the separate branch makes it harder for you to break the main project with an unstable change. You can later discard the branch, or you can use <code>git merge</code> to merge the changes you made in that branch back into the main project. You can work from multiple remote Git repositories for different projects or for different pieces of a project.</p><h4 id="manage-the-repository" tabindex="-1"><a class="header-anchor" href="#manage-the-repository"><span>Manage the Repository</span></a></h4><p>You can use the following commands to manage a repository.</p><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><b>git config</b></td><td>Sets Git configuration values in configuration files.</td></tr><tr><td><b>git add</b></td><td> Tells the index to add a file to the next commit for you. This is sometimes called staging the file. </td></tr><tr><td><b>git pull</b></td><td>Updates the local repository and your development workspace.</td></tr><tr><td><b>git fetch</b></td><td>Updates just the local repository.</td></tr><tr><td><b>git mv</b></td><td> Moves files, like the <b>mv</b> command, but the <b>git mv</b> command also notifies the index of the change. </td></tr><tr><td><b>git cp</b></td><td> Copies files or directories, like the <b>cp</b> command. Like <b>git mv</b> , it also notifies the index of the change. </td></tr><tr><td><b>git rm</b></td><td> Creates a file or directory delete request in the index. The requested file or directory will be removed from your file system and the local Git repository at the next commit. </td></tr><tr><td><b>git status</b></td><td> Displays the files that have changed in your working directory that haven’t been added to the local index. </td></tr></tbody></table><p>If needed, your Git repository can be configured to ignore certain files or directories. This will prevent Git from tracking or saving changes to them. These ignored files are specified in a special file named <code>.gitignore</code> and is located at the root of your repository.</p><h4 id="commit-and-push" tabindex="-1"><a class="header-anchor" href="#commit-and-push"><span>Commit and Push</span></a></h4><p>After you edit your project files, you will want to save your changes to the repository. This is called committing your changes. The process for committing changes is:</p><ul><li> Use the <b>git commit</b> command. Changes that you’ve indexed will be saved to the local Git repository. This includes any files that you’ve requested to be copied, removed, moved, or added. </li><li> Use the <b>git pull</b> command to pull, or download, any changes from the remote repository. This gets the latest changes and puts them in your local Git repository. </li><li> Ensure that there are no conflicts with the changes you’ve been making on your local repository. </li><li> Use <b>git merge</b> to merge the changes from the remote repository. </li><li> Use <b>git log</b> to display a list of all of your commits so that you can review the project history and search for specific changes. </li><li> Use <b>git push</b> to send your commits to the remote Git repository. This allows the rest of your team to have access to your work. </li></ul><p>One of the great benefits of using a version control system is that you can go back to previous versions of your work. This is possible because each commit is tracked in your local Git repository and the remote Git repository. This gives you access to any version of your work along the way. If a mistake is made, or the project is messed up so badly that it’s just easier to revert to a previous version, you can reset or roll back to any of your previous commits.</p>',10)]))}const d=i(n,[["render",s],["__file","04.html.vue"]]),c=JSON.parse('{"path":"/14/04.html","title":"Section 14.4 Version Control Using Git","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 14.4 Version Control Using Git","description":"some description"},"headers":[{"level":2,"title":"14.4.1 Git Concepts","slug":"_14-4-1-git-concepts","link":"#_14-4-1-git-concepts","children":[]},{"level":2,"title":"14.4.2 Installing Git","slug":"_14-4-2-installing-git","link":"#_14-4-2-installing-git","children":[]},{"level":2,"title":"14.4.3 Using a Git Repository","slug":"_14-4-3-using-a-git-repository","link":"#_14-4-3-using-a-git-repository","children":[]},{"level":2,"title":"14.4.4 Version Control Using Git Facts","slug":"_14-4-4-version-control-using-git-facts","link":"#_14-4-4-version-control-using-git-facts","children":[{"level":3,"title":"Git Storage Locations","slug":"git-storage-locations","link":"#git-storage-locations","children":[]},{"level":3,"title":"Set up a Project","slug":"set-up-a-project","link":"#set-up-a-project","children":[]}]}],"git":{"updatedTime":1736833578000},"filePathRelative":"14/04.md"}');export{d as comp,c as data};
