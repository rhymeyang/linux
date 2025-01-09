import{_ as t,c as r,a as n,b as e,d as i,o as a}from"./app-DLQLODCD.js";const o={};function s(d,l){return a(),r("div",null,l[0]||(l[0]=[n('<p>As you study this section, answer the following questions:</p><ul><li>Which shortcut should you use with <b>cd</b> to move directly to the home directory?</li><li>What is the functional difference between <b>rm</b> and <b>rmdir</b> ?</li></ul><p>In this section, you will learn to:</p><ul><li>Work with directories</li><li>Create directories</li><li>Delete directories</li></ul><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th>Exam</th><th> Objective</th></tr></thead><tbody><tr><td>TestOut Linux Pro</td><td>2.2 Manage the file system <ul><li>View information about directories and files in the file system</li><li>Use the Linux Filesystem Hierarchy Standard</li><li>Create, copy, move, and delete directories in the file system</li></ul></td></tr><tr><td>CompTIA Linux+ XK0-005</td><td>1.2 Given a scenario, manage files and directories <br><ul><li>File and directory operations <ul><li>mv</li><li>cp</li><li>ls</li><li>mkdir</li><li>rmdir</li><li>pwd</li><li>rm</li><li>cd</li><li>.</li><li>..</li><li>~</li><li>tree</li></ul></li></ul></td></tr></tbody></table><h2 id="_2-8-1-directory-navigation" tabindex="-1"><a class="header-anchor" href="#_2-8-1-directory-navigation"><span>2.8.1 Directory Navigation</span></a></h2><h2 id="_2-8-2-navigate-directories" tabindex="-1"><a class="header-anchor" href="#_2-8-2-navigate-directories"><span>2.8.2 Navigate Directories</span></a></h2><h2 id="_2-8-3-directory-management" tabindex="-1"><a class="header-anchor" href="#_2-8-3-directory-management"><span>2.8.3 Directory Management</span></a></h2><h2 id="_2-8-4-manage-directories" tabindex="-1"><a class="header-anchor" href="#_2-8-4-manage-directories"><span>2.8.4 Manage Directories</span></a></h2><h2 id="_2-8-5-directory-management-facts" tabindex="-1"><a class="header-anchor" href="#_2-8-5-directory-management-facts"><span>2.8.5 Directory Management Facts</span></a></h2><p>Navigating within and making changes to the directory structure are tasks you will frequently perform when using a Linux system.</p><p>This lesson covers the following topics:</p><ul><li>Navigate a Linux directory</li><li>Create, copy, and move a Linux directory</li><li>Remove a Linux directory</li></ul><h3 id="navigate-a-linux-directory" tabindex="-1"><a class="header-anchor" href="#navigate-a-linux-directory"><span>Navigate a Linux Directory</span></a></h3><p>The following table describes basic commands to navigate within a Linux directory.</p>',16),e("table",{id:"table1"},[e("thead",null,[e("tr",null,[e("th",null,"Command"),e("th",null,"Description"),e("th",null,"Examples")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("b",null,"pwd")]),e("td",null,"Displays the current working directory."),e("td",{valign:"top"},[e("ul",null,[e("li",null,[i("If a user named fred is currently in his home directory and types "),e("b",null,"pwd"),i(" at the shell prompt, "),e("i",null,"/home/fred"),i(" is displayed.")])])])]),e("tr",null,[e("td",null,[e("b",null,"cd")]),e("td",null,[i("Changes the present working directory. "),e("ul",null,[e("li",null,[e("b",null,"cd .."),i(" changes to the parent directory.")]),e("li",null,[e("b",null,"cd ../.."),i(" to changes two levels up in the directory.")]),e("li",null,[e("b",null,"cd /"),i(" changes to the root directory.")])])]),e("td",{valign:"top"},[e("ul",null,[e("li",null,[e("b",null,"cd directory1"),i(" changes to a directory named "),e("i",null,"directory1"),i(" within the current working directory. (This is a relative path.)")]),e("li",null,[e("b",null,"cd /home/fred/directory1"),i(" switches to "),e("i",null,"directory1"),i(" in Fred's home directory, regardless of the current working directory. (This is an absolute path.)")])])])]),e("tr",null,[e("td",null,[e("b",null,"ls")]),e("td",null,[i("Displays the contents of a directory. Options include: "),e("ul",null,[e("li",null,[e("b",null,"-a"),i(" displays all directory contents, including hidden content.")]),e("li",null,[e("b",null,"-l"),i(" displays extended information, including the owner, modified date, size, and permissions.")]),e("li",null,[e("b",null,"-R"),i(" displays the contents of a directory and all of its subdirectories.")]),e("li",null,[e("b",null,"-d"),i(" displays directories but not files.")]),e("li",null,[e("b",null,"-r"),i(" reverses the sort order.")])])]),e("td",{valign:"top"},[e("ul",null,[e("li",null,[e("b",null,"ls -al"),i(" displays a long listing of all the contents in the current working directory, including hidden content.")]),e("li",null,[e("b",null,"ls -d"),i(" displays only directories within the current directory.")]),e("li",null,[e("b",null,"ls -R /etc"),i(" displays the contents of the /etc directory and all of its subdirectories.")])])])])])],-1),e("h3",{id:"create-copy-and-move-a-linux-directory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-copy-and-move-a-linux-directory"},[e("span",null,"Create, Copy, and Move a Linux Directory")])],-1),e("p",null,"The following table describes basic commands to manage a Linux directory:",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Command"),e("th",null,"Description"),e("th",null,"Examples")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("b",null,"mkdir")]),e("td",null,[i("Creates a new directory. Use the "),e("b",null,"-p"),i(" option to create all directories within the specified path when that path does not already exist.")]),e("td",{valign:"top"},[e("ul",null,[e("li",null,[e("b",null,"mkdir work_files"),i(" creates a directory named "),e("i",null,"work_files"),i(" in the current working directory.")]),e("li",null,[e("b",null,"mkdir /home/fred/work_files"),i(" creates a directory named "),e("i",null,"work_files"),i(" within the specified path.")])])])]),e("tr",null,[e("td",null,[e("b",null,"cp")]),e("td",null,[i("Copies directories. Copying leaves the source contents (directories and files) intact. Use the "),e("strong",null,"-r"),i(" or -R option to recursively copy subdirectories and files within the directory.")]),e("td",{valign:"top"},[e("ul",null,[e("li",null,[e("b",null,"cp -r /temp /home/user"),i(" copies the entire "),e("i",null,"/temp"),i(" directory (with all of its files, subdirectories, and files in the subdirectories) to the "),e("i",null,"/home/user"),i(" directory.")])])])]),e("tr",null,[e("td",null,[e("b",null,"mv")]),e("td",null,[i("Moves or renames directories (and files). Moving directories removes the source directory and places it in the destination. Options include: "),e("ul",null,[e("li",null,[e("b",null,"-f"),i(" overwrites a directory that already exist in the destination directory without prompting.")]),e("li",null,[e("b",null,"-i"),i(" prompts before overwriting a directory in the destination directory.")]),e("li",null,[e("b",null,"-n"),i(" never overwrites files in the destination directory.")])])]),e("td",{valign:"top"},[e("ul",null,[e("li",null,[e("b",null,"mv /temp/station ~/doc/"),i(" moves "),e("i",null,"station"),i(" from the "),e("i",null,"/temp"),i(" directory to the "),e("i",null,"~/doc"),i(" directory.")]),e("li",null,[e("strong",null,"mv /current /previous"),i(" renames the directory "),e("i",null,"current"),i(" to "),e("i",null,"previous"),i(" .")])])])])])],-1),e("h3",{id:"remove-a-linux-directory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#remove-a-linux-directory"},[e("span",null,"Remove a Linux Directory")])],-1),e("p",null,"The following table describes basic commands to remove a Linux directory:",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Command"),e("th",null,"Description"),e("th",null,"Examples")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("b",null,"rmdir")]),e("td",null,"Deletes an empty directory."),e("td",{valign:"top"},[e("ul",null,[e("li",null,[e("b",null,"rmdir ~/fred/work_files"),i(" deletes the "),e("i",{class:"fs-italicize"},"work_files"),i(" directory if it is empty.")])])])]),e("tr",null,[e("td",null,[e("b",null,"rm")]),e("td",null,[i("Removes the directory and file information from the file system, which makes the directories and files inaccessible. Options include: "),e("ul",null,[e("li",null,[e("b",null,"-i"),i(" prompts before removing.")]),e("li",null,[e("b",null,"-r"),i(" removes directories, subdirectories, and files within them.")]),e("li",null,[e("b",null,"-f"),i(" eliminates prompt for read-only files and avoids an exit code error if a file doesn't exist.")])])]),e("td",{valign:"top"},[e("ul",null,[e("li",null,[e("b",null,"rm -rf /home/user/temp"),i(" deletes the temp directory with all its subdirectories and files without prompting.")]),e("li",null,[e("b",null,"rm -r /home/user/*"),i(" deletes all directories and files in the "),e("i",{class:"fs-italicize"},"/home/user"),i(" directory.")])])])])])],-1)]))}const u=t(o,[["render",s],["__file","08.html.vue"]]),h=JSON.parse('{"path":"/02/08.html","title":"Section 2.8 Directories","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 2.8 Directories","description":"some description"},"headers":[{"level":2,"title":"2.8.1 Directory Navigation","slug":"_2-8-1-directory-navigation","link":"#_2-8-1-directory-navigation","children":[]},{"level":2,"title":"2.8.2 Navigate Directories","slug":"_2-8-2-navigate-directories","link":"#_2-8-2-navigate-directories","children":[]},{"level":2,"title":"2.8.3 Directory Management","slug":"_2-8-3-directory-management","link":"#_2-8-3-directory-management","children":[]},{"level":2,"title":"2.8.4 Manage Directories","slug":"_2-8-4-manage-directories","link":"#_2-8-4-manage-directories","children":[]},{"level":2,"title":"2.8.5 Directory Management Facts","slug":"_2-8-5-directory-management-facts","link":"#_2-8-5-directory-management-facts","children":[{"level":3,"title":"Navigate a Linux Directory","slug":"navigate-a-linux-directory","link":"#navigate-a-linux-directory","children":[]},{"level":3,"title":"Create, Copy, and Move a Linux Directory","slug":"create-copy-and-move-a-linux-directory","link":"#create-copy-and-move-a-linux-directory","children":[]},{"level":3,"title":"Remove a Linux Directory","slug":"remove-a-linux-directory","link":"#remove-a-linux-directory","children":[]}]}],"git":{"updatedTime":1736404372000},"filePathRelative":"02/08.md"}');export{u as comp,h as data};
