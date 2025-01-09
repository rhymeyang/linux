import{_ as l,c as n,a,b as e,d as i,o as s}from"./app-CB3s9O2N.js";const o={};function r(d,t){return s(),n("div",null,t[0]||(t[0]=[a('<p>As you study this section, answer the following questions:</p><ul><li>What is the difference between a hard link and a symbolic link?</li><li> How can you identify a symbolic link while using the <b>ls -l</b> command? </li><li>Which type of link is similar to a Windows shortcut?</li><li>Which command can you use to create links?</li></ul><p>In this section, you will learn to:</p><ul><li>Create a hard link</li><li>Create a symbolic link</li></ul><p>Key terms for this section include the following:</p><table class="terms"><thead><tr><th>Term</th><th>Definition</th></tr></thead><tbody><tr><td>inode</td><td> A data structure, identified with a number that stores meta information about a file or directory. </td></tr><tr><td>Hard link</td><td> A directory entry with the same inode as another (essentially giving one file multiple names). </td></tr><tr><td>Symbolic link</td><td>A file that contains a reference or pointer to another file.</td></tr></tbody></table><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th>Exam</th><th>Objective</th></tr></thead><tbody><tr><td>TestOut Linux Pro</td><td> 2.2 Manage the file system <ul><li>Create and manage hard and symbolic link files</li></ul></td></tr><tr><td>CompTIA Linux+ XK0-005</td><td> 1.2 Given a scenario, manage files and directories<br><ul><li>Soft and hard links</li><li>File and directory operations</li><ul><li>cp</li></ul></ul></td></tr></tbody></table><h2 id="_2-10-1-links" tabindex="-1"><a class="header-anchor" href="#_2-10-1-links"><span>2.10.1 Links</span></a></h2><h2 id="_2-10-2-create-links" tabindex="-1"><a class="header-anchor" href="#_2-10-2-create-links"><span>2.10.2 Create Links</span></a></h2><h2 id="_2-10-3-link-facts" tabindex="-1"><a class="header-anchor" href="#_2-10-3-link-facts"><span>2.10.3 Link Facts</span></a></h2><p>The Linux file system supports a special file type called a link. Link files don&#39;t actually contain any content. Instead, they are redirectors that point you to a different file or directory in the file system.</p><p>This lesson covers the following topics:</p><ul><li>Link file types</li><li>Create links</li></ul><h3 id="link-file-types" tabindex="-1"><a class="header-anchor" href="#link-file-types"><span>Link File Types</span></a></h3><p>Links are files that point to another file. Linux uses two types of links:</p>',16),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Type"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"Hard link"),e("td",null,[i(" A hard link is a duplicate entry in the file system that points to a specific piece of data on the disk drive. With a hard link: "),e("ul",null,[e("li",null,[i(" The same inode is used as the original file. The inode specifies where a file's data physically exists on a disk. "),e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null,[i("The "),e("b",null,"ls -i"),i(" command displays the inodes for the files and directories in a directory.")])])])])])]),e("li",null," No data is stored in a hard link. The data is pointed to by the inode, which the hard link refers to. "),e("li",null," Files are basically hard links when created, pointing to the inode where the data is stored. Until all hard links that point to an inode and its data are deleted, the data will not be removed. "),e("li",null,[i(" In the output from the "),e("b",null,"ls -a"),i(" command, a hyphen is used as the first character in the permission string for a hard link, which is the same character used for normal files (for example, "),e("b",null,"-"),i(" rwxr-xr-x). ")])])])]),e("tr",null,[e("td",null,"Symbolic link"),e("td",null,[i(" A symbolic link (also known as a soft link) is a file that points to another file in the file system. A symbolic link is similar to shortcuts in the Windows OS. With a symbolic link: "),e("ul",null,[e("li",null," Separate inodes are used. The link file has an inode that is distinct from the inode of the file being pointed to. "),e("li",null,[i(" In the output from the "),e("b",null,"ls -l"),i(" command: "),e("ul",null,[e("li",null," A lower-case L (l) is used as the first character in the permission string (for example, lrwxrwxrwx indicates a symbolic link). "),e("li",null," The -> character sequence follows the file name, which is followed by the file that the link points to. ")])])])])])])],-1)]))}const c=l(o,[["render",r],["__file","10.html.vue"]]),u=JSON.parse('{"path":"/02/10.html","title":"Section 2.10 Links","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 2.10 Links","description":"some description"},"headers":[{"level":2,"title":"2.10.1 Links","slug":"_2-10-1-links","link":"#_2-10-1-links","children":[]},{"level":2,"title":"2.10.2 Create Links","slug":"_2-10-2-create-links","link":"#_2-10-2-create-links","children":[]},{"level":2,"title":"2.10.3 Link Facts","slug":"_2-10-3-link-facts","link":"#_2-10-3-link-facts","children":[{"level":3,"title":"Link File Types","slug":"link-file-types","link":"#link-file-types","children":[]}]}],"git":{"updatedTime":1736407950000},"filePathRelative":"02/10.md"}');export{c as comp,u as data};
