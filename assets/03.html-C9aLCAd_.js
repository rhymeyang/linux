import{_ as a,c as n,a as o,b as t,d as e,o as s}from"./app-C99zI2Uc.js";const r={};function l(d,i){return s(),n("div",null,i[0]||(i[0]=[o('<p>As you study this section, answer the following questions:</p><ul><li>What utility should you use to manage disk partitions?</li><li>Which command allows you to back up and restore a disk&#39;s partition table?</li><li>How many partitions does GPT allow on a storage device?</li><li>Why should you carefully plan your partition changes before using <b>parted</b> ?</li></ul><p>In this section, you will learn to:</p><table class="terms"><thead><tr><th>Term</th><th scope="col" class="fw-bold"> Definition</th></tr></thead><tbody><tr><td>GUID</td><td>A globally unique identifier or number that is used to uniquely identify an object.</td></tr><tr><td>GPT</td><td>The GUID Partition Table scheme that replaces the MBR partitioning scheme.</td></tr></tbody></table><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th>Exam</th><th>Objective</th></tr></thead><tbody><tr><td>TestOut Linux Pro</td><td> 2.1 Manage storage devices <ul><li>Create and manage disk partitions</li></ul></td></tr><tr><td>CompTIA Linux+ XK0-005</td><td> 1.1 Summarize Linux fundamentals <br><ul><li>Storage concepts</li><li style="list-style:none;display:inline;"><ul><li>Partition type</li><li style="list-style:none;display:inline;"><ul><li> GUID [globally unique identifier] Partition Table (GPT) </li></ul></li></ul></li></ul> 1.3 Given a scenario, configure and manage storage using the appropriate tools <br><ul><li>Disk partitioning</li><li style="list-style:none;display:inline;"><ul><li>parted</li></ul></li></ul></td></tr></tbody></table><h2 id="_8-3-1-guid-partitions" tabindex="-1"><a class="header-anchor" href="#_8-3-1-guid-partitions"><span>8.3.1 GUID Partitions</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>GUID Partitions 00:00-00:15 In this lesson, we&#39;re going to discuss how to manage GUID partitions on a Linux system. The GUID partitioning system is a newer partitioning scheme, and can be compared to the MBR system, which is older.</p><p>MBR has many limitations.</p><p>MBR Limitations 00:15-01:03 Let&#39;s look at a few. First, the master boot record has to be installed in the first 512 bytes of hard disk drive, and it also only allows four primary partitions. Next, the default block size is 512 bytes, so the MBR partition is limited to two terabytes in size. In the 1980s, that was a huge amount of space. Not so today.</p><p>To address these limitations, many patches and work-arounds have been implemented over the years. One of these is using logical block addressing, or LBA, which allows the use of larger hard drives. Another is using 4 KB sectors with MBR partitions to increase the partition size. We can also define one of the four partitions as an extended partition which can hold many logical partitions.</p><p>MBR is still in use on some systems; however, the newer disk partitioning scheme called Global Unique Identifier Partition Table Scheme, or GUID, is intended as an improved replacement for MBR.</p><p>GUID 01:03-01:37 GUID is also called GPT for GUID Partition Table. GPT is part of the overall Unified Extensible Firmware Interface, or UEFI specification, which is designed to replace the BIOS on most computer systems with a better software to hardware interface.</p><p>GPT partitioning can even be used on older Linux systems that don&#39;t have the newer UEFI interface.</p><p>GPT Advantages 01:37-02:19 GPT has several advantages over MBR. First, it has only one type of partition, not three. Next, GPT supports gigantic disk partitions, measured in zebibytes. With GPT, you have the option of 128 partitions per disk compared to MBR&#39;s four.</p><p>Additionally, GPT provides fault tolerance by storing a copy of the partition table in the first and last sectors on the disk. If one copy gets corrupted, the other can take over. GPT also performs a cyclic redundancy check, or CRC, to verify the integrity of the partition table. Every hard disk and every partition are also assigned unique IDs.</p><p>gdisk Utility 02:19-03:33 To manage GPT partitions, we use the gdisk utility, which works similarly to fdisk. Let&#39;s look at some of the uses of gdisk. It can convert an MBR partition table to a GPT partition table, or verify a hard drive. You can use it to create and delete GPT partitions, or display information about a partition. gdisk can change the name of the type of partition, or backup and restore a hard disk partition table. Newer versions of fdisk can also work with GPT partition tables.</p><p>For example, I added a second hard drive, and I wanted to create a GPT partition to store data. To do this, I entered gdisk at the shell prompt plus the device I wanted to manage the partition on /dev/sdb. The syntax is the same here as the fdisk syntax.</p><p>You can use the question mark (?) command to see a list of all the commands. Here you can see d is for deleting partitions, l for listing known partitions, n for creating new partitions, p for printing the partition table, and q allows quitting without saving changes. Just like fdisk, gdisk doesn&#39;t write the changes to the disk until you commit them with the w command. You can use the t command to change a partition&#39;s type.</p><p>To create a new partition, enter n at the prompt and specify the partition number.</p><p>Creating a New GPT Partition 03:33-04:07 You specify both the first and the last sector as well. By default, gdisk picks the next available sector for the first sector. Here we have no previous partitions, so I chose the first sector available. Then, I specified the size, or sector. I chose 10 gigs. Next, we specify the partition type. Notice here that we used the default type code of 8300 for a standard Linux partition, which is very similar to MBR&#39;s code for a standard partition, which is 83.</p><p>In addition to the gdisk command, you can also use the parted command at the shell prompt to manage GPT partitions.</p><p>parted Utility 04:07-04:57 parted stands for partition editor. You can use parted to create, delete, or edit partitions on your disk. It&#39;s important to remember that unlike gdisk, the parted command writes the partition changes you specify immediately to the disk. This leaves no way to undo your changes.</p><p>To use parted, enter the parted command at the shell prompt. Next, use the select command to specify the hard disk you want. If you don&#39;t specify one, parted will pick the first hard drive on the system. Since that&#39;s the hard drive that has all the system and home partitions, this could cause problems if it&#39;s selected for you. Here we used the select command to choose the second hard disk, which is /dev/sdb.</p><p>Now to create a new partition, you can use the mkpart command, plus a name for the partition, and the file system we want to use on the partition.</p><p>Creating a New Partition with parted 04:57-05:43 (If you create a partition with gdisk, you have to create a file system later to format the partition, before you can save information to it. If using parted, the file system is included during the creation of the partition.) Then we specify the starting point on the disk, and we do that in megabytes.</p><p>In this case, we&#39;ll create a partition that starts at about the 11 GB point on the disk. So, we&#39;ll specify a starting value of 11264, and then it needs an ending point. For a 4 GB partition, we&#39;ll end it around 15 GB.</p><p>To view a partition you created, use the print command at the parted prompt. You can also use the other commands shown here.</p><p>Other parted Commands 05:43-06:10 To rename a partition, use the name command and the new name. To move a partition, use the move command with the partition where you&#39;re moving it to and the starting and ending points.</p><p>To resize the partition, use the resize command followed by the name of the partition plus the new starting and ending points. To delete a partition, use the rm command and the name of the partition to be removed.</p><p>That&#39;s it for this lesson.</p><p>Summary 06:10-06:23 In this lesson, we discussed how to manage GUID or GPT partitions on a Linux system with the gdisk utility or parted utility.</p><h2 id="_8-3-2-managing-guid-partitions-with-gdisk" tabindex="-1"><a class="header-anchor" href="#_8-3-2-managing-guid-partitions-with-gdisk"><span>8.3.2 Managing GUID Partitions with gdisk</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Manage GUID Partitions 00:00-00:20 We are going to practice managing GUID partitions using gdisk. To begin, we need to switch to the root account. This system uses two hard disks: sda is the system hard disk where Linux is installed; sdb is a new hard disk drive with no partitions on it.</p><p>The gdisk Command 00:20-04:12 We begin by using the gdisk command. Then, specify the name of the device we want to manage: /dev/sdb. gdisk will scan for a partition table. This is a brand-new hard disk drive with nothing on it, and gdisk reports that no partition tables were found.</p><p>We can run the question mark (?) command to view the help screen. This displays a list of all the commands we can use.</p><p>To print the partition table, we can use the p command. Since there are no partitions on the drive, we can create a new partition.</p><p>The n command is used to create new partitions. We enter n and are asked to specify the partition number that we want to create. With gdisk we can create up to 128 different partitions on a given disk. gdisk doesn&#39;t have primary or extended partitions, all partitions are just a partition.</p><p>We&#39;ll create partition number 1. We&#39;re asked to specify the first sector on the hard drive to start the partition. We can accept the default of 2048 by pressing Enter. For the partition, we&#39;ll be asked to specify the last sector or a partition size. We could attempt to determine what the last sector should be with the information given on the screen. However, it&#39;s sometimes simpler to provide a partition size. Our hard drive is 20 gigabytes. We&#39;ll make the first partition 10 gigabytes.</p><p>To size our partition to 10 gigabytes we will type the plus sign (+), the number 10, and a capital G to signify gigabytes. Partition sizes can be in kilobytes, megabytes, gigabytes, terabytes, petabytes, and larger. The gdisk utility automatically calculates the last sector for the partition.</p><p>Next, we need to specify the type of file system we want to create. We can enter an uppercase L to view a list of available codes. A standard Linux partition uses code 8300. There are many options for different situations, such as Linux swap partitions, Apple HFS/HFS+ for Mac OS, and others. Let&#39;s create a standard Linux partition by typing 8300 and pressing Enter.</p><p>We type p to use the print command again to output a list of partitions. We can see the new partition we created, the beginning and ending sectors, that the size is 10 GB, and that this is a standard Linux partition.</p><p>In this scenario, we&#39;re using a removable hard drive that will be used with Windows and Linux systems. Windows systems don&#39;t work well with Linux partitions. We&#39;ll create another partition on the disk for use in Windows environments.</p><p>Let&#39;s use the n option again to create a new partition. This is partition number 2. We&#39;ll use the default first sector that&#39;s available – the sector on the hard drive right after the ending sector of the first partition. We&#39;ll size this partition to 10 gigabytes.</p><p>We&#39;ll press the L key again to view the available partition types. To be compatible with Windows, we&#39;ll use the hex code, 0700, Microsoft basic data.</p><p>We can view both partitions by running the print command with p. So far, all the changes we have made are only made in memory; they are not committed to the disk. This allows us to make changes until we find a final configuration we&#39;re satisfied with.</p><p>We use the w command to write the changes to the hard disk. We&#39;re warned that the changes will overwrite data that may be on the disk. It&#39;s important to backup data from disks we&#39;re formatting to not lose data. This is a new drive with no data on it. We can type Y and press Enter without worrying about overwriting any data.</p><p>Once successful, we&#39;ll have gdisk select the drive again by running gdisk /dev/sdb. We can use the print option to view the two new partitions on the disk.</p><p>To delete partitions, we use the d command. We can delete partition number 2, print, and see if partition 2 is deleted. Next, we will delete partition number 1, print again, and see that both partitions have been removed. Let&#39;s write the changes to the disk with the w command. We&#39;ll be warned that we are about to destroy data. Type Y and press Enter. All partitions have been removed from the hard drive.</p><p>Summary 04:12-04:21 In this demo we learned how to manage GUID partitions with gdisk.</p><h2 id="_8-3-3-managing-guid-partitions-with-parted" tabindex="-1"><a class="header-anchor" href="#_8-3-3-managing-guid-partitions-with-parted"><span>8.3.3 Managing GUID Partitions with parted</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Manage GUID Partitions 00:00-00:22 In this demo, we&#39;re going to practice managing GUID partitions with the parted utility. To begin, we need to switch to the root account. This system will use two hard disks. sda is my system hard disk where the Linux operating system is installed; sdb is a new hard disk drive that doesn&#39;t have any partitions on it.</p><p>The parted Command 00:22-02:07 The named parted stands for partition editor. Parted can be used to add, delete, and edit the partitions on your disk. Parted can be dangerous since the utility writes the partition changes that you specify immediately to the disk. Parted writes changes as they&#39;re being made in the terminal.</p><p>To use parted, enter the parted command. By default, parted selects sda, the main Linux system drive on this system. Any changes are made to the Linux system drive and could erase the Linux OS from your hard drive. We need to type select /dev/sdb to switch parted to our secondary drive. After selecting the appropriate hard disk, sdb, we can create a new partition using the mkpart command. We&#39;ll be prompted give the partition a name. Let&#39;s type DATA. Parted differs from gdisk by requiring us to not only define a partition, but to create a file system for the partition at the same time. We&#39;ll use the ext4 file system.</p><p>After selecting a file system, we must specify the beginning of the partition on the disk. Parted requires you to specify the starting point on the disk in terms of megabytes. We&#39;ll start at 2 MB on the disk. This instructs parted to start creating the partition near the beginning of the hard disk.</p><p>Next, we&#39;ll be asked to specify where the partition should end. If we wanted to create a 10 gigabyte partition, we would need to convert 10 gigabytes to megabytes. 10 gigabytes is 10,240 megabytes. At this point, the partition has been written to disk.</p><p>We can use the print command to view the new partition. Here, we see partition number 1: its starting point, ending point, total size, the file system used, and the name of the partition. To exit parted, we can type quit.</p><p>Summary 02:07-02:18 And that&#39;s everything for this demonstration. In this demo, we discussed managing GUID partitions with parted.</p><h2 id="_8-3-4-guid-partition-management-facts" tabindex="-1"><a class="header-anchor" href="#_8-3-4-guid-partition-management-facts"><span>8.3.4 GUID Partition Management Facts</span></a></h2><p>The Globally Unique Identifier Partition Table (GPT) scheme was introduced as a replacement for the Master Boot Record (MBR) partitioning scheme.</p><p>This lesson covers the following topics:</p><ul><li>GPT advantages</li><li>GPT management tools</li></ul><h3 id="gpt-advantages" tabindex="-1"><a class="header-anchor" href="#gpt-advantages"><span>GPT Advantages</span></a></h3><p>GPT has several advantages over using MBR. For example, GPT:</p><ul><li>Uses only one type of partition. There are no primary, extended, or logical partitions.</li><li>Supports extremely large storage devices and partitions.</li><li>Allows up to 128 partitions on a storage device.</li><li>Stores a copy of the partition table in the first and last sectors of the storage device. If one copy gets corrupted, the redundant copy can be used instead.</li><li>Verifies the partition table&#39;s integrity by using a cyclic redundancy check (CRC).</li><li>Assigns unique IDs to each storage device and partition.</li></ul><h3 id="gpt-management-tools" tabindex="-1"><a class="header-anchor" href="#gpt-management-tools"><span>GPT Management Tools</span></a></h3><p>You can use the following utilities to manage GPT partitions:</p>',70),t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Command"),t("th",null,"Function"),t("th",null,"Examples")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("b",null,"gdisk")]),t("td",null,[t("b",null,"gdisk"),e(" does the following: "),t("ul",null,[t("li",null,"Creates and deletes GPT partitions"),t("li",null,"Displays information about a partition"),t("li",null,"Changes the partition name and type"),t("li",null,"Verifies a hard disk"),t("li",null,"Backs up and restores a disk's partition table"),t("li",null," Converts an MBR partition table to a GPT partition table. ")]),t("h2",null,"gdisk"),t("ul",null,[t("li",null,[t("b",null,"?"),e(" displays the help screen.")]),t("li",null,[t("b",null,"b"),e(" backs up GPT information to a file.")]),t("li",null,[t("b",null,"c"),e(" changes a partition's name.")]),t("li",null,[t("b",null,"d"),e(" deletes a partition.")]),t("li",null,[t("b",null,"i"),e(" displays detailed partition information.")]),t("li",null,[t("b",null,"l"),e(" lists partition type codes.")]),t("li",null,[t("b",null,"n"),e(" adds a new partition.")]),t("li",null,[t("b",null,"o"),e(" creates a new GUID partition table.")]),t("li",null,[t("b",null,"p"),e(" prints the partition table.")]),t("li",null,[t("b",null,"q"),e(" quits gdisk without saving changes.")]),t("li",null,[t("b",null,"s"),e(" sorts the list of partitions.")]),t("li",null,[t("b",null,"t"),e(" changes a partition's type code.")]),t("li",null,[t("b",null,"v"),e(" verifies a storage device.")]),t("li",null,[t("b",null,"w"),e(" writes changes to the partition table of the storage device and exits "),t("b",null,"gdisk"),e(" . ")])])]),t("td",null,[e(" gdisk /dev/sdc opens "),t("b",null,"gdisk"),e(" and edits the partition table on the third storage device in the system. ")])]),t("tr",null,[t("td",null,[t("b",null,"parted")]),t("td",null,[t("b",null,"parted"),e(" does the following: "),t("ul",null,[t("li",null,"Creates and deletes GPT partitions"),t("li",null,"Modifies GPT partitions")]),t("div",null,[t("div",null,[t("div",null,[t("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[t("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[t("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),t("div",null,[t("span",null,[e(" The "),t("b",null,"parted"),e(" command writes partition changes to disk immediately. Carefully plan any partition changes you want to make before using this command.")])])])])]),e(" Run "),t("b",null,"parted"),e(" at the shell prompt. The following commands can be used within "),t("b",null,"parted"),e(" : "),t("ul",null,[t("li",null,[t("b",null,[e("select "),t("i",{class:"c2 fs-italicize"}," device_name")]),e(" identifies which storage device to edit. ")]),t("li",null,[t("b",null,[e("mkpart "),t("i",null,"partition_type start_point end_point")]),e(" creates a new partition. For example: "),t("ul",null,[t("li",null,[e(" To create a standard Linux partition, specify "),t("b",null,"Linux"),e(" as the partition type. ")]),t("li",null," To create a partition that starts at 1 GB and ends at 21 GB, specify a starting point of 1024 and an end point of 21504. ")])]),t("li",null,[t("b",null,"print"),e(" displays a list of partitions on the device. ")]),t("li",null,[t("b",null,[e("name "),t("i",null,"partition_name")]),e(" renames a partition. ")]),t("li",null,[t("b",null,[e("move "),t("i",null,"partition start_point end_point")]),e(" moves a partition to a different location on the storage device. ")]),t("li",null,[t("b",null,[e("resize "),t("i",null,"partition start_point end_point")]),e(" resizes a partition. ")]),t("li",null,[t("b",null,[e("rm "),t("i",null,"partition")]),e(" deletes a partition. ")])])]),t("td",null,[t("b",null,"parted"),e(" starts the parted utility.")])])])],-1)]))}const h=a(r,[["render",l],["__file","03.html.vue"]]),u=JSON.parse('{"path":"/08/03.html","title":"Section 8.3 GUID Partitions","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 8.3 GUID Partitions","description":"some description"},"headers":[{"level":2,"title":"8.3.1 GUID Partitions","slug":"_8-3-1-guid-partitions","link":"#_8-3-1-guid-partitions","children":[]},{"level":2,"title":"8.3.2 Managing GUID Partitions with gdisk","slug":"_8-3-2-managing-guid-partitions-with-gdisk","link":"#_8-3-2-managing-guid-partitions-with-gdisk","children":[]},{"level":2,"title":"8.3.3 Managing GUID Partitions with parted","slug":"_8-3-3-managing-guid-partitions-with-parted","link":"#_8-3-3-managing-guid-partitions-with-parted","children":[]},{"level":2,"title":"8.3.4 GUID Partition Management Facts","slug":"_8-3-4-guid-partition-management-facts","link":"#_8-3-4-guid-partition-management-facts","children":[{"level":3,"title":"GPT Advantages","slug":"gpt-advantages","link":"#gpt-advantages","children":[]},{"level":3,"title":"GPT Management Tools","slug":"gpt-management-tools","link":"#gpt-management-tools","children":[]}]}],"git":{"updatedTime":1736669805000},"filePathRelative":"08/03.md"}');export{h as comp,u as data};
