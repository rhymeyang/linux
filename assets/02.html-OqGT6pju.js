import{_ as i,c as s,a,b as e,d as t,o as n}from"./app-CSbjnKiP.js";const r={};function l(u,o){return n(),s("div",null,o[0]||(o[0]=[a('<p>As you study this section, answer the following questions:</p><ul><li>How can you determine how long a system has been running?</li><li>How can you view the details about the CPU cores?</li><li>Which tool would you use to get an overview of the computer including status information for the CPU and memory?</li><li>Which tool would you use to configure the kernel parameters at runtime? For what purpose would you use it?</li><li>Which command would display the total amount of free and used physical and swap memory in your computer?</li><li>Which tool would extract detailed information on the hardware configuration of the machine?</li><li>Which file contains the statistics about the memory usage?</li></ul><h3 id="in-this-section-you-will-learn-to" tabindex="-1"><a class="header-anchor" href="#in-this-section-you-will-learn-to"><span>In this section, you will learn to:</span></a></h3><ul><li>Use uptime</li><li>Use top</li></ul><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th>Exam</th><th>Objective</th></tr></thead><tbody><tr><td>TestOut Linux Pro</td><td> 1.4 Manage system processes <ul><li>Monitor and manage running processes</li></ul></td></tr><tr><td>CompTIA Linux+ XK0-005</td><td> 1.4 Given a scenario, configure and use the appropriate processes and services <ul><li> Process management <ul><li> Listing processes and open files <ul><li>top</li><li>lsof</li><li>htop</li></ul></li></ul></li></ul><p> 1.5 Given a scenario, use the appropriate networking tools or configuration files </p><ul><li> Network monitoring <ul><li>netstat</li></ul></li></ul><p>1.7 Given a scenario, manage software configurations</p><ul><li> Configure kernel options <ul><li> Parameters <ul><li>sysctl</li></ul></li></ul></li></ul><p>2.2 Given a scenario, implement identity management</p><ul><li>Account creation and deletion</li></ul><p> 4.3 Given a scenario, analyze and troubleshoot central processing unit (CPU) and memory issues </p><ul><li>High CPU utilization</li><li>High load average</li><li> Memory exhaustion <ul><li>Free memory vs. file cache</li></ul></li><li> Out of memory (OOM) <ul><li>Memory leaks</li><li>Process killer</li></ul></li><li> Hardware <ul><li>/proc/cpuinfo</li><li>/proc/meminfo</li></ul></li><li> CPU times <ul><li>steal</li><li>user</li><li>system</li><li>idle</li><li>iowait</li></ul></li></ul></td></tr></tbody></table><h2 id="_11-2-1-cpu-resource-monitoring" tabindex="-1"><a class="header-anchor" href="#_11-2-1-cpu-resource-monitoring"><span>11.2.1 CPU Resource Monitoring</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Resource Monitoring 00:00-00:18 In this video, we&#39;re going to show you a few methods and tools that can be used to help troubleshoot and diagnose Linux CPU, memory, and hardware issues.</p><p>Since we could devote an entire course to troubleshooting Linux issues, this video will only cover a few key topics.</p><p>System Uptime and Load Average 00:18-02:22 To begin, let&#39;s first look at a command used to determine how long a system has been running and what the system&#39;s load averages are.</p><p>This command is uptime.</p><p>Uptime is a very simple command with only a few options.</p><p>When run without any options, uptime displays several pieces of default information.</p><p>The first piece of information is the current time of day.</p><p>This is followed by the word up and the amount of time the system has been running. This value is shown in both days and hours.</p><p>Next, you see the number of users currently logged in.</p><p>And the last bit of information is the load average for the last 1 minute, 5 minutes, and 15 minutes.</p><p>A system&#39;s load average is the average number of processes that are in either a runnable or uninterruptable state.</p><p>In other words, the number represents a percentage of the full CPU load.</p><p>For example, if the number is zero, there was no load on the CPU for the specified time period. And if the number is 1, then there was a full load on the CPU.</p><p>Any number greater than 1 indicates that the CPU has been asked to do more than it can in real time, and some tasks will have to wait for CPU time.</p><p>For example, as we look at the results from the uptime command shown here, we see the values of 1, .40, and 1.70.</p><p>This means that for the last 1 minute, the average CPU load was 100%.</p><p>For the last 5 minutes, the average utilization was 40%, which means that that CPU was idle for 60% of the time.</p><p>And finally, with the value of 1.70 found in the last field, we know that the average CPU load for the last 15 minutes was 170%, meaning that that 70% of the current processes had to be forced to wait for CPU time.</p><p>You can also change the output of uptime using switches.</p><p>For example, if you run uptime with -p, the output is simplified to only show how long the system has been running.</p><p>The only other switch you&#39;ll normally use is the -s switch.</p><p>With this switch, you can easily see the date and time the server was started.</p><p>The first value is the year, month, and date, and the last value is in hours, minutes, and seconds.</p><p>CPU Monitoring – /proc/cpuinfo 02:22-04:20 Now that you know how to determine how long your system has been running and find metrics about its load average, let&#39;s turn our attention to a few methods you can use to monitor the CPU.</p><p>One of the simplest methods for viewing the details about the individual CPU cores is to look at the contents of the /proc/cpuinfo file.</p><p>By viewing this file, you can gain information about things like the processor ID number. Keep in mind that each CPU will have a unique number and that the first CPU will have an ID of zero.</p><p>You&#39;ll also see the CPU family, which tells you the type of processor you have in the system.</p><p>For example, if your computer is an Intel-based system, simply place the number in front of &quot;86&quot; to determine the value. This is particularly helpful if you&#39;re attempting to identify the architecture of an older system, such as a 586, 486, or 386 system, because some RPM packages are compiled for each of these particular architectures. This value also helps users determine which packages to install.</p><p>The model name gives you the common name of the processor, including the project name.</p><p>The CPU MHz shows the processor&#39;s precise speed (in megahertz) to the thousandth decimal point.</p><p>The cache size displays the amount of level 2 memory cache available to the processor.</p><p>And the flags define a number of different processor attributes, such as the presence of a floating-point unit (FPU) and the ability to process MMX instructions.</p><p>Since this file can contain a lot of information, it&#39;s helpful to display the information one page at a times using less or a similar command.</p><p>You can also filter out or find specific information about things like the number of processors or cores the system has with the aid of the grep command.</p><p>For example, this command (cat /proc/cpuinfo | grep processor) lists all the lines containing the word processor.</p><p>To make this even simpler, you can pipe this result to the wc command with the dash lowercase-L switch (-l), which will add up the number of lines and give you a single number.</p><p>CPU Monitoring – sar 04:20-07:24 Another useful tool is the sar command. SAR is an acronym for System Activity Report.</p><p>It&#39;s an important tool that helps you get an overview of the computer and gives you important status information or metrics at different points of time for the CPU, memory, input, and output.</p><p>The cron job scheduler gathers the information sar displays.</p><p>For example, many Linux distributions have a sar cron file named sysstat in the /etc/cron directory.</p><p>If you look at this file, you see that every 10 minutes, the sa1 script is run, and then a daily summary of the accounting process is collected at 23:53 military time.</p><p>Now, when you run sar, you are shown the information collected by these cron jobs.</p><p>As we look at this output, we see some basic information about the date and the number of CPUs, and we also see specific information for several other categories.</p><p>For example, in the %user column, we see the percentage of CPU utilization that occurred while executing at the user level.</p><p>In Linux, a user can change the priority of a process by changing the nice value. This column shows the percentage of CPU utilization that occurred while executing at the user level with nice priority.</p><p>The %system column shows the percentage of CPU utilization that occurred while executing at the system level (or kernel). Note that this field does not include time spent servicing hardware or software interruptions.</p><p>The %iowait column shows the time the processor spent waiting for the input or output devices. This is idle time, when nothing could be scheduled.</p><p>The %steal column shows the amount of time a virtualized CPU spent while the hypervisor was servicing another virtual processor.</p><p>And finally, the %idle column shows the percentage of time that the CPU or CPUs were idle and the system didn&#39;t have an outstanding disk I/O request.</p><p>By default, sar stores all of its binary data in the /var/log/sa/ directory.</p><p>If you prefer to extend or shorten how long this history is saved, you can edit the /etc/sysconfig/sysstat file. By default, the history is typically stored for 28 days.</p><p>Keep in mind that if your history goes beyond 28 days, a new directory will be created as needed, one for each month.</p><p>If you want to view the sar information for a specific day, you can enter sar, the desired metric flag, -f /var/log/sa/, and then the filename.</p><p>In this command, the -f flag denotes that we&#39;ll be reading input from a file followed by the filename. The metric flag specifies the metric whose information we&#39;d like to access.</p><p>For example, sar -u -f /var/log/sa/sa04 will display the recorded CPU utilization information for the fourth day of the month.</p><p>If you view your man pages for sar, you will find there are many other ways to use sar to find just the information you&#39;re looking for. For example, -R reports memory statistics, and -s sets the starting time of the data.</p><p>CPU Monitoring – sysctl 07:24-08:21 The last utility I want to show you is named sysctl.</p><p>This powerful Linux command lets you configure the kernel parameters at runtime.</p><p>To view all of the available parameters, run sysctl -a as root.</p><p>You can change these parameters, and the change will take effect immediately. You can write the change permanently using the -w switch.</p><p>Keep in mind that there may not be any parameters that directly correlate to CPU usage. But changing some parameters may have a direct impact on the CPU&#39;s performance.</p><p>For example, tuning the network adapter by disabling the TCP timestamps option can result in better CPU utilization.</p><p>sysctl is really a powerful tool, so use it with care. There are a lot of kernel parameters that can really mess your system up if you make poor changes.</p><p>Be sure to look at the man pages for sysctl before you start working with it, and make sure you understand all the effects of changing a variable before you use sysctl to modify it.</p><p>Summary 08:21-08:52 That&#39;s it for this lesson.</p><p>In this lesson, we showed you how to monitor and analyze your CPU using several utilities.</p><p>First, we discussed how to view your system&#39;s up times using the uptime command.</p><p>Then we talked about how to monitor CPU statistics by viewing the /proc/cpuinfo file.</p><p>We also reviewed how to monitor CPU statistics using the sar command.</p><p>And finally, we showed you how to configure Linux kernel parameters at runtime using the sysctl command.</p><h2 id="_11-2-2-resource-monitoring-tools" tabindex="-1"><a class="header-anchor" href="#_11-2-2-resource-monitoring-tools"><span>11.2.2 Resource Monitoring Tools</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Resource Monitoring Tools 00:00-00:22 There are a variety of tools which allow monitoring resource usage on a Linux system. In this demo, we will look briefly at several of them.</p><p>In some cases, elevated privileges are required to accurately monitor system resource usage. To start with, we will use sudo -i to get an elevated session for the rest of the demo.</p><p>uptime command 00:22-00:39 The uptime command gives a brief report of the system&#39;s status: the current time, the amount of time that the system has been running, the number of users that are logged on, and the system load averages for the past 1, 5, and 15 minutes. A high system load average indicates high CPU usage.</p><p>w Command 00:39-01:17 The w command gives some additional details to uptime. Note that the output header is the same as the output of uptime. The rest of the output breaks down which users are logged in, what commands they are running, and their cumulative CPU usage. In this case both &quot;users&quot; are me, namely the desktop session and this elevated shell session.</p><p>JCPU indicates CPU time used by all processes attached to the given user shell (including current background jobs). PCPU indicates the CPU time used by the current foreground process attached to the given user shell.</p><p>top and htop 01:17-01:28 top and htop are worth mentioning, as they are very commonly used tools for monitoring system resource usage in real-time, including CPU usage, memory, and load averages.</p><p>System Activity Report (sar) 01:28-01:56 The &quot;System Activity Report&quot; or sar utility package can be used to monitor system resources like the CPU or memory, with a number of options for collecting the data and formatting the output.</p><p>Basic usage of sar, takes multiple samples over a period of time. For example, sar 1 5 reports on CPU usage, with a period of 1 second, for 5 seconds. sar can also be used with a daemon to automatically record activity in the background.</p><p>free Command 01:56-02:07 The free command gives a basic report of primary memory usage of the system, including various buffers and swap space. By default, these numbers are given in binary kilobytes.</p><p>vmstat Utility 02:07-02:27 The vmstat utility reports on primary memory usage and other system resources. Using the vmstat command with no arguments gives the averages recorded since the last boot. And, similar to sar, we can specify a period and number of repetitions such as vmstat 1 5 to get a sequence of new samples.</p><p>iostat 02:27-02:34 The iostat utility reports on the speed and quantity of data transfer to disk partitions and other IO devices.</p><p>Summary 02:34-02:46 That&#39;s it for this demonstration. This has been a brief overview of several resource monitoring utilities for Linux.</p><h2 id="_11-2-3-resource-monitoring-facts" tabindex="-1"><a class="header-anchor" href="#_11-2-3-resource-monitoring-facts"><span>11.2.3 Resource Monitoring Facts</span></a></h2><p>The goal of resource monitoring is to keep track of conditions on network resources and ensure those resources perform optimally. Monitoring will help you to identify problems, the source of those problems, situations that indicate potential problems, and resources that might need to be upgraded or changed. There are many tools available to help you monitor resources and ensure your entire system runs smoothly.</p><p>This lesson covers the following topics:</p><ul><li>Automatic Bug Reporting Tool (ABRT)</li><li>ABRT tools and commands</li><li>CPU monitoring and configuration</li><li>Memory monitoring and configuration</li><li>Tools to troubleshoot hardware issues</li></ul><h3 id="automatic-bug-reporting-tool-abrt" tabindex="-1"><a class="header-anchor" href="#automatic-bug-reporting-tool-abrt"><span>Automatic Bug Reporting Tool (ABRT)</span></a></h3><p>The Automatic Bug Reporting Tool (ABRT) is a tool that can be extremely helpful in troubleshooting a system crash. ABRT is a suite of tools that helps users detect, analyze, report, and resolve application crashes.</p><p>When a system crash occurs, ABRT:</p><ul><li>Collects data about the system.</li><li>Produces backtrace from the core dump.</li><li>Automatically generates and send reports.</li><li>Creates a bug ticket.</li><li>Identifies and makes available knowledge-base articles relevant to the problem.</li><li>Identifies software updates that resolve the issue.</li></ul><p>The following table identifies ABRT components and their functions.</p><table><thead><tr><th>Component</th><th>Function</th></tr></thead><tbody><tr><td><b>abrt</b></td><td> The ABRT utility consists of a daemon and a collection of tools for handling crashes and monitoring logs for errors. </td></tr><tr><td>gnome-abrt</td><td>GUI application for problem management and reporting.</td></tr><tr><td>libreport</td><td> A generic library that provides an API for reporting problems to different entities such as email, bugzilla, faf, scp upload, etc. By default, the notifications are sent to root at the local machine. You can use the conf file to change where notifications are sent. </td></tr><tr><td>faf</td><td> A crash-collecting server, also known as the ABRT server. It provides accurate statistics of incoming reports and acts as a proxy in front of issue tracking software, such as bugzilla. It’s designed to receive anonymous μReports and to find similar information among them. <p> For known issues, it generates responses with links to faf’s problem page, an issue tracker, or knowledge base entry. </p></td></tr><tr><td>satyr</td><td> Algorithms for program failure processing, analysis, and reporting. More specifically, satyr: <ul><li> Generates a description of the failure from various stack traces. </li><li>Analyzes stack traces of failed processes.</li><li> Discovers the thread that caused the failure, in multi-threaded stack traces. </li><li>Generates a failure report in a specified format.</li><li>Sends the report to a remote machine.</li></ul></td></tr><tr><td>retrace server</td><td> Provides dump analysis and backtrace generation service over a network using HTTP protocol. It is currently being merged to faf. </td></tr><tr><td>µReports</td><td> Micro reports, µReports, are small, machine readable reports used for automated reporting. They identify the operating system, versions of software running when the system crashed, information about the call stack at the time of the crash, and a stack trace, or multiple stack traces in the case of multi-threaded programs. No private data is allowed in the report. </td></tr></tbody></table><p>To install ABRT and its utilities, run one or both of the following:</p><ul><li><b class="fw-bold">yum install abrt-cli</b> <br>This will install the ABRT daemon and tools for use from the command line.</li><li><b class="fw-bold">yum install abrt-desktop</b> <br>This will install the ABRT Desktop (ABRT GUI interface).</li></ul>',104),e("div",{class:"to-info-box-body"},[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null,"The steps to install ABRT may be different depending on your distribution.")])],-1),e("h3",{id:"abrt-tools-and-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#abrt-tools-and-commands"},[e("span",null,"ABRT Tools and Commands")])],-1),e("p",null,"Use the following commands to manage ABRT information:",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Command"),e("th",null,"Function"),e("th",null,"Examples")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("b",null,"abrt-cli list")]),e("td",null,[t(" Lists all crashes on a machine. "),e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null,[t("Before this command can be used, you may need to enable the autoreporting feature. To enable autoreporting, run:"),e("b",null,"abrt-auto-reporting enabled")])])])])])]),e("td",null,[e("b",null,"abrt-cli list"),e("img",{src:"https://cdn.testout.com/linuxpro2022v6-en-us/en-us/resources/text/t_res_mon_lp6/abrt.jpg",alt:"Example of the arbt-cli list command which list all crashes on a machine"})])]),e("tr",null,[e("td",null,[e("b",null,[t("abrt-cli list -d"),e("i",{class:"fs-italicize"},"<ID_OR_PATH>")])]),e("td",null,"Displays detailed report data about a particular problem."),e("td",null,[e("b",null,"abrt-cli list -d aebfd1d843ec37f22e5c60d5d8002462c140e962"),e("h2",null,"abrt-cli list -d /var/spool/abrt/ccpp")])]),e("tr",null,[e("td",null,[e("b",null,"abrt-cli report <ID_OR_PATH>")]),e("td",null,"Reports a problem."),e("td",null,[e("b",null,"abrt-cli report aebfd1d843ec37f22e5c60d5d8002462c140e962"),e("h2",null,"abrt-cli list report /var/spool/abrt/ccpp")])]),e("tr",null,[e("td",null,[e("b",null,"abrt-cli remove <ID_OR_PATH>")]),e("td",null,"Deletes a problem."),e("td",null,[e("b",null,"abrt-cli remove aebfd1d843ec37f22e5c60d5d8002462c140e962"),e("h2",null,"abrt-cli list remove /var/spool/abrt/ccpp")])])])],-1),e("h3",{id:"cpu-monitoring-and-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cpu-monitoring-and-configuration"},[e("span",null,"CPU Monitoring and Configuration")])],-1),e("p",null,"CPU monitoring involves gathering information such as architecture, vendor name, model, number of cores, and speed of each core. The table below describes some of the Linux CLI commands you can use to monitor your CPU.",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Command"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,"/proc/cpuinfo"),e("td",null,[t(" Displays details about individual CPU cores and outputs content with "),e("b",null,"less"),t(" or "),e("b",null,"cat"),t(" . ")])]),e("tr",null,[e("td",null,[e("b",null,"uptime")]),e("td",null,[t(" Displays of the following information. "),e("ul",null,[e("li",null,"Current time."),e("li",null,"How long the system has been running."),e("li",null,"How many users are currently logged on."),e("li",null,"System load averages for the past 1, 5, and 15 minutes.")]),e("blockquote",null,[t(" Loads averages is a number that represents the average number of instructions waiting for CPU time. "),e("ul",null,[e("li",null," A load average of 1 (for a single processor system CPU) means that the CPU is keeping up with the demand or is 100% utilized. "),e("li",null," A load average of less than 1 indicates that the CPU is underutilized — in other words, it has perfect utilization. "),e("li",null," Any number greater than 1 indicates that the CPU has been asked to do more than it can do in real time, and some tasks will have to wait for CPU time. ")]),e("p",null," In multiprocessor systems, you use the same metrics multiplied by the number of processes. For example, a load average of 2 for a dual processor system indicates that the processors are keeping up with demand. ")])])]),e("tr",null,[e("td",null,[e("b",null,"sar")]),e("td",null,[t(" The "),e("b",null,"sar"),t(" (System Activity Report) command is part of the sysstat package. The "),e("b",null,"sar"),t(" command reports cumulative values in the "),e("i",null,"count"),t(" and "),e("i",null,"interval"),t(" parameters of activity counters in the operating system. Example of information you can use "),e("b",null,"sar"),t(" to view is as follows: "),e("ul",null,[e("li",null,"Collective CPU usage"),e("li",null,"Individual CPU statistics"),e("li",null,"Memory used and available"),e("li",null,"Swap space used and available"),e("li",null,"Overall I/O activities of the system"),e("li",null,"Individual device I/O activities"),e("li",null,"Network statistics")]),e("h2",null,"sar"),e("ul",null,[e("li",null,[t(" Writes information the specified number of times, spaced at the specified intervals in seconds. If the "),e("i",null,"interval"),t(" parameter is set to zero, the "),e("b",null,"sar"),t(" command displays the average statistics for the time since the system was started. If the "),e("i",null,"interval"),t(" parameter is specified without the "),e("i",null,"count"),t(" parameter, then reports are generated continuously. The collected data can also be saved in the file specified by the "),e("b",null,"-o"),e("i",null,"filename"),t(" flag, in addition to being displayed onto the screen. If "),e("i",null,"filename"),t(" is omitted, sar uses the standard system activity daily data file, the "),e("i",null,"/var/log/sa/sa"),t(" dd file, where the dd parameter indicates the current day. By default, all the data available from the kernel is saved in the data file. ")]),e("li",null,[t(" The "),e("b",null,"sar"),t(" command extracts and writes to standard output records previously saved in a file. This file can be either the one specified by the "),e("b",null,"-f"),t(" flag or, by default, the standard system activity daily data file. ")]),e("li",null,[t(" Without the "),e("b",null,"-P"),t(" flag, the "),e("b",null,"sar"),t(" command reports system-wide (global among all processors) statistics, which are calculated as averages for values expressed as percentages, and as sums otherwise. If the "),e("b",null,"-P"),t(" flag is given, the "),e("b",null,"sar"),t(" command reports activity which relates to the specified processor or processors. If "),e("b",null,"-P ALL"),t(" is given, the "),e("b",null,"sar"),t(" command reports statistics for each individual processor and global statistics among all processors. ")]),e("li",null,[t(" You can select information about specific system activities using flags. Not specifying any flags selects only CPU activity. Specifying the "),e("b",null,"-A"),t(" flag is equivalent to specifying "),e("b",null,"-bBdqrRSvwWy -I SUM -I XALL -n ALL -u ALL -P ALL"),t(". ")]),e("li",null,[t(" The default version of the "),e("b",null,"sar"),t(" command (CPU utilization report) might be one of the first facilities the user runs to begin system activity investigation, because it monitors major system resources. If CPU utilization is near 100 percent (user + nice + system), the workload sampled is CPU-bound. ")]),e("li",null,[t(" If multiple samples and reports are desired, it is convenient to specify an output file for the "),e("b",null,"sar"),t(" command. Run the "),e("b",null,"sar"),t(" command as a background process. The syntax for this is: "),e("b",null,"sar -o datafile interval count >/dev/null 2>&1 &")]),e("li",null,[t(" All data is captured in binary form and saved to a file (datafile). The data can then be selectively displayed with the "),e("b",null,"sar"),t(" command using the "),e("b",null,"-f"),t(" option. Set the "),e("i",null,"interval"),t(" and "),e("i",null,"count"),t(" parameters to select "),e("i",null,"count"),t(" records at "),e("i",null,"interval"),t(" second intervals. If the "),e("i",null,"count"),t(" parameter is not set, all the records saved in the file will be selected. Collection of data in this manner is useful to characterize system usage over a period of time and determine peak usage hours. ")]),e("li",null,[t(" Note: The "),e("b",null,"sar"),t(" command only reports on local activities. ")])])])]),e("tr",null,[e("td",null,[e("b",null,"sysctl")]),e("td",null,[t(" This command lets you configure the kernel parameters at runtime. To view all of the available parameters, as root run "),e("b",null,"sysctl -a"),t(" . If needed, you can change one of these parameters which takes effect immediately, and if needed, the change can be written permanently using the "),e("b",null,"-w"),t(" switch. Example: "),e("b",null,'sysctl -w kernel.sysrq="1"'),e("p",null," Keep in mind that there may not be any parameters that directly correlate to CPU usage, but instead, changing some parameters may have a direct impact on the CPU’s performance. For example, tuning the network adapter by disabling the TCP timestamps option can result in better CPU utilization. "),e("div",null,[e("div",null,[e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null,"This is really a powerful tool, so use it with care. There are a lot of kernel parameters that if changed could really mess your system up. Be sure to look at the man pages for sysctl before you start working with it, and be informed about any variable, and what it affects before changing the value.")])])])])])])])],-1),a('<h3 id="memory-monitoring-and-configuration" tabindex="-1"><a class="header-anchor" href="#memory-monitoring-and-configuration"><span>Memory Monitoring and Configuration</span></a></h3><p>When working with computer memory, consider the following:</p><table><thead><tr><th>Command</th><th>Function</th></tr></thead><tbody><tr><td><b>vmstat</b></td><td> vmstat reports information about processes, memory, paging, block IO, traps, disks, and CPU activity. The first report produced gives averages since the last reboot. Additional reports give information on a sampling period of length delay. The process and memory reports are instantaneous in either case. </td></tr><tr><td>/proc/meminfo</td><td> This file reports statistics about memory usage on the system. It is used by the free command (see below) to report the amount of free and used memory (both physical and swap) on the system, as well as the shared memory and buffers used by the kernel. Each line of the file consists of a parameter name, followed by a colon, the value of the parameter, and an optional unit of measurement (e.g., &quot;kB&quot;). <p><img src="https://cdn.testout.com/linuxpro2022v6-en-us/en-us/resources/text/t_res_mon_lp6/meminfo.jpg" alt="Example of the meminfo file which contains statistics about memory usage on a system"></p></td></tr><tr><td><b>free</b></td><td> The <b>free</b> command displays the total amount of free and used physical and swap memory in your computer, as well as the buffers and caches used by the kernel. The information is gathered by parsing /proc/meminfo. <p><img src="https://cdn.testout.com/linuxpro2022v6-en-us/en-us/resources/text/t_res_mon_lp6/free.jpg" alt="Example of the free command which displays the amound of memory in your computer"></p><p>Switches for the free command include the following:</p><table><thead><tr><th>Switch</th><th>Description</th></tr></thead><tbody><tr><td><b>-b <br>-k <br>-m</b></td><td> The <b>-b</b> switch displays the amount of memory in bytes; the <b>-k</b> switch (set by default) displays it in kilobytes; the <b>-m</b> switch displays it in megabytes. </td></tr><tr><td><b>-t</b></td><td> The <b>-t</b> switch displays a line containing the totals. </td></tr><tr><td><b>-o</b></td><td> The <b>-o</b> switch disables the display of a &quot;buffer adjusted&quot; line. If the <b>-o</b> option is not specified, free subtracts buffer memory from the used memory and adds it to the free memory reported. </td></tr><tr><td><b>-s</b></td><td> The <b>-s</b> switch activates continuous polling delay seconds apart. You may actually specify any floating point number for delay, usleep is used for microsecond resolution delay times. </td></tr><tr><td><b>-l</b></td><td> The <b>-l</b> switch shows detailed low and high memory statistics. </td></tr><tr><td><b>-v</b></td><td>The -V switch displays version information.</td></tr></tbody></table></td></tr><tr><td>Out-of-memory killer</td><td> When a Linux computer is critically low on memory, the Linux kernel uses the out-of-memory killer (OOM killer) process to review all running processes and kill one or more of them in order to free up system memory and keep the system running. Some memory issues are related to memory leaks, which is a process that is consuming large amounts of memory, but not releasing it when finished using it. <p> The out-of-memory killer works by reviewing all running processes and assigning them a badness score. The process that has the highest score is the one that is killed. The out-of-memory killer assigns a badness score based on a number of criteria, such as: </p><ul><li> The process and all of its child processes are using a lot of memory. </li><li> The minimum number of processes that need to be killed (ideally one) in order to free up enough memory to resolve the situation. </li><li> Root, kernel, and important system processes are given much lower scores. </li></ul><h2>dmesg | grep -i &quot;killed process&quot;</h2></td></tr><tr><td>Buffer cache output</td><td> Buffers are used by programs with active I/O operations, i.e. data waiting to be written to disk. Cache is the result of completed I/O operations, i.e. buffers that have been flushed or data read from disk to satisfy a request. </td></tr></tbody></table><h3 id="tools-to-troubleshoot-hardware-issues" tabindex="-1"><a class="header-anchor" href="#tools-to-troubleshoot-hardware-issues"><span>Tools to Troubleshoot Hardware Issues</span></a></h3><p>When troubleshooting hardware issues, consider the following:</p><table><thead><tr><th>Tool</th><th>Funciton</th></tr></thead><tbody><tr><td>dmidecode</td><td> The dmidecode tool is used for dumping a computer&#39;s desktop management interface (DMI) or SMBIOS table contents in a human-readable format. This table contains a description of the system&#39;s hardware components, as well as other useful pieces of information — such as serial numbers and BIOS revision. Using this table, you can retrieve this information without having to probe for the actual hardware. While this is a good point in terms of report speed and safeness, this also makes the presented information possibly unreliable. </td></tr><tr><td>Ishw</td><td> The lshw is used to extract detailed information on the hardware configuration of the machine. It can report exact memory configuration, firmware version, mainboard configuration, CPU version and speed, cache configuration, bus speed, etc. on DMI-capable x86 or IA-64 systems and on some PowerPC machines (PowerMac G4 is known to work). It currently supports DMI (x86 and IA-64 only), OpenFirmware device tree (PowerPC only), PCI/AGP, CPUID (x86), IDE/ATA/ATAPI, PCMCIA (only tested on x86), SCSI and USB. <b>-version</b> displays the version of lshw and exits. </td></tr></tbody></table>',6)]))}const d=i(r,[["render",l],["__file","02.html.vue"]]),c=JSON.parse('{"path":"/11/02.html","title":"Section 11.2 Resource Monitoring","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 11.2 Resource Monitoring","description":"some description"},"headers":[{"level":3,"title":"In this section, you will learn to:","slug":"in-this-section-you-will-learn-to","link":"#in-this-section-you-will-learn-to","children":[]},{"level":2,"title":"11.2.1 CPU Resource Monitoring","slug":"_11-2-1-cpu-resource-monitoring","link":"#_11-2-1-cpu-resource-monitoring","children":[]},{"level":2,"title":"11.2.2 Resource Monitoring Tools","slug":"_11-2-2-resource-monitoring-tools","link":"#_11-2-2-resource-monitoring-tools","children":[]},{"level":2,"title":"11.2.3 Resource Monitoring Facts","slug":"_11-2-3-resource-monitoring-facts","link":"#_11-2-3-resource-monitoring-facts","children":[{"level":3,"title":"Automatic Bug Reporting Tool (ABRT)","slug":"automatic-bug-reporting-tool-abrt","link":"#automatic-bug-reporting-tool-abrt","children":[]},{"level":3,"title":"ABRT Tools and Commands","slug":"abrt-tools-and-commands","link":"#abrt-tools-and-commands","children":[]},{"level":3,"title":"CPU Monitoring and Configuration","slug":"cpu-monitoring-and-configuration","link":"#cpu-monitoring-and-configuration","children":[]},{"level":3,"title":"Memory Monitoring and Configuration","slug":"memory-monitoring-and-configuration","link":"#memory-monitoring-and-configuration","children":[]},{"level":3,"title":"Tools to Troubleshoot Hardware Issues","slug":"tools-to-troubleshoot-hardware-issues","link":"#tools-to-troubleshoot-hardware-issues","children":[]}]}],"git":{"updatedTime":1736823478000},"filePathRelative":"11/02.md"}');export{d as comp,c as data};