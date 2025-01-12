import{_ as t,c as a,a as s,o as i}from"./app-C99zI2Uc.js";const o="/linux/images/08/cat-raid.png",r={};function n(l,e){return i(),a("div",null,e[0]||(e[0]=[s('<p>As you study this section, answer the following questions:</p><ul><li>What are the common types of storage devices?</li><li>How is the Linux file system tree different from Windows?</li><li>What is block storage?</li></ul><p>In this section, you will learn to:</p><ul><li>Use lsblk</li></ul><p>The key terms for this section include:</p><table class="terms"><thead><tr><th>Term</th><th>Definition</th></tr></thead><tbody><tr><td>Block storage</td><td> Storage used by Linux to store traditional data in blocks or chunks of space (also called a block device). </td></tr><tr><td> Master Boot Record <br> (MBR) </td><td>The traditional partition type used for storage devices.</td></tr><tr><td>Globally Unique Identifier (GUID) Partition Table (GPT)</td><td> The successor to MBR partition tables. It provides much more storage capability and partition flexibility. </td></tr></tbody></table><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th>Exam</th><th>Objective</th></tr></thead><tbody><tr><td>TestOut Linux Pro</td><td> 2.1 Manage storage devices <ul><li>Create and manage disk partitions</li></ul></td></tr><tr><td>CompTIA Linux+ XK0-005</td><td> 1.1 Summarize Linux fundamentals <ul><li> Storage concepts <ul><li>File storage</li><li>Block storage</li><li>Object storage</li><li>Partition type</li><li>FUSE</li><li> RAID <ul><li>Striping</li><li>Mirroring</li><li>Parity</li></ul></li></ul></li></ul> 1.3 Configure and manage storage using appropriate tools <ul><li> Storage area network (SAN) / network-attached storage (NAS) <ul><li>multipathd</li><li> Network filesystems <ul><li>Network File Systems (NFS)</li><li> Server Message Block/Common Internet File System (CIFS) </li></ul></li></ul></li></ul><p></p></td></tr></tbody></table><h2 id="_8-1-1-storage-types" tabindex="-1"><a class="header-anchor" href="#_8-1-1-storage-types"><span>8.1.1 Storage Types</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Storage Types 00:00-01:09 A computer system without storage is like a desert without sand. We have a box of electronics, but nothing that makes it work. Storage is the lifeblood of a computer system. It holds the operating system, programs, files, and data. In this lesson, we&#39;ll discuss the various types of storage, their differences, and how to utilize them.</p><p>Storage devices vary in size, shape, and use. There are two basic categories for storage: internal and external. Internal storage is inside the computer case. External means the storage is elsewhere—usually accessed via a network connection. Most systems have some sort of internal storage that contains local data requirements, such as an operating system, applications, and local data. External storage may contain common applications and shared data. Internal storage includes a magnetic, optical, and solid state. External storage may consist of the same type of storage devices. However, it&#39;s managed separately and usually has a much higher capacity than local storage—often in the hundreds of terabytes. This storage is accessed via networked devices such as SAN or NAS.</p><p>Local Storage 01:09-03:26 Inside most computer systems, there&#39;s some kind of internal storage with at least the system&#39;s operating system installed and configured. The first type is the magnetic or rotational drive. Magnetic hard drives were the first type of mass storage available for microcomputers and have remained since PCs have used mass storage. While they&#39;re still used, they&#39;re being replaced with flash-based solid state drives, or SSD. SSDs are more common today than magnetic drives due to their speed for storing and retrieving data. They&#39;re more expensive than magnetic storage and don&#39;t have the capacity that magnetic has. However, they&#39;re still a better choice for most PCs and notebooks. Solid state also comes in a different form-factor known as M2 or its update, non-volatile memory express, or NVMe.</p><p>These storage types provide the ability to write and read data. Another type of data storage is optical. Optical storage can be thought of as write-once-read-many or WORM. While there are media available that provide for erasing and reusing optical storage, WORM drives are much more common. DVD and BluRay movies are examples of optical media. Optical drives were once the primary method for transporting data. Now, thumb drives or USB drives are more popular since they&#39;re much less expensive, very easy to use, and are available in much higher capacities than optical.</p><p>When adding storage to a local system, there may be a requirement to manage large data stores. Many systems have the ability to manage multiple storage devices, and Linux provides a method for this management called Linux Volume Management or LVM. Suppose you had a system with four physical storage devices. Via Linux, you create a partition on each device that spans the entire device, which becomes the physical volume. Via LVM management tools, you create a Logical volume group or VG by combining the space available on the physical volumes into a pool of storage space. With the VG in place, you can now create Logical volumes or LVs and format them with a Linux filesystem for general use. You simply configure an LV with the amount of space you wish to consume from the space available on the VG, define the Linux mount point, and format the LV with BtrFS, ext4, or any other available Linux file system. Once formatted, the LV is ready to use.</p><p>RAID 03:26-06:46 Depending on whom you talk to, you may get a different definition of RAID. Most will say RAID is an acronym for Redundant Array of Independent Disks. There are several different array types designated by a number. Each number designates a different type of array that performs a different function. All RAID numbers provide a model for storage that&#39;s handled a bit differently than a single storage device could. Some add capacity, and others add redundancy. The following is a partial list of common RAID levels:</p><p>RAID 0 is striping. The array&#39;s storage capacity is the sum of all storage devices in the array. This means no additional cost or storage loss is using this RAID level. Data is written and read across all drives in the array, making it the fasted array in RAID. The problem is that there&#39;s no redundancy, so if a single drive fails, the entire array fails. Backups are very important. RAID 1 is mirroring. This is a costly level since the array&#39;s storage capacity is halved. It requires two drives, but only provides the capacity of a single drive. This level provides redundancy. Data is written to both drives simultaneously, causing a small performance delay. This delay is often imperceptible, and reads often see a performance increase. The benefit is redundancy. RAID 1 often provides fault tolerance to a server&#39;s boot disk. Should one of the two drives fail, the other takes over without skipping a beat.</p><p>One of the most popular RAID levels is RAID 5. RAID 5 is striping with parity. Data is striped, just like RAID 1, across all of the drives in the array. The difference between RAID 1 and RAID 5 is parity. This means each drive reserves a portion of its capacity to store information about the other drives. Parity reduces overall capacity but adds redundancy. If a single drive in the array fails, the surviving drives use their parity to take its place.</p><p>Suppose you have three 8 TB drives in your system. For striping, we combine the space of all the drives giving us a 24 TB capacity. We have to add parity which takes away from the total capacity. Each drive&#39;s capacity is reduced by a fraction equal to 1 divided by the number of drives in the array. In this example, we have three drives, so we must reduce the capacity of 1 divided by 3 or one-third. Another way to measure the lost capacity is to remove the capacity of a single drive from the array. This calculation provides the total available capacity of the RAID 5 array.</p><p>Should a single drive fail, the others will utilize their parity to keep the array running. Should this happen, the array will be in a degraded state until the failed drive is replaced and the RAID rebuilds the drive.</p><p>RAID 6 is similar to RAID 5 as it&#39;s striping with parity. The difference is that RAID 6 uses double parity and can withstand a loss of 2 drives from the array. The net capacity of the RAID 6 array is the total capacity minus the capacity of 2 drives.</p><p>There are other RAID levels that combine the ones already discussed. RAID 1+0 or RAID 10 is a mirror of stripes, and RAID 0+1 or RAID 01 is a stripe of mirrors.</p><p>The RAID levels available to you are defined by the RAID controller in your system. Several vendors manufacture RAID controllers, and some are proprietary. Consult your RAID controller&#39;s implementation guide to find out which RAID levels are supported by your system. Additionally, Linux LVM provides the ability to utilize software to create RAID levels, such as mirroring or striping with parity.</p><p>External Storage 06:46-07:49 So far, we&#39;ve discussed internal storage. Now, we&#39;ll discuss external storage. Simply put, external storage is managed storage available using networking and network protocols. It&#39;s often a higher capacity found in most internal systems and is available to devices connected to an internal network. The storage may be in the same room, building, or halfway around the world.</p><p>One of the more common external storage methods is Network Attached Storage or NAS. As the name implies, the storage is connected to the network and is accessed using network protocols. Your system may access the data via the data LAN or have specific network cards that are specifically connected to a storage network. Most often, NAS uses shares similar to an MS Windows or a Linux share and provides access to users. Another method is the Storage Area Network or SAN. A SAN provides all the connectivity, storage, and control to systems. Generally, a SAN provides external storage to servers, including diskless servers. There&#39;s a direct connection, usually fiber optic, from the server to the storage array.</p><p>iSCSI 07:49-09:25 There&#39;s another method for connecting servers to a SAN. iSCSI provides another connectivity option using a standard Ethernet infrastructure. iSCSI sends commands to the SAN using Ethernet for transport rather than a direct fiber optic connection. The iSCSI initiator sends SCSI commands to the iSCSI target, and the target provides the requested data. Often a separate storage Ethernet network is created for iSCSI communications using higher-speed Ethernet devices such as 10 Gbps or faster. Linux can operate as an iSCSI target and iSCSI initiator. Depending on your distribution, you may have to add the iSCSI components.</p><p>There are a few steps needed to establish connectivity to an iSCSI target. Remember, we&#39;re using Ethernet, so we have to define the device we&#39;re connecting to. The first step is ensuring you have the iSCSI initiator tools for your distribution. One example is shown here. After the tools are installed, consult the tools manual for the correct usage of the tools to connect to the iSCSI target. The method shown here is for a specific distribution. Your method may differ. Once you have the tools, you need to find your initiator&#39;s name. We need to find the iSCSI-qualified name or IQN for the iSCSI target. We need to know its IP address and send it a query to find its name. Here we use the ISCSI administrator tool to send a discovery for the send target type at the IP address listed. With the IQN, we can now connect to the target. We need to look in the messages database to find the connected iSCSI device name. Now, we have to format the device. Once the device is formatted, it can be mounted to the local filesystem.</p><p>Summary 09:25-09:46 That&#39;s all we have for this lesson. In this lesson, you learned about different storage types. The first type was internal storage. You then learned about RAID and RAID levels. Next, we discussed external storage, NAS, and SAN. Finally, we discussed iSCSI and showed connecting an initiator to a target.</p><h2 id="_8-1-2-fuse" tabindex="-1"><a class="header-anchor" href="#_8-1-2-fuse"><span>8.1.2 FUSE</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Filesystem in Userspace 00:00-00:17 In this lesson, we&#39;re going to look at creating a virtual file system, or VFS, in the user space. File systems built in the user space are known as FUSE. Let&#39;s quickly review the importance of file systems.</p><p>What is FUSE? 00:17-01:24 Hard drives are large unallocated disks used for storing data. Alone they are not very useful. When using file systems to organize and save our data, the computer saves our files, folders, and configurations. Also, users can move and save files. File systems are very useful but come with a few issues.</p><p>First, typically, only users with administrative access are allowed to make changes to the file system and protected portions of the hard drive. They are also the only users that can mount and unmount different hard drives or partitions.</p><p>Second, file systems can be large and complex to navigate. With larger hard drives available, file systems continue to grow.</p><p>Modern systems use RAIDs, which spreads the file system across multiple drives and makes the system even more complex.</p><p>Last, file systems live in the kernel space for operating systems, meaning the OS is responsible for managing the file system. This can make debugging file system issues difficult. And while debugging, we have a greater chance of crashing the machine.</p><p>Enter FUSE.</p><p>FUSE 01:24-01:53 FUSE stands for file system in user space. The idea is that we set aside portions of the file system in use by users to create a virtual file system, or VFS. Once this portion of the file system is set aside, we create a FUSE kernel module named fuse.ko and insert it into the kernel.</p><p>This creates a tool that users can use to load or mount the virtual file system without needing administrative privileges.</p><p>Parts of FUSE 01:53-02:27 In order to use FUSE, you&#39;ll need 3 elements installed on your Linux System. These elements typically need to be installed by an Administrator.</p><p>First, a kernel module that can be used to load the FUSE VFS.</p><p>Second, a user space library to interact with the FUSE VFS. This is typically one of the libfuse packages.</p><p>Third, a mount utility to give the user permissions to mount, as well as allow the system to mount, the FUSE VFS.</p><p>Now, let&#39;s take a look at the advantages and purpose of using FUSE.</p><p>Purpose of FUSE 02:27-03:11 FUSE gives users more control over file operations. It provides a way for non-privileged users to create and mount file systems, restrict access, and give services or programs full permissions to entire directories or files.</p><p>The file system is not managed by the kernel, but rather opened by the kernel. Because of this we can easily port or move the file system between machines, or make it available to resources such as containers or virtual machines.</p><p>Lastly, the fuse.ko kernel module is used to access the FUSE system, but doesn&#39;t contain the actual file system. Bugs in the VFS won&#39;t affect the kernel, which provides a stable system environment.</p><p>Summary 03:11-03:26 In this lesson, we talked about the file system in user space or FUSE. We looked at the requirements in order to run FUSE and the purpose of creating FUSE virtual file systems.</p><h2 id="_8-1-3-raid-on-linux" tabindex="-1"><a class="header-anchor" href="#_8-1-3-raid-on-linux"><span>8.1.3 RAID on Linux</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>RAID on Linux 00:00-00:16 In this lesson, we&#39;re going to look at how Linux builds and manages RAID. Linux typically creates software RAIDs, and these are installed on the Linux kernel and loaded by the boot loader. Let&#39;s take a closer look at how this works.</p><p>mdadm 00:16-00:47 Linux builds software RAIDs with the multiple device administration tool, or mdadm. Let&#39;s say that we have five hard drives. Each drive will automatically be assigned a drive name, beginning with sda. To create a software RAID, Linux builds a new disk device that begins with md, which is short for multiple device. Then it gets assigned a device number, usually starting with zero. Now, if we want to use this RAID as a boot device for Linux, we need to set aside partitions on one of the drives to be used as the /boot directory.</p><p>Configure the Boot Disk 00:47-01:13 So let&#39;s look at our first hard disk device, sda. It&#39;ll be split into three partitions. Each one will receive the device name, sda, followed by which partition number it is. First, we need to set aside 1 megabyte to be a BIOS grub spacer, and we need to create a partition to house the /boot directory. The remaining space will be used as a RAID component.</p><p>Once the boot device is configured, we can finish building the RAID.</p><p>Complete the RAID 01:13-01:52 Partition 3, which is /dev/sda3 on Disk 1, and the remaining 4 disks—sdb, sdc, sdd, and sde—are the ones we&#39;ll use. They&#39;ll be marked as components of the new RAID, which is md0, and be used to create the new device, /dev/md0.</p><p>Here, we have a sample of how a new RAID 5 will look on an Ubuntu server. You can see the md0 device that was created and how each disk is marked as a component of the software RAID. You can also see our BIOS grub spacer, the /boot directory, and the partition that&#39;ll be used as a component of the RAID.</p><p>RAID Types 01:52-02:16 The mdadm utility can be used to create most of the RAID types you&#39;ll need. This includes RAID 0, which splits the data across two or more hard drives, and RAID 1, which copies the data from one drive to another. There&#39;s also RAID 5, which stripes data across three or more drives while providing redundancy with parity. And RAID 10 takes RAID 5 and mirrors the data to another RAID 5.</p><p>Summary 02:16-02:33 That&#39;s all for this lesson. We learned about creating software RAIDs in Linux. We reviewed the mdadm utility and looked at how to configure a boot disk within a RAID. We also briefly reviewed common RAID types.</p><h2 id="_8-1-4-storage-facts" tabindex="-1"><a class="header-anchor" href="#_8-1-4-storage-facts"><span>8.1.4 Storage Facts</span></a></h2><p>This lesson covers the following topics:</p><ul><li>Linux storage concepts</li><li>FUSE</li><li>RAID on Linux</li></ul><h3 id="linux-storage-concepts" tabindex="-1"><a class="header-anchor" href="#linux-storage-concepts"><span>Linux Storage Concepts</span></a></h3><p>Linux is an operating system with roots in many historical computing environments. When discussing storage on Linux, we need to understand the ancestry of some of the concepts in order to make sense of how they are implemented on Linux.</p><p>The layout of the files and folders on Linux is, depending on the distribution, determined loosely or tightly by the File system Hierarchy Standard (FHS). This standard defines where files and folders are stored, based on their function. For example, the <code>/home</code> directory is where a standard user keeps their personal files. This standard also includes definitions where types of storage are generally located. The process of attaching storage devices in Linux is called mounting . Thus, directly attached storage that is used as the root of the file system is found in the <code>/</code> directory, which is called the root directory.</p><p>On Linux systems, all mounted storage devices are attached to the same file system somewhere below the / location. This idea of a single tree—instead of a number of trees as found under Windows such as <code>C:\\</code>, <code>D:\\</code>, etc. <code>—comes</code> from the Unix world. An optical device that has a data DVD inserted by a user will typically be found under <code>/run/media/&lt;username&gt;</code>. A USB storage device, such as a thumb drive, will also be found under <code>/run/media/&lt;username&gt;</code> when inserted by a user.</p><p>There is a mount command that is used to do two primary things: list all file systems that are currently mounted and allow a privileged user to mount a file system on a storage device somewhere in the root file system tree. Although the mount command is used by users occasionally, most file systems are mounted automatically at boot or mounted when they are added to the system.</p><h3 id="cd" tabindex="-1"><a class="header-anchor" href="#cd"><span>cd</span></a></h3><p>Since this lesson is not about all of the storage types or the various ways of mounting or configuring the storage, we&#39;ll keep our focus on two of the most commonly used types of storage: FUSE and RAID. One of the types of storage that is used but won&#39;t be covered in detail is Fibre Channel . It is used in high-speed storage environment Storage Area Networks (SANs), and the fcstat command is used to gather information about fibre channel configuratoins.</p><h3 id="storage-types" tabindex="-1"><a class="header-anchor" href="#storage-types"><span>Storage Types</span></a></h3><p>There are several different ways in which data is stored on a Linux system. These are described by the manner in which the data is organized on the devices:</p><ul><li>File storage - This method is used by services such as NFS and SMB/CIFS for storage of files over the network, although locally attached storage devices also can use this storage type.</li><li>Block storage - This is the oldest and most common type of storage, where data is placed in fixed length blocks of data. This is commonly used for hosting the operating system, applications and databases, and local data storage.</li><li>Object storage - The newest method for storing data, object storage makes data available to clients in their original form, usually accessed in the form of a URL.</li></ul><h3 id="fuse" tabindex="-1"><a class="header-anchor" href="#fuse"><span>FUSE</span></a></h3><p>The Filesystem in USErspace (FUSE) project was built as a way for regular, non-privileged users to create file systems without affecting the kernel.</p><p>The primary use for FUSE is for creating virtual file systems for applications. Specifically, sandboxed applications such as AppImages use FUSE to create a restricted, disconnected from the kernel, file system. These isolated file systems leave kernel access to the FUSE kernel module, keeping the application from compromising system security even if they have vulnerabilities in them. While this approach is not always effective, it does provide another layer of security.</p><h3 id="network-file-systems" tabindex="-1"><a class="header-anchor" href="#network-file-systems"><span>Network File Systems</span></a></h3><p>In addition to storage attached directly to a server, storage devices can be located on another host on the network that shares its storage space with other network hosts. Using network file systems, data can be written to the remote location as if attached locally, at least from the user&#39;s perspective. There are two primary network file systems that are used in Linux:</p><ul><li>Network File System (NFS) - NFS is a protocol used by servers and clients to share storage on a network. It comes from the Unix world and has been in use since 1984.</li><li>Server Message Block (SMB)/Common Internet File System (CIFS) - These protocols describe how to share storage across the network, much like NFS. The core protocols are used by Microsoft Windows for storage sharing in a Windows environment, which Linux can participate in with some limitations.</li></ul><h3 id="multipathing-storage" tabindex="-1"><a class="header-anchor" href="#multipathing-storage"><span>Multipathing Storage</span></a></h3><p>One of the common ways redundancy for storage is created is using multipathing. Using multiple physical connections between a server and a storage array, such as Storage Area Network (SAN) or Network Attached Storage (NAS), data can be written to the target storage device when one of the paths becomes unavailable, such as what might be caused by a hardware failure. Linux uses the multipath daemon called multipathd to manage the behavior of the data being written to the storage array(s) in such a way as to provide redundancy in the case of a failure along one path.</p><h3 id="raid-on-linux" tabindex="-1"><a class="header-anchor" href="#raid-on-linux"><span>RAID on Linux</span></a></h3><p>Redundant Array of Independent Disks (RAID), also called Redundant Array of Inexpensive Disks, is a disk subsystem that combines multiple physical disks into a single logical storage unit. Depending on the configuration, a RAID array can improve performance, provide fault tolerance, or both.</p><p>The following table describes common RAID levels.</p><table><thead><tr><th>RAID Level</th><th>Description</th></tr></thead><tbody><tr><td>RAID 0 (striping)</td><td> A stripe set breaks data into units and stores the units across a series of disks by reading and writing to all disks simultaneously. Striping: <ul><li>Provides an increase in performance.</li><li> Does not provide fault tolerance. A failure of one disk in the set means all data is lost. </li><li>Requires a minimum of two disks.</li><li> Has no overhead because all disk space is available for storing data. </li></ul></td></tr><tr><td>RAID 1 (mirroring)</td><td> A mirrored volume stores data to two (or more) duplicate disks simultaneously. If one disk fails, data is present on another disk. The system switches immediately from the failed disk to a functioning disk. Mirroring: <ul><li>Provides fault tolerance for a single disk failure.</li><li>Does not increase performance.</li><li>Requires a minimum of two disks.</li><li> Has overhead. Overhead is 1 / n where n is the number of disks. If data is written twice, half of the disk space is used to store the second copy of the data. </li><li>RAID 1 is the most expensive fault tolerant system.</li></ul></td></tr><tr><td>RAID 5 (striping with distributed parity)</td><td> A RAID 5 volume combines disk striping across multiple disks with parity for data redundancy. Parity information is stored on each disk. If a single disk fails, its data can be recovered using the parity information stored on the remaining disks. Striping with distributed parity: <ul><li>Provides fault tolerance for a single disk failure.</li><li> Provides an increase in performance for read operations. Write operations are slower with RAID 5 than with other RAID configurations because of the time required to compute and write the parity information. </li><li>Requires a minimum of three disks.</li><li> Has an overhead of one disk in the set for parity information (1 / n). <ul><li>A set with 3 disks has 33% overhead.</li><li>A set with 4 disks has 25% overhead.</li><li>A set with 5 disks has 20% overhead.</li></ul></li></ul></td></tr><tr><td>RAID 10 (stripe of mirrors)</td><td> A RAID 10 volume stripes data across mirrored pairs and across multiple disks for data redundancy. If a single disk fails, its data can be recovered using the mirrored information stored on the remaining disks. If two disks in the same mirrored pair fail, all data will be lost because there is no redundancy in the striped sets. RAID 10: <ul><li>Provides fault tolerance for a single disk failure.</li><li>Provides redundancy and performance.</li><li> Uses 50% of the total raw capacity of the drives due to mirroring. </li><li>Requires a minimum of four disks.</li></ul></td></tr></tbody></table><p>Be aware of the following facts about RAID:</p><ul><li>Some RAID controllers support combined levels of RAID. For example, RAID 0+1 is a striped array that is mirrored. Other combined configurations that might be supported include RAID 1+0 (also called RAID 10), RAID 5+0, and RAID 5+1.</li><li>For all RAID configurations, the amount of disk space used on each disk must be of equal size. If disks in the array are of different sizes, the resulting volume will be limited to the smallest disk. Remaining space on other drives can be used in other RAID sets or as traditional storage.</li><li>While some RAID configurations provide fault tolerance in the event of a disk failure, configuring RAID is not a substitute for regular backups.</li></ul><p>On Linux, RAID arrays are created and managed from the command line with the mdadm (multi-disk administration) tool. Using this tool, an administrator can:</p><ul><li>Create a new raid array. In this case, two storage devices are associated with the /dev/md0 RAID array device: <ul><li><b>sudo mdadm --create --verbose /dev/md0 --level=0 --raid-devices=2 /dev/sdb /dev/sdc</b></li></ul></li><li>Save the details of the new array to a file for configuration at boot: <ul><li><b>sudo mdadm --detail --scan | sudo tee -a /etc/mdadm/mdadm.conf</b></li></ul></li></ul><p>The most common way to monitor a RAID array on Linux is to read the status of a file in the /proc directory:</p><ul><li><b>cat /proc/mdstat</b></li></ul><p><img src="'+o+'" alt="proc-mdstat output"></p>',90)]))}const h=t(r,[["render",n],["__file","01.html.vue"]]),c=JSON.parse('{"path":"/08/01.html","title":"Section 8.1 Storage Concepts","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 8.1 Storage Concepts","description":"some description"},"headers":[{"level":2,"title":"8.1.1 Storage Types","slug":"_8-1-1-storage-types","link":"#_8-1-1-storage-types","children":[]},{"level":2,"title":"8.1.2 FUSE","slug":"_8-1-2-fuse","link":"#_8-1-2-fuse","children":[]},{"level":2,"title":"8.1.3 RAID on Linux","slug":"_8-1-3-raid-on-linux","link":"#_8-1-3-raid-on-linux","children":[]},{"level":2,"title":"8.1.4 Storage Facts","slug":"_8-1-4-storage-facts","link":"#_8-1-4-storage-facts","children":[{"level":3,"title":"Linux Storage Concepts","slug":"linux-storage-concepts","link":"#linux-storage-concepts","children":[]},{"level":3,"title":"cd","slug":"cd","link":"#cd","children":[]},{"level":3,"title":"Storage Types","slug":"storage-types","link":"#storage-types","children":[]},{"level":3,"title":"FUSE","slug":"fuse","link":"#fuse","children":[]},{"level":3,"title":"Network File Systems","slug":"network-file-systems","link":"#network-file-systems","children":[]},{"level":3,"title":"Multipathing Storage","slug":"multipathing-storage","link":"#multipathing-storage","children":[]},{"level":3,"title":"RAID on Linux","slug":"raid-on-linux","link":"#raid-on-linux","children":[]}]}],"git":{"updatedTime":1736669805000},"filePathRelative":"08/01.md"}');export{h as comp,c as data};
