import{_ as s,c as a,a as i,b as e,d as t,o as r}from"./app-D73vKm2K.js";const n={};function l(d,o){return r(),a("div",null,o[0]||(o[0]=[i('<p>As you study this section, answer the following questions:</p><ul><li>What are the three general stages of the boot process?</li><li>When is the initramfs image loaded into memory?</li><li>What is the default initial program?</li><li>Which component mounts the root partition?</li><li>What is the process ID of the initial program?</li><li>Where is the primary bootloader located?</li></ul><p>Key terms for this section include the following:</p><table class="terms"><thead><tr><th>Term</th><th>Definition</th></tr></thead><tbody><tr><td> Basic Input/Output System <br> (BIOS) </td><td> A basic program that starts up a computer system. BIOS is a legacy system that&#39;s been replaced by UEFI. </td></tr><tr><td> Unified Extensible Firmware Interface <br> (UEFI) </td><td> A basic program that starts up a computer system. UEFI has replaced BIOS. </td></tr><tr><td>Boot</td><td> The act of starting up a computer (also referred to as powering the computer on). </td></tr><tr><td>Firmware</td><td> Software that&#39;s embedded in hardware, usually on a read-only memory (ROM) chip. </td></tr><tr><td> Boot manager/ <br> bootloader </td><td> A software program that controls the process of loading the operating system. </td></tr><tr><td> Complementary metal-oxide semiconductor <br> (CMOS) </td><td> A technology for constructing integrated circuits. It refers to the system configuration that&#39;s stored in a battery-powered memory chip on computers. </td></tr><tr><td> Power-On Self Test <br> (POST) </td><td> A software process that verifies that computer hardware works properly. </td></tr><tr><td> Globally Unique Identifier <br> (GUID) </td><td> A label that software programs use to identify the location of a data object. </td></tr><tr><td> Master Boot Record <br> (MBR) </td><td> A legacy system that refers to the boot sector on a hard disk or other storage device. The boot sector contains the files required to start a computer. </td></tr><tr><td> Extensible Firmware Interface System Partition <br> (ESP) </td><td> The partitioning scheme used by UEFI. ESP is the format used for the boot sector where the operating system and utilities for starting a computer are stored. </td></tr><tr><td>init</td><td> init is the first process that&#39;s started when booting a Linux system. init is a daemon process that continues running until the system is shut down. It&#39;s the direct or indirect ancestor of all other processes and automatically adopts all orphaned processes. init is a legacy process that&#39;s been replaced by systemd. </td></tr><tr><td>initramfs</td><td> initramfs is used as the first root file system that your machine has access to. It&#39;s used for mounting the real rootfs, which has all of your data. </td></tr><tr><td> Root <br> partition </td><td> The partition at the top of the directory tree, which contains all of the programs and files necessary for running Linux. This is the root file system that&#39;s represented by a forward slash (/). </td></tr></tbody></table><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th>Exam</th><th>Objective</th></tr></thead><tbody><tr><td>TestOut Linux Pro</td><td> 1.3 Manage system startup and shutdown <ul><li>Manage bootloader configurations</li></ul></td></tr><tr><td>CompTIA Linux+ XK0-005</td><td> 1.1 Summarize Linux fundamentals <br><ul><li>Basic boot process</li><ul><li>Basic Input/Output System (BIOS)</li><li>Unified Extensible Firmware Interface (UEFI)</li><li> Comands <ul><li>initrd.img</li><li>vmlinuz</li><li>mkinitrd</li><li>dracut</li></ul></li><li>Grand Unified Bootloader</li><li>Boot sources</li><ul><li>Preboot eXecution (PXE)</li><li>Booting from Universal</li><li>Booting from ISO</li><li>Booting from Universal Serial Bus (USB)</li></ul></ul><li> Device types in /dev <ul><li>Block devices</li><li>Character devices</li></ul></li></ul></td></tr></tbody></table><h2 id="_4-1-1-linux-boot-process" tabindex="-1"><a class="header-anchor" href="#_4-1-1-linux-boot-process"><span>4.1.1 Linux Boot Process</span></a></h2><h3 id="linux-boot-process-00-00-00-23" tabindex="-1"><a class="header-anchor" href="#linux-boot-process-00-00-00-23"><span>Linux Boot Process 00:00-00:23</span></a></h3><p>It is important to understand how an OS boots. Different Linux distributions may have slight differences, so we&#39;re going to look at the generic boot process in this lesson. We&#39;ll examine the boot loader, the boot target, and the service files and daemons loaded during a boot-up. Configuring how the Linux system boots is a key skill for system administrators.</p><h3 id="linux-boot-process-00-23-00-37" tabindex="-1"><a class="header-anchor" href="#linux-boot-process-00-23-00-37"><span>Linux Boot Process 00:23-00:37</span></a></h3><p>To make the Linux boot process a little more digestible, we&#39;re going to break it down into the three phases that you see here. First, we&#39;re going to look at the hardware boot phase, then the bootloader phase, and we&#39;ll end with the kernel phase.</p><h3 id="linux-boot-process-–-hardware-boot-phase-00-37-01-46" tabindex="-1"><a class="header-anchor" href="#linux-boot-process-–-hardware-boot-phase-00-37-01-46"><span>Linux Boot Process – Hardware Boot Phase 00:37-01:46</span></a></h3><p>With Linux or any other OS, the first step when starting the system is the hardware boot phase. When you power on your system, it goes through a process to make sure the hardware is working properly. This is the POST, or Power On Self Test, step in running your Basic Input/Output system, or BIOS. During this phase, components such as the keyboard and mouse, CPU and RAM, I/O ports, and video are tested to make sure they&#39;re all operational. If an error occurs, your system will either beep or display an error message.</p><p>Once the POST process completes, the system boot device takes control. This device may be internal storage, an optical disk, a USB device, or an SD card. The device is usually configured in the system configuration, or it can be chosen at boot time with a key press.</p><p>Up to this point, the system&#39;s startup routine is, generally, the same as other operating systems. The process then moves to the boot device to start Linux. Traditionally, systems used BIOS to configure their systems. While there are still systems configured with legacy BIOS, UEFI or Unified Extensible Firmware Interface, is more secure and provides many improvements over legacy BIOS.</p><h3 id="bootloader-phase-01-46-02-45" tabindex="-1"><a class="header-anchor" href="#bootloader-phase-01-46-02-45"><span>Bootloader Phase 01:46-02:45</span></a></h3><p>Once the system&#39;s hardware has been tested, control is given to the boot device. While the boot device may differ, it contains code that allows the system to start the operating system. This is the job of the bootloader. The bootloader loads code into RAM allowing the operating system to take over control of the hardware. This code may differ from distribution to distribution and is different than other operating systems.</p><p>After the bootloader begins loading its code, it creates a temporary virtual file system in your system RAM called a RAM disk. And, depending on your distribution, this image will either be called initrd, for initial RAM disk, or initramfs, for initial RAM file system. Both perform the same function which is to load a basic image used to load the Linux OS. This image contains just enough to get things started such as loading specific drivers for networking, video, or other specific hardware in the system. At this point, the Linux kernel is started and control of the hardware is transitioned to the kernel.</p><h3 id="kernel-phase-02-45-03-32" tabindex="-1"><a class="header-anchor" href="#kernel-phase-02-45-03-32"><span>Kernel Phase 02:45-03:32</span></a></h3><p>Once the bootloader process completes, control has been given to the kernel. The kernel is the core of the operating system. While there are many different distros available, the Linux kernel is not significantly changed. The kernel uses the RAM disk to load all the modules required to initialize the system and load necessary daemons and other programs.</p><p>At this point, the RAM disk is no longer needed so it dismounts and destroys it to reclaim the used memory. The kernel then mounts the root file system and starts probing for new hardware and loading the appropriate drivers.</p><p>Lastly, it starts the initialization process, systemd. Systemd is used to initialize the system, define the systemd target, and whether to load additional programs and daemons. At this point, the system is considered &quot;booted&quot; and you are prompted to login.</p><h3 id="summary-03-32-03-45" tabindex="-1"><a class="header-anchor" href="#summary-03-32-03-45"><span>Summary 03:32-03:45</span></a></h3><p>That&#39;s it for this lesson. In this lesson, we reviewed the Linux boot process. We looked at the hardware boot, bootloader, and kernel phases of the boot process.</p><h2 id="_4-1-2-linux-boot-process-facts" tabindex="-1"><a class="header-anchor" href="#_4-1-2-linux-boot-process-facts"><span>4.1.2 Linux Boot Process Facts</span></a></h2><p>Understanding the overall boot process can be beneficial when you need to configure boot loaders, boot targets, and service files that govern the way daemons are loaded. Basic Input/Output System (BIOS) is the firmware specification that was originally used by personal computers to initiate the boot process. The Unified Extensible Firmware Interface (UEFI) was developed to address the shortcomings of BIOS. UEFI has replaced BIOS and is now the standard used by computer manufacturers to govern the boot process.</p><p>This lesson covers the following topics:</p><ul><li>UEFI boot</li><li>BIOS boot</li><li>vmlinux/vmlinuz</li></ul><h3 id="uefi-boot" tabindex="-1"><a class="header-anchor" href="#uefi-boot"><span>UEFI Boot</span></a></h3><p>UEFI (previously known as the EFI) is a firmware specification that defines the process for booting computer systems. It is the interface between a computer system&#39;s hardware/firmware and the operating system. Some of the features provided by UEFI include the following:</p><ul><li>It provides support for larger disks using the <i class="fs-italicize">Globally Unique Identifier Partition Table</i> (GPT) partition scheme. The MBR partitioning scheme used by BIOS supported only four partitions per disk, with a maximum size of 2 TB per partition. UEFI supports a maximum partition size of 9.4 ZB (9.4 x 10 <sup>21</sup> bytes).</li><li>It provides its own boot manager. This is a significant change. The old BIOS had only enough intelligence to load a single block from the storage device. This required a multi-stage boot process. UEFI has its own command interpreter and boot manager. You no longer need a dedicated boot loader as long as you place the operating system&#39;s bootable files into the EFI system partition (ESP), which is formatted with a FAT file system.</li><li>It preserves several components from the traditional BIOS, including power management and a real-time clock.</li></ul><p>The following table identifies the phases during a UEFI boot.</p>',32),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Phase"),e("th",null,"Process")])]),e("tbody",null,[e("tr",null,[e("td",null,"UEFI"),e("td",null,[t(" The following steps take place during the UEFI boot process: "),e("ol",null,[e("li",null," Power is supplied to the processor. The processor is hard-coded to look at a special memory address for code to execute. "),e("li",null," This memory address contains a pointer or jump program that instructs the processor where to find the UEFI program. (The mount point for the EFI system partition is usually /boot/efi, where its content is accessible after Linux is booted.) "),e("li",null,"The processor loads the UEFI program."),e("li",null," UEFI runs the power-on self-test (POST). If the POST is successful, UEFI identifies other system devices. It uses the CMOS system clock and information supplied by the devices themselves to identify and configure hardware devices. Plug and Play devices are allocated system resources. The system typically displays information about the keyboard, mouse, and IDE drives in the system. Following this summary, information about devices and system resources is displayed. "),e("li",null," UEFI reads the GUID partition table, which is located in the blocks immediately after block 0. The GUID partition table defines the layout of the partition table on the storage device. "),e("li",null,[t(" Using this information, the UEFI boot loader locates the ESP which contains the boot loader files or kernel images for all operating systems that are installed on other partitions on the device. ESP also contains device driver files for hardware devices on the computer that are used by the firmware at boot, system utility programs to be run before the operating system is booted, and data files, including error logs. "),e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",null,[e("span",null," To boot Linux, you would use a UEFI-aware version of the GRUB bootloader and install its boot file (grub.efi) in the EFI system partition.")])])])])])])])]),e("tr",null,[e("td",null,"Boot loader"),e("td",null,[t(" During the boot loader stage, UEFI gives control to the boot loader program. The following steps take place: "),e("ol",null,[e("li",null,"UEFI loads the boot loader code."),e("li",null,[t(" When the boot loader is in RAM and executing, a splash screen is commonly displayed, and an optional initial RAM disk (e.g., initrd or initramfs image) is loaded into memory. The initramfs image is used with new distributions. Initramfs: "),e("ul",null,[e("li",null," Is a custom version of the init program, containing all the drivers and tools needed at boot. "),e("li",null," Is created by mkinitrd. Mkinitrd uses dracut to reduce boot times by using special tools and enabling udev to create device nodes for system hardware. "),e("li",null," Has root permissions that can be used to access the actual /root file system regardless of whether it exists on the local computer or an external device. Without the permissions, the computer could not access the file systems and read information that exists only on those file systems. "),e("li",null," Is used to mount the file system and load the kernel into RAM. ")])]),e("li",null," With the images ready, the boot loader invokes the kernel image. ")])])]),e("tr",null,[e("td",null,"OS Kernel"),e("td",null,[t(" During this stage, the Linux kernel takes over. The kernel: "),e("ol",null,[e("li",null,"Resides in the /EFI directory."),e("li",null,"Initializes the hardware on the system."),e("li",null," Locates and loads the initrd script to access the linuxrc program, which configures the operating system. "),e("li",null," Dismounts and erases the RAM disk image. On older distributions, this is the initrd image. On newer distributions, this is the initramfs image. "),e("li",null,"Looks for new hardware and loads the drivers."),e("li",null,"Mounts the root partition."),e("li",null," Loads and executes either the init (Initial) process (for older distributions) or the systemd process (for newer distributions). These processes then launch all other processes (either directly or indirectly) to finish booting the system. ")]),e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",null,[e("span",null," The init (Initial) or systemd processes are always assigned a process ID of 1 because they are always the first processes to run on the system.")])])])])])])])],-1),e("h3",{id:"bios-boot",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bios-boot"},[e("span",null,"BIOS Boot")])],-1),e("p",null,"The BIOS process has been used for decades. You may find older hardware that still uses this system. Be aware that recent computer systems no longer use this process but use UEFI instead.",-1),e("p",null,"The following table identifies the phases during a BIOS boot.",-1),e("table",{id:"table1"},[e("thead",null,[e("tr",null,[e("th",null,"Phase"),e("th",null,"Process")])]),e("tbody",null,[e("tr",null,[e("td",null,"BIOS"),e("td",null,[t(" In the BIOS stage, BIOS is loaded, and the system hardware is identified. The following steps take place: "),e("ol",null,[e("li",null," Power is supplied to the processor. The processor is hard-coded to look at a special memory address for code to execute. "),e("li",null," This memory address contains a pointer or jump program that instructs the processor where to find the BIOS program. "),e("li",null," The processor loads the BIOS program. The first BIOS process to run is the power-on self-test (POST). "),e("li",null," If the POST is successful, the BIOS identifies other system devices. It uses CMOS settings and information supplied by the devices themselves to identify and configure hardware devices. Plug and Play devices are allocated system resources. The system typically displays information about the keyboard, mouse, and IDE drives in the system. Following this summary, information about devices and system resources is displayed. "),e("li",null," The BIOS then searches for a boot sector, using the boot order specified in the CMOS. ")])])]),e("tr",null,[e("td",null,"Boot loader"),e("td",null,[t(" During the boot loader stage, BIOS gives control to the boot loader program. The following steps take place: "),e("ol",null,[e("li",null," BIOS searches the boot sector, which contains a Master Boot Record (MBR). "),e("li",null,"BIOS loads the primary bootloader code from the MBR."),e("li",null,[t(" The primary bootloader does one of the following: "),e("ul",null,[e("li",null," It examines the partition table marked as bootable, and then loads the boot sector from that partition. This boot sector contains a secondary boot loader, which locates an OS kernel. "),e("li",null," It locates an OS kernel directly without using a secondary boot loader. ")])]),e("li",null,[t(" When the secondary boot loader is in RAM and executing, a splash screen is commonly displayed, and an optional initial RAM disk (e.g., initrd image) is loaded into memory. The initrd image: "),e("ul",null,[e("li",null," Has root permissions that can be used to access the actual /root file system regardless of whether it exists on the local computer or an external device. Without the permissions, the computer could not access the file systems and read information that only exists on those file systems. "),e("li",null," Is used to mount the actual file system and load the kernel into RAM. ")])]),e("li",null," With the images ready, the secondary boot loader invokes the kernel image. ")])])]),e("tr",null,[e("td",null,"OS Kernel"),e("td",null,[t(" During this stage, the Linux kernel takes over. The kernel: "),e("ol",null,[e("li",null,"Resides in the /boot directory."),e("li",null,"Initializes the hardware on the system."),e("li",null," Locates and loads the initrd script to access the linuxrc program, which configures the operating system. "),e("li",null," Dismounts and erases the RAM disk image. On older distributions, this is the initrd image. On newer distributions, this is the initramfs image. "),e("li",null,"Looks for new hardware and loads the drivers."),e("li",null,"Mounts the root partition."),e("li",null," Loads and executes either the init (Initial) process (for older distributions) or the systemd process (for newer distributions). These processes then launch all other processes (either directly or indirectly) to finish booting the system. ")]),e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",null,[e("span",null," The init (Initial) or systemd processes are always assigned a process ID of 1 because they are always the first processes to run on the system.")])])])])])])])],-1),i('<h3 id="vmlinux-vmlinuz" tabindex="-1"><a class="header-anchor" href="#vmlinux-vmlinuz"><span>vmlinux/vmlinuz</span></a></h3><p>The vmlinux and vmlinuz Linux kernel executables contain information that can be used for debugging. The vm part of the name stands for virtual memory, indicating that these Linux operating systems can use hard disk space as memory. Be aware of the following:</p><ul><li>Most Linux distributions use a vmlinux or vmlinuz file.</li><li>The vmlinuz file is a compressed file of vmlinux. <ul><li>The vmlinuz file is typically created using bzImage.</li><li>The bzImage has gzip decompressor code built into it. You cannot use gunzip or gzip -dc to unpack vmlinuz.</li><li>In the past, zImage was used to create the vmlinuz file. Now, bzImage is used because it uncompresses the kernel into high memory, over 1 MB.</li></ul></li></ul><h2 id="_4-1-3-linux-alternative-boot-options-facts" tabindex="-1"><a class="header-anchor" href="#_4-1-3-linux-alternative-boot-options-facts"><span>4.1.3 Linux Alternative Boot Options Facts</span></a></h2><p>In addition to booting the Linux kernel from the computer&#39;s hard disk drive, you can boot Linux in a number of ways. These boot alternatives offer a number of benefits, including ease of administration and the ability to troubleshoot and repair a computer you cannot boot. Boot alternatives include:</p><ul><li>PXE</li><li>NFS</li><li>Boot from ISO</li><li>Boot from HTTP</li></ul><h3 id="pxe" tabindex="-1"><a class="header-anchor" href="#pxe"><span>PXE</span></a></h3><p>The Preboot eXecution Environment (PXE) is the process whereby a computer initially boots from firmware installed on the computer&#39;s network card. When the client computer boots, it sends out an initial request for a PXE server. If a server that hears this request uses PXE, it sends the client a list of boot servers that contain the bootloaders available.</p><p>Using this method, a computer can download and run Linux without the need to install the operating system to its local hard drive. This method is often used on thin clients where no hard drive exists. This method can also be useful for troubleshooting a system where the bootloader has become corrupt and can no longer boot.</p><p>When using PXE, be aware of the following:</p><ul><li>The NIC in the client computer must support PXE boot.</li><li>The client BIOS/UEFI must be configured to use PXE.</li><li>The PXE client uses DHCP to obtain an IP address.</li><li>A Trivial File Transfer Protocol (TFTP) server sends the necessary files to the client. The TFTP server can reside on the DHCP server.</li><li>Linux servers can be configured as PXE servers.</li></ul><h3 id="nfs" tabindex="-1"><a class="header-anchor" href="#nfs"><span>NFS</span></a></h3><p>Network File System (NFS) is a file system that allows the storage and retrieval of data over a network. You can use the NFS file system to boot Linux on a client in a diskless/thin client environment. You can also boot Linux from the NFS file system to reduce administrative overhead. Booting from an NFS server requires a PXE environment. To boot Linux using NFS, you must specify the following for configuration:</p><ul><li>NFS client support as built-in.</li><li>The server and the name of the directory to mount as root (e.g., root=/dev/nfs). This is not the path to the actual server but a synonym to indicate that NFS is being used.</li><li>nfsroot using <b class="fw-bold">nfsroot=[&lt;server-ip&gt;:]&lt;root-dir&gt;[,&lt;nfs-options&gt;]</b> . NFS options for nfsroot include: <ul><li>Port from the server portmap daemon.</li><li>Rsize and wsize to specify the buffer size for read and write requests.</li><li>timeo to specify the timeout threshold in tenths of a second.</li></ul></li><li>Configuration for IP addresses or use the <b class="fw-bold">ip=autoconf</b> to indicate autoconfiguration.</li><li>nfsrootdebug to enable debugging messages to display during kernel boot.</li></ul><h3 id="boot-from-iso" tabindex="-1"><a class="header-anchor" href="#boot-from-iso"><span>Boot from ISO</span></a></h3><p>An ISO image is a file that is an identical copy of the original media. ISO images are a convenient and common way to load a Linux distribution. An ISO image containing the Linux distribution can be used from a variety of media, including a CD/DVD, a USB stick, and a hard disk drive (HDD). The media containing the .iso image can be configured to be bootable, allowing the Linux distribution to be loaded from the media. A common system recovery tool is a bootable CD/DVD or USB drive with a Linux ISO file.</p><p>ISO files are:</p><ul><li>Uncompressed and can be in any format</li><li>A sector-by-sector copy of data</li><li>Stored inside a binary file</li><li>Identified by .iso extension</li></ul><h3 id="boot-from-http" tabindex="-1"><a class="header-anchor" href="#boot-from-http"><span>Boot from HTTP</span></a></h3><p>HTTP is another option for booting the Linux kernel and is a function in the UEFI specifications. HTTP boot is a client-server communication-based application. It combines the Dynamic Host Configuration Protocol (DHCP), Domain Name System (DNS), and Hypertext Transfer Protocol (HTTP) to provide the capability for system deployment and configuration over the network. Because HTTP boot provides higher performance (larger files and greater distances than TFTP), it is used to replace the PXE boot method of network deployment.</p><p>The basic process for booting using HTTP is as follows:</p><ul><li>The client initiates the DHCP process by broadcasting a DHCP request containing the HTTP Boot identifier. A DHCP server that supports the HTTP Boot extension provides a boot resource location in Uniform Resource Identifier (URI) format to the client.</li><li>The URI points to the Network Boot Program that is appropriate for the client’s request. The client then uses the HTTP protocol to download the NBP from the HTTP server to its memory.</li><li>The client executes the downloaded NBP image. This program may then use other UEFI interfaces for further system setup based on the NBP design.</li></ul><p>A Linux server can be configured as the HTTP boot server. The HTTP boot client must support and be configured (using the UEFI setup) to support HTTP boot. HTTP can be accessed from an existing Linux system by:</p><ul><li>Editing the grub.cfg file to load the kernel and initrd through the HTTP protocol.</li><li>Using persistent memory firmware support in the UEFI that will pull an ISO file from the HTTP server.</li></ul>',24)]))}const c=s(n,[["render",l],["__file","01.html.vue"]]),u=JSON.parse('{"path":"/04/01.html","title":"Section 4.1 Linux Boot Process","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 4.1 Linux Boot Process","description":"some description"},"headers":[{"level":2,"title":"4.1.1 Linux Boot Process","slug":"_4-1-1-linux-boot-process","link":"#_4-1-1-linux-boot-process","children":[{"level":3,"title":"Linux Boot Process 00:00-00:23","slug":"linux-boot-process-00-00-00-23","link":"#linux-boot-process-00-00-00-23","children":[]},{"level":3,"title":"Linux Boot Process 00:23-00:37","slug":"linux-boot-process-00-23-00-37","link":"#linux-boot-process-00-23-00-37","children":[]},{"level":3,"title":"Linux Boot Process – Hardware Boot Phase 00:37-01:46","slug":"linux-boot-process-–-hardware-boot-phase-00-37-01-46","link":"#linux-boot-process-–-hardware-boot-phase-00-37-01-46","children":[]},{"level":3,"title":"Bootloader Phase 01:46-02:45","slug":"bootloader-phase-01-46-02-45","link":"#bootloader-phase-01-46-02-45","children":[]},{"level":3,"title":"Kernel Phase 02:45-03:32","slug":"kernel-phase-02-45-03-32","link":"#kernel-phase-02-45-03-32","children":[]},{"level":3,"title":"Summary 03:32-03:45","slug":"summary-03-32-03-45","link":"#summary-03-32-03-45","children":[]}]},{"level":2,"title":"4.1.2 Linux Boot Process Facts","slug":"_4-1-2-linux-boot-process-facts","link":"#_4-1-2-linux-boot-process-facts","children":[{"level":3,"title":"UEFI Boot","slug":"uefi-boot","link":"#uefi-boot","children":[]},{"level":3,"title":"BIOS Boot","slug":"bios-boot","link":"#bios-boot","children":[]},{"level":3,"title":"vmlinux/vmlinuz","slug":"vmlinux-vmlinuz","link":"#vmlinux-vmlinuz","children":[]}]},{"level":2,"title":"4.1.3 Linux Alternative Boot Options Facts","slug":"_4-1-3-linux-alternative-boot-options-facts","link":"#_4-1-3-linux-alternative-boot-options-facts","children":[{"level":3,"title":"PXE","slug":"pxe","link":"#pxe","children":[]},{"level":3,"title":"NFS","slug":"nfs","link":"#nfs","children":[]},{"level":3,"title":"Boot from ISO","slug":"boot-from-iso","link":"#boot-from-iso","children":[]},{"level":3,"title":"Boot from HTTP","slug":"boot-from-http","link":"#boot-from-http","children":[]}]}],"git":{"updatedTime":1736486703000},"filePathRelative":"04/01.md"}');export{c as comp,u as data};
