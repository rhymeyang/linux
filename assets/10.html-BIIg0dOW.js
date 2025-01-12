import{_ as l,c as a,a as n,b as e,d as i,o as s}from"./app-BXIfiq_Y.js";const o={};function r(h,t){return s(),a("div",null,t[0]||(t[0]=[n('<p>As you study this section, answer the following questions:</p><ul><li>What is the difference between a hard link and a symbolic link?</li><li> How can you identify a symbolic link while using the <b>ls -l</b> command? </li><li>Which type of link is similar to a Windows shortcut?</li><li>Which command can you use to create links?</li></ul><p>In this section, you will learn to:</p><ul><li>Create a hard link</li><li>Create a symbolic link</li></ul><p>Key terms for this section include the following:</p><table class="terms"><thead><tr><th>Term</th><th>Definition</th></tr></thead><tbody><tr><td>inode</td><td> A data structure, identified with a number that stores meta information about a file or directory. </td></tr><tr><td>Hard link</td><td> A directory entry with the same inode as another (essentially giving one file multiple names). </td></tr><tr><td>Symbolic link</td><td>A file that contains a reference or pointer to another file.</td></tr></tbody></table><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th>Exam</th><th>Objective</th></tr></thead><tbody><tr><td>TestOut Linux Pro</td><td> 2.2 Manage the file system <ul><li>Create and manage hard and symbolic link files</li></ul></td></tr><tr><td>CompTIA Linux+ XK0-005</td><td> 1.2 Given a scenario, manage files and directories<br><ul><li>Soft and hard links</li><li>File and directory operations</li><ul><li>cp</li></ul></ul></td></tr></tbody></table><h2 id="_2-10-1-links" tabindex="-1"><a class="header-anchor" href="#_2-10-1-links"><span>2.10.1 Links</span></a></h2><h3 id="links-00-00-00-17" tabindex="-1"><a class="header-anchor" href="#links-00-00-00-17"><span>Links 00:00-00:17</span></a></h3><p>The Linux file system supports a special file type called a link file. Link files don&#39;t contain content. Instead, they redirect you to a different file or directory in the file system. There are two types of link files available. Let&#39;s look at each of them.</p><h3 id="hard-link-files-00-17-01-18" tabindex="-1"><a class="header-anchor" href="#hard-link-files-00-17-01-18"><span>Hard Link Files 00:17-01:18</span></a></h3><p>The first is a hard link file that points to the inode of a file. The inode for a file stores basic information about the file, such as its size, which device it&#39;s on, who owns the file, and the permissions assigned to it.</p><p>With a hard link file, there are two separate files that share the same inode. This is important because when two files have the same inode, you can&#39;t tell which file is the pointer and which file is the pointee once the hard link is created. The two files are located in different locations in the file system but look identical.</p><p>In this example, there are two separate files, /home/rtracy/myfile and /opt/myfile. They&#39;re connected with a hard link, so they share an inode number. To the Linux system, they&#39;re the same file. For example, if I were to open this file in a text editor and add data to it, then open this other file with the cat utility, I&#39;d see the same contents that were added to the first file. Just remember that they&#39;re treated as a single file even though they&#39;re in separate directories.</p><h3 id="symbolic-link-files-01-18-02-09" tabindex="-1"><a class="header-anchor" href="#symbolic-link-files-01-18-02-09"><span>Symbolic Link Files 01:18-02:09</span></a></h3><p>You can also create a symbolic link which also points to another file in the file system. In this case, a symbolic link has its own inode. Because of this, the pointer and the pointee can be easily identified. In this way, a symbolic link is like a traditional shortcut file, meaning that one file points to another, but they remain unique files.</p><p>Here again, we&#39;ve got the /home/rtracy/myfile file and the /opt/myfile file. This time we&#39;ll create a symbolic link between them, where myfile is the pointer and myfile in /opt is the pointee, meaning that this file points to this file over here. Each has its own inode. Now, what happens if I modify this first one? The same modifications are added to the second file even though they remain as separate files.</p><p>You&#39;ll likely use symbolic links rather than hard links most of the time.</p><h3 id="view-symbolic-links-ls-command-02-09-02-37" tabindex="-1"><a class="header-anchor" href="#view-symbolic-links-ls-command-02-09-02-37"><span>View Symbolic Links: ls Command 02:09-02:37</span></a></h3><p>To view symbolic link files and the files they point to, use the ls -l command. Using the -l option here with the command in a directory where the symbolic link resides will show you the pointer file, or the link file, and then a little arrow, and then the name of the file that the link file points to or the pointee file. In this case, a file in my user&#39;s home directory named logfile points to the /var/log/boot.log file.</p><h3 id="create-links-ln-command-02-37-03-28" tabindex="-1"><a class="header-anchor" href="#create-links-ln-command-02-37-03-28"><span>Create Links: <code>ln</code> Command 02:37-03:28</span></a></h3><p>You can create a link file with the ln command. Here&#39;s an example of how to do it. First, type in ln, then specify the pointee file, which is the file that&#39;s being pointed to, and then the pointer file. In this case, we&#39;re creating a link file named docs that points to /user/share/doc.</p><p>Please also focus on the syntax order here, as it can be confusing because we specify the pointee file first, not the pointer file. It might seem logical to list the pointer file first but be careful to do the opposite: list the pointee file or the file being pointed to first and the file doing the pointing last.</p><p>In this example, you can see that I entered the ls -l command after running the ln command, resulting in a link being created. Now we&#39;ve got a link on our user&#39;s home directory named docs that points to /user/share/doc.</p><h3 id="summary-03-28-03-55" tabindex="-1"><a class="header-anchor" href="#summary-03-28-03-55"><span>Summary 03:28-03:55</span></a></h3><p>Well, that&#39;s it for this lesson. In this lesson, we talked about how link files work. First, we discussed hard link files; then, we talked about symbolic links. Next, we reviewed how to use the ls command to view link files, and we finished the lesson by going over how to use the ln command to create link files.</p><h2 id="_2-10-2-create-links" tabindex="-1"><a class="header-anchor" href="#_2-10-2-create-links"><span>2.10.2 Create Links</span></a></h2><h3 id="create-links-00-00-00-25" tabindex="-1"><a class="header-anchor" href="#create-links-00-00-00-25"><span>Create Links 00:00-00:25</span></a></h3><p>In the Linux file system, a link is a special file that acts as a redirector to another file or directory. There are two kinds of links: symbolic links and hard links. In this demonstration, we&#39;ll go over some commands for getting information about link files, look at how links function, including the differences between symbolic and hard links, and create and manage some links.</p><h3 id="view-symbolic-links-00-25-00-53" tabindex="-1"><a class="header-anchor" href="#view-symbolic-links-00-25-00-53"><span>View Symbolic Links 00:25-00:53</span></a></h3><p>Using the ls command, we can see several files in the current directory. Some of these files are links; we can get more information about them using ls -l to get the long ls output format. The first character in the first column tells us whether the entry is a normal file, as indicated with a dash, a directory, indicated with a &quot;d,&quot; or a symbolic link, indicated with a lowercase &quot;l&quot; [L]. If a file is a symbolic link, the last column shows the link&#39;s target file path with this arrow notation.</p><h3 id="reading-and-writing-symbolic-links-00-53-01-33" tabindex="-1"><a class="header-anchor" href="#reading-and-writing-symbolic-links-00-53-01-33"><span>Reading and Writing Symbolic Links 00:53-01:33</span></a></h3><p>As an example, link1.txt is a symbolic link to file1.txt. I can view the file&#39;s contents with nano file1.txt and see it has some example text in it. If I look at the contents of the link file with nano link1.txt, it contains the same example text. And, if I change the contents of the link file and then go back to the target file, the change I made to the link also shows up.</p><p>With symbolic links, the actual file contents only belong to the target. If a command reads the contents of a link file, it&#39;s reading from the target. If it writes to a link, it&#39;s writing to the target.</p><h3 id="symbolic-links-to-directories-01-33-02-10" tabindex="-1"><a class="header-anchor" href="#symbolic-links-to-directories-01-33-02-10"><span>Symbolic Links to Directories 01:33-02:10</span></a></h3><p>A symbolic link can also target a directory. As an example, link_dir1 is a symbolic link to the directory dir1. Using ls dir1, we can see the files in the directory. ls link_dir1 shows that the link contains the same files. If we use nano to write a new file to the target directory, we can see that the new file is in the link and the same as the file in the target. Just as with a normal directory, you can &quot;go into&quot; a symbolic link using cd link_dir1. Pwd, which shows us that the working directory is the link.</p><h3 id="broken-symbolic-links-02-10-03-19" tabindex="-1"><a class="header-anchor" href="#broken-symbolic-links-02-10-03-19"><span>Broken Symbolic Links 02:10-03:19</span></a></h3><p>Every symbolic link references its target by the target&#39;s file path. This means that changes in the target&#39;s file path can affect the functionality of the link. For example, notice that this link, link2.txt, targets a file called dir2/file5.txt. If we use nano to look at the link&#39;s contents, it functions normally. However, if we rename the directory that the target is in using mv dir2 dir2_renamed, then try to open the link again, we get some strange behavior. The previous contents of the file have disappeared, and if we try to write to the file, we get an error message. The link&#39;s target path is invalid, so although the link file still exists, attempting to use it has the same effect as using a file path that doesn&#39;t exist.</p><p>In fact, in this instance, ls -l will show that the link is broken with a special color coding. In this scheme, the text for a broken link is red. A broken link can be repaired at any time. For example, if we change the directory back to its previous name, the link&#39;s target path is valid again, and the link can be used as before.</p><h3 id="hard-links-03-19-05-09" tabindex="-1"><a class="header-anchor" href="#hard-links-03-19-05-09"><span>Hard links 03:19-05:09</span></a></h3><p>As mentioned earlier, symbolic links are one of two types of links. The other type is hard links. In this directory, we have hard_link1.txt and hard_link2.txt, which are hard-linked together. Similar to a symbolic link, reading from one of these files is the same as reading from the other, and changes written to one are effectively written to the other. Unlike symbolic links, once a hard link has been made, there&#39;s no distinction between which file is the target and which is the link. Note that the output of ls -l doesn&#39;t give any indication that a hard link is different from an ordinary file.</p><p>Rather than being based on file paths, a hard link operates on more fundamental data structures in the file system called inodes. The command ls -i, shows each file&#39;s index number (or i-number), which corresponds to its inode. Two files will only have the same index number if they&#39;re hard-linked to each other. In this case, hard_link1.txt and hard_link2.txt have the same index number of 1048650.</p><p>Because hard links are based on inodes rather than file paths, they can&#39;t be broken by renaming or even deleting files. Even though I created this link using hard_link1.txt as the target, if I use rm hard_link1.txt to delete the original, hard_link2.txt still shows the same contents it did before and can still be written to.</p><p>Hard links to directories aren&#39;t allowed in Linux. Hard links between files on different volumes are also not allowed. For example, there couldn&#39;t be a hard link between a file on a local hard drive and a file on a USB flash drive.</p><h3 id="creating-links-05-09-06-37" tabindex="-1"><a class="header-anchor" href="#creating-links-05-09-06-37"><span>Creating Links 05:09-06:37</span></a></h3><p>If we want to create a symbolic link, we can use the ln command with the s flag for symbolic. For example, I can run <code>ln -s file1.txt new_symbolic_link.txt</code>, where file1.txt is our TARGET, and new_symbolic_link.txt is our LINK_NAME. We see the new link, including its target and the linked contents.</p><p>To create a hard link, we can use ln this time without the s flag: ln hard_link2.txt new_hard_link.txt. As before, the newly created link appears as a regular file but has the same index number as the original file. To change the link to have a different target, we can use ln again, adding the f flag to force it to overwrite the existing link file: <code>ln -sf dir1/file2.txt new_symbolic_link.txt</code>. Now the link shows the contents of its new target.</p><p>Always use caution when adding the f flag. It will overwrite any file you specify as the link name, even if that file isn&#39;t a symbolic link. A link can be removed just as any file by using the rm command, for example, rm link1.txt. This causes the link to be removed but doesn&#39;t affect the link&#39;s target.</p><h3 id="summary-06-37-06-52" tabindex="-1"><a class="header-anchor" href="#summary-06-37-06-52"><span>Summary 06:37-06:52</span></a></h3><p>That&#39;s it for this demonstration. In this lesson, we looked at the basics of links in the Linux file system, how symbolic, and hard links work, and how to create and manage both kinds.</p><h2 id="_2-10-3-link-facts" tabindex="-1"><a class="header-anchor" href="#_2-10-3-link-facts"><span>2.10.3 Link Facts</span></a></h2><p>The Linux file system supports a special file type called a link. Link files don&#39;t actually contain any content. Instead, they are redirectors that point you to a different file or directory in the file system.</p><p>This lesson covers the following topics:</p><ul><li>Link file types</li><li>Create links</li></ul><h3 id="link-file-types" tabindex="-1"><a class="header-anchor" href="#link-file-types"><span>Link File Types</span></a></h3><p>Links are files that point to another file. Linux uses two types of links:</p>',57),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Type"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"Hard link"),e("td",null,[i(" A hard link is a duplicate entry in the file system that points to a specific piece of data on the disk drive. With a hard link: "),e("ul",null,[e("li",null,[i(" The same inode is used as the original file. The inode specifies where a file's data physically exists on a disk. "),e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null,[i("The "),e("b",null,"ls -i"),i(" command displays the inodes for the files and directories in a directory.")])])])])])]),e("li",null," No data is stored in a hard link. The data is pointed to by the inode, which the hard link refers to. "),e("li",null," Files are basically hard links when created, pointing to the inode where the data is stored. Until all hard links that point to an inode and its data are deleted, the data will not be removed. "),e("li",null,[i(" In the output from the "),e("b",null,"ls -a"),i(" command, a hyphen is used as the first character in the permission string for a hard link, which is the same character used for normal files (for example, "),e("b",null,"-"),i(" rwxr-xr-x). ")])])])]),e("tr",null,[e("td",null,"Symbolic link"),e("td",null,[i(" A symbolic link (also known as a soft link) is a file that points to another file in the file system. A symbolic link is similar to shortcuts in the Windows OS. With a symbolic link: "),e("ul",null,[e("li",null," Separate inodes are used. The link file has an inode that is distinct from the inode of the file being pointed to. "),e("li",null,[i(" In the output from the "),e("b",null,"ls -l"),i(" command: "),e("ul",null,[e("li",null," A lower-case L (l) is used as the first character in the permission string (for example, lrwxrwxrwx indicates a symbolic link). "),e("li",null," The -> character sequence follows the file name, which is followed by the file that the link points to. ")])])])])])])],-1),n('<h3 id="create-links" tabindex="-1"><a class="header-anchor" href="#create-links"><span>Create Links</span></a></h3><p>The following commands are used to create hard links and symbolic links:</p><table><thead><tr><th>Command</th><th>Function</th><th>Examples</th></tr></thead><tbody><tr><td><b>ln <i class="fs-italicize">[source] [link_name]</i></b></td><td> Creates links. <ul><li><b>ln</b> (with no options) creates a hard link between files. </li><li><b>ln -s</b> creates a symbolic link to a file.</li></ul></td><td><ul><li><b>ln /home/jsmith/project1 /home/edunford/project1</b> creates a hard link to /home/jsmith/project1 in /home/edunford/. </li><li><b>ln -s /home/jsmith/project1 /home/edunford/project1_ln</b> creates a symbolic link named /home/edunford/project1_ln that points to /home/jsmith/project1. </li></ul></td></tr><tr><td><b>cp <i class="fs-italicize">[source] [link_name]</i></b></td><td> Copies files and creates links. <ul><li><b>cp -l</b> creates hard links rather than copying the files. </li><li><b>cp -s</b> creates symbolic links rather than copying the files. </li></ul></td><td><ul><li><b>cp -l /home/jed/fil1 /home/esam/proj1</b> creates an exact copy of /home/jed/fil1 in /home/esam/. </li><li><b>cp -s /home/mkon/text /home/ytew/text_ln</b> creates a symbolic link named /home/ytew/text_ln that points to /home/mkon/text. </li></ul></td></tr><tr><td><b>unlink <i class="fs-italicize">[link_name]</i></b></td><td>Removes both symbolic links and hard links.</td><td><ul><li><b>unlink project1_ln</b> removes the project1_ln link that points to /home/jsmith/project1. </li></ul></td></tr></tbody></table>',3)]))}const c=l(o,[["render",r],["__file","10.html.vue"]]),m=JSON.parse('{"path":"/02/10.html","title":"Section 2.10 Links","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 2.10 Links","description":"some description"},"headers":[{"level":2,"title":"2.10.1 Links","slug":"_2-10-1-links","link":"#_2-10-1-links","children":[{"level":3,"title":"Links 00:00-00:17","slug":"links-00-00-00-17","link":"#links-00-00-00-17","children":[]},{"level":3,"title":"Hard Link Files 00:17-01:18","slug":"hard-link-files-00-17-01-18","link":"#hard-link-files-00-17-01-18","children":[]},{"level":3,"title":"Symbolic Link Files 01:18-02:09","slug":"symbolic-link-files-01-18-02-09","link":"#symbolic-link-files-01-18-02-09","children":[]},{"level":3,"title":"View Symbolic Links: ls Command 02:09-02:37","slug":"view-symbolic-links-ls-command-02-09-02-37","link":"#view-symbolic-links-ls-command-02-09-02-37","children":[]},{"level":3,"title":"Create Links: ln Command 02:37-03:28","slug":"create-links-ln-command-02-37-03-28","link":"#create-links-ln-command-02-37-03-28","children":[]},{"level":3,"title":"Summary 03:28-03:55","slug":"summary-03-28-03-55","link":"#summary-03-28-03-55","children":[]}]},{"level":2,"title":"2.10.2 Create Links","slug":"_2-10-2-create-links","link":"#_2-10-2-create-links","children":[{"level":3,"title":"Create Links 00:00-00:25","slug":"create-links-00-00-00-25","link":"#create-links-00-00-00-25","children":[]},{"level":3,"title":"View Symbolic Links 00:25-00:53","slug":"view-symbolic-links-00-25-00-53","link":"#view-symbolic-links-00-25-00-53","children":[]},{"level":3,"title":"Reading and Writing Symbolic Links 00:53-01:33","slug":"reading-and-writing-symbolic-links-00-53-01-33","link":"#reading-and-writing-symbolic-links-00-53-01-33","children":[]},{"level":3,"title":"Symbolic Links to Directories 01:33-02:10","slug":"symbolic-links-to-directories-01-33-02-10","link":"#symbolic-links-to-directories-01-33-02-10","children":[]},{"level":3,"title":"Broken Symbolic Links 02:10-03:19","slug":"broken-symbolic-links-02-10-03-19","link":"#broken-symbolic-links-02-10-03-19","children":[]},{"level":3,"title":"Hard links 03:19-05:09","slug":"hard-links-03-19-05-09","link":"#hard-links-03-19-05-09","children":[]},{"level":3,"title":"Creating Links 05:09-06:37","slug":"creating-links-05-09-06-37","link":"#creating-links-05-09-06-37","children":[]},{"level":3,"title":"Summary 06:37-06:52","slug":"summary-06-37-06-52","link":"#summary-06-37-06-52","children":[]}]},{"level":2,"title":"2.10.3 Link Facts","slug":"_2-10-3-link-facts","link":"#_2-10-3-link-facts","children":[{"level":3,"title":"Link File Types","slug":"link-file-types","link":"#link-file-types","children":[]},{"level":3,"title":"Create Links","slug":"create-links","link":"#create-links","children":[]}]}],"git":{"updatedTime":1736407950000},"filePathRelative":"02/10.md"}');export{c as comp,m as data};