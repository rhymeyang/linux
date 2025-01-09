import{_ as e,c as s,a as i,o as r}from"./app-DLQLODCD.js";const d={};function a(o,t){return r(),s("div",null,t[0]||(t[0]=[i('<p>As you study this section, answer the following questions:</p><ul><li>What are the benefits of the Filesystem Hierarchy Standard (FHS)?</li><li>What should you be aware of when saving files in the /tmp directory?</li><li>Which directory does the Filesystem Hierarchy Standard (FHS) specify for holding temporarily mounted file systems?</li><li>What&#39;s the difference between /root and the root of the file system ( <b class="fw-bold">/</b> )?</li></ul><p>Key terms for this section include the following:</p><table class="terms" width="977"><thead><tr><th> Term</th><th> Definition</th></tr></thead><tbody><tr><td>Filesystem Hierarchy Standard (FHS)</td><td>A subset of the Linux Standards Base (LSB) that constructs a consistent file system for Linux by defining a standard set of directories, subdirectories, and files.</td></tr><tr><td>Real file system</td><td width="681"> The commonplace file system of an operating system. It is organized into directories and files.</td></tr><tr><td>Virtual file system</td><td>A pseudo file system that&#39;s dynamically created as it&#39;s accessed.</td></tr><tr><td>Relative path</td><td>The defining of a file location relative to the current directory.</td></tr><tr><td>Absolute path</td><td>The defining of a file location from the root of the file system.</td></tr></tbody></table><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th> Exam</th><th> Objective</th></tr></thead><tbody><tr><td>TestOut Linux Pro</td><td>2.2 Manage a file system <ul><li>Use the Linux Filesystem Hierarchy Standard (FHS)</li></ul></td></tr><tr><td>CompTIA Linux+ XK0-005</td><td>1.1 Summarize Linux fundamentals <ul><li>Filesystem Hierarchy Standard (FHS) <ul><li>/boot</li><li>/proc</li><li>/sys</li><li>/var</li><li>/usr</li><li>/lib</li><li>/dev</li><li>/etc</li><li>/opt</li><li>/bin</li><li>/sbin</li><li>/home</li><li>/media</li><li>/mnt</li><li>/root</li><li>/tmp</li></ul></li></ul></td></tr></tbody></table><h2 id="_2-11-1-filesystem-hierarchy-standard-fhs" tabindex="-1"><a class="header-anchor" href="#_2-11-1-filesystem-hierarchy-standard-fhs"><span>2.11.1 Filesystem Hierarchy Standard (FHS)</span></a></h2><h2 id="_2-11-2-filesystem-hierarchy-standard-fhs-facts" tabindex="-1"><a class="header-anchor" href="#_2-11-2-filesystem-hierarchy-standard-fhs-facts"><span>2.11.2 Filesystem Hierarchy Standard (FHS) Facts</span></a></h2><p>The Filesystem Hierarchy Standard (FHS) defines a consistent file system for Linux systems by defining a standard set of directories, subdirectories, and files. FHS is a subset of the Linux Standards Base (LSB), which is an organization and set of guidelines for promoting a set of standards to increase Linux distribution compatibility.</p><p>This lesson covers FHS directories.</p><h3 id="fhs-directories" tabindex="-1"><a class="header-anchor" href="#fhs-directories"><span>FHS Directories</span></a></h3><p>FHS defines the following directories and their contents:</p><table><thead><tr><th> Directory</th><th> Description</th></tr></thead><tbody><tr><td><b class="fw-bold">/</b></td><td>The / character represents the root directory of the Linux system. All other directories are located beneath the / (root directory) of the system.</td></tr><tr><td><b class="fw-bold">/bin</b></td><td>The /bin directory contains binary commands that are available to all users.</td></tr><tr><td><b class="fw-bold">/boot</b></td><td>The /boot directory contains the kernel and bootloader files.</td></tr><tr><td><b class="fw-bold">/dev</b></td><td>The /dev directory contains device files that represent the hardware used by the system, such as a hard drive, mouse, and printer.</td></tr><tr><td><b class="fw-bold">/etc</b></td><td>The /etc directory contains configuration files specific to the system.</td></tr><tr><td><b class="fw-bold">/home</b></td><td>The /home directory contains (by default) the user home directories.</td></tr><tr><td><b class="fw-bold">/lib</b></td><td>The /lib directory contains shared program libraries and kernel modules.</td></tr><tr><td><b class="fw-bold">/media</b></td><td>The /media directory is used to mount removable media, such as optical discs and USB drives.</td></tr><tr><td><b class="fw-bold">/mnt</b></td><td>The /mnt directory is used for temporarily mounting local and remote file systems.</td></tr><tr><td><b class="fw-bold">/opt</b></td><td>The /opt directory contains additional programs on the system.</td></tr><tr><td><b class="fw-bold">/proc</b></td><td>The /proc directory is a virtual directory (only exists in RAM) that contains information about the system state and processes.</td></tr><tr><td><b class="fw-bold">/root</b></td><td>The /root directory is the root user&#39;s home directory. Do not confuse /root with the root of the file system (/).</td></tr><tr><td><b class="fw-bold">/sbin</b></td><td>The /sbin directory contains system binary commands.</td></tr><tr><td><b class="fw-bold">/srv</b></td><td>The /srv directory contains files for services such as HTTP and FTP servers.</td></tr><tr><td><b class="fw-bold">/sys</b></td><td>The /sys directory contains the <i>sysfs</i> virtual file system which displays information about devices and drivers.</td></tr><tr><td><b class="fw-bold">/tmp</b></td><td>The /tmp directory contains temporary files created by programs during system use.</td></tr><tr><td><b class="fw-bold">/usr</b></td><td>The /usr directory contains system commands and utilities.</td></tr><tr><td><b class="fw-bold">/var</b></td><td>The /var directory contains data files that change constantly, such as: <ul><li>User mailboxes</li><li>Print queues</li><li>Log files</li></ul></td></tr></tbody></table>',13)]))}const n=e(d,[["render",a],["__file","11.html.vue"]]),c=JSON.parse('{"path":"/02/11.html","title":"Section 2.11 Filesystem Hierarchy Standard (FHS)","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 2.11 Filesystem Hierarchy Standard (FHS)","description":"some description"},"headers":[{"level":2,"title":"2.11.1 Filesystem Hierarchy Standard (FHS)","slug":"_2-11-1-filesystem-hierarchy-standard-fhs","link":"#_2-11-1-filesystem-hierarchy-standard-fhs","children":[]},{"level":2,"title":"2.11.2 Filesystem Hierarchy Standard (FHS) Facts","slug":"_2-11-2-filesystem-hierarchy-standard-fhs-facts","link":"#_2-11-2-filesystem-hierarchy-standard-fhs-facts","children":[{"level":3,"title":"FHS Directories","slug":"fhs-directories","link":"#fhs-directories","children":[]}]}],"git":{"updatedTime":1736404372000},"filePathRelative":"02/11.md"}');export{n as comp,c as data};
