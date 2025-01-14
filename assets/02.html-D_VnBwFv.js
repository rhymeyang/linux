import{_ as n,c as i,a as l,b as e,d as a,o as s}from"./app-D-CuBheB.js";const o={};function r(d,t){return s(),i("div",null,t[0]||(t[0]=[l('<p>As you study this section, answer the following questions:</p><ul><li>What is the role of a package manager?</li><li>What sources are available for obtaining packages?</li><li>Which utility will extract files from an RPM package without installing the package?</li><li>How would you verify that a package has been installed?</li><li>What is the main configuration file for the YUM package?</li></ul><p>In this section, you will learn to:</p><ul><li>Install packages with YUM</li><li>Use DNF to install an RPM package</li><li>Use DNF to remove an RPM package</li></ul><p>Key terms for this section include the following:</p><table class="terms"><thead><tr><th>Term</th><th>Definition</th></tr></thead><tbody><tr><td>Software repository</td><td> An online location that stores software packages for a Linux distribution. </td></tr><tr><td>YUM</td><td>The Yellowdog Updater, Modified package manager.</td></tr><tr><td>yumdownloader</td><td> A utility that downloads an RPM package from a software repository. </td></tr><tr><td>DNF</td><td>The Dandified YUM package manager.</td></tr></tbody></table><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th>Exam</th><th>Objective</th></tr></thead><tbody><tr><td>TestOut Linux Pro</td><td> 1.5 Use package management <ul><li> Install, remove, and update packages with the rpm command </li><li>Install, remove, and update RPM packages with DNF</li></ul></td></tr><tr><td>CompTIA Linux+ XK0-005</td><td> 1.6 Given a scenario, build and install software <br><ul><li>Package management</li><ul><li>DNF</li><li>YUM</li><li>RPM</li><li>Zypp</li></ul></ul><p>1.7 Manage software configuraitons</p><ul><li> Updating configuration files <ul><li> Repository configuration files <ul><li>/etc/yum.conf</li><li>/etc/dnf/dnf.conf</li><li>/etc/apt/sources.list.d</li></ul></li></ul></li></ul></td></tr></tbody></table><h2 id="_6-2-1-yellowdog-updater-modified-yum" tabindex="-1"><a class="header-anchor" href="#_6-2-1-yellowdog-updater-modified-yum"><span>6.2.1 Yellowdog Updater, Modified (YUM)</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Yellowdog Updater, Modified 00:00-00:50 In this lesson, we&#39;ll discuss the yum command, which is a front end for RPM. YUM stands for Yellowdog Updater, Modified, and it has some advantages over the rpm command alone.</p><p>First, YUM will install a package with all the dependencies in a single command. This is very helpful because a package dependency chain can get extremely long.</p><p>Here&#39;s what happens. Let&#39;s say you run RPM to install package A on your system. You&#39;re informed package A is dependent on the installation of packages B and C. Then, you find that B is dependent on the prior installation of D, E, and F and that C is dependent on the prior installation of G, H, and I. Then, as you go to install those packages, you find that they each have dependencies as well.</p><p>YUM 00:50-01:42 In your effort to install package A, you ended up researching, downloading, and installing 25 to 30 packages. This is where YUM really shines – by doing all of this for you with a single command.</p><p>The second advantage of YUM is that it automatically locates requested packages by searching package repositories on the internet. When you run the yum command, it&#39;ll find the latest package version, check for dependencies, and then installs the dependencies and the requested package.</p><p>Unfortunately, YUM is not supported by all distributions. It was developed for Red Hat distributions, like Fedora, but isn&#39;t supported on others like openSUSE. Luckily, most of these other distributions have an equivalent of YUM. For example, on openSUSE, you use the zypper command instead of yum, for almost identical functionality.</p><p>DNF 01:42-02:38 It&#39;s important to note at this point that many newer Linux distributions use the dnf command instead of yum. DNF, Dandified YUM, is an enhanced version of YUM, and has almost identical syntax.</p><p>You can replace yum in your commands with dnf. In fact, if you run YUM on these newer distributions, DNF performs the task.</p><p>The yum syntax is shown here. Enter yum, then specify an option. You can specify a command. And then, the name of the package to perform the action on.</p><p>For example, to install the findutils package on your system, just run this command: yum install findutils. Then the YUM utility will search the repositories that it&#39;s been configured to search.</p><p>YUM locates the latest version of the findutils package, calculates the dependencies, downloads, and installs it all for you.</p><p>Yumdownloader 02:38-05:29 If you want to download, but not install a package, you can use the yumdownloader command. For the syntax, enter yumdownloader and the name of the package.</p><p>The yumdownloader utility queries the same repositories that YUM uses for the latest version of the package and saves it in the current directory that you ran the command from. Then, you can manually install the package when you want.</p><p>YUM offers more than the install option. For example, use the yum remove command to uninstall a package. Or use yum list installed to view all packages currently on your system. Use yum list install plus a package name to see if a packages is already installed.</p><p>Run yum list updates to generate a list of available updates for all installed packages. Or to check for updates for a specific package, enter yum list update followed by the package name. To view information about a package, like version number or dependencies, enter yum info followed by the package name. To identify a package that provides a specific file, enter yum whatprovides followed by the file name.</p><p>Now understand, you need to tell yum and yumdownloader where to look for the packages. This is done with two configuration files. The first is /etc/yum.conf This is the main configuration file for YUM. It defines the URLs for software repositories and the directory where downloaded packages are saved during installation, shown here. It also defines where the YUM log files are saved. Here.</p><p>Just a moment ago we said you can put the URL to your repository in this file, but you can also put in separate files named with an extension of .repo.</p><p>The second configuration file, and preferred option, is to store your repository information within separate files in the /etc/yum.repos.d directory. You create a separate file for each repository for the YUM utility to use, name it, and save it in this directory.</p><p>Here&#39;s an example of several configured by default from a Fedora system. We have fedora.repo, fedora-updates.repo and fedora-updates-testing.repo.</p><p>The syntax is shown here for the main fedora.repo file configured by default. First is the name of the repository in brackets, then the name directive here. These define a name for the repository.</p><p>Then the baseurl parameter is here, which defines a URL for where the packages are located on the internet. Here, we&#39;re pointing to a server on the internet, downloadfedoraproject.org, and then the path on the server to those files.</p><p>Custom Repository Configuration 05:29-06:17 Alternately, you can create custom repository configuration files that point to a server on your local network. In this example, we configured one server to pull files down from the internet, and then pointed all our other systems to use that server. This reduces a lot of redundant internet traffic by having the files downloaded once to a local server, and then distributed to all our local systems.</p><p>Here is the enabled parameter that either enables or disables this repository. And here is gpgcheck for validating the integrity of the repository files. This turns GPG security key checking on or off. The 1 setting turns it on. Zero turns it off. Then finally, we have the location of the GPG key for this repository.</p><p>Summary 06:17-06:40 That&#39;s it for this lesson. In this lesson, we talked about using YUM instead of RPM to manage packages on your system. We first talked about how YUM works. Then we reviewed how to install and remove packages with YUM. And we finished this lesson talking about how to configure the yum utility.</p><h2 id="_6-2-2-install-packages-with-yum" tabindex="-1"><a class="header-anchor" href="#_6-2-2-install-packages-with-yum"><span>6.2.2 Install Packages with YUM</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Install Packages With YUM 00:00-00:09 In this demonstration we&#39;re going to practice installing RPM packages with the YUM utility.</p><p>Install RPM Packages With YUM 00:09-00:40 We can install packages with the RPM utility, but that doesn&#39;t resolve package dependencies. When installing a package with RPM, you must manually install all dependencies with the intended package. This can take a lot of searching and downloading. In many cases, dependency chains are very long and would take large amounts of time to prepare.</p><p>A better way to install RPM packages is to use the YUM utility to automatically check for and download dependencies. YUM downloads and installs software prerequisites for the package, and then installs the intended package.</p><p>View Available Packages 00:40-00:52 Let&#39;s practice using YUM. We can view a list of all available packages that could be installed by typing yum list. This looks through our repositories and populates the packages we can install on the system.</p><p>View Single Package Information 00:52-01:14 We can also use YUM to view information about a single package. For example, let&#39;s run yum list again, but this time constrain our query to one package that we want to install. Let&#39;s install the gcc package. We&#39;ll run yum list gcc. We see it&#39;s available, the name of the gcc package, its architecture, and the version number of that package.</p><p>Install Packages from the Online Repository 01:14-02:18 Let&#39;s install gcc with YUM. We type sudo yum install and then the name of the package, gcc. The yum command goes to the repository, downloads the latest version of that package, and installs it on our system. We see YUM is processing all the dependencies necessary for this package to be installed. We&#39;re told the dependencies have been resolved and presented with a summary of what has to happen.</p><p>We&#39;re installing one package, but other packages need to be installed first. Some packages may already be installed but need to be upgraded before the latest version of a package can be installed.</p><p>The total size of the packages is displayed. We&#39;re prompted with, &quot;Is this okay?&quot;. Type y and press Enter. At this point, YUM is updating the packages that need to be updated before gcc is installed. Next, YUM installs the packages that gcc is dependent upon that have not yet been installed on the system, and then it installs gcc.</p><p>The gcc package was installed on the system. We see a list of dependent packages that were not on the system that had to be installed in order to get gcc installed.</p><p>Summary 02:18-02:36 In this demonstration we talked about installing RPM packages with the YUM utility. We used YUM to view a list of available packages, to view information about a single package, and to install a package from an online repository.</p><h2 id="_6-2-3-install-packages-with-dandified-yum-dnf" tabindex="-1"><a class="header-anchor" href="#_6-2-3-install-packages-with-dandified-yum-dnf"><span>6.2.3 Install Packages with Dandified YUM (DNF)</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Install Packages with Dandified YUM (DNF) 00:00-00:09 In this demonstration, we&#39;re going to practice managing RPM packages with the DNF utility.</p><p>Dandified YUM 00:09-01:03 For many years, different distributions used the YUM utility to manage RPM packages. We used YUM because it automatically downloaded the appropriate package we wanted to install from an online repository.</p><p>YUM would also check for dependencies for that package, automatically resolve them, and install the necessary software. It made life easier than trying to manage packages with RPM.</p><p>However, there were still bugs in the YUM utility that would occasionally cause problems. Some distributions now use an updated version of YUM called Dandified YUM, or DNF.</p><p>DNF addresses many of the bugs found in the old YUM command. To use DNF, type the DNF command at the command prompt. However, distributions that use DNF can still use the YUM command.</p><p>Running YUM on these distributions will run DNF automatically. Since DNF is an enhanced version of YUM, DNF uses the same syntax as the YUM command.</p><p>View Available Packages with DNF 01:03-01:19 For example, to view a list of the available packages in configured online repositories, type dnf list. With YUM, we would&#39;ve typed yum list.</p><p>A list of all the various packages that are currently available on the configured online repositories is displayed.</p><p>Use DNF to View Information About a Single Package 01:19-01:42 We can also use DNF to view information about a single package. The syntax is dnf list and the name of the package we&#39;re searching for. For example, GCC. GCC is a C compiler that allows us to compile source code into an executable that&#39;ll run on Linux systems.</p><p>We see the full package name of the GCC package that&#39;s available, along with its version number.</p><p>Install a Package with DNF 01:42-02:45 To install GCC, type sudo dnf install, followed by the name of the package. This is the same syntax that&#39;s used with YUM. We typed: sudo dnf install GCC.</p><p>The DNF utility will ensure the package is available for installation and download. DNF will also check for any dependencies. If other packages need to be installed for GCC to run, DNF will identify them, see if they&#39;re installed, and automatically install them. Once dependencies are met, DNF will install the GCC package.</p><p>At this point, the dependency check&#39;s complete. The dependencies have been resolved, and we&#39;re shown which packages need to be installed and upgraded before GCC can be installed. We&#39;re provided a total download size and installed size. Type y, press Enter, and the installation will begin.</p><p>GCC is now installed on the system. We&#39;re provided a list of the packages that were installed and the number of packages that were upgraded in order to install GCC.</p><p>Uninstall a Package with DNF 02:45-03:29 We can also uninstall a package with DNF. Enter sudo dnf erase and the name of the package to uninstall. In this case, let&#39;s uninstall gcc. Press Enter. GCC is going to be removed as well as all the dependent packages that were installed when GCC was installed. DNF will remove those that have no other dependencies, meaning no other packages are dependent upon them to run.</p><p>In this situation, the packages listed in red were installed when GCC was installed. No other packages on the system needed these packages, so DNF will remove all of them. We&#39;ll be shown the amount of space reclaimed by removing the package and being asked if we wish to continue. Let&#39;s type y and press Enter. GCC is now being removed.</p><p>Summary 03:29-03:38 In this demonstration, we learned about package management with the DNF utility.</p><h2 id="_6-2-4-yum-and-dnf-facts" tabindex="-1"><a class="header-anchor" href="#_6-2-4-yum-and-dnf-facts"><span>6.2.4 YUM and DNF Facts</span></a></h2><p>Yellowdog Updater Modified (YUM) is a robust utility that manages Red Hat Package Manager (RPM) packages.</p><p>This lesson covers the following topics:</p><ul><li>YUM functions</li><li>Dandified YUM (DNF)</li><li>Zypper</li><li>Common commands</li></ul><h3 id="yum-functions" tabindex="-1"><a class="header-anchor" href="#yum-functions"><span>YUM Functions</span></a></h3><p>YUM is the primary utility for getting, installing, deleting, querying, and managing Red Hat Enterprise Linux RPM software packages. YUM:</p><ul><li>Is used on Red Hat, Fedora, and other compatible distributions.</li><li>Checks the dependencies of an RPM package being installed and then automatically installs or updates any dependencies as needed.</li><li>Keeps and updates a file that lists all available packages from the internet repositories that it&#39;s been configured to use.</li><li>Uses /etc/yum.conf as its configuration file. The configuration file contains: <ul><li>URLs of RPM repositories.</li><li>Directories to save downloaded packages.</li><li>Log locations.</li></ul></li><li>Uses a .repo file in /etc/yum.repos.d/ to identify each internet repository that will be used to install packages. To change where YUM looks for new or updated packages, add .repo files to this directory.</li><li>Uses /var/usr/yum.log as a log file to track when packages are installed, removed, or downloaded.</li></ul><h3 id="dandified-yum-dnf" tabindex="-1"><a class="header-anchor" href="#dandified-yum-dnf"><span>Dandified YUM (DNF)</span></a></h3><p>Dandified YUM (DNF) is a utility-based YUM that performs the same task of solving dependencies when installing RPM packages. DNF uses an updated algorithm for solving dependencies while utilizing the same YUM command options. DNF:</p><ul><li>Uses /etc/dnf/dnf.conf as its configuration file. The configuration file contains: <ul><li>URLs of RPM repositories.</li><li>Directories to save downloaded packages.</li><li>Log locations.</li></ul></li><li>Uses a repository file in the same location as YUM. The /etc/yum.repos.d/ directory contains .repo files to identify each internet repository that will be used to install packages. To change where DNF looks for new or updated packages, add .repo files to this directory.</li><li>Uses /var/log/dnf.log as a log file to track when packages are installed, removed, or downloaded.</li></ul><h3 id="zypper" tabindex="-1"><a class="header-anchor" href="#zypper"><span>Zypper</span></a></h3><p>Zypper is the command line interface for the graphical package manager named Zypp. Zypper downloads RPM-type packages from an online repository, resolves dependencies, and installs the packages. Zypper and libzypp, the library that supports zypper functions, are the package management components used on SUSE and openSUSE systems.</p><h3 id="common-commands" tabindex="-1"><a class="header-anchor" href="#common-commands"><span>Common Commands</span></a></h3><p>The following table lists and describes several common commands used by YUM and DNF for managing RPM packages:</p>',79),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Command"),e("th",null,"Function"),e("th",null,"Example")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("b",null,"yum")]),e("td",{valign:"top"},[a(" Installs RPM packages, including their dependencies. Be aware of the following actions and options: "),e("ul",null,[e("li",null,[e("b",null,"list"),a(" displays lists of packages.")]),e("li",null,[e("b",null,"install"),a(" installs a package. Use the entire package filename for installations. ")]),e("li",null,[e("b",null,"list updates"),a(" displays whether updates are available for packages. ")]),e("li",null,[e("b",null,"update"),a(" updates RPM packages.")]),e("li",null,[e("b",null,"list available"),a(" lists packages that are available to install. ")]),e("li",null,[e("b",null,"search"),a(" searches all packages for a specified term. ")]),e("li",null,[e("b",null,"info"),a(" displays detailed package information.")]),e("li",null,[e("b",null,"provides"),a(" , "),e("b",null,"whatprovides"),a(" display which packages are associated with a specific file. ")]),e("li",null,[e("b",null,"remove, erase"),a(" uninstalls a package.")]),e("li",null,[e("b",null,"-y"),a(" bypasses confirmation prompts.")])])]),e("td",{valign:"top"},[e("b",null,"yum list all"),a(" shows all packages in the repository and any installed on the computer. "),e("br"),e("b",null,"yum list javahelp2"),a(" searches for the javahelp2 package in the repository. "),e("br"),e("b",null,"yum list *help*"),a(' lists all packages in the repository that have the string "help" somewhere in the name. '),e("br"),e("b",null,"yum list installed mtools"),a(" shows whether the mtools package is installed on the computer. "),e("b",null,[e("br"),a("yum install BackupPC-3.1.0-3.fc9.rpm")]),a(" installs the BackupPC package and any package dependencies. "),e("br"),e("b",null,"yum install http://rpm.sh-linux.org/rpm-fc9/target/BackupPC-3.1.0-3.fc9.rpm"),a(" installs the specified package directly from the internet. "),e("br"),e("b",null,"yum list update mtools"),a(" looks for an update for the mtools package and updates it if one is available. "),e("br"),e("b",null,"yum update sssd"),a(" updates the sssd package. "),e("br"),e("b",null,"yum update"),a(" updates all installed packages. "),e("br"),e("b",null,"yum list available"),a(" shows the available packages. "),e("br"),e("b",null,"yum search Java"),a(" searches all package information and descriptions for the term "),e("i",null,"Java"),a(" . "),e("br"),e("b",null,"yum info zuff"),a(" shows information about the zuff package. "),e("br"),e("b",null,"yum whatprovides /etc/updatedb.conf"),a(" shows which packages are associated with the updatedb.conf file. "),e("br"),e("b",null,"yum remove kdegames"),a(" uninstalls the kdegames package from your computer. "),e("br"),e("b",null,"yum -y update"),a(" updates all packages without requesting confirmation prompts. ")])]),e("tr",null,[e("td",null,[e("b",null,"yumdownloader")]),e("td",{valign:"top"},"Downloads a package without installing it."),e("td",{valign:"top"},[e("b",null,"yumdownloader zuff"),a(" downloads the zuff package, but does not install it. ")])]),e("tr",null,[e("td",null,[e("b",null,"createrepo")]),e("td",{valign:"top"},[a(" Creates a repository list of RPM packages stored locally or on a network. Be aware of the following options: "),e("ul",null,[e("li",null,[e("b",null,"-g"),a(" specifies an XML file for the repository.")]),e("li",null,[e("b",null,"-x"),a(" excludes specific file globs.")])])]),e("td",{valign:"top"},[e("b",null,"createrepo -g"),e("b",null,"packagefile.xml"),a(" creates a list of packages using the .xml file. ")])]),e("tr",null,[e("td",null,[e("b",null,"dnf")]),e("td",{valign:"top"},[a(" Installs RPM packages, including their dependencies. Be aware of the following actions and options: "),e("ul",null,[e("li",null,[e("b",null,"list"),a(" displays lists of packages.")]),e("li",null,[e("b",null,"install"),a(" installs a package. Use the entire package file name when installing. ")]),e("li",null,[e("b",null,"list updates"),a(" displays whether updates are available for packages. ")]),e("li",null,[e("b",null,"update"),a(" updates RPM packages.")]),e("li",null,[e("b",null,"list available"),a(" lists packages that are available to install. ")]),e("li",null,[e("b",null,"search"),a(" searches all packages for a specified term. ")]),e("li",null,[e("b",null,"info"),a(" displays detailed package information.")]),e("li",null,[e("b",null,"provides"),a(" , "),e("b",null,"whatprovides"),a(" display which packages are associated with a specific file. ")]),e("li",null,[e("b",null,"remove, erase"),a(" uninstalls a package.")]),e("li",null,[e("b",null,"-y"),a(" bypasses confirmation prompts.")])])]),e("td",{valign:"top"},[e("b",null,"dnf list all"),a(" shows all packages in the repository and any installed on the computer. "),e("br"),e("b",null,"dnf list javahelp2"),a(" searches for the javahelp2 package in the repository. "),e("br"),e("b",null,"dnf list *help*"),a(" lists all packages in the repository that have the string help somewhere in the name. "),e("br"),e("b",null,"dnf list installed mtools"),a(" shows whether the mtools package is installed on the computer. "),e("b",null,[e("br"),a("dnf install BackupPC-3.1.0-3.fc9.rpm")]),a(" installs the BackupPC package and any package dependencies. "),e("br"),e("b",null,"dnf install http://rpm.sh-linux.org/rpm-fc9/target/BackupPC-3.1.0-3.fc9.rpm"),a(" installs the specified package directly from the internet. "),e("br"),e("b",null,"dnf list update mtools"),a(" looks for an update for the mtools package and updates it if one is available. "),e("br"),e("b",null,"dnf update sssd"),a(" updates the sssd package. "),e("br"),e("b",null,"dnf update"),a(" updates all installed packages. "),e("br"),e("b",null,"dnf list available"),a(" shows the available packages. "),e("br"),e("b",null,"dnf search Java"),a(" searches all package information and descriptions for the term "),e("i",null,"Java"),a(" . "),e("br"),e("b",null,"dnf info zuff"),a(" shows information about the zuff package. "),e("br"),e("b",null,"dnf whatprovides /etc/updatedb.conf"),a(" shows which packages are associated with the updatedb.conf file. "),e("br"),e("b",null,"dnf remove kdegames"),a(" uninstalls the kdegames package from your computer. "),e("br"),e("b",null,"dnf -y update"),a(" updates all packages without requesting confirmation prompts. ")])])])],-1)]))}const h=n(o,[["render",r],["__file","02.html.vue"]]),c=JSON.parse('{"path":"/06/02.html","title":"Section 6.2 Online Package Installation","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 6.2 Online Package Installation","description":"some description"},"headers":[{"level":2,"title":"6.2.1 Yellowdog Updater, Modified (YUM)","slug":"_6-2-1-yellowdog-updater-modified-yum","link":"#_6-2-1-yellowdog-updater-modified-yum","children":[]},{"level":2,"title":"6.2.2 Install Packages with YUM","slug":"_6-2-2-install-packages-with-yum","link":"#_6-2-2-install-packages-with-yum","children":[]},{"level":2,"title":"6.2.3 Install Packages with Dandified YUM (DNF)","slug":"_6-2-3-install-packages-with-dandified-yum-dnf","link":"#_6-2-3-install-packages-with-dandified-yum-dnf","children":[]},{"level":2,"title":"6.2.4 YUM and DNF Facts","slug":"_6-2-4-yum-and-dnf-facts","link":"#_6-2-4-yum-and-dnf-facts","children":[{"level":3,"title":"YUM Functions","slug":"yum-functions","link":"#yum-functions","children":[]},{"level":3,"title":"Dandified YUM (DNF)","slug":"dandified-yum-dnf","link":"#dandified-yum-dnf","children":[]},{"level":3,"title":"Zypper","slug":"zypper","link":"#zypper","children":[]},{"level":3,"title":"Common Commands","slug":"common-commands","link":"#common-commands","children":[]}]}],"git":{"updatedTime":1736655833000},"filePathRelative":"06/02.md"}');export{h as comp,c as data};