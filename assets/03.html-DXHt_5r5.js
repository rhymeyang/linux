import{_ as n,c as l,a as s,b as e,d as a,o as i}from"./app-CSbjnKiP.js";const o={};function c(p,t){return i(),l("div",null,t[0]||(t[0]=[s('<p>As you study this section, answer the following questions:</p><ul><li>When would you use Debian packages instead of RPM packages?</li><li>How can you tell a Debian package from an RPM package?</li><li>Which <b class="fw-bold">dpkg</b> option prevents a package from being installed if a newer version of the package already exists on the computer?</li><li>Which command would you use to display all of the package&#39;s dependencies?</li><li>Which command for Debian is similar to the YUM tool for RPM packages?</li></ul><p>In this section, you will learn to:</p><ul><li>Manage Debian packages</li><li>Use <b class="fw-bold">apt</b></li></ul><p>Key terms for this section include the following:</p><table class="terms"><thead><tr><th>Term</th><th>Definition</th></tr></thead><tbody><tr><td>Debian packages</td><td> A collection of files that allow libraries or applications to be distributed through a package management system. Debian is distinctly different from the RPM format. </td></tr></tbody></table><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th>Exam</th><th>Objective</th></tr></thead><tbody><tr><td>TestOut Linux Pro</td><td> 1.5 Use package management <br><ul><li> Install, upgrade, and update Ubuntu software packages with apt </li></ul></td></tr><tr><td>CompTIA Linux+ XK0-005</td><td> 1.6 Given a scenario, build and install software <br><ul><li>Package management</li><li style="list-style:none;display:inline;"><ul><li>APT</li><li>dpkg</li></ul></li></ul><p>1.7 Manage software configurations</p><ul><li> Update configuration files <ul><li> Repository configurations files <ul><li>/etc/apt.conf</li><li>/etc/apt/sources.list.d</li></ul></li></ul></li></ul></td></tr></tbody></table><h2 id="_6-3-1-debian-package-manager-dpkg" tabindex="-1"><a class="header-anchor" href="#_6-3-1-debian-package-manager-dpkg"><span>6.3.1 Debian Package Manager (dpkg)</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Debian Package Manager (dpkg) 00:00-00:20 In this lesson, we&#39;ll discuss the Debian Package Manager, or dpkg. Some Linux distributions, like Fedora, use RPM to manage software packages. Others are based on the Debian distribution and use the Debian Package Manager.</p><p>Debian Packages 00:20-00:39 Debian packages use a naming convention similar to RPM. Even though both RPM and dpkg have similar functionality, they&#39;re not cross-platform compatible. There&#39;s a utility called Alien that&#39;s designed to convert packages between formats, but it&#39;s not always reliable.</p><p>dpkg 00:39-01:23 Okay, so let&#39;s look at the syntax. You see it here—packagename_version_architecture.deb. The ending shows whether it&#39;s a Debian package or not. A .deb is for Debian, and .rpm means RPM, obviously. Here&#39;s an example of an actual Debian package—flightgear_3.0.0-5_i386.deb. This is the package name, this is the version number, and this is the architecture. A Debian package has dependency information that includes all the other packages that it&#39;s dependent on. Any of these will need to be installed first.</p><p>The dpkg Command 01:23-01:49 We know that dpkg is the tool used to manage Debian packages. Here&#39;s the dpkg syntax. We run dpkg with options, specify an action, and then specify either the name of the package or the filename. This depends on whether that package has already been installed. If it hasn&#39;t, use the filename. If it has, or if you&#39;re accessing it from a repository, just use the name of the package.</p><p>Installing a Debian Package 01:49-02:34 Okay, so to use dpkg to install a Debian package, run dpkg -i followed by the name of the package to be installed. You&#39;ll need to make sure to specify the full filename. In this flightgear example, we ran dpkg -i followed by the name of the package.</p><p>Notice that you&#39;re required to elevate privileges to finish with the installation. We use sudo to temporarily elevate privileges to the root level, and then we install the package as shown here. Once installed, use the -p option to view more information about it. In this case, you&#39;d type dpkg -p flightgear.</p><p>Uninstalling a Debian Package 02:34-03:54 Conversely, you can use the dpkg command to uninstall a Debian package, too. Just run dpkg with the -r option plus the name of the package to remove it. For example, to uninstall the flightgear package, run dpkg -r flightgear.</p><p>Even though you can uninstall a package like this, a better way is to use a package manager like apt-get. This is because it calculates dependencies to ensure system stability first. For example, if I run dpkg -r zip, the zip package will be uninstalled. This would cause problems because it&#39;s a dependency. If it&#39;s uninstalled, any applications that depend on it won&#39;t run properly.</p><p>The apt-get package manager, though, will warn you when there are dependent packages and prompt you to uninstall them as well to prevent broken applications on your system.</p><p>Now, if you need to list the packages that are currently installed, use the dpkg -l command. Just know that the output will be very long because there are typically hundreds of packages on most systems. If you need a specific piece of information, it&#39;s best to pipe the output from dpkg -l to the input of grep. Here, we&#39;re looking for the apache2 package.</p><p>Viewing Package Files 03:54-04:42 Alternately, you can use dpkg to view package files. For example, to list ones that&#39;ll be installed by a certain package, enter dpkg -L followed by the package name. Here again is apache2.</p><p>On the other hand, if you want to find out which package installed a file—in this case, sshd_config—use the dpkg -S command. Unfortunately, this doesn&#39;t always work because the files that are put in your file system during the installation process often aren&#39;t copied from the package. Instead, they&#39;re created by the installation process itself. And the dpkg -S command can only determine which package added the file if the file was copied directly from the package.</p><p>The apt-cache Command 04:42-05:26 Besides the dpkg command, there are several Advanced Package Tools—or APTs—for managing packages on a Debian-based system. For example, the apt-cache command is comparable to the RPM -q command. It queries the Debian package database—also called the package cache.</p><p>For example, to see if the flightgear package was installed, use this command: apt-cache pkgnames flightgear. To view information about the package, use apt-cache showpkg flightgear. And to view dependency information for that package, enter apt-cache depends flightgear.</p><p>Summary 05:26-05:49 And that&#39;s it for this lesson where we reviewed the management of Debian packages. First, we looked at how they work. Then we talked about using the dpkg command. And we ended this lesson by reviewing how you can use the apt-cache command to get information about Debian packages themselves.</p><h2 id="_6-3-2-advanced-packaging-tool-apt" tabindex="-1"><a class="header-anchor" href="#_6-3-2-advanced-packaging-tool-apt"><span>6.3.2 Advanced Packaging Tool (apt)</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Advanced Packaging Tool (apt-get) 00:00-00:40 In this lesson, we&#39;ll discuss the Advanced Package Tool called apt-get, which is part of APT&#39;s suite of tools. The apt-get utility is equivalent to the yum utility on an RPM system.</p><p>apt-get is helpful because it downloads and installs packages automatically. It also automatically calculates, downloads, and installs the dependencies for a package you want to install. This is much easier than using the dpkg command.</p><p>More recent Debian-based systems use the apt utility in place of apt-get and apt-cache. It uses the same syntax and is used in almost identical workflows.</p><p>The apt-get Utility 00:40-02:48 I recommend being familiar with this important file: /etc/app/sources.list. This file defines which repositories the apt-get utility can get packages from. And just like yum, these repositories can reside on a local optical disc, such as the installation DVD. The repository could also be on the local hard disk drive or a server on the internet that&#39;s maintained by your Linux distribution&#39;s vendor.</p><p>This example of the source.list file shows a list of all the repositories where apt-get can get package files from to install on your system.</p><p>Notice there are two types of repositories listed here. First, there&#39;s the standard package repositories, which always begin with a deb prefix. These are where apt-get can get Debian packages. Alternately, if you want the source code for the package file, apt-get can get those from a source file repository. And they always begin with the deb-src prefix.</p><p>The syntax for apt-get is shown here. We run apt-get followed by a list of options, then a command, and finally the name of the package we want to perform the actions on.</p><p>For example, to install a new package, enter apt-get, the action, install, and then the name of the package. In this example, we use sudo to elevate privileges, and then we run the apt-get install nmap command.</p><p>Now apt-get will go to one of the repositories that are configured in the sources.list file. It will download the package and then query it for dependencies. If there are any that are not already on the system, then apt-get will go back to the repository and download dependencies and install them. Then it will install the package. In this case, we&#39;re installing the nmap utility. Just as with yum, apt-get can do many more tasks than just installing software.</p><p>For example, to upgrade a package, use the apt-get upgrade command. To uninstall a package, use the apt-get remove command. And to upgrade all the packages on your system with the latest upgrades available, enter apt-get dist-upgrade.</p><p>Aptitude 02:48-04:21 All the APT tools we&#39;ve looked at have been command line utilities. However, the APT suite also provides a text-based menu-driven utility for managing Debian packages. It&#39;s called Aptitude.</p><p>Many Debian distributions don&#39;t include Aptitude by default, so you may need to install it. To do that, you use sudo to elevate privileges, then run apt-get to install and specify the aptitude package. This will download Aptitude from your repository and install it. Then you can run Aptitude by entering aptitude at the shell prompt, which will display this interface.</p><p>Within this interface, you can install packages, uninstall packages, and update packages. For example, to install a new package, I would arrow down to this option, Not Installed Packages, browse through the list to the desired package, and then press g to install it.</p><p>Aptitude can also be used as a command line utility, like apt-get. For example, enter aptitude install followed by the package name to install a package name. Use aptitude remove to uninstall a package. Use aptitude purge to completely purge a package off the system. It will first uninstall the package and then delete all its configuration and data files too. Use aptitude update to update the list of available packages from the repository. Use aptitude full-upgrade to upgrade all installed packages to the latest versions and use aptitude search to search for packages containing a specified term.</p><p>Summary 04:21-04:35 That&#39;s it for this lesson. In this lesson, we reviewed APT tools for Debian package management. First, we looked at apt-get, and then we talked about the aptitude command.</p><h2 id="_6-3-3-managing-debian-packages" tabindex="-1"><a class="header-anchor" href="#_6-3-3-managing-debian-packages"><span>6.3.3 Managing Debian Packages</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Manage Debian Packages 00:00-00:12 In this demo, we&#39;re going to talk about managing Debian packages. The two most common commands you&#39;ll see used for Debian package management are dpkg and apt.</p><p>View Packages Using dpkg 00:12-00:53 Let&#39;s start by using the dpkg command with the -s option, followed by the package name, gcc. The -s option we put in shows us if a particular package is already installed on the system and what its status is. In this example, we&#39;re checking this information on the C compiler package—that&#39;s the gcc part. This is commonly pre-installed on Linux distributions because it compiles source code into an executable that the system can run.</p><p>We see that gcc is, in fact, installed. We see the package name, what the version number is, the functionality it provides, and more. We also see what other packages it&#39;s dependent on, and we see the size as well. Let&#39;s move on.</p><p>Install Packages Using dpkg 00:53-01:47 We can use the dpkg command to install a new Debian package on the system. Here, we&#39;ve downloaded a couple of Debian packages to the Downloads folder. We see all the packages by listing the contents of the Downloads folder with ls.</p><p>Let&#39;s install eboard with the dpkg command. This is a fun graphical chess game for Linux. We do have to run the install command with root privileges, though. Regular users are allowed to view package information, but not to install new ones. We use sudo to gain those root-level privileges that we need.</p><p>Let&#39;s run sudo dpkg -i to start the installation. Also, it&#39;s a best practice to provide the full path to the Debian package, so let&#39;s type /home/testout/Downloads/eboard. Then we can use the tab key to avoid having to type the package&#39;s full name. Okay, now we&#39;ll run dpkg -s eboard to view the eboard package status.</p><p>Uninstall Packages Using dpkg 01:47-02:21 We can also use dpkg to uninstall a package. Let&#39;s type sudo dpkg to get root-level privileges again. We&#39;ll use -P, which uninstalls the package we specify. The full command should be sudo dpkg -P eboard. This removes the package and deletes any associated data from the hard drive.</p><p>Know that dpkg can&#39;t resolve dependencies. So when you&#39;re trying to install packages with a large number of dependencies, you&#39;ll need to download each package individually and manually install them. Some packages can have more than 30 dependencies.</p><p>Use the apt Command 02:21-02:29 That&#39;s why a better option for installing Debian packages is to use some variation of the apt command. This is the preferred way to manage your Debian packages.</p><p>Use apt-cache 02:29-03:35 The apt-cache command manages packages that are already installed on your system. For example, we run apt-cache showpkg gcc to see if the gcc package was installed. The output of apt-cache displays key information about the package. We get the version number and the Reverse Depends. This is important to know because there are other packages that require gcc to be installed in order to run. Under Dependencies, we see these packages that gcc is dependent on.</p><p>We can run apt-cache stats to view how many total packages are installed on the system already. And we see how much disk space they use. Let&#39;s run apt-cache depends gcc to view the dependency information for the gcc program. The output is divided into three categories. We have two hard dependencies. These are two packages that must be installed in order for gcc to run.</p><p>There are several suggested dependencies as well, which are good to have, but aren&#39;t required. And then there&#39;s some other recommended ones, too. To view a list of all the packages that are installed on the system, we use apt list --installed or apt-cache pkgnames.</p><p>Install with apt 03:35-04:50 The apt-get install or apt install commands are more commonly used to install packages because they can download them from an online repository. That means you don&#39;t have to manually search for the package online. It saves you a lot of time.</p><p>Also, the apt command can resolve package dependencies for you. If there are dependencies for the package you&#39;re installing—and they aren&#39;t installed on your system—the apt command will automatically install them for you. That makes this command the go-to option for Debian package management. Let&#39;s run sudo apt-get install docker. This again takes advantage of the sudo command to gain root privileges, and the apt-get install part goes and fetches the docker package and its dependencies from an internet repository.</p><p>Okay, we see that the docker package requires wmdocker as a dependency, and the apt-get command will install docker and wmdocker for us. It lets us know that zero packages will be upgraded, and two new ones will be installed. And we&#39;re told how much disk space the packages will use.</p><p>Okay, now it&#39;s asking us if we&#39;d like to continue the installation. Let&#39;s type y and hit Enter to install docker and its dependency. We also have the option to run sudo apt-get download docker to just download the package, but not to install it.</p><p>Summary 04:50-05:12 That&#39;s all for this demonstration. In this demo, we talked about how to manage Debian packages on a Linux system. We talked about using the dpkg command to view packages, install them, and uninstall them if we need. Then we talked about how to accomplish the same tasks using online repositories and the apt command.</p><h2 id="_6-3-4-debian-package-management-facts" tabindex="-1"><a class="header-anchor" href="#_6-3-4-debian-package-management-facts"><span>6.3.4 Debian Package Management Facts</span></a></h2><p>Debian packages are preconfigured installation packages similar to RPM packages.</p><p>This lesson covers the following topics:</p><ul><li>Debian package functions</li><li>Common commands</li></ul><h3 id="debian-package-functions" tabindex="-1"><a class="header-anchor" href="#debian-package-functions"><span>Debian Package Functions</span></a></h3><p>Debian packages:</p><ul><li>Are used with some Linux distributions, including Ubuntu, Knoppix, and Linspire.</li><li>Use naming conventions similar to RPM naming conventions, but use a .deb file extension.</li><li>Include dependency information.</li><li>Are not natively compatible with RPM.</li></ul><h3 id="common-commands" tabindex="-1"><a class="header-anchor" href="#common-commands"><span>Common Commands</span></a></h3><p>The following table lists and describes several common commands for managing Debian packages:</p>',70),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Command"),e("th",null,"Function"),e("th",null,"Examples")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("b",null,"dpkg")]),e("td",{valign:"top"},[a(" Installs Debian packages on Debian distributions. Be aware of the following "),e("b",null,"dpkg"),a(" options: "),e("ul",null,[e("li",null,[e("b",null,"-i"),a(" installs a package.")]),e("li",null,[e("b",null,"--configure"),a(" reconfigures an unpacked package.")]),e("li",null,[e("b",null,"-r"),a(" removes the package, but does not delete the configuration files. ")]),e("li",null,[e("b",null,"-P"),a(" completely uninstalls the package, including the configuration files. ")]),e("li",null,[e("b",null,"-p"),a(" lists information about a currently installed Debian package. ")]),e("li",null,[e("b",null,"-I"),a(" (uppercase i) or "),e("b",null,"--info"),a(" lists information about packages that are not installed. ")]),e("li",null,[e("b",null,"-l"),a(" (lowercase L) displays all packages with names that match a specified pattern. ")]),e("li",null,[e("b",null,"-L"),a(" shows the installed files for a package.")]),e("li",null,[e("b",null,"-S"),a(" finds a package associated with specified files. ")]),e("li",null,[e("b",null,"-C"),a(" searches for packages that have been installed only partially on the system. ")]),e("li",null,[e("b",null,"-B"),a(" disables packages that have dependencies on the package being removed. ")]),e("li",null,[e("b",null,"--ignore-depends"),a(" ignores dependency checking for specified packages. ")]),e("li",null,[e("b",null,"-no-act"),a(" prevents changes from being written.")]),e("li",null,[e("b",null,"-G"),a(" prevents a package from being installed if a newer version of the package already exists on the computer. ")]),e("li",null,[e("b",null,"-E"),a(" does not install the package if the same version of the package is already installed. ")]),e("li",null,[e("b",null,"-R"),a(" installs the package recursively.")])]),e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",null,[e("span",null,[a(" The "),e("b",null,"dpkg-reconfigure"),a(" command reconfigures an already installed package.")])])])])])]),e("td",{valign:"top"},[e("b",null,"dpkg -i docbook_4.5-4_all.deb"),a(" installs the docbook package. "),e("b",null,[e("br"),a("dpkg -r docbook")]),a(" removes the docbook package. "),e("br"),e("b",null,"dpkg -P docbook"),a(" removes the docbook package and its configuration files. "),e("br"),e("b",null,"dpkg -i docbook"),a(" displays information about the package. "),e("br"),e("b",null,"dpkg -I dwm-tools_26-2_i386.deb"),a(" displays information about the dwm-tools package. "),e("br"),e("b",null,"dpkg -l kcheckers*"),a(" lists all packages that begin with kcheckers. "),e("br"),e("b",null,"dpkg -L docbook"),a(" lists all files installed with the docbook package. "),e("br"),e("b",null,"dpkg -S /usr/share/base-files/motd"),a(" shows the package associated with the motd file. "),e("br"),e("b",null,"dpkg -B -r docbook"),a(" removes the docbook package and disables any package dependent on the docbook package. "),e("br"),e("b",null,"dpkg -G -i docbook_4.5-4_all.deb"),a(" installs the docbook package if it is a newer version than a previously installed package. ")])]),e("tr",null,[e("td",null,[e("b",null,"apt-cache")]),e("td",{valign:"top"},[a(" Retrieves information about the Debian package database. Be aware of the following "),e("b",null,"apt-cache"),a(" options: "),e("ul",null,[e("li",null,[e("b",null,"showpkg"),a(" displays information about a package in the database. ")]),e("li",null,[e("b",null,"stats"),a(" shows the number of packages installed, dependency information, and other package cache statistics. ")]),e("li",null,[e("b",null,"unmet"),a(" lists any missing dependencies in the package cache. ")]),e("li",null,[e("b",null,"depends"),a(" shows all of the package's dependencies.")]),e("li",null,[e("b",null,"pkgnames"),a(" displays whether a package is installed on the system. When the package name is left off, the command shows information for all packages on the computer. ")]),e("li",null,[e("b",null,"search"),a(" searches for a package in the cache.")])])]),e("td",{valign:"top"},[e("b",null,"apt-cache showpkg 3dchess"),a(" shows information about the 3dchess package. "),e("br"),e("b",null,"apt-cache depends 3dchess"),a(" shows dependency information for the 3dchess package. "),e("br"),e("b",null,"apt-cache pkgnames 3dchess"),a(" displays whether the 3dchess package is installed. "),e("b",null,[e("br"),a("apt-cache search kde")]),a(' searches for all packages that contain "kde" anywhere in the name. ')])]),e("tr",null,[e("td",null,[e("b",null,"apt-get")]),e("td",{valign:"top"},[a(" Downloads and install packages. Be aware that "),e("b",null,"apt-get:"),e("ul",null,[e("li",null,[a(" Is similar to the "),e("b",null,"yum"),a(" utility on an RPM distribution. ")]),e("li",null," Uses the file /etc/apt.conf or the files in the directory /etc/apt/apt.conf.d to configure apt behavior. "),e("li",null," Gets its information about the application repositories from the /etc/apt/sources.list file, which is built from files in the directory /etc/apt/sources.list.d. "),e("li",null," Automatically calculates and resolves package dependencies when installing, updating, and removing packages. ")]),e("h2",null,"apt-get"),e("ul",null,[e("li",null,[e("b",null,"update"),a(" updates the list of packages available from the sources in "),e("b",null,"/etc/apt/sources.list"),a(" with the latest information about available packages. ")]),e("li",null,[e("b",null,"upgrade"),a(" upgrades all installed packages to the latest versions in accordance with the information found in the sources listed in "),e("b",null,"/etc/apt/sources.list"),a(" . ")]),e("li",null,[e("b",null,"dist-upgrade"),a(" similar to the "),e("strong",null,"upgrade"),a(" option, but will also install new packages as needed and remove packages as needed. ")]),e("li",null,[e("b",null,"install"),a(" installs a package using the package name. The package name is not the filename. During the installation, "),e("b",null,"apt-get"),a(" retrieves the most recent version of the package. ")]),e("li",null,[e("b",null,"remove"),a(" removes a specified package, but leaves the configuration files. ")]),e("li",null,[e("b",null,"purge"),a(" removes the package and the configuration files. ")]),e("li",null,[e("b",null,"source"),a(" retrieves the latest version of the package. The command accesses the /etc/apt/sources.list file to determine whether the latest package version is installed. ")]),e("li",null,[e("b",null,"check"),a(" checks the package database for consistency and errors. ")]),e("li",null,[e("b",null,"clean"),a(" removes unneeded package information files and logs. This command is needed when not using the dselect utility to install Debian packages. ")]),e("li",null,[e("b",null,"autoclean"),a(" removes information files about packages that can no longer be downloaded. ")]),e("li",null,[e("b",null,"-d"),a(" downloads packages without installing them.")]),e("li",null,[e("b",null,"-f"),a(" attempts to fix a computer with unsatisfied dependencies. (Use with: "),e("b",null,"apt-get install"),a(" and "),e("b",null,"apt-get remove"),a(" ) ")]),e("li",null,[e("b",null,"-m"),a(" ignores package files that cannot be accessed or located. ")]),e("li",null,[e("b",null,"-q"),a(" shows less progress information.")]),e("li",null,[e("b",null,"-s"),a(" simulates package installation without doing an actual install. ")]),e("li",null,[e("b",null,"-y"),a(" automatically provides a "),e("i",{class:"fs-italicize"},"yes"),a(" response to "),e("i",{class:"fs-italicize"},"yes/no"),a(" questions in the package installation script. ")])])]),e("td",{valign:"top"},[e("b",null,"apt-get info 3dchess"),a(" shows package and dependency information for the 3dchess package. "),e("b",null,[e("br"),a("apt-get install 3dchess")]),a(" downloads and installs the 3dchess package from a package repository. "),e("br"),e("b",null,"apt-get remove 3dchess"),a(" removes the 3dchess package, but leaves the 3dchess configuration files. "),e("br"),e("b",null,"apt-get purge 3dchess"),a(" removes the 3dchess package along with the 3dchess configuration files. "),e("br"),e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",null,[e("span",null,[a(" Before "),e("b",null,"purge"),a(" was added as a command in the "),e("b",null,"apt-get"),a(" utility, you had to use "),e("b",null,"--purge"),a(" as an option with the "),e("b",null,"remove"),a(" command (for example, "),e("b",null,"apt-get remove --purge 3dchess"),a(" ). This older syntax is still supported.")])])])])]),e("b",null,"apt-get source 3dchess"),a(" determines whether a newer version of 3dchess is available, and if so, installs it. "),e("b",null,[e("br"),a("apt-get -d install 3dchess")]),a(" downloads the 3dchess package without installing it. "),e("b",null,[e("br"),a("apt-get -f install 3dchess")]),a(" tries to fix dependency issues for the 3dchess package. "),e("br"),e("b",null,"apt-get -m remove 3dchess"),a(" removes the 3dchess package, but ignores missing files. "),e("br"),e("b",null,"apt-get -q remove 3dchess"),a(" removes the 3dchess package, but shows less of the information during the process. "),e("br"),e("b",null,"apt-get -s install 3dchess"),a(" tests the installation process of the 3dchess package without installing it. "),e("br"),e("b",null,"apt-get -y install 3dchess"),a(" installs the 3dchess package and automatically provides a yes answer to any yes/no prompts. ")])]),e("tr",null,[e("td",null,[e("b",null,"apt")]),e("td",null,[a(" The "),e("b",null,"apt"),a(" command is similar in design and function to the "),e("b",null,"apt-get"),a(" tool suite mentioned above. The "),e("b",null,"apt"),a(" command manages dpkg packages on Debian- and Ubuntu-based distributions. You can also use it to locate, download, and install packages found in online repositories. "),e("br"),e("br"),a(" The syntax for using "),e("b",null,"apt"),a(" is as follows: "),e("ul",null,[e("li",null,[e("b",null,[a("apt install "),e("i",{class:"fs-italicize"},"package_name")]),a(" installs the specified package. ")]),e("li",null,[e("b",null,[a("apt remove "),e("i",{class:"fs-italicize"},"package_name")]),a(" uninstalls the specified package. ")]),e("li",null,[e("b",null,[a("apt search "),e("i",{class:"fs-italicize"},"search_term")]),a(" looks for packages with the search term found in the configured repositories. ")]),e("li",null,[e("b",null,"apt update"),a(" updates repositories with the latest list of available packages found in the configured repositories. ")]),e("li",null,[e("b",null,"apt dist-upgrade"),a(" upgrades all installed packages with any available updated packages. ")])])]),e("td",{valign:"top"},[e("b",null,"apt update"),a(" update list of available packages from repositories "),e("br"),e("b",null,"apt info 3dchess"),a(" shows dependency information for the 3dchess package."),e("br"),e("b",null,"apt install 3dchess"),a(" downloads and installs the 3dchess package from a package repository. "),e("br"),e("b",null,"apt remove 3dchess"),a(" removes the 3dchess package, but leaves the 3dchess configuration files. "),e("br"),e("b",null,"apt purge 3dchess"),a(" removes the 3dchess package along with the 3dchess configuration files. "),e("br")])]),e("tr",null,[e("td",null,[e("b",null,"aptitude")]),e("td",{valign:"top"},[a(" Views the list of packages and perform package management tasks such as installing, upgrading, and removing packages in the Advanced Packaging Tool (APT). The "),e("b",null,"aptitude"),a(" command is APT's front end. This command displays a list of software packages and allows the user to interactively pick packages to install or remove. ")]),e("td",{valign:"top"},[e("br")])])])],-1)]))}const r=n(o,[["render",c],["__file","03.html.vue"]]),h=JSON.parse('{"path":"/06/03.html","title":"Section 6.3 Debian Package Manager (dpkg)","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 6.3 Debian Package Manager (dpkg)","description":"some description"},"headers":[{"level":2,"title":"6.3.1 Debian Package Manager (dpkg)","slug":"_6-3-1-debian-package-manager-dpkg","link":"#_6-3-1-debian-package-manager-dpkg","children":[]},{"level":2,"title":"6.3.2 Advanced Packaging Tool (apt)","slug":"_6-3-2-advanced-packaging-tool-apt","link":"#_6-3-2-advanced-packaging-tool-apt","children":[]},{"level":2,"title":"6.3.3 Managing Debian Packages","slug":"_6-3-3-managing-debian-packages","link":"#_6-3-3-managing-debian-packages","children":[]},{"level":2,"title":"6.3.4 Debian Package Management Facts","slug":"_6-3-4-debian-package-management-facts","link":"#_6-3-4-debian-package-management-facts","children":[{"level":3,"title":"Debian Package Functions","slug":"debian-package-functions","link":"#debian-package-functions","children":[]},{"level":3,"title":"Common Commands","slug":"common-commands","link":"#common-commands","children":[]}]}],"git":{"updatedTime":1736655833000},"filePathRelative":"06/03.md"}');export{r as comp,h as data};