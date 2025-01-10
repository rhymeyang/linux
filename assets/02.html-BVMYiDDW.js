import{_ as n,c as o,a,b as e,d as t,o as s}from"./app-D73vKm2K.js";const l={};function r(d,i){return s(),o("div",null,i[0]||(i[0]=[a('<p>As you study this section, answer the following questions:</p><ul><li>What might you have to do to ensure that the system will boot from the correct installation media?</li><li>Under which conditions should you select the UTC for the system time?</li><li>How can you create more than four partitions on a Linux system?</li><li>What are the characteristics of a secure password?</li><li>What is the purpose of the bootloader?</li></ul><p>In this section, you will learn to:</p><ul><li>Install a Linux operating system</li></ul><p>Key terms for this section include the following:</p><table class="terms"><thead><tr><th>Term</th><th>Definition</th></tr></thead><tbody><tr><td>Distribution</td><td> A Linux distribution (also known as a distro) is a unique compilation of the Linux kernel (free and open to all), utilities, desktop environments, applications, and more. </td></tr><tr><td>International Organization for Standardization image</td><td> A Linux International Organization for Standardization (ISO) installation image is a file containing an exact copy of a Linux optical (CD/DVD) installation disc. </td></tr><tr><td>Optical disc</td><td> An optical disc is a flat, circular disc on which data is stored. Optical discs are normally referred to as CDs (compact discs) or DVDs ( digital video discs or digital versatile discs). </td></tr><tr><td>USB drive</td><td> A computer data storage device that connects to a computer&#39;s USB (Universal Serial Bus) port. This could be a flash (or thumb) drive or a hard drive. </td></tr></tbody></table><h2 id="_3-2-1-linux-installation" tabindex="-1"><a class="header-anchor" href="#_3-2-1-linux-installation"><span>3.2.1 Linux Installation</span></a></h2><h3 id="linux-installation-00-00-00-22" tabindex="-1"><a class="header-anchor" href="#linux-installation-00-00-00-22"><span>Linux Installation 00:00-00:22</span></a></h3><p>In this lesson, we&#39;re going to review the process of installing a new Linux system. We&#39;ll focus primarily on high-level steps because the steps you&#39;ll need to perform will vary from distribution to distribution. The order in which you complete these steps is going to differ. However, most distributions will require you to complete the steps we&#39;re going to talk about here.</p><h3 id="installation-options-00-22-00-38" tabindex="-1"><a class="header-anchor" href="#installation-options-00-22-00-38"><span>Installation Options 00:22-00:38</span></a></h3><p>Most Linux distributions will provide you with several options for installing a new system. These options usually include installing locally from an optical disk, locally from a USB drive, or remotely from a network server. Each of these has its advantages. Let&#39;s take a closer look.</p><h3 id="installing-from-an-optical-disc-00-38-01-00" tabindex="-1"><a class="header-anchor" href="#installing-from-an-optical-disc-00-38-01-00"><span>Installing from an Optical Disc 00:38-01:00</span></a></h3><p>Installing locally using an installation optical disk is the most common. You can boot the system from the disk after changing your BIOS or UEFI configuration settings to specify that the system boot off the optical disk first—not the hard disk drive. When you do, the installer loads from the optical disk, and the files needed to install the Linux system are copied to your system hard drive.</p><h3 id="downloading-an-iso-image-01-00-01-43" tabindex="-1"><a class="header-anchor" href="#downloading-an-iso-image-01-00-01-43"><span>Downloading an ISO Image 01:00-01:43</span></a></h3><p>For most Linux distributions, you can download a copy of their installation disk image from the vendor&#39;s website. For example, if we wanted to install OpenSUSE, we could go to openSUSE.org and see a screen similar to that shown here.</p><p>An ISO image is essentially an image of an optical disk. Therefore, once you&#39;ve downloaded your ISO file, you can use optical disk burning software on your system to burn the ISO image to a physical disk. This means you&#39;ve got to have another system available to download the image, burn the disk, and then install it on the new system.</p><p>If you&#39;re installing into a virtual machine, you&#39;ll just need the ISO file. You can configure your VM to boot directly from the ISO file and install Linux. It&#39;ll be much faster.</p><h3 id="verify-the-checksum-01-43-02-31" tabindex="-1"><a class="header-anchor" href="#verify-the-checksum-01-43-02-31"><span>Verify the Checksum 01:43-02:31</span></a></h3><p>Be aware that after you download an ISO file from the internet, verifying its MD5 checksum value is a good idea. This is done to make sure that it arrived intact without any corruption. After downloading the file, run an MD5 checksum on your downloaded ISO file. That&#39;ll result in a particular MD5 value. Then compare the value you calculated using the MD5 locally with the MD5 value reported on the distribution website where you downloaded your ISO image.</p><p>If the checksum that you ran locally is exactly the same as the checksum reported on the website where you got your ISO image from, then you know that the ISO image arrived intact. However, if these checksum values don&#39;t match, then you know that the ISO file we downloaded is corrupt and unusable. You should download it again and do the MD5 check once more.</p><h3 id="installing-from-a-usb-drive-02-31-03-02" tabindex="-1"><a class="header-anchor" href="#installing-from-a-usb-drive-02-31-03-02"><span>Installing from a USB Drive 02:31-03:02</span></a></h3><p>If you&#39;re going to install Linux on a piece of physical hardware, then you&#39;re going to have to burn your ISO image to disk. Alternatively, you could create a bootable USB drive from the ISO image and boot your system from it. To do this, you need to have a Linux system already running or a Windows system that has software that can perform the bootable USB creation, such as the utility Rufus.</p><p>When it&#39;s done, take that USB drive and connect it to the system you&#39;re going to install, and then configure that system to boot off the USB drive.</p><h3 id="installing-from-a-server-03-02-03-46" tabindex="-1"><a class="header-anchor" href="#installing-from-a-server-03-02-03-46"><span>Installing from a Server 03:02-03:46</span></a></h3><p>Another cool option is to install Linux from a network server. You can set up a Linux server on your network and configure it as an installation source to install other Linux systems. You can do that using several different network protocols. You can do it using the SMB protocol, the NFS protocol, the HTTP protocol, or the FTP protocol. In fact, if you wanted to, you could even install your Linux system directly from an FTP or HTTP server on the internet.</p><p>Not all Linux distributions will support a network-based installation, but most do. The key advantage of installing Linux in this manner is that you can install many systems simultaneously, saving you some time, especially if this is a local network server.</p><h3 id="installing-linux-03-46-04-58" tabindex="-1"><a class="header-anchor" href="#installing-linux-03-46-04-58"><span>Installing Linux 03:46-04:58</span></a></h3><p>At this point, we&#39;re ready to install Linux. Regardless of the installation source, you typically specify the various installation parameters shown here. The way this&#39;ll be done will vary from distribution to distribution, and they may be done in a different order.</p><p>Some steps might be done automatically for you; others might require more details. You&#39;ll have to check the documentation for the specific distribution you&#39;re installing. However, most distributions will require you to configure the same things, such as our locale settings: what&#39;s our time zone? What keyboard language do we want to use?</p><p>We&#39;ll also have to specify how we&#39;re going to partition our hard disk drives and what file systems we&#39;re going to use on those partitions. We&#39;ll also have to specify which bootloader we want to use and how we want our boot menu configured. We&#39;ll also probably have to specify which packages we want to be installed during the installation process. We&#39;ll also be prompted to write a password for the root user account, and most distributions will require you to create at least one standard user account during the installation process and assign a password.</p><p>You&#39;ll also probably be prompted to configure your network settings. You may also be prompted to configure your hardware settings, although I see that less and less in modern Linux distributions.</p><h3 id="summary-04-58-05-27" tabindex="-1"><a class="header-anchor" href="#summary-04-58-05-27"><span>Summary 04:58-05:27</span></a></h3><p>In summary, that&#39;s the process you need to follow to install a new Linux system. In this lesson, we first talked about selecting your installation source. We talked about using optical disks, USB drives, and network servers. We ended this lesson by reviewing the process you&#39;ll have to follow to install the Linux system. And we emphasized that the actual real process you&#39;re going to use will depend upon which distribution you choose to install.</p><h2 id="_3-2-2-installing-linux" tabindex="-1"><a class="header-anchor" href="#_3-2-2-installing-linux"><span>3.2.2 Installing Linux</span></a></h2><h3 id="install-linux-00-00-00-19" tabindex="-1"><a class="header-anchor" href="#install-linux-00-00-00-19"><span>Install Linux 00:00-00:19</span></a></h3><p>In this demonstration, we&#39;re going to walk through the installation of a new Ubuntu 22.04 Linux system. Not all Linux distributions use the same installer or perform the tasks in the same order, but roughly the same procedure is used for nearly all distributions.</p><h3 id="preparing-installation-media-00-19-00-38" tabindex="-1"><a class="header-anchor" href="#preparing-installation-media-00-19-00-38"><span>Preparing Installation Media 00:19-00:38</span></a></h3><p>The latest version of the Ubuntu installation ISO image will need to be downloaded from Ubuntu&#39;s website. Once downloaded, the ISO image will need to be burned to a disk, installed on a flash drive, or saved to a location for use in a virtual machine. Once prepared, boot the system to the ISO image media to begin the installation.</p><h3 id="starting-the-installer-00-38-01-13" tabindex="-1"><a class="header-anchor" href="#starting-the-installer-00-38-01-13"><span>Starting the Installer 00:38-01:13</span></a></h3><p>Once the ISO image is loaded, a GNU GRUB menu will appear. We&#39;ll select Try or Install Ubuntu to begin the installation. This&#39;ll load the installation menu that asks if we want to Try Ubuntu or Install Ubuntu. Ubuntu installation disks come with a feature that&#39;ll load the Ubuntu environment from the ISO image. This allows users to test drive the operating system. From there, users can decide to install Ubuntu or keep their current operating system.</p><p>We&#39;re going to select Install Ubuntu. We&#39;re then asked to select a language for the keyboard layout. Continue with English as our keyboard language.</p><h3 id="updates-and-other-software-01-13-02-30" tabindex="-1"><a class="header-anchor" href="#updates-and-other-software-01-13-02-30"><span>Updates and Other Software 01:13-02:30</span></a></h3><p>We&#39;re prompted with two menus. What apps would you like to install to start with? And Other Options are presented. Normal installation is intended for systems that&#39;ll be used as personal computers. The installation includes office software, games, media players, and other preinstalled packages. Minimal installation is typically used in professional environments when systems are used for dedicated tasks or require fewer packages. The installation comes with the necessary files to load the operating system, a web browser, and a few basic utilities. We&#39;ll keep the normal installation.</p><p>Other options include downloading updates while installing Ubuntu, third-party software for graphics and Wi-Fi hardware, and additional media formats. If you have an active internet connection, Ubuntu can download updates as it installs to provide the most up-to-date version of the operating system.</p><p>Some devices, like video cards, Wi-Fi, Bluetooth, sound cards, and other devices, have proprietary drivers that the manufacturer provides. Ubuntu can download those drivers and install them while installing the operating system. This is especially useful for devices like laptops or custom-built computers. If the box isn&#39;t checked, these types of devices may not work properly and will need to be manually installed after installation. Let&#39;s check the box and select continue.</p><h3 id="installation-type-02-30-03-01" tabindex="-1"><a class="header-anchor" href="#installation-type-02-30-03-01"><span>Installation Type 02:30-03:01</span></a></h3><p>Ubuntu can automatically create partitions for the hard drive. However, this option is usually meant for at-home use. In a professional environment, you&#39;ll want to customize the installation to provide dedicated partitions for logs, the home directory, and other resources. We&#39;ll select something else. We&#39;ll be using a standard partitioning scheme for this demonstration. The Logical Volume Manager or LVM partitioning scheme is more robust. However, it requires advanced configurations when manually creating partitions. Let&#39;s select continue.</p><h3 id="disk-partitions-03-01-03-39" tabindex="-1"><a class="header-anchor" href="#disk-partitions-03-01-03-39"><span>Disk Partitions 03:01-03:39</span></a></h3><p>This is a new hard disk, so we&#39;ll create a New Partition Table. We&#39;re given a warning that all current data will be overwritten. This is a new disk, and we don&#39;t need to worry about overwriting data. Click Continue.</p><p>We&#39;re going to create five partitions on the disk. Boot, swap, home, var, and root. Each of these partitions is a directory in the root file directory of a Linux system. By separating each directory into its partition, we guarantee that those directories will have dedicated space and not be overtaken by logs, user data, or misconfigurations of packages.</p><p>We have a 40 GB hard drive. We&#39;ll manually partition the hard drive between these directories.</p><h3 id="boot-partition-03-39-04-43" tabindex="-1"><a class="header-anchor" href="#boot-partition-03-39-04-43"><span>Boot Partition 03:39-04:43</span></a></h3><p>Our boot partition is where the GRUB loader and other boot configuration data will be stored. Select the free space and then click on the plus sign. We&#39;ll type 1024 MB for the size to create a 1 GB partition. This&#39;ll be a primary partition, and we&#39;ll place the partition at the beginning of this space. We want to use the Ext4 journaling file system, and the mount point will be slash boot. Once we verify the settings, we select OK.</p><p>Next, we&#39;ll create a partition for the UEFI boot environment. Size this partition to 665 MB and mark it as logical at the beginning of this space. We&#39;ll use this partition as EFI System Partition. Select OK.</p><p>Lastly, we must create a separate partition for the bootloader code. This partition should be marked for use as a &quot;Reserved BIOS boot area&quot; and should be at least 1 MB in size. This isn&#39;t the same as a partition mounted on /boot. Create a new partition with a size of 100 MB and mark it as logical at the beginning of this space. We&#39;ll use this partition as a Reserved BIOS boot area and select OK.</p><h3 id="swap-partition-04-43-05-34" tabindex="-1"><a class="header-anchor" href="#swap-partition-04-43-05-34"><span>Swap Partition 04:43-05:34</span></a></h3><p>The swap partition functions as virtual memory for this system. It allows the operating system to run more applications than it physically has memory to use. This allows the system to exceed its physical RAM limits by loading applications to your hard disk drive as if it were RAM.</p><p>The general rule of thumb is that the swap partition should be about 1.5 times the size of your installed RAM. If the swap partition is too small, system performance will most likely suffer. However, standard practice also recommends not creating swap partitions greater than 4 GB.</p><p>This system has 8 GB of RAM in it. We&#39;ll make a 4 GB swap partition. That&#39;s half the size of our RAM, but the max recommended size. We&#39;ll type 4096MB for the size. This&#39;ll be a logical partition, and we&#39;ll place the partition at the beginning of this space. We&#39;ll use this partition as the swap area and select OK.</p><h3 id="home-05-34-06-17" tabindex="-1"><a class="header-anchor" href="#home-05-34-06-17"><span>/home 05:34-06:17</span></a></h3><p>We want to create a separate partition for home. This&#39;s where our end users&#39; /home directories reside. By providing dedicated space to the home directory, we restrict users from filling up the entire hard drive with data. When a hard drive becomes full, the system can no longer run. In addition, if we need to migrate users to a different disk or need to reinstall Linux, we can keep their data and preserve the home partition during the installation process. This&#39;ll make those accounts&#39; data available when the system comes back up.</p><p>We&#39;ll enter 10240MB for the size to create a 10 GB partition. This&#39;ll be a logical partition at the beginning of this space. We&#39;ll use the Ext4 journaling file system, mount this partition at slash home, and select OK.</p><h3 id="var-06-17-06-45" tabindex="-1"><a class="header-anchor" href="#var-06-17-06-45"><span>/var 06:17-06:45</span></a></h3><p>We&#39;ll add another partition for /var. var is where log files go, and if something goes wrong with log rotation, such as log files keep growing, it can crash your system. By putting /var on its own partition, oversized log files would be constrained.</p><p>We&#39;ll enter 6144MB for the size to create a 6 GB partition. This&#39;ll be a logical partition at the beginning of this space. We&#39;ll use the Ext4 journaling file system and mount this partition at slash var.</p><h3 id="partitioning-root-06-45-07-05" tabindex="-1"><a class="header-anchor" href="#partitioning-root-06-45-07-05"><span>Partitioning Root 06:45-07:05</span></a></h3><p>The final task in partitioning our hard drive is to create a mount point for the root of our file system, &#39;/.&#39; This mount point will store the entire Linux operating system. We&#39;ll enter a size of 20480MB and mark this as a logical partition at the beginning of this space. We&#39;ll use the Ext4 file system and mount this partition at root. Select OK.</p><h3 id="installing-ubuntu-07-05-07-44" tabindex="-1"><a class="header-anchor" href="#installing-ubuntu-07-05-07-44"><span>Installing Ubuntu 07:05-07:44</span></a></h3><p>We&#39;re ready to continue with the installation. Select Install Now. We can review the changes that are going to be made and select Continue. We&#39;ll select the appropriate time zone and continue.</p><p>We&#39;re now asked to provide user information. We&#39;ll use John Smith as the name. This&#39;ll automatically populate a hostname and username. We&#39;ll change these. Our hostname will be Ubuntu 22.04, and our username will be jsmith. Type a password and click Continue.</p><p>Now, we let the operating system software be installed. Once the installation process is complete, we reboot the system to begin using our new Ubuntu operating system.</p><h3 id="summary-07-44-08-07" tabindex="-1"><a class="header-anchor" href="#summary-07-44-08-07"><span>Summary 07:44-08:07</span></a></h3><p>In this demonstration, we reviewed how to install Ubuntu Linux. We first booted our system from an ISO image we downloaded from the Ubuntu website. We went through the installation process, configured our disk partitions, installed our operating system files, and then created the user accounts we use to log in to the system.</p><h2 id="_3-2-3-linux-installation-facts" tabindex="-1"><a class="header-anchor" href="#_3-2-3-linux-installation-facts"><span>3.2.3 Linux Installation Facts</span></a></h2><p>This lesson covers the following topics:</p><ul><li>Obtaining installation software</li><li>Selecting and preparing an installation method</li><li>Installing Linux</li></ul><h3 id="obtaining-installation-software" tabindex="-1"><a class="header-anchor" href="#obtaining-installation-software"><span>Obtaining Installation Software</span></a></h3><p>A Linux distribution (also known as a distro) is a unique compilation of the Linux kernel, utilities, desktop environments, applications, and more. To install Linux, you must research and determine which distribution to use. After this decision has been made, you go to the vendor&#39;s website and obtain the installation media required. Some vendors may allow you to order an optical installation disc. However, in most cases, you will simply download the installation media in the form of an ISO file.</p><h3 id="selecting-and-preparing-an-installation-method" tabindex="-1"><a class="header-anchor" href="#selecting-and-preparing-an-installation-method"><span>Selecting and Preparing an Installation Method</span></a></h3><p>The following table describes Linux installation methods.</p>',80),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Installation Method"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"ISO image"),e("td",null,[t(" A Linux ISO installation image is a file containing an exact copy of a Linux optical (CD/DVD) installation disc. An ISO image can be mounted (made available to a computer) and used to install Linux. It can also be burned to an optical disc, from which the installation can be performed. "),e("h2",null,"ISOs and Virtual machines")])]),e("tr",null,[e("td",null,"Optical disc"),e("td",null," If the destination machine contains an optical disc (CD/DVD) reader, you can install Linux by booting from a disc containing the desired Linux distribution. In most cases, you will download the desired distribution from the internet in the form of an ISO image and then burn that image to an optical disc. ")]),e("tr",null,[e("td",null,"USB drive"),e("td",null,[t(" Similar to the optical disc method, a Linux installation ISO can be transferred to a USB drive (flash or hard drive). The destination machine can then be booted from the USB drive, from which Linux can be installed. "),e("p",null," Configure a USB drive with the Linux distribution image from an existing Linux machine as follows: "),e("ol",null,[e("li",null," Connect the USB drive to your Linux system and then determine which Linux device file represents the USB drive (such as '/dev/sdb'). "),e("li",null,[t(" Switch to your root account (or use "),e("b",null,"sudo"),t(),e("i",null,")"),t(" and run the following command: "),e("br"),e("b",null,[e("br"),t("dd if= "),e("i",null,"filename.iso"),t(" of= "),e("i",null,"/dev/sdb")]),t(" or "),e("b",null,[t("sudo dd if= "),e("i",null,"filename.iso"),t(" of= "),e("i",null,"/dev/sdb")]),e("br"),e("br"),e("i",null,"dd"),t(" is the "),e("i",null,"convert and copy a file"),t(" command. With this command, you are extracting and writing the ISO file to the USB drive. "),e("br"),e("br"),t(" In the above command, "),e("i",null,"if"),t(" stands for input file (the source file), while "),e("i",null,"of"),t(" stands for the output file (the destination). "),e("i",null,"Filename.iso"),t(" is the name and location of the ISO distribution file downloaded, while "),e("i",null,"/dev/sdb"),t(" is the Linux device file being used by the USB device. "),e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",null,[e("span",null," This command was original named cc, but was renamed dd because cc was already in use for the C compiler.")])])])])])])])]),e("tr",null,[e("td",null,"Network installation"),e("td",null,[t(" With this method, the Linux distribution is placed on a network server, from which the installation can be performed. Multiple installations can be performed at the same time with network installation. Common protocols used to perform the installation include SMB, NFS, HTTP, and FTP. Make network preparations as follows: "),e("ol",null,[e("li",null," Copy the Linux installation files to a directory on your installation server. These files need to be available in a file system accessible to the desired clients. "),e("li",null,"Share the installation directory."),e("li",null,[t(" Select, install, and configure the installation protocol that will be used to access the files. For example, to use SMB, you must install and configure SAMBA. "),e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",null,[e("span",null," Not all distributions support a network installation. Before proceeding, verify that this is a viable option. ")])])])])])]),e("p",null,"Make client preparations as follows:"),e("ol",null,[e("li",null," Download a network installation image (usually an ISO CD/DVD image). This image is used to boot the destination computer, giving it the means by which it can access the source server previously prepared. This is not the Linux distribution installation software. "),e("li",null,[t(" Burn the image obtained in step 1 to the desired media (CD/DVD/USB). "),e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",null,[e("span",null," As an alternative, you can configure the destination and source machines to use PXE ( the Preboot eXecution Environment). Using PXE, the destination computer can download the software required to gain access to the server containing the Linux distribution installation software. Configuring PXE is beyond the scope of this lesson. ")])])])])]),e("li",null," Boot the destination machine from the network installation image (or PXE if being used). "),e("li",null," After completing step 3, at the first installation screen, specify the installation source and protocol (such as SMB, or HTTP, or FTP, or NFS) being used for the installation. ")])])])])],-1),a('<h3 id="installing-linux" tabindex="-1"><a class="header-anchor" href="#installing-linux"><span>Installing Linux</span></a></h3><p>The actual steps for installing Linux vary from distribution to distribution. Therefore, the following table describes only the general steps typically seen when installing a Linux operating system. You should also be aware that some of the steps can be completed in a different order than described below. For example, with some installations, you can either configure the installation destination and then the date and time, or vice versa.</p><table><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>Start the installation</td><td> In many cases, this step involves booting the computer from installation media (CD/DVD/USB/PXE). When using one of these media types, the BIOS may need to be configured to allow the computer to boot from the desired media before it tries to boot from the hard disk. <p>Some Linux installers offer several installation options:</p><ul><li>New install</li><li>Reinstall</li><li>Upgrade</li><li>Installation recovery</li><li>Reduced feature installation</li></ul></td></tr><tr><td>Select a language</td><td> The selected language becomes the default language for all users. This can be changed later. </td></tr><tr><td>Keyboard layout</td><td> The keyboards used in different countries will often have different keyboard layouts. As a simple example, the @ key and the &quot; key are swapped with the US and the UK keyboards. Some installations provide a method for automatically identifying the keyboard being used by prompting you to press specific keys. </td></tr><tr><td>Set the system time</td><td> The system time can be set to local time or Coordinated Universal Time (UTC) time. <ul><li> For networks dispersed over multiple time zones, choosing UTC simplifies administration tasks. </li><li> Some distributions have options to synchronize the time over the network. </li></ul></td></tr><tr><td>Format partitions</td><td> A partition is a logical division of a storage device associated with a hard disk drive. Create the partition structure according to the specifications in the installation plan. Determine the directory structure and file system type for each partition. This may require initializing a hard drive. Partitioning options include the following: <ul><li> Use the entire disk (makes a single partition from the entire disk drive) </li><li>Use the entire disk and set up LVM</li><li> Manual (lets you manually create partitions according to the specific needs of the system or administrator) </li><li> Replace existing Linux systems (re-partitions all the previously installed Linux Operating systems) </li><li> Shrink partitions (reduces the size of an existing partition making room for additional partitions) </li><li> Use free space (creates a partition from unpartitioned space on the disk drive) </li></ul><p>Keep the following in mind when creating partitions:</p><ul><li>Initializing a hard drive removes all existing data.</li><li> A swap partition is required for virtual memory. Swap partitions should be between one to two times larger than the computer&#39;s installed memory. </li><li> Linux computers can only have four partitions; however, a single extended partition can be sub-divided into additional partitions. </li><li> To keep logs or abnormally large user files from taking all disk space and to make recovery of data easier should the operating system crash, create separate partitions for the following directories: <ul><li>/home (user directories)</li><li>/opt (installed software)</li><li>/var (log files)</li></ul> The operating system can be reinstalled on the root partition (/), and the others can then be remounted with no loss to data. </li></ul></td></tr><tr><td>Select applications and services</td><td> Installing applications and services depends on the role of the system. Applications and services include the following: <ul><li> The boot loader determines which operating system boots by default (if more than one operating system exists on a computer). </li><li> Package patterns include packages necessary for a specific computer role (such as graphical desktop or web server). </li><li> Package repositories are locations on the internet, where software packages are maintained. Specific Linux utilities search and install software automatically from these package repositories. </li></ul></td></tr><tr><td>Set the root password</td><td> The secure password for the root user (and any other user) should have the following characteristics: <ul><li> At least eight characters long (longer passwords are harder to crack) </li><li>Use a combination of letters, numbers, and symbols</li><li> Should not include a username or a dictionary word (or common variations) </li></ul></td></tr><tr><td>Specify a host name</td><td> The name of the computer identifies the computer on a network. A domain may be required. </td></tr><tr><td>Configure network connections</td><td> Configure the network connections. This can include such things as the interface card, proxy servers, and how the network will obtain its IP address (manually vs. DHCP). </td></tr><tr><td>Configure services</td><td> Some services must be configured based on the role of the system (for example, a web server). </td></tr><tr><td>Add new users and groups</td><td> Create user accounts and groups for the users who will use the computer. <ul><li> Installations usually require at least one standard user account. A system user or the root user is often created automatically. </li><li> Network login options enable the system to access a server for login information rather than maintaining local authentication information. </li></ul></td></tr><tr><td>Configure the hardware settings</td><td> Hardware configuration settings might require appropriate drivers or language settings. </td></tr><tr><td>Identify remote access needs</td><td> Depending on your job role, you may need to manage Linux systems that don&#39;t have external peripherals connected, including monitors, keyboards, or mice. This a common configuration for both Linux servers and virtualized Linux systems that run on a hypervisor. To manage these types of systems, you must access them remotely from another device. There are several options available to accomplish this: <ul><li> If the system has a management interface integrated within its hardware, you can use it to access the system display from a web browser and perform management tasks. This type of hardware is typically found only on high-end server systems. </li><li> If the system does not have an integrated management interface, you can use two network protocols to remotely access it. <ul><li> Use SSH to securely access the shell prompt of the system and run commands as if you were sitting in front of the system. You can also tunnel X server <br> traffic through the SSH connection, which allows you to securely access the graphical desktop of the system. </li><li> You can use Virtual Network Computing (VNC) to remotely access the graphical desktop of the system. </li></ul></li></ul></td></tr></tbody></table>',3)]))}const u=n(l,[["render",r],["__file","02.html.vue"]]),c=JSON.parse('{"path":"/03/02.html","title":"Section 3.2 Linux Installation","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 3.2 Linux Installation","description":"some description"},"headers":[{"level":2,"title":"3.2.1 Linux Installation","slug":"_3-2-1-linux-installation","link":"#_3-2-1-linux-installation","children":[{"level":3,"title":"Linux Installation 00:00-00:22","slug":"linux-installation-00-00-00-22","link":"#linux-installation-00-00-00-22","children":[]},{"level":3,"title":"Installation Options 00:22-00:38","slug":"installation-options-00-22-00-38","link":"#installation-options-00-22-00-38","children":[]},{"level":3,"title":"Installing from an Optical Disc 00:38-01:00","slug":"installing-from-an-optical-disc-00-38-01-00","link":"#installing-from-an-optical-disc-00-38-01-00","children":[]},{"level":3,"title":"Downloading an ISO Image 01:00-01:43","slug":"downloading-an-iso-image-01-00-01-43","link":"#downloading-an-iso-image-01-00-01-43","children":[]},{"level":3,"title":"Verify the Checksum 01:43-02:31","slug":"verify-the-checksum-01-43-02-31","link":"#verify-the-checksum-01-43-02-31","children":[]},{"level":3,"title":"Installing from a USB Drive 02:31-03:02","slug":"installing-from-a-usb-drive-02-31-03-02","link":"#installing-from-a-usb-drive-02-31-03-02","children":[]},{"level":3,"title":"Installing from a Server 03:02-03:46","slug":"installing-from-a-server-03-02-03-46","link":"#installing-from-a-server-03-02-03-46","children":[]},{"level":3,"title":"Installing Linux 03:46-04:58","slug":"installing-linux-03-46-04-58","link":"#installing-linux-03-46-04-58","children":[]},{"level":3,"title":"Summary 04:58-05:27","slug":"summary-04-58-05-27","link":"#summary-04-58-05-27","children":[]}]},{"level":2,"title":"3.2.2 Installing Linux","slug":"_3-2-2-installing-linux","link":"#_3-2-2-installing-linux","children":[{"level":3,"title":"Install Linux 00:00-00:19","slug":"install-linux-00-00-00-19","link":"#install-linux-00-00-00-19","children":[]},{"level":3,"title":"Preparing Installation Media 00:19-00:38","slug":"preparing-installation-media-00-19-00-38","link":"#preparing-installation-media-00-19-00-38","children":[]},{"level":3,"title":"Starting the Installer 00:38-01:13","slug":"starting-the-installer-00-38-01-13","link":"#starting-the-installer-00-38-01-13","children":[]},{"level":3,"title":"Updates and Other Software 01:13-02:30","slug":"updates-and-other-software-01-13-02-30","link":"#updates-and-other-software-01-13-02-30","children":[]},{"level":3,"title":"Installation Type 02:30-03:01","slug":"installation-type-02-30-03-01","link":"#installation-type-02-30-03-01","children":[]},{"level":3,"title":"Disk Partitions 03:01-03:39","slug":"disk-partitions-03-01-03-39","link":"#disk-partitions-03-01-03-39","children":[]},{"level":3,"title":"Boot Partition 03:39-04:43","slug":"boot-partition-03-39-04-43","link":"#boot-partition-03-39-04-43","children":[]},{"level":3,"title":"Swap Partition 04:43-05:34","slug":"swap-partition-04-43-05-34","link":"#swap-partition-04-43-05-34","children":[]},{"level":3,"title":"/home 05:34-06:17","slug":"home-05-34-06-17","link":"#home-05-34-06-17","children":[]},{"level":3,"title":"/var 06:17-06:45","slug":"var-06-17-06-45","link":"#var-06-17-06-45","children":[]},{"level":3,"title":"Partitioning Root 06:45-07:05","slug":"partitioning-root-06-45-07-05","link":"#partitioning-root-06-45-07-05","children":[]},{"level":3,"title":"Installing Ubuntu 07:05-07:44","slug":"installing-ubuntu-07-05-07-44","link":"#installing-ubuntu-07-05-07-44","children":[]},{"level":3,"title":"Summary 07:44-08:07","slug":"summary-07-44-08-07","link":"#summary-07-44-08-07","children":[]}]},{"level":2,"title":"3.2.3 Linux Installation Facts","slug":"_3-2-3-linux-installation-facts","link":"#_3-2-3-linux-installation-facts","children":[{"level":3,"title":"Obtaining Installation Software","slug":"obtaining-installation-software","link":"#obtaining-installation-software","children":[]},{"level":3,"title":"Selecting and Preparing an Installation Method","slug":"selecting-and-preparing-an-installation-method","link":"#selecting-and-preparing-an-installation-method","children":[]},{"level":3,"title":"Installing Linux","slug":"installing-linux","link":"#installing-linux","children":[]}]}],"git":{"updatedTime":1736486703000},"filePathRelative":"03/02.md"}');export{u as comp,c as data};
