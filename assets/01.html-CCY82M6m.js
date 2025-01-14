import{_ as a,c as n,a as s,b as e,d as t,o as i}from"./app-CSbjnKiP.js";const r={};function u(h,o){return i(),n("div",null,o[0]||(o[0]=[s('<p>As you study this section, answer the following questions:</p><ul><li>Which utility should you use to launch the /etc/sudoers file?</li><li>What is the syntax for the /etc/sudoers file?</li><li>How can you use <b class="fw-bold">su</b> to execute a command without switching into another login console?</li><li>Which <b class="fw-bold">su</b> option switches to another user and includes the user&#39;s environment variables?</li><li>How does the command prompt appear for a standard user account versus the root user account?</li></ul><p>In this section, you will learn to:</p><ul><li>Switch users</li><li>Log out of the system</li><li>Use <b class="fw-bold">sudo</b></li><li>Use <b class="fw-bold">visudo</b></li></ul><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th>Exam</th><th>Objective</th></tr></thead><tbody><tr><td>TestOut Linux Pro</td><td> 4.1 Manage users and groups <ul><li>Create and manage user accounts</li><li>Manage user access</li><li>Switch users for access and elevated privilege</li></ul></td></tr><tr><td>CompTIA Linux+ XK0-005</td><td> 1.2 Given a scenario, manage files and directories <p> 2.4 Given a scenario, configure and execute remote connectivity for system management </p><ul><li> File and directory operations <ul><li>pwd</li></ul></li><li> Executing commands as another user <ul><li>/etc/sudoers</li><li> Commands <ul><li>sudo</li><li>visudo</li><li>su -</li></ul></li></ul></li></ul></td></tr></tbody></table><h2 id="_15-1-1-the-root-user" tabindex="-1"><a class="header-anchor" href="#_15-1-1-the-root-user"><span>15.1.1 The root User</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>The root User 00:00-00:38 Every Linux system includes a default superuser account named root. This root account is very powerful. It has full access to every aspect of the Linux system and should be used with great care. In this lesson, we&#39;re going to talk about the proper use of the root user account. We&#39;re also going to talk about options you can use to gain root-level privileges, like the su command and sudo. Let&#39;s start by discussing the proper way to use root.</p><p>There&#39;s a time and place where you do need to have over-arching access to a system. Most of your work on Linux, though, should be done with a non-root account. You should use root only when absolutely necessary.</p><p>Security Implications of Using root 00:38-01:03 First off, there are risks to leaving a logged-in system unattended. And the danger goes up astronomically if you were logged in as root. All the system data could be copied or deleted, major configuration changes could be made to the daemons, and who knows what kind of security exploits a malicious actor could install. That&#39;s why everyone, including the system administrator, should have a standard user account that they log in to the system with to perform their day-to-day work.</p><p>The su Command 01:03-02:32 If you find that you do need root-level access at some point, you can use the su command to temporarily gain root-level privileges. This command lets you change over to a different user account at the shell prompt. In fact, su stands for &quot;switch user&quot;.</p><p>The syntax for using su is shown here. We enter su, followed by several options, and then we specify which user account we want to switch to. Here&#39;s the key thing to remember: if no user account is specified with su, it assumes that you just want to switch to the root user account. In fact, that&#39;s mostly what we use su for. Some of the options you can use with this command are shown here as well. A plain dash with nothing else specifies that you not only want to switch to a different user, but that you also want to load that user&#39;s environment variables.</p><p>For example, if I type su at the shell prompt, it switches me to the root user account and loads all of root&#39;s environment variables. If you need to perform root-level tasks, you&#39;re going to need root&#39;s environment variables to do so. Otherwise, you&#39;re probably going to have trouble finding certain commands because if you don&#39;t load root&#39;s environment variables, your previous user&#39;s environment variables will be used. That one might not have all the file system paths you need.</p><p>You can also use the -c option followed by a particular command. This switches to the user account that you specify and also runs that command. You can also use -m to switch to that user account but preserve your original user&#39;s environment variables.</p><p>su Precautions 02:32-02:54 You can see that the su command is a very effective tool for any Linux system administrator, but your average end user shouldn&#39;t be using it. In order to even use su to switch to root, you&#39;ve got to have the root user&#39;s password. And you don&#39;t want to give that to your end users. However, there may be situations when there are legitimate reasons for a standard user to have root-level access.</p><p>The sudo Command 02:54-03:21 In this situation, you can use sudo to provide them with very limited root-level access to the system. You might want them to be able to run a limited number of commands with root-level privileges, but you don&#39;t want to give them full access to everything. The sudo command allows you to draw a fine line between access levels. And as with su, it can be any user on the system. It doesn&#39;t have to be root. However, nobody ever does it that way. It&#39;s almost always used to run commands as the root user.</p><p>/etc/sudoers 03:21-04:05 Now, the sudo command uses the sudoers configuration file, which is located in the /etc directory, to decide which user is authorized to run which command. In order to accomplish this, this file uses the aliases shown here to define who&#39;s allowed to do what. First, we have the User_Alias. This specifies the users, the user accounts, and who&#39;s allowed to run commands. Then we have the Cmnd_Alias, which specifies the commands that those users are allowed to run. Next, we have Host_Alias, which specifies which host the users are allowed to run those commands on. And then we have the Runas_Alias, which specifies the usernames that these commands may be run as, which is typically root.</p><p>visudo Command 04:05-04:43 In order to edit your sudoers file, you need to run the vi sudo command, and it has to be run as a root user. When you run this command, the /etc/sudoers file loads in the vi editor. In addition to this, on many distributions, the sudoers file is configured by default so that users have to supply the root password to run sudo.</p><p>But if the user already knows the root password, what&#39;s the point of configuring sudo? There isn&#39;t much of one. To change this, we modify these two lines here. It even tells us right here in the comments what it does. That&#39;s the first thing we&#39;ll want to change. So let&#39;s comment out both of these lines.</p><p>/etc/sudoers Configuration 04:43-05:45 Once that&#39;s done, we can start our sudoers configuration in the file. The first thing we need to do is define User_Alias. The syntax is shown here. We enter User_Alias, and then we provide an alias name. It can be anything, but it has to start with a capital letter.</p><p>Then we use an equals sign and a comma-separated list of user accounts that we want to let run specific commands. We use the command alias to define those. The syntax is Command_Alias and the alias name again. We can define whatever we want, but it also has to start with a capital letter. Then we need an equals sign and the list of commands we wanted to define. Know that you do need to specify the full command path for this to work. If you want to add multiple commands, you need to separate them with commas.</p><p>The next step is to define our Host_Alias. The syntax is Host_Alias followed by the alias name. Again, that&#39;s in capital letters. Then it&#39;s equals and hostname of the system that you want the users to be able to run these commands on.</p><p>Gluing Syntax 05:45-06:23 Once you have all these aliases defined in the file, you need to glue them together. You insert the line shown here within the file to do that. The syntax is the user&#39;s alias followed by the host alias that you defined, an equals sign followed by the user&#39;s name, and then the name of the command alias that you chose.</p><p>We&#39;re basically saying who can run what on what system and as what user. Once you&#39;re finished, you&#39;ll need to exit out of the vi editor with the exit command. The vi sudo command will check your syntax to make sure that you didn&#39;t make any errors. Once that&#39;s done, the users you defined will be able to execute the commands they need. It&#39;s as simple as that.</p><p>/etc/sudoers Recap 06:23-06:50 But let&#39;s recap what we&#39;ve done here one more time. With this configuration in place, the end user who needs to run a command as root simply types sudo at the command prompt, a space, and then the name of the command. If it&#39;s contained in Command_Alias, and that user account is contained in User_Alias, they&#39;ll be allowed to run that command as the root user. They&#39;ll be prompted for a password, but it won&#39;t have to be the root password. They simply enter the password for their own user account.</p><p>Summary 06:50-07:06 And that&#39;s all for this lesson. In this lesson, we talked about the proper user of the root user account. We talked about using su to switch to the root user account, and we ended by talking about the sudo command.</p><h2 id="_15-1-2-use-su" tabindex="-1"><a class="header-anchor" href="#_15-1-2-use-su"><span>15.1.2 Use su</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Use su 00:00-00:37 In this demonstration, we&#39;re going to discuss using the su command. su stands for substitute user and is used from the shell prompt. This command lets you substitute, or switch, to any user on the system.</p><p>By running the tail /etc/passwd command, you can see that on this system, I have a user account named Edith—whom I&#39;m currently logged in as—and a user account named jsmith.</p><p>I can use the su command to switch from the Edith user account to the jsmith user account.</p><p>Substitute to JSmith 00:37-01:51 To do this, I&#39;ll type su -l jsmith. The dash l tells su that when I switch to the jsmith user, I want to start the new shell as a login shell with the environment similar to a real login for the user to which I&#39;m switching, in this case, jsmith.</p><p>This is important because if I don&#39;t include this dash l, then the environment variables from my current user account would remain in effect, which can cause some odd things to happen. For example, my home directory would remain /home/Edith, even if I switch to the jsmith user account.</p><p>There may be times when you want that to happen, but in most cases, you won&#39;t. So, I&#39;ll press Enter and provide jsmith&#39;s password.</p><p>Notice that when I run the pwd command, I&#39;m currently in jsmith&#39;s home directory. Likewise, when I run whoami, you see I&#39;m logged in as jsmith.</p><p>At this point, I could run commands, complete tasks, and do whatever I need to as jsmith.</p><p>When I&#39;m done, and I want to switch back to my original Edith user account, I type exit and log out of the jsmith account and back to my original account.</p><p>Although you can switch to standard users like this, it&#39;s probably not the most common use of the su command.</p><p>Substitute to root 01:51-02:36 Instead, in most cases, you&#39;ll use the su command to switch to the root user account. su is used this way so much that, by default, if you don&#39;t supply a username with the command, su assumes that you want to switch to root.</p><p>To see this, I&#39;ll type su – and press Enter. After entering the password for the root account, I&#39;m switched to the root user account, and the root user environment is used.</p><p>Once again, when I run pwd, I see that my present working directory is /root, and when I run whoami, I see I&#39;m logged in as the root user.</p><p>Notice that with this distribution, the name of the current user is automatically displayed in the prompt, so you don&#39;t need to use the whoami command. Since the prompt can be customized, this may not always be the case.</p><p>Proper Use of Root Account 02:36-03:28 Before we end, I want to emphasize how important it is that you use the su command properly. A common mistake new Linux administrators make is logging in to their system as root and performing all their mundane day-to-day tasks as this account.</p><p>From a security perspective, that&#39;s a bad idea. If I do that, and then I go to the break room or the vending machine to buy a soda or something, and I leave my system logged in, somebody could sit down and cause all kinds of havoc because they&#39;d have root-level access to the system.</p><p>As a general rule of thumb, always login to your system as a regular user account, such as my Edith user account. Only when I need root-level access to perform a particular task, do I use the su command to switch to root. I perform whatever task I&#39;m supposed to do as root, and then when I&#39;m done, I exit back out to my standard user account.</p><p>Summary 03:28-03:51 That&#39;s it for this demonstration. In this demonstration, we talked about using the su command. We first used the su command to switch to a standard user account on the system. Then we used su to switch to the root user account. Then we ended this demonstration by talking about the proper use of the root account on a Linux system.</p><h2 id="_15-1-3-configure-sudo" tabindex="-1"><a class="header-anchor" href="#_15-1-3-configure-sudo"><span>15.1.3 Configure sudo</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>Configure sudo 00:00-01:40 In this demonstration, we&#39;re going to discuss how to configure and use the Linux sudo, or substitute user do, command. The sudo command allows standard Linux users to complete commands with the privileges of another user, or substitute user, which is typically the root user. This is used instead of the su command because of the rule of least privileges – where rather than giving someone all privileges, it&#39;s best to only give the privileges required.</p><p>To use the sudo command, you must be given permission to do so. This is done by adding a user to the sudoers file. Granting privileges using the sudoers file allows a user to use a command by entering their own password instead of the password for the target user. For example, I&#39;m logged on as an administrator user named admin. Let&#39;s see what happens when I try to do something simple like viewing the sudoers file. To do that, I&#39;ll run cat /etc/sudoers. Notice that even though this user is an administrator, the command fails because it required root privileges. So instead, let&#39;s try sudo cat /etc/sudoers, and then the password for admin. And the command is successful. That&#39;s because the admin user has been given privileges to do so in the sudoers file.</p><p>Also notice that any member of the group named sudo can execute any command. So, if you want to give a user the ability to run any command, the simplest method is to add that user to one of these two groups.</p><p>Before going further, keep in mind that some distributions use different groups. For example, RedHat and CentOS uses a group named wheel instead of the sudo group, so make sure you check the details for your distribution to know which groups to use.</p><p>Limit sudo Commands 01:40-02:20 The problem with using either of these groups, is that you are giving them the ability to run any command, and that could be dangerous. The nice thing about the sudoers file is that it also gives you the ability to be more granular, meaning that you can specify exactly which commands a user can run. This is done by editing the /etc/sudoers file. To do this, it&#39;s important to always make changes to this file using the visudo tool with root permissions.</p><p>Using the visudo tool has two major advantages over using a regular text editor. First, it locks the sudoers file against simultaneous edits. The second advantage is that visudo can validate the syntax of the file when it is saved. This helps prevent configuration errors.</p><p>Add Users to sudoers File 02:20-02:55 To edit this file, I&#39;ll need to first switch to the root user by running su -, and entering the root password. Now that I have root privileges, I can run visudo. From within the sudoers file, there are many ways to configure what a user can do when using the sudo command. For example, you can add a user to the admin or sudo groups. Another method is to add an individual user. I can grant sudo privileges to the jsmith user by adding jsmith ALL = (ALL) ALL. This command is equivalent to adding jsmith to the sudo group.</p><p>sudo Syntax 02:55-04:35 Before going further, let&#39;s explain what all these ALLs mean. To do that, let&#39;s look at the default root privileges defined here. When configuring privileges, the first entry, in this case the word root, is the person or alias to whom you are granting the privileges. Next, you have the first ALL. This tells the system that this user can run the specified commands on all hosts.</p><p>Then, after the equal sign (=), the first ALL in the parentheses indicates that the root user can run commands as all users. The next ALL in the parentheses, indicates that the root user can run commands as all groups. However, if you don&#39;t want to specify individual users or a group, you can simply use one ALL in the parentheses, as we just did when adding jsmith. The last ALL indicates that the user can execute all commands.</p><p>To help understand this syntax, let&#39;s create a new entry, but let&#39;s omit the ALLs and use specific values instead. In this example, I want to give the user named Zoey, the ability to only update the apps on this one system. To do that, I would add, zoey myubuntu =, meaning Zoey can only run this command on this host, whose name is &quot;myubuntu&quot;. Since I&#39;m not concerned that she can run this as a specific user or group, we&#39;ll omit the ALLs in the parentheses, which means her commands will be run as root. The last thing I need to specify is the command Zoey can run, which is /usr/bin/apt-get update. Now let&#39;s save our changes.</p><p>To test our changes, let&#39;s switch to the Zoey user. As Zoey, I can now run sudo apt-get update, enter Zoey&#39;s password, and the command has run.</p><p>Use Aliases 04:35-05:24 But what if I wanted to give multiple commands to multiple users? Entering each user for each command could prove to be time consuming. To help alleviate that pain, the sudoers files supports aliases. As you begin to work with these aliases, understanding the suggested order of these, as shown in the sudoers file, will help you see how to use these aliases.</p><p>For example, the first type of alias shown is the Host alias. This alias is used to define the hosts on which a user can use the sudo command. Next, you have the User alias section. This is where you define which users will be able to run sudo. Next, we have Cmnd, or command aliases. This is where you define the commands a user can run. And then, we have the User privileges section. As you have already seen, this is where you put everything together to assign the actual privileges.</p><p>User Aliases 05:24-06:12 Let&#39;s see how to create a few of these aliases and how they can be used to grant the privileges. To keep it simple, let&#39;s assume that we are only concerned about this one host, so we don&#39;t need to add anything to the Host alias. But we do want to specify which users can run sudo, and the easy way to do that is with a user alias.</p><p>When adding a user alias, start by entering User_Alias, followed by a name of your choice for this alias. Think of aliases as a kind of group. For this example, I want to create an alias that can be used to add users and groups to our system, so I&#39;ll name this user alias USERGROUP followed by an equal sign (=). Next, I need to specify which users I want to include in this alias, so I&#39;ll enter three users: zoey,pascal,craig. Now, any time I use the USERGROUP alias, I really mean that I want to use these users.</p><p>Command Aliases 06:12-07:06 Next, I need to define what commands I want sudo users to be able to run. This is done in the Cmnd alias section. As you know, users and groups are created using the adduser and addgroup commands. But when adding them to the sudoers file, you must use the full path to the command. To find the full path for these commands, let&#39;s open another terminal, and run which adduser and which addgroup. When I do, we see that both commands are in the /usr/sbin directory.</p><p>So, with that information, I can close this terminal. Back in my sudoers file, I add these paths in the command alias section by typing Cmnd_Alias followed by the name of this alias. For this alias name, I&#39;ll use ADDUG, for add users and groups. Then, after the equal sign (=), I enter the paths for these two commands: /usr/sbin/adduser and /usr/sbin/addgroup.</p><p>User Privileges 07:06-07:36 With all my aliases created, we&#39;re now ready to tie these all together using the User privileges section. In this section, to specify who can run sudo, I first enter the name of my user alias, which is USERGROUP, meaning that I&#39;m defining what Zoey, Pascal, and Craig can do. To keep this simple, we&#39;ll enter ALL, meaning this can be done on all hosts. After the equal sign (=) we&#39;ll define what commands can be run by entering the ADDUG alias � meaning that Zoey, Pascal, and Craig will now be able to run the addgroup and adduser commands.</p><p>Timestamp 07:36-09:01 And with that, we&#39;re almost ready to save our changes, but before we do, I want to talk about one more entry you may want to add. By default, once you have run sudo, and entered your password, you can continue to run other sudo commands without being required to provide your password. However, after a default amount of time with no sudo activity, you&#39;ll be required to enter your password again. In this distribution, that timeout period is 15 minutes. In other words, if after running sudo, I don&#39;t run another sudo command for 15 minutes, the next time I use sudo, I&#39;ll be required to enter my password again. This is a security feature that prevents someone else from running a sudo command, in the event you walk away from your computer and forget to exit out of your terminal.</p><p>However, if the computer is in a safe environment, where no one else can access it, you might find it frustrating to reenter your password every 15 minutes. If that&#39;s the case, you can add an entry to your sudoers file to increase, or even decrease, the time that needs to elapse before a password is required again. This command can be added by going back up to the Defaults line, adding a comma followed by timestamp_timeout=, and the value you want to set, such as 30 minutes. Now there needs to be 30 minutes of sudo inactivity before being required to enter a sudo password again.</p><p>On the other hand, if a system is in a high traffic area, you may want to require a password every time. This is done by setting a timeout value of zero. And with that, I&#39;ll save my changes.</p><p>Testing sudo 09:01-09:52 With our sudoers file edited, let&#39;s test our changes. To do that, I&#39;m going to switch to Zoey&#39;s account by running su -l zoey. Let&#39;s first test to see if Zoey can view the contents of the sudoers file by running sudo cat /etc/sudoers, and after entering the password, I&#39;m shown that Zoey doesn&#39;t have the privileges to view that file.</p><p>Now, let&#39;s test to see if Zoey can add a group by running sudo addgroup and the name of the group, which is marketing. Notice, that because the last attempt of running sudo wasn&#39;t successful, I&#39;m still required to enter the password for Zoey. But now, when I press the up arrow and change the command to adduser edit, Zoey is allowed to create the user without being prompted for a password. From these tests, we see that our Zoey account, while being able to add new users and groups, was restricted from using sudo to run any other commands.</p><p>Summary 09:52-10:11 That&#39;s it for this demonstration. In this demonstration we talked about how to configure sudo to allow users to run commands at the shell prompt with root level privileges, without giving them the root password or full root level access to the system.</p><h2 id="_15-1-4-root-user-facts" tabindex="-1"><a class="header-anchor" href="#_15-1-4-root-user-facts"><span>15.1.4 root User Facts</span></a></h2><p>The root user account is the Linux system superuser and can perform any task. Some Linux commands cannot be run by anyone but the root user. The root account is created during the installation process, and it receives the account number zero (0). In contrast, normal (standard) user accounts receive ascending numbers beginning at 500 or 1000, depending on the distribution.</p><p>This lesson covers the following topics:</p><ul><li>Security guidelines</li><li>Commands to manage root-level access</li><li>Commands to manage limited root-level access</li></ul><h3 id="security-guidelines" tabindex="-1"><a class="header-anchor" href="#security-guidelines"><span>Security Guidelines</span></a></h3><p>To protect the root user account, use the following guidelines:</p><ul><li> When performing tasks that require the root user account, use the <b class="fw-bold">su -</b> command to switch to the root user and execute the command, and then use the <b class="fw-bold">exit</b> command to revert back to the regular user account. </li><li> As a general rule, create a user account that gives sufficient permissions to perform most daily tasks. Use this account instead of the root user account when logging in to the system. </li></ul><h3 id="commands-to-manage-root-level-access" tabindex="-1"><a class="header-anchor" href="#commands-to-manage-root-level-access"><span>Commands to Manage Root-Level Access</span></a></h3><p>The following commands are used to manage root-level access to the system.</p>',82),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Command"),e("th",null,"Function"),e("th",null,"Examples")])]),e("tbody",null,[e("tr",null,[e("td",{style:{width:"66.6667px"}},[e("b",null,"su")]),e("td",{style:{width:"592.867px"}},[t(" Switches to the root user account. Be aware of the following "),e("b",null,"su"),t(" options: "),e("ul",null,[e("li",null,[e("b",null,"su -l"),e("b",null,[e("i",null,"user_name")]),t(" switches to the specified user in a login shell. ")]),e("li",null,[e("b",null,"su"),e("b",null,[e("i",null,"user_name")]),t(" (without the dash, but with the username) switches to the user but does not load that user's environment variables. ")]),e("li",null,[e("b",null,[t("su - "),e("i",null,"user_name")]),t(" (with the dash and username) switches to the user and loads the user's environmental variables. ")]),e("li",null,[e("b",null,"su -"),t(" (with the dash but no username) switches to the root user and loads the root user's environmental variables. ")]),e("li",null,[e("b",null,"su"),t(" (no dash or username) switches to the root user but does not load the root user's environmental variables. ")]),e("li",null,[e("b",null,[t('-c " '),e("i",null,"command"),t(' "')]),t(" executes a single command as the root user. "),e("ul",null,[e("li",null," The command is enclosed in either single or double quotation marks. "),e("li",null,[t(" Include "),e("b",null,[t("-l "),e("i",null,"user")]),t(" to execute the command as a user other than root. ")])])])]),e("div",null,[e("div",{class:"to-info-box"},[e("div",{class:"to-info-box-body"},[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null,[e("b",null,"su"),t(" requires the user's password before switching to the account except when switching from root to a normal user.")])])])])])]),e("td",null,[e("b",null,"su -l jsomes"),t(" switches to the jsomes user account with jsomes' environment variables. "),e("b",null,[e("br"),t("su -")]),t(" switches to the root account using the root's environment variables. "),e("br"),e("b",null,'su -c "ls /home/rgurate"'),t(" switches to the root user and executes the "),e("b",null,"ls"),t(" command on the user's rgurate home directory. ")])]),e("tr",null,[e("td",null,[e("b",null,"exit")]),e("td",null,[t(" Returns to the account from which the "),e("b",null,"su"),t(" command was typed. When no "),e("b",null,"su"),t(" command has been typed, "),e("b",null,"exit"),t(" terminates the shell. When using a computer that uses a shell exclusively, "),e("b",null,"exit"),t(" logs the user out. ")]),e("td",null,[e("p",null,[t(" [root@ls4 ~]# "),e("b",null,"exit"),e("br"),t(" logout"),e("br"),t(" [jsomes@ls4 ~]$ ")])])]),e("tr",null,[e("td",null,[e("b",null,"logout")]),e("td",null,"Logs out of the system while leaving the system powered on."),e("td",null,[e("b",null,"logout"),t(" logs the user out of the shell. It is identical to "),e("b",null,"exit"),t(" . ")])])])],-1),s('<h3 id="commands-to-manage-limited-root-level-access" tabindex="-1"><a class="header-anchor" href="#commands-to-manage-limited-root-level-access"><span>Commands to Manage Limited Root-Level Access</span></a></h3><h4 id="sudo" tabindex="-1"><a class="header-anchor" href="#sudo"><span>sudo</span></a></h4><ul><li> When users need to execute the command, they use the <b class="fw-bold">sudo</b> command followed by the command they want to execute, such as <b class="fw-bold">sudo nano myfile</b> . The user is then prompted for their own password prior to running the command, not the root account password. </li><li> Users and the commands they are allowed to execute with elevated privileges are specified in the /etc/sudoers file. </li><li> The /etc/sudoers file must be edited using the <b class="fw-bold">visudo</b> command using the root account. </li><li><b class="fw-bold">sudo</b> logs information about the users and the commands they run, as well as failed attempts to use <b class="fw-bold">sudo</b> in the /var/log/security log. </li></ul><h3 id="etc-sudoers" tabindex="-1"><a class="header-anchor" href="#etc-sudoers"><span><code>/etc/sudoers</code></span></a></h3><table><thead><tr><th>Section</th><th>Description</th><th>Examples</th></tr></thead><tbody><tr><td><b>User_Alias</b></td><td> Specifies a set of users who are allowed to execute a specific set of commands using the <b>sudo</b> command. </td><td><b>User_Alias INSTALLERS = jsmith, psimms</b> adds the users jsmith and psimms to the INSTALLERS alias. </td></tr><tr><td><b>Cmnd_Alias</b></td><td> Specifies a set of commands that users can execute using the <b>sudo</b> command. </td><td><b>Cmnd_Alias INSTALL = /bin/rpm</b> , <b>/usr/bin/up2date</b> , and <b>/user/bin/yum</b> assigns the <b>rpm</b> , <b>up2date</b> and <b>yum</b> commands to the INSTALL alias. Users associated with the INSTALL alias can execute these commands. </td></tr><tr><td><b>Host_Alias</b></td><td> Specifies a list of computers on which <b>sudo</b> users can perform commands. </td><td><b>Host_Alias FILESERVERS = fs1, fs2, fs3</b> adds the three computers to the alias. <br><b>Host_Alias EVERYWHERE = *.mydomain.com</b> creates an alias for all computers on the mydomain network. </td></tr><tr><td><b>Runas_Alias</b></td><td> Specifies a username that is used when running commands with <b>sudo</b> . Usually, this is just root. </td><td><b>Runas_Alias DATABASE = root</b> specifies that <b>sudo</b> commands are run as the root user. </td></tr></tbody></table><p>These aliases are defined independently within the /etc/sudoers file. To grant users elevated access to the system, these aliases need to be associated with each other to define what exactly will happen. The syntax is as follows:</p><h3 id="user-alias-host-alias-user-cmnd-alias" tabindex="-1"><a class="header-anchor" href="#user-alias-host-alias-user-cmnd-alias"><span><code>User_Alias Host_Alias = (user) Cmnd_Alias</code></span></a></h3><p>For example, the aliases defined in the table above can be associated with each other using the following entry in /etc/sudoers:</p><h3 id="installers-fileservers-root-install" tabindex="-1"><a class="header-anchor" href="#installers-fileservers-root-install"><span>INSTALLERS FILESERVERS = (root) INSTALL</span></a></h3><p>Using this entry, the users associated with the INSTALLERS user alias are allowed to run the commands in the INSTALL command alias on the hosts contained in the FILESERVERS host alias as the root user.</p>',10),e("div",null,[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null,[t(" If "),e("b",null,"Runas_Alias"),t(" is omitted, the default is to run the commands as the root user.")])])],-1),s("<p>The following table describes the commands for configuring and using sudo.</p><table><thead><tr><th>Command</th><th>Function</th><th>Examples</th></tr></thead><tbody><tr><td><b>visudo</b></td><td> Opens the <b>/etc/sudoers</b> file for editing. The command opens the vi editor and checks the file for sudo syntax errors before saving and exiting. </td><td><b>visudo</b> opens the <b>/etc/sudoers</b> file in the text editor. </td></tr><tr><td><b>sudo</b></td><td> Executes a command as the root user. To use this command, first type <b>sudo</b> and then type the command as you normally would. </td><td><b>sudo yum install sysstat</b> installs the sysstat package as the root user. </td></tr><tr><td><b>sudoedit</b></td><td><p> Allows users to securely edit files. This command is equivalent to running <b>sudo -e</b> . When using <b>sudoedit</b> , users edit the desired file as themselves and not the root account. </p><p> When run, <b>sudoedit</b> first creates a temporary copy of the desired file. Changes are then made to that file. When done, the changes made to the temporary files are copied back to their original location, and the temporary versions are removed. To use <b>sudoedit</b> to limit users in the managers group to edit a specific file, edit the sudoers file and add a sudoedit line similar to the following example: </p><p><b>%managers ALL = sudoedit /path_to_the_file.</b></p><p> A common implementation of this is to use the wheel group. Most Linux systems use user groups as a security protocol to control access privileges. The wheel group is a special user group used on some Linux systems that controls access to the <b>su</b> or <b>sudo</b> command. Therefore, to use sudoedit to limit users in the wheel group, add a <b>sudoedit</b> line similar to the following example: </p><p><b>%wheel ALL = sudoedit /path_to_the_file.</b></p></td><td><b>sudoedit /etc/hosts.allow</b> lets those in the group specified in the sudoers file (such as the Managers group) to edit the hosts.allow file. </td></tr></tbody></table>",2)]))}const d=a(r,[["render",u],["__file","01.html.vue"]]),c=JSON.parse('{"path":"/15/01.html","title":"Section 15.1 Root Usage","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 15.1 Root Usage","description":"some description"},"headers":[{"level":2,"title":"15.1.1 The root User","slug":"_15-1-1-the-root-user","link":"#_15-1-1-the-root-user","children":[]},{"level":2,"title":"15.1.2 Use su","slug":"_15-1-2-use-su","link":"#_15-1-2-use-su","children":[]},{"level":2,"title":"15.1.3 Configure sudo","slug":"_15-1-3-configure-sudo","link":"#_15-1-3-configure-sudo","children":[]},{"level":2,"title":"15.1.4 root User Facts","slug":"_15-1-4-root-user-facts","link":"#_15-1-4-root-user-facts","children":[{"level":3,"title":"Security Guidelines","slug":"security-guidelines","link":"#security-guidelines","children":[]},{"level":3,"title":"Commands to Manage Root-Level Access","slug":"commands-to-manage-root-level-access","link":"#commands-to-manage-root-level-access","children":[]},{"level":3,"title":"Commands to Manage Limited Root-Level Access","slug":"commands-to-manage-limited-root-level-access","link":"#commands-to-manage-limited-root-level-access","children":[]},{"level":3,"title":"/etc/sudoers","slug":"etc-sudoers","link":"#etc-sudoers","children":[]},{"level":3,"title":"User_Alias Host_Alias = (user) Cmnd_Alias","slug":"user-alias-host-alias-user-cmnd-alias","link":"#user-alias-host-alias-user-cmnd-alias","children":[]},{"level":3,"title":"INSTALLERS FILESERVERS = (root) INSTALL","slug":"installers-fileservers-root-install","link":"#installers-fileservers-root-install","children":[]}]}],"git":{"updatedTime":1736836195000},"filePathRelative":"15/01.md"}');export{d as comp,c as data};
