import{_ as l,c as n,a as s,b as e,d as t,o}from"./app-C99zI2Uc.js";const a={};function r(u,i){return o(),n("div",null,i[0]||(i[0]=[s('<p>As you study this section, answer the following questions:</p><ul><li>Which utility allows you to view the space available on all mounted file systems?</li><li>What kinds of information can the <b class="fw-bold">lsof</b> utility provide?</li><li>What action must you perform before using the <b class="fw-bold">fsck</b> utility?</li><li>Which utility converts ext2 file systems to ext3 file systems?</li></ul><p>In this section, you will learn to:</p><ul><li>Maintain file systems</li><li>Use iostat</li></ul><p>Key terms for this section include the following:</p><table class="terms"><thead><tr><th>Term</th><th>Definition</th></tr></thead><tbody><tr><td>Free disk space</td><td>The area of a hard disk to which new data can be written.</td></tr><tr><td>Bad blocks</td><td> A bad block is a section on a disk drive to which data can no longer be written to read from. </td></tr></tbody></table><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th>Exam</th><th>Objective</th></tr></thead><tbody><tr><td>TestOut Linux Pro</td><td> 2.2 Manage the file system <ul><li> View information about directories and files in the file system </li><li>View disk space usage statistics</li></ul></td></tr><tr><td>CompTIA Linux+ XK0-005</td><td> 1.1 Summarize Linux fundamentals <br><ul><li>Storage concepts</li><li style="list-style:none;display:inline;"><ul><li>File storage</li><li>Block storage</li></ul></li></ul> 1.3 Given a scenario, configure and manage storage using the appropriate tools <br><ul><li>Filesystem management</li><li style="list-style:none;display:inline;"><ul><li>XFS tools</li></ul></li><li>Monitoring storage space and disk usage</li><li style="list-style:none;display:inline;"><ul><li>df</li><li>du</li></ul></li></ul><p> 1.4 Given a scenario, configure and use the appropriate processes and services </p><ul><li>Process management</li><li style="list-style:none;display:inline;"><ul><li>Listing processes and open files</li><li style="list-style:none;display:inline;"><ul><li>lsof</li></ul></li></ul></li></ul></td></tr></tbody></table><h2 id="_8-7-1-file-system-maintenance" tabindex="-1"><a class="header-anchor" href="#_8-7-1-file-system-maintenance"><span>8.7.1 File System Maintenance</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>File System Maintenance 00:00-00:26 In this lesson, we&#39;ll discuss file system maintenance. Let&#39;s start with how to monitor disk space utilization. It&#39;s important that your Linux file system has enough space to work properly. There are several utilities that can be used for tracking how much disk space the operating system and user files are using. Let&#39;s look at a couple.</p><p>The df Utility 00:26-02:31 First, let&#39;s look at the df utility. df displays the mounted locations of hard drive partitions, optical drives, and other storage devices, like USB drives, on your Linux file system. You can also see the total size and used space of the storage device.</p><p>To run, enter df at the shell prompt. By default, df will display space utilization in terms of blocks which can be hard to understand. You can use the -h option for a human readable output, which means it will be in gigabytes, megabytes, and such. The -T option will display the file system type. Here we have /dev/sdb5 that uses an ext3 file system with a 4.8 GB size. Only 11 MB have been used, leaving 4.6 GB available. 1% of available space is used, and it&#39;s mounted at /mnt/private.</p><p>Running df without specifying a file, directory, or device displays information about all mounted file systems. However, if you enter df plus a specific filename – in this case /mnt/shared/myfile.txt—then only the information about the file system on which that file resides – here it&#39;s /dev/sdb1—will be displayed. We can see the size, amount used, amount available, and where it&#39;s mounted.</p><p>With the -i option, the inode usage is listed. Because a fixed number of inodes are assigned, inodes can run out even when there&#39;s plenty of disk space. In this example, on /dev/sdb5, there are 320,000 inodes available. This means 320,000 files can be created in this file system and only 11 have been used.</p><p>The du Utility 02:31-03:04 You can also monitor disk utility by using the du utility, which provides a summary of disk space used by each file recursively for a specified directory. You could use this for something like locating which user is using up a large volume of the disk space.</p><p>The syntax to enter is du, plus the name of the directory you want to see. You can use -h option to display the human readable utilization just as we did with df.</p><p>The lsof Utility 03:04-04:23 Next, let&#39;s talk about open files. On a Linux file system, if a file is open when a user gets disconnected or the system unexpectedly gets shut down, the user can be locked out of the file when they reconnect. You can use the list open files command to find open files and close them.</p><p>To do so enter lsof at the shell prompt. This will list all open files belonging to all active processes on the system. You can add options as well. Use -s to display the size of the file. Use -t to produce terse output with process identifiers only – in other words, what process has files currently open. Use this to take the output and pipe it to the kill command. In this way, you locate an open file, find the process that has that file open, then kill that process, so that the file can be opened by another process.</p><p>You can use -u with lsof to display only the open files of a specific user account. In this example, we entered lsof -u followed by the name of the user we want to find, ksanders. Now ksanders&#39; open files are displayed.</p><p>The fuser Utility 04:23-05:56 To find out which processes have open files, run the fuser command at the shell prompt. It will display the process ID numbers of the processes using a specific file or file system.</p><p>By default, each open file is followed by a letter. c specifies that the file is in the current directory, e is an executable. f, lowercase, specifies open file, while Capital F means open and being written to. r means route directory, and m specifies memory-mapped file or shared library.</p><p>The fuser utility offers the options shown here. First, -a shows all specified files. Otherwise, only the files accessed by at least one process are shown. The -k option kills the process accessing a file. The -i option asks the user for confirmation before killing that process. The -u option allows you to append the name of the process owner to each process ID. This allows us to see who owns the process that has the file open.</p><p>In this example, we want to see which user is running the top executable. The path is /user/bin/top. When we run the command, we see ksanders using the top open executable, indicated by this e, with the process ID.</p><p>The fsck Utility 05:56-08:06 When errors occurs, such as file system corruption from a power outage, you can use the fsck utility to check the integrity of the files and directories. First, unmount the file you want to check. Here, we&#39;ll use the umount command to unmount the file system on the /dev/sdb1 partition. Then, we&#39;ll use fsck to check the file system on that partition.</p><p>We enter fsck plus the name of the partition, /dev/sdb1. The utility will then check the file system and report any errors. And here, the system is clean.</p><p>If there were errors, a code indicating the error type is displayed. For example, error code 1 indicates errors were found and corrected. 2 indicates errors were found and corrected, but a reboot is required. 4 tells us there are errors, but they are not corrected. Code 8 says there&#39;s an operational error. 16 indicates incorrect syntax. If you cancel a check while it&#39;s running, you get code 32. And finally, 128 tells us there&#39;s an error in a shared library.</p><p>Now, in this example, we ran fsck on /dev/sdb1. Notice here that the e2fsck was used to check the file system. That&#39;s because the fsck command is a frontend-to-file system specific repair utilities. This means fsck will figure out what file system has been created, and then run the appropriate file system-specific repair utility for that file system.</p><p>Here we have a list of them that are for each of the file systems. Typically, e2fsck is run for any of these ext file systems. The vfat utility runs for MS-DOS (FAT) partitions.</p><p>Always remember to remount the partition after the file system check is complete.</p><p>Restore a Damaged Superblock 08:06-08:57 The e2fsck has another useful feature: restoring a damaged superblock on ext2, 3, or 4 file systems. The superblock is the block at the beginning of the partition that contains the information about the overall structure of the entire file system. Most Linux file systems keep a backup copy because it&#39;s so critical. To restore the superblock, enter e2fsck -f -b, followed by the number of the backup superblock to restore from, and then the name of the device. The -f option forces a check even if the system appears clean. The -b tells it where to go to find the backup of the superblock.</p><p>Summary 08:57-09:17 That&#39;s it for this lesson. In this lesson, we looked at utilities for monitoring and maintaining a Linux file system. These included the du, df, lsof, fuser, and fsck commands.</p><h2 id="_8-7-2-maintaining-file-systems" tabindex="-1"><a class="header-anchor" href="#_8-7-2-maintaining-file-systems"><span>8.7.2 Maintaining File Systems</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Maintain File Systems 00:00-00:24 In this demonstration, we&#39;re going to discuss methods you can use to maintain Linux file systems. First, we&#39;ll look at several utilities that let you check disk space usage. Then we&#39;ll talk about how to check for open files in the file system. Notice that I&#39;ve already switched to my root account. I&#39;ve done this because I&#39;ll need root-level privileges to complete some of the tasks I want to show you.</p><p>Check Disk Space Utilization 00:24-02:48 The first thing we&#39;re going to do is check the disk space usage. Df is one utility you can use to do this. Although df is very useful, the default output can be somewhat difficult to read without doing a little bit of math.</p><p>So instead of just pressing Enter, I&#39;m going to add the -h option, which will reformat the output in a human-readable form. This means that instead of listing the used space in 1k blocks, it will use Gigabytes and Megabytes, which are easier to read.</p><p>Now, when I press Enter, we see a couple of key pieces of information. First, we see a list of all the partitions in the system. We see where each one is mounted in the Linux file system. We see the total size of the partitions. And we see how much disk space is used and how much is available.</p><p>For example, our /dev/sda1 partition is mounted at the root. The size of sda1 is 125 GB, and 9.6 GB of data has been used, which is about 9% of the drive. This leaves me 109 GB still available to use.</p><p>Another utility that&#39;s commonly used in conjunction with df is du. du is particularly useful in situations where you have a multiuser Linux system with lots of different users saving files to home directories on the Linux system. Let&#39;s switch to the /home directory.</p><p>When I run the ls command, we see that there are three users assigned to this system: admin, jsmith, and zoey. To see how much disk space they&#39;re taking up in their home directory, I can run du – h. As you can see, we&#39;re first shown how much disk space is being used by the jsmith user on a directory-by-directory basis. And then, as I page down, we can see how much disk space is being used by the admin user and so forth.</p><p>Notice that it&#39;s hard to find which user is using most of the disk space using just the -h option. So let&#39;s run this again. But this time, let&#39;s pipe the result out to sort and use -h to let sort present its information in a human-readable form.</p><p>Now, when I press Enter, we can see which directories are consuming the most data, which directory is the admin home directory, and then Zoey&#39;s home directory. If we scroll up, we can start to see which subdirectories within those directories contain the most data. This is very useful when you have an end-user who&#39;s downloading huge amounts of data off the web, saving it on your server, and using up all your available disk space.</p><p>Look for Open Files 02:48-03:57 Another useful utility is the lsof command, which is the list open files command. As the name implies, the lsof command checks for open files on the system. This command is very useful in situations where you have a Linux server and you have users at remotes systems accessing files on your server. If one of these remote systems crashes while they have a document open, such as a word processing document, then they&#39;re not going to be able to open that file again until it&#39;s manually closed.</p><p>In this type of situation, you can use lsof to find the files that were left open when their system crashed, providing you with the information you need to close files so that they can access their data again.</p><p>For example, let&#39;s run lsof -s. The -s option shows the size of the open files it finds. Then, to fine tune this a bit more, I&#39;ll add -u, which allows me to specify a user. In this case, I&#39;ll add admin to only look for files opened by that user.</p><p>Now, when I press Enter, you see a list of all the files over here that are currently opened by the admin user. Since I&#39;m logged in as the admin user, there are a lot of open files.</p><p>Summary 03:57-04:13 That&#39;s it for this demonstration. In this demo, we talked about maintaining the Linux file system. First, we looked at utilities you can use to check for disk space utilization. Then we discussed how to look for open files.</p><h2 id="_8-7-3-file-system-maintenance-facts" tabindex="-1"><a class="header-anchor" href="#_8-7-3-file-system-maintenance-facts"><span>8.7.3 File System Maintenance Facts</span></a></h2><p>This lesson covers the commands used to check and maintain file system integrity:</p><h3 id="file-system-integrity-commands" tabindex="-1"><a class="header-anchor" href="#file-system-integrity-commands"><span>File System Integrity Commands</span></a></h3><p>Use the following commands to maintain file system integrity:</p>',52),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Command"),e("th",null,"Description"),e("th",null,"Examples")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("strong",null,"df")]),e("td",null,[t(" Displays the free space in the partition holding the specified directory. If no directory is given, the space available on all currently mounted file systems is shown. Disk space is shown in 1-K blocks by default. "),e("p",null,"Common options include:"),e("ul",null,[e("li",null,[e("b",null,"-h"),t(" displays the output in get human readable format (bytes, KB, MB, GB, TB). ")]),e("li",null,[e("b",null,"-i"),t(" displays inode information.")]),e("li",null,[e("b",null,"-l"),t(" limits the list to local file systems.")])])]),e("td",null,[e("b",null,"df /home"),t(),e("br"),t(" Lists the free space on the partition that holds the "),e("b",null,"/home"),t(" directory. ")])]),e("tr",null,[e("td",null,[e("b",null,"du")]),e("td",null,[t(" Displays files and file sizes in and below a specified directory. "),e("p",null,"Common options include:"),e("ul",null,[e("li",null,[e("b",null,"-c"),t(" lists the total amount of space used in the directory. ")]),e("li",null,[e("b",null,"-h"),t(" displays the output in human readable format (bytes, KB, MB, GB, TB). ")]),e("li",null,[e("b",null,"-s"),t(" lists only the total, not each file.")]),e("li",null,[e("b",null,"-a"),t(" evaluates all files, not just directories.")])])]),e("td",null,[e("b",null,"du -c /home/badam"),t(),e("br"),t(" Lists all files and directories in badam's home directory along with file size and a total amount of space taken up by the directory. "),e("h2",null,"du -c -s /home/badam")])]),e("tr",null,[e("td",null,[e("strong",null,"lsof")]),e("td",null,[t(" Displays open files in the file system. "),e("b",null,"lsof"),t(" gives the following information by default: "),e("ul",null,[e("li",null,"The command used to access the file."),e("li",null,"Process ID."),e("li",null,"Name of the user who is accessing the file."),e("li",null,[t(" A file descriptor (these are described in the "),e("b",null,"lsof"),t(" man pages). ")]),e("li",null,"File node type."),e("li",null,"Device numbers."),e("li",null,"File size."),e("li",null,"Inode address."),e("li",null,"File path.")]),e("p",null,"Common options include:"),e("ul",null,[e("li",null,[e("b",null,[t("+D [ "),e("i",null,"directory_name"),t(" ]")]),t(" recursively lists files in a directory. ")]),e("li",null,[e("b",null,[t("-c [ "),e("i",null,"command_name"),t(" ]")]),t(" lists all files for processes that are executing the specified command. ")]),e("li",null,[e("b",null,[t("-u [ "),e("i",null,"user"),t(" ]")]),t(" lists open files owned by the specified user. ")]),e("li",null,[e("b",null,[t("-g [ "),e("i",null,"process_ID"),t(" ]")]),t(" lists files opened by a specific process. ")])])]),e("td",null,[e("b",null,[t("lsof -u "),e("i",null,"user")]),t(),e("br"),t(" Lists files opened by processes that the specified user owns. ")])]),e("tr",null,[e("td",null,[e("strong",null,"fsck")]),e("td",null,[t(" Checks and optionally repairs one or more Linux file systems. Common options include: "),e("ul",null,[e("li",null,[e("b",null,"-s"),t(" serializes "),e("b",null,"fsck"),t(" when multiple file systems are checked. ")]),e("li",null,[e("b",null,"-t"),t(" specifies the type(s) of file system to be checked. ")]),e("li",null,[e("b",null,"-a"),t(" automatically repairs the file system without any questions. ")]),e("li",null,[e("b",null,"-r"),t(" prompts for confirmation when errors are found and asks permission to fix the errors (only when "),e("b",null,"-a"),t(" is not specified). ")])]),e("p",null,"Be aware of the following:"),e("ul",null,[e("li",null,[t(" The file system must be unmounted before using "),e("b",null,"fsck"),t(" . ")]),e("li",null,[t(" When manually running "),e("b",null,"fsck"),t(" , use runlevel 1 (init) or rescue.target (systemd) to ensure that other users do not mount the file system. ")])])]),e("td",null,[e("b",null,"fsck -t ext3 /dev/sdb1"),t(),e("br"),t(" Checks the first partition on the first partition of the second hard drive. ")])]),e("tr",null,[e("td",null,[e("strong",null,"dumpe2fs")]),e("td",null,[t(" Prints superblock and block information for an ext2, ext3, or ext4 file system. This includes information for each sector on the partition about sector type, block ranges, inode information, free blocks, and similar information. "),e("p",null,"Command options include:"),e("ul",null,[e("li",null,[e("b",null,"-b"),t(" prints blocks reserved as bad in the file system. ")]),e("li",null,[e("b",null,"-h"),t(" prints only superblock information.")]),e("li",null,[e("b",null,"-x"),t(" prints group information block numbers in hexadecimal format. ")])])]),e("td",null,[e("b",null,"dumpe2fs /dev/sda1"),t(),e("br"),t(" Lists information for the first partition of the first hard drive. ")])]),e("tr",null,[e("td",null,[e("strong",null,"tune2fs")]),e("td",null,[t(" Adjusts tunable file system parameters on ext2, ext3, and ext4 file systems. Some of the adjustable parameters include volume label, reserved blocks, inode sizes, and journaling. Tune2fs can also implement access control lists for individual users. "),e("p",null,"Command options include:"),e("ul",null,[e("li",null,[e("b",null,"-c"),t(" adjust the number of mounts, after which the file system will be checked. ")]),e("li",null,[e("b",null,"-e remount-ro"),t(" remounts the file system as read-only. ")]),e("li",null,[t(" - "),e("b",null,"l"),t(" lists the contents of the file system superblock. ")]),e("li",null,[e("b",null,"-o acl"),t(" enables Posix access control lists.")]),e("li",null,[e("b",null,"-j"),t(" converts ext2 file systems to ext3 file systems. ")])])]),e("td",null,[e("b",null,"tune2fs -o acl /dev/sdb1"),t(),e("br"),t(" Enables access control lists on the first partition of the second hard drive. The drive needs to be remounted. ")])]),e("tr",null,[e("td",null,[e("strong",null,"debugfs")]),e("td",null,[t(" An ext2/ext3/ext4 file system debugger. Can be used for information gathering about target partitions, including directory listings with deleted file entries. Also allows file system modification and deleted file recovery. "),e("p",null,"Command options include:"),e("ul",null,[e("li",null,[e("b",null,"-w"),t(" the file system should be opened in read-write mode. If not included, the file system will be read-only. ")]),e("li",null,[e("b",null,"-c"),t(" open the file system in catastrophic mode. This ignores inodes and group bitmaps initially. Useful when a file system has significant corruption. ")]),e("li",null,[e("b",null,"-f"),t(),e("i",null,[e("b",null,"cmd_file")]),t(" will read in commands from the "),e("i",null,"cmd_file"),t(" and execute them. ")]),e("li",null,[e("b",null,"-V"),t(" print the debugfs version number and exit.")])])]),e("td",null,[e("b",null,"debugfs -w /dev/sdb1"),t(),e("br"),t(" Opens the file system on sdb1 in read-write mode. "),e("h2",null,"debugfs -c /dev/sda1")])]),e("tr",null,[e("td",null,[e("strong",null,"iostat")]),e("td",null,[t(" Monitors system I/O device loading by observing the time devices are active in relation to their average transfer rates. The iostat command generates reports that can be used to change system configuration to better balance the input/output load between physical disks. Running iostat without any options displays CPU usage and I/O statistics in the form of how much has been written per second and in total. "),e("p",null,"Command options include:"),e("ul",null,[e("li",null,[e("b",null,"-m"),t(" displays the results in megabytes (MB) instead of kilobytes (KB). ")]),e("li",null,[e("b",null,"-d"),t(" only displays the statistics for the devices connected on the system. ")]),e("li",null,[e("b",null,[t("-p "),e("i",null,"device")]),t(" displays the results for the specified device. ")]),e("li",null,[e("b",null,"-x"),t(" adds extended statistics, such as avgqu-sz. This statistic shows the number of operations that were either queued or being serviced on a device. If this is not in the single digits (with an occasional double-digit spike), more troubleshooting may be required. ")]),e("li",null,[e("i",null,[e("b",null,"number")]),t(" When a number (such as 5) is used, iostat will continue displaying statistics for that specified time in seconds. Press Ctrl + c to exit. ")])]),e("p",null,"See the man pages for additional options.")]),e("td",null,[e("b",null,[t("iostat -m -p sda1 "),e("br")]),t(" Lists results for the sda1 partition in MBs. "),e("h2",null,"iostat 5")])]),e("tr",null,[e("td",null,[e("strong",null,"ioping")]),e("td",null,[t(" This tool generates various I/O patterns and lets you monitor I/O speed and latency in real-time. This tool shows disk latency in the same way as ping command shows network latency on Linux or Unix-like systems. "),e("p",null,"Command options include:"),e("ul",null,[e("li",null,[e("b",null,[t("-c "),e("i",null,"count device")]),t(" runs for the number of specified "),e("i",null,"count"),t(" requests for the specified device. ")]),e("li",null,[e("b",null,"-R"),t(),e("b",null,[e("i",null,"device")]),t(" shows the disk seek rate for the specified device. ")])]),e("p",null,"See the man pages for additional options.")]),e("td",null,[e("b",null,"ioping -c 10 /dev/sda"),t(),e("br"),t(" Performs a latency ping ten times on the /dev/sda device. "),e("h2",null,"ioping -R /dev/sda")])]),e("tr",null,[e("td",null,[e("strong",null,"badblocks")]),e("td",null,[t(" A bad sector or block is a section on a disk drive to which data can no longer be written to read from. Included by most Linux distributions, "),e("b",null,"badblocks"),t(" are used to search for bad blocks on a device (usually a disk partition), where the device is the special file corresponding to the device (e.g., /dev/sda). "),e("p",null,"Command options include:"),e("ul",null,[e("li",null,[e("b",null,[t("-b "),e("i",null,"block-size")]),t(" specifies the size of blocks in bytes. The default is 1024. ")]),e("li",null,[e("b",null,[t("-c "),e("i",null,"number of blocks")]),t(" is the number of blocks that are tested at a time. The default is 64. ")]),e("li",null,[e("b",null,[t("-e "),e("i",null,"max bad block count")]),t(" specifies a maximum number of bad blocks before aborting the test. The default is 0, meaning the test will continue until the end of the test range is reached. ")]),e("li",null,[e("b",null,[t("-i "),e("i",null,"input_file")]),t(" reads a list of already existing known bad blocks. Badblocks will skip testing these blocks since they are known to be bad. ")]),e("li",null,[e("b",null,"-n"),t(" uses non-destructive read-write mode. By default, only a non-destructive read-only test is done. This option must not be combined with the -w option, as they are mutually exclusive. ")]),e("li",null,[e("b",null,[t("-o "),e("i",null,"output_file")]),t(" writes the list of bad blocks to the specified file. ")]),e("li",null,[e("b",null,"-s"),t(" shows the progress of the scan by writing out rough percentage completion of the current badblocks pass over the disk. ")]),e("li",null,[e("b",null,"-v"),t(" Verbose mode.")]),e("li",null,[e("b",null,"-w"),t(" uses write-mode test. With this option, badblocks scans for bad blocks by writing some patterns (0xaa, 0x55, 0xff, 0x00) on every block of the device, reading every block, and comparing the contents. This option may not be combined with the -n option, as they are mutually exclusive. ")]),e("li",null,[e("b",null,"-X"),t(" an internal flag to be used only by "),e("b",null,"e2fsck"),t(" and "),e("b",null,"mke2fs"),t(" . It bypasses the exclusive mode in-use device safety check. "),e("br"),e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null,[e("b",null,"Warning"),t(),e("br"),t(" Never use the "),e("b",null,"-w"),t(" option on a device containing an existing file system. This option erases data! If you want to do write-mode testing on an existing file system, use the "),e("b",null,"-n"),t(" option instead. It is slower, but it will preserve your data.")])])])])])])]),e("p",null,"See the man pages for additional options.")]),e("td",null,[e("b",null,"badblocks -v /dev/sda2 > badsectors.txt"),t(),e("br"),t(" Checks for bad blocks using the verbose mode and exports the results into a file named badsectors.txt ")])]),e("tr",null,[e("td",null,[e("strong",null,"xfs_metadump")]),e("td",null,[t(" This command is used to copy the metadata (such as filenames and file sizes) from an XFS file system to a file, but can only be used to copy unmounted file systems or read-only mounted file systems. "),e("h2",null,"xfs_metadump"),e("p",null,"Command options include:"),e("ul",null,[e("li",null,[e("b",null,"-a"),t(" Copies entire metadata blocks.")]),e("li",null,[e("b",null,"-e"),t(" Stops the dump on a read error.")]),e("li",null,[e("b",null,"-g"),t(" Shows dump progress.")]),e("li",null,[e("b",null,"-o"),t(" Disables obfuscation of file names and extended attributes. ")])]),e("p",null,"See the man pages for additional options.")]),e("td",null,[e("b",null,[t("xfs_metadump -o /dev/sda3 /xfs/xfs_dump "),e("br")]),t(" Copies the file system metadata found on "),e("b",null,"/dev/sda3"),t(" to the "),e("b",null,"/xfs/xfs_dump"),t(" file. "),e("br"),e("br"),t(" The "),e("b",null,"-o"),t(" option disables obfuscation of file names and extended attributes. ")])])])],-1),s('<h2 id="_8-7-5-i-o-scheduling" tabindex="-1"><a class="header-anchor" href="#_8-7-5-i-o-scheduling"><span>8.7.5 I/O Scheduling</span></a></h2><p>I/O schedulers provide a way to optimize disk access requests (read/write). In many cases, they do this by merging I/O requests onto similar locations on the disk. Using this method, the drive doesn’t need to seek as often, improving the overall response time for disk operations.</p><p>This lesson covers the following topics:</p><ul><li>I/O schedulers</li><li>View I/O schedulers</li><li>Change I/O schedulers</li></ul><h3 id="i-o-schedulers" tabindex="-1"><a class="header-anchor" href="#i-o-schedulers"><span>I/O Schedulers</span></a></h3><p>Linux provides several I/O schedulers to choose from. The following table gives a brief summary of three such schedulers:</p><table><thead><tr><th>Scheduler</th><th>Description</th></tr></thead><tbody><tr><td>Noop</td><td> Noop is the simplest scheduler. It places all I/O requests into a First in/First Out (FIFO) queue. In addition, read/write requests of a similar purpose are also combined to reduce the number of disk operations and increase the length of system calls. This scheduler is often used for systems that do not need an I/O scheduler. For example, when a virtual machine (VM) is running on a host computer that&#39;s already using its own I/O scheduler. </td></tr><tr><td>Deadline</td><td> The Deadline scheduler creates a read queue and a write queue. Since each I/O request has an associated timestamp (used by the kernel for an expiration time), the Deadline scheduler utilizes this timestamp to push I/O requests that&#39;ve reached their deadline to their highest priority. <p> The default Deadline values are 500 ms for read operations and 5,000 ms for write operations. If needed, these values can be adjusted. Because of these values, the Deadline scheduler is often considered the optimal scheduler for read-heavy workloads. </p></td></tr><tr><td>CFQ</td><td> The Complete Fairness Queuing (CFQ) input/output (I/O) scheduler works by creating a per-process I/O queue. <p> The goal of CFQ is to provide a fair I/O priority to each process. This is accomplished by first ordering the queues to reduce disk seeking and then servicing these per-process I/O queues, in a round-robin fashion. The benefits of using the CFQ scheduler is that it tries to provide each process with the same priority for disk access. The disadvantage is that it makes this scheduler less optimal for environments that might need to prioritize one request type (such as reads) from a single process. </p></td></tr></tbody></table>',7),e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null,[t(" Each disk device has its own scheduler and can be configured independent of the other devices. You can use the "),e("b",null,"lsblk -o KNAME,TYPE,SIZE,MODEL"),t(" command to view these devices.")])])],-1),s(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">View I/O Schedulers</span>
<span class="line"><span class="token function">cat</span> /sys/block/</span>
<span class="line">noop <span class="token punctuation">[</span>deadline<span class="token punctuation">]</span> cfq</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, this system is using the scheduler named Deadline. Also notice that the Noop and CFQ schedulers are available.</p><h3 id="change-i-o-schedulers" tabindex="-1"><a class="header-anchor" href="#change-i-o-schedulers"><span>Change I/O schedulers</span></a></h3><p>Changing which I/O scheduler you use can be done at runtime or by modifying the Grub boot loader. When changing the scheduler at runtime, the change is applied immediately, but on the next boot, the system will run the default scheduler. Modifying the scheduler via the Grub boot loader causes the system to use the same scheduler each time the system starts.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;[scheduler]&quot;</span> <span class="token operator">&gt;</span> /sys/block/<span class="token punctuation">[</span>disk device<span class="token punctuation">]</span>/queue/scheduler</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;cfq&quot;</span> <span class="token operator">&gt;</span> /sys/block/sda/queue/scheduler</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const h=l(a,[["render",r],["__file","07.html.vue"]]),c=JSON.parse('{"path":"/08/07.html","title":"Section 8.7 File System Maintenance","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 8.7 File System Maintenance","description":"some description"},"headers":[{"level":2,"title":"8.7.1 File System Maintenance","slug":"_8-7-1-file-system-maintenance","link":"#_8-7-1-file-system-maintenance","children":[]},{"level":2,"title":"8.7.2 Maintaining File Systems","slug":"_8-7-2-maintaining-file-systems","link":"#_8-7-2-maintaining-file-systems","children":[]},{"level":2,"title":"8.7.3 File System Maintenance Facts","slug":"_8-7-3-file-system-maintenance-facts","link":"#_8-7-3-file-system-maintenance-facts","children":[{"level":3,"title":"File System Integrity Commands","slug":"file-system-integrity-commands","link":"#file-system-integrity-commands","children":[]}]},{"level":2,"title":"8.7.5 I/O Scheduling","slug":"_8-7-5-i-o-scheduling","link":"#_8-7-5-i-o-scheduling","children":[{"level":3,"title":"I/O Schedulers","slug":"i-o-schedulers","link":"#i-o-schedulers","children":[]},{"level":3,"title":"Change I/O schedulers","slug":"change-i-o-schedulers","link":"#change-i-o-schedulers","children":[]}]}],"git":{"updatedTime":1736669805000},"filePathRelative":"08/07.md"}');export{h as comp,c as data};
