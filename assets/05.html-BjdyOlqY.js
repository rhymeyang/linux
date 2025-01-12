import{_ as i,c as l,a,b as e,d as t,o as s}from"./app-gtOzrl87.js";const r={};function o(h,n){return s(),l("div",null,n[0]||(n[0]=[a(`<p>As you study this section, answer the following questions:</p><ul><li>What is the role of environment variables?</li><li>What is the standard syntax for environment variable identifiers?</li><li>How do you preserve the current values of the PATH environment variable when adding a new value to it?</li><li>How do you make a new value assigned to an environment variable persistent across all shell sessions?</li></ul><p>In this section, you will learn to:</p><ul><li>Manage environment variables</li><li>View environment variables</li></ul><p>Key terms for this section include the following:</p><table class="terms"><thead><tr><th>Term</th><th scope="col">Definition</th></tr></thead><tbody><tr><td>Variable</td><td>A data object that has a name and one or more assigned values.</td></tr><tr><td>Environment variable</td><td>A Linux variable that provides settings and configurations across different applications, processes, and services and is inherited by child shells and processes.</td></tr><tr><td>Shell variable</td><td>A Linux variable that is not inherited by child shells and processes.</td></tr><tr><td>User variable</td><td>A Linux shell variable that is typically defined at the shell prompt or added when scripts that are defined in a user&#39;s profile are run.</td></tr><tr><td>Local variable</td><td>A Linux shell variable that is typically defined in scripts and in script functions and generally does not exist after the script or function is run.</td></tr></tbody></table><p>This section helps you prepare for the following certification exam objectives:</p><table class="objectives"><thead><tr><th>Exam</th><th scope="col"> Objective</th></tr></thead><tbody><tr><td>TestOut Linux Pro</td><td>1.2 Configure and use Linux shell environments <ul><li>Manage environment variables <br></li></ul></td></tr><tr><td>CompTIA Linux+ XK0-005</td><td>2.2 Given a scenario, implement identity management <ul><li>Account creation and deletion <ul><li>Configuration files <ul><li>/etc/profile</li><li>.bash_profile</li><li>.bashrc</li></ul></li></ul></li></ul><p>3.1 Given a scenario, create simple shell scripts to automate common tasks. <br></p><ul><li>Common script utilities</li><ul><li>Environment variables</li><ul><li>$PATH</li><li>$SHELL</li><li>$?</li></ul></ul></ul></td></tr></tbody></table><h2 id="_2-5-1-environment-variables" tabindex="-1"><a class="header-anchor" href="#_2-5-1-environment-variables"><span>2.5.1 Environment Variables</span></a></h2><h3 id="environment-variables-00-00-00-24" tabindex="-1"><a class="header-anchor" href="#environment-variables-00-00-00-24"><span>Environment Variables 00:00-00:24</span></a></h3><p>In this lesson, we&#39;re going to discuss the role and function of environment variables. Whenever you start a shell session, several different variables are used to define the critical parameters that the shell needs to run properly. Because these variables define the shell environment, they&#39;re called environment variables. Before you can understand what an environment variable is, you first have to understand what a variable is itself.</p><h3 id="variables-00-24-03-06" tabindex="-1"><a class="header-anchor" href="#variables-00-24-03-06"><span>Variables 00:24-03:06</span></a></h3><p>The best way to understand the concept of a variable is to envision a bucket. In this bucket, you can assign a label to it, such as MYVAR, and store values in that bucket. That&#39;s essentially how a variable works on a Linux system. It&#39;s an area in your system&#39;s RAM reserved to store whatever values you decide to put in it.</p><p>On a Linux system, you can define and use two different types of variables. The first are user-defined variables, and the second is environment variables.</p><p>User-defined variables are just that. They&#39;re buckets in memory that you create for yourself. You assign user-assigned variables with the label of your choice, and then you fill them with whatever contents you want. This is commonly done when writing your own shell scripts. For example, you could write a script that prompts a user for a particular piece of information, and then you can store that user&#39;s response in a user-defined variable.</p><p>Environment variables are initially created, named, and populated by the Linux operating system itself. As the name implies, environment variables configure your system&#39;s computing environment. Environment variables are accessed and used by all the applications and services you run on the systems, even those you run from the shell prompt.</p><p>For example, almost all distributions automatically define the SHELL environment variable. The SHELL environment variable stores the full path—the executable file—used to run the shell.</p><p>With this in mind, let&#39;s review some of the environment variables commonly used on most Linux distributions.</p><p>The first one is CPU. This specifies the type of CPU installed in the system. Next, we have the DISPLAY environment variable, which specifies the location where your X Window graphical display should be set. By manipulating the value of this variable, you can allow your graphical environment not to be sent to a local monitor but be sent to a monitor on some other system on the network.</p><p>HISTFILE specifies the path to the command history file that the bash shell should use to save the list of commands you enter at the shell prompt. HISTSIZE specifies the number of commands you&#39;ll save within your command history file.</p><p>The HOME environment variable specifies the full path to the current user&#39;s home directory. HOST and HOSTNAME are variables that contain the hostname of the system.</p><p>MAIL contains the path to the user&#39;s mailbox file. Some distributions use the variable MANPATH to specify the path to your man documentation files. The OLDPWD environment variable contains the last directory that you were just in. The PATH environment variable contains a list of directories to be searched when you&#39;re running a command from a shell prompt.</p><p>The PS1 environment variable contains all the characters that should be used to define what your shell prompt should look like. By manipulating this variable, you can specify whether or not you want your username, hostname, the current time, etc. displayed in the shell prompt. PWD will contain your current working directory.</p><h3 id="viewing-environment-variables-03-06-06-07" tabindex="-1"><a class="header-anchor" href="#viewing-environment-variables-03-06-06-07"><span>Viewing Environment Variables 03:06-06:07</span></a></h3><p>You can use the echo command as shown here if you need to see the variable assigned to one single variable. By default, whatever you send to the echo command to display is treated as literal text. If we want to specify that echo is a variable, instead of writing HISTFILE on the screen, the dollar sign at the beginning of the variable tells echo that the text that follows is not literal but is actually the name of a variable. Instead of just writing HISTFILE on the screen, echo will go and grab whatever value is currently inside of the HISTFILE variable and write it on the screen instead. In this case, you can see that the value of the HISTFILE environment variable on this system is set to /home/ksanders/.bash_history. Using this environment variable, my shell knows where to save all the commands I enter at the shell prompt.</p><p>The echo command can have two key drawbacks. First, it only displays one environment variable at a time. The second issue is that you must know the name of the environment variable.</p><p>If you want to view lots of environment variables all at once, or if you&#39;re not sure what the name of the environment variable you want to work with is, you can instead use the env command. The env command displays all your environment variables along with their current values.</p><p>The syntax includes the name of the variable, an equal sign (=), and then the value assigned to that variable. There are default values assigned to environment variables on a Linux system, so you need to be careful when changing any of these. In fact, there are some environment variables that you shouldn&#39;t change.</p><p>For example, if you were to change HOST or HOSTNAME to a different value, it could cause problems with many of the services that are currently running on your system.</p><p>To do these tasks, you&#39;ll need to change the value assigned to an environment variable. At the shell prompt, enter the name of the variable, an equal sign, and then the value you want to assign to that variable. It&#39;s important to note that if you reset the value of an environment variable, then that new value you assigned will be applied only within the current shell session.</p><p>In order to make that assignment apply to all shell sessions, you&#39;ll need to export the variable&#39;s new value. To do this, you&#39;ll enter export and the variable name at the shell prompt. After you do this, the new value assigned to that value will remain available to all other shells, including any sub-shells created by the current shell.</p><p>One problem you&#39;ll encounter in this process is that any change you make to the environment variable at the shell prompt will be lost after the system reboots.</p><p>If the change you made needs to be persistent across system restarts, then you need to edit one of your bash configuration files and add the variable assignment command to the file.</p><p>Which file you need to add it to depends upon which distribution you&#39;re using. If you add the variable value assignment to the <code>/etc/profile</code> file, that change will be applied to all the users on the system. There may be situations where you only want to make the change to the environment variable for a single user. If that&#39;s the case, then you need to use the appropriate bash configuration file found in that user&#39;s home directory. You&#39;ll have to take a look at the system you&#39;re using and figure out which of these it is you need to make the change to.</p><h3 id="summary-06-07-06-29" tabindex="-1"><a class="header-anchor" href="#summary-06-07-06-29"><span>Summary 06:07-06:29</span></a></h3><p>That&#39;s it for this lesson. In this lesson, we talked about what environment variables are and how to view the values assigned to them. We also talked about how to set new values to environment variables. We ended this lesson by talking about how to make environment variable changes persistent across shell sessions and system reboots.</p><h2 id="_2-5-2-manage-environment-variables" tabindex="-1"><a class="header-anchor" href="#_2-5-2-manage-environment-variables"><span>2.5.2 Manage Environment Variables</span></a></h2><h3 id="managing-environment-variables-00-00-01-47" tabindex="-1"><a class="header-anchor" href="#managing-environment-variables-00-00-01-47"><span>Managing Environment Variables 00:00-01:47</span></a></h3><p>In this demonstration, we&#39;re going to spend some time working with environment variables. There are many different ways to view the values of these variables.</p><p>For example, if you want to view the values of all your environment variables at once, you can use the env command. Simply type env at the shell prompt, then hit Enter, and all your environment variables are listed along with their current values. If you look at the output of the env command, you&#39;ll see that a specific syntax is used. First, we have the name of the environment variable, followed by an equal sign, and then the value that it&#39;s been assigned. In this example, we have an environment variable named HOME, and it&#39;s used to define the home directory for the current user.</p><p>You can see that my HOME environment variable is currently set to /home/jpatrick. These environment variables are unique to each user. In addition to the env command, you can also view the value of a single environment variable using the echo command. Let&#39;s clear the screen here. Then we enter echo followed by the name of the environment variable we want to view. Before we do that, you have to understand that the echo command, by default, simply writes text to the screen.</p><p>If you want the echo command to write the value for the home environment variable, you have to tell it that. To do this, we type echo, and then we put a $, followed by the name of the environment variable. The dollar sign tells echo that what comes after isn&#39;t literal text that needs to be written to the screen but is the name of an environment variable. That echo should go and grab whatever value is currently in that environment variable and display it on the screen instead. Notice here that when I enter echo $HOME, the value of the home environment variable is displayed.</p><h3 id="path-environment-variable-01-47-02-46" tabindex="-1"><a class="header-anchor" href="#path-environment-variable-01-47-02-46"><span>PATH Environment Variable 01:47-02:46</span></a></h3><p>Another commonly used environment variable is the PATH environment variable. We could type echo $PATH to see a list of all the different directories contained within the PATH environment variable. These are the directories that the Linux shell will look in if you enter a command at the command prompt. For example, I could type the pwd command, and it runs. It tells me what my working directory currently is.</p><p>If I do an ls command, there&#39;s no pwd executable in my home directory. How did the shell know where pwd exists? Well, it has to exist in one of these directories in the PATH environment variable. In fact, if we type the which command, we can see that the pwd command resides in /usr/bin. Each directory in the PATH environment variable is separated by a colon, so /user/bin is included in the PATH environment variable, so the shell knows where to go to find the pwd command.</p><h3 id="assign-a-new-value-to-an-environment-variable-02-46-05-56" tabindex="-1"><a class="header-anchor" href="#assign-a-new-value-to-an-environment-variable-02-46-05-56"><span>Assign a New Value to an Environment Variable 02:46-05:56</span></a></h3><p>But you&#39;re not stuck with those default values; you can change them if you want to. Let&#39;s use the echo command to look at the value of another environment variable. In this case, the PS1 environment variable. PS1 defines the format of your shell prompt. If we type echo $PS1 and press Enter, you can see some literal characters within the PS1 environment variable. For example, we have this opening bracket and then this closing bracket. That&#39;s what&#39;s displayed in the prompt. These two are literal characters, meaning they&#39;re interpreted directly without interpretation.</p><p>We have some other values defined within those brackets. Some of these values are literal. For example, this @ sign, right here, is a literal, so it&#39;s displayed literally in the prompt, just like the brackets were. But these other values are what we call escaped values, which are used to display other types of information. For example, <code>\\u</code> tells the shell prompt to display the name of the current user. u equals user. Then the next part of the prompt is <code>\\h</code>, which displays the system&#39;s hostname.</p><p>The space is a literal character, a space. We can change the values by altering them in the environment file. To do this, we simply type the name of the variable, PS1, and an equal sign, just like we saw in the output of the env command, and then the new value that we want to assign to the environment variable. Let&#39;s suppose that, in this case, we want to keep the brackets. We&#39;ll also enter the beginning and ending brackets and use a dollar sign at the end. We also want the username to continue to be displayed in the prompt.</p><p>We&#39;ll put a <code>\\u</code>, and then we&#39;ll put @, the literal, and then another <code>\\h</code> to display the host. Therefore, the username@hostname will still be displayed in the prompt. Then let&#39;s add a space, which is a literal again. This time, let&#39;s suppose we want to add other information—perhaps the time. There are actually a lot of different things we could put inside the prompt. If we put &#39;\\d,&#39; we could add the date to the prompt. We could use &#39;\\t&#39; to add the time to the prompt in 24-hour format, or you could put &#39;@&#39; to display the time in 12-hour format.</p><p>The quotes won&#39;t be added to the PS1 environment variable. The quotes simply tell the shell what to put inside the environment variable. In this case, it will put everything between the quotes. If I press Enter, we see that the shell prompt has now changed according to what we put in PS1. Everything we typed is now inside the prompt. This change won&#39;t be persistent between shell sessions.</p><p>We haven&#39;t exported the value of the variable yet; type export PS1. Now the changes we&#39;ve made apply to this shell we&#39;re in. However, if I reboot the system, I&#39;ll lose the changes. In order to fix this, I&#39;d need to add these two commands right here to my shell configuration file. The filename may be a little different but mostly .bash_profile file within your home directory.</p><p>By doing that, whenever the system boots, PS1 will be assigned the value we specified right here.</p><h3 id="summary-05-56-06-23" tabindex="-1"><a class="header-anchor" href="#summary-05-56-06-23"><span>Summary 05:56-06:23</span></a></h3><p>That&#39;s it for this demonstration. In this demo, we talked about managing environment variables. We first talked about what environment variables are. We discussed how to view environment variables using the &#39;env&#39; command. We also went over how to use echo to view the value of a single environment variable. Finally, we talked about how to assign a new value to an environment variable.</p><h2 id="_2-5-3-environment-variable-facts" tabindex="-1"><a class="header-anchor" href="#_2-5-3-environment-variable-facts"><span>2.5.3 Environment Variable Facts</span></a></h2><p>Like most variables, an environment variable is a data object that has a name and a value. In Linux, environment variables provide a way to share settings and configurations across different applications, processes, and services.</p><p>This lesson covers the following topics:</p><ul><li>Environment variables vs. shell, user, and local variables</li><li>Create and work with environment variables</li><li>Create persistent environment variables</li><li>Common environment variables</li></ul><h3 id="environment-variables-vs-shell-user-and-local-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables-vs-shell-user-and-local-variables"><span>Environment Variables vs. Shell, User, and Local Variables</span></a></h3><p>When a shell session is spawned, environment information is gathered from a variety of files and settings on the system and is made available to the shell process. This environment is implemented as key-value pairs or environment variables. Each environment variable has a name or variable identifier, which is conventionally uppercase. Environment variables can be assigned one value or multiple values. If the shell session spawns a new shell or runs a program, this environment (that is, this set of environment variables) is inherited or passed on to the child process.</p><p>Shell variables may appear to be environment variables since they also have uppercase names. However, these variables are not inherited from a parent process, but are generated by scripts as the shell is initiated. For example, HISTFILESIZE is created during a Bash shell initialization and determines the number of commands that are stored in a history file. If this Bash shell spawns a C shell as a child process, HISTFILESIZE won&#39;t be defined. It isn&#39;t inherited from the Bash shell and is not generated when the C shell is initiated. This confusion between environment variables and shell variables is amplified by the fact that users generally work with only one shell type, and the shell variables are initiated across all shell sessions in the same way. This consistency makes shell variables appear to be inherited from a parent shell when, in reality, they are generated during the shell initialization. A further reason for confusion is that many environment variables available in a shell are created and exported when the shell initializes.</p><p>All Linux variables can be classified as one of two types: environment variables or shell variables, with the main difference being that environment variables are inherited by child processes, but shell variables aren&#39;t.</p><p>Both user and local variables are strictly shell variables. If there is any distinction between them, it is in how they are created and used. User variables are typically defined at the shell prompt or added when scripts that are defined in a user&#39;s profile are run. Variables defined in scripts and in script functions are usually defined as local variables since they generally do not exist after the script or function is run. By convention, user and local variables are given lowercase names to avoid overwriting environment variables and shell variables.</p><p>The table below summarizes these ideas.</p><table><thead><tr><th>Variable Type</th><th scope="col">Typical Source</th><th scope="col">Naming Convention</th><th scope="col">Inherited by Child Processes</th></tr></thead><tbody><tr><td>Environment</td><td>Inherited from a parent process. It may be the system process that passes environment information ˝gathered from a variety of system files and settings.</td><td>Uppercase</td><td>Yes</td></tr><tr><td>Shell</td><td>Generated by shell startup scripts.</td><td>Uppercase</td><td>No</td></tr><tr><td>User</td><td>Created by a user at the shell prompt or added when scripts that are defined in a user&#39;s profile are run.</td><td>Lowercase</td><td>No</td></tr><tr><td>Local</td><td>Defined in scripts and in script functions.</td><td>Lowercase</td><td>No</td></tr></tbody></table><h3 id="create-and-work-with-environment-variables" tabindex="-1"><a class="header-anchor" href="#create-and-work-with-environment-variables"><span>Create and Work with Environment Variables</span></a></h3><p>A shell variable becomes an environment variable when the shell variable is exported. Essentially, this changes a variable&#39;s export attribute. Be aware of the following when working with environment variables:</p><ul><li>By convention, environment variable names (variable identifiers) are defined and referenced using uppercase characters, making them less likely to be overridden by lowercase shell variable identifiers.</li><li>If an environment variable has multiple values, they are separated by a colon (:) character.</li><li>The default values assigned to environment variables can be overridden to customize the user&#39;s computing environment. <ul><li>An overridden environment variable will only apply to the current shell session and any subsequent child processes.</li></ul></li></ul><p>The following table lists command that are used when creating and working with environment variables.</p><pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Command&lt;/th&gt;
      &lt;th&gt;Function&lt;/th&gt;
      &lt;th&gt;Example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;b&gt;[name]=[value]&lt;/b&gt;&lt;/td&gt;
      &lt;td&gt;
        Creates a new shell variable with an assigned value or changes the
        value of an existing variable.
        &lt;br /&gt;
        &lt;div&gt;
          &lt;div&gt;
            &lt;div class=&quot;to-info-box-body&quot;&gt;
              &lt;div
                class=&quot;to-icon large&quot;
                aria-hidden=&quot;true&quot;
                style=&quot;width: 20px&quot;
              &gt;
                &lt;svg
                  aria-hidden=&quot;true&quot;
                  focusable=&quot;false&quot;
                  data-prefix=&quot;fal&quot;
                  data-icon=&quot;circle-info&quot;
                  class=&quot;svg-inline--fa fa-circle-info&quot;
                  role=&quot;img&quot;
                  xmlns=&quot;http://www.w3.org/2000/svg&quot;
                  viewBox=&quot;0 0 512 512&quot;
                &gt;
                  &lt;path
                    fill=&quot;currentColor&quot;
                    d=&quot;M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z&quot;
                  &gt;&lt;/path&gt;
                &lt;/svg&gt;
              &lt;/div&gt;
              &lt;div class=&quot;to-info-box-body-content&quot;&gt;
                &lt;span&gt;
                  To append information to a variable instead of replacing
                  it, include the current variable in the command. (See
                  example.)
                  &lt;br /&gt;
                  Changing the value of an environment variable will change
                  it for the current shell session and any subsequent child
                  processes.
                &lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/td&gt;
      &lt;td&gt;
        &lt;b
          &gt;TRAINING=&quot;TestOut&quot;
          &lt;br /&gt;
          PATH=$PATH:/bin/additionalpath&lt;/b
        &gt;
      &lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;b&gt;export [name]=[value]&lt;/b&gt;&lt;/td&gt;
      &lt;td&gt;
        Creates a new environment variable for the current shell session and
        any subsequent child processes.
      &lt;/td&gt;
      &lt;td&gt;&lt;b&gt;export TRAINING=&quot;TestOut&quot;&lt;/b&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;b&gt;export [name]&lt;/b&gt;&lt;/td&gt;
      &lt;td&gt;
        Exports an existing shell variable to make it an environment
        variable for the current shell session and any subsequent child
        processes.
      &lt;/td&gt;
      &lt;td&gt;
        &lt;b
          &gt;TRAINING=&quot;TestOut&quot;
          &lt;br /&gt;
          export TRAINING&lt;/b
        &gt;
      &lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;b&gt;declare -x [name]=[value]&lt;/b&gt;&lt;/td&gt;
      &lt;td&gt;
        Creates a new environment variable for the current shell session and
        any subsequent child processes (functionally equivalent to
        &lt;b&gt;export [name]=[value]&lt;/b&gt; ).
      &lt;/td&gt;
      &lt;td&gt;&lt;b&gt;declare -x TRAINING=&quot;TestOut&quot;&lt;/b&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;b&gt;declare -x [name]&lt;/b&gt;&lt;/td&gt;
      &lt;td&gt;
        Exports an existing shell variable to make it an environment
        variable for the current shell session and any subsequent child
        processes (functionally equivalent to &lt;b&gt;export [name]&lt;/b&gt; ).
      &lt;/td&gt;
      &lt;td&gt;
        &lt;b
          &gt;TRAINING=&quot;TestOut&quot;
          &lt;br /&gt;
          declare -x TRAINING&lt;/b
        &gt;
      &lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;b&gt;export -n [name]&lt;/b&gt;&lt;/td&gt;
      &lt;td&gt;
        Removes the export property of an environment variable, making it a
        shell variable.
      &lt;/td&gt;
      &lt;td&gt;&lt;b&gt;export -n TRAINING&lt;/b&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;b&gt;declare +x [name]&lt;/b&gt;&lt;/td&gt;
      &lt;td&gt;
        Removes the export property of an environment variable, making it a
        shell variable (functionally equivalent to
        &lt;b&gt;export -n [name]&lt;/b&gt; ).
      &lt;/td&gt;
      &lt;td&gt;&lt;b&gt;declare +x TRAINING&lt;/b&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;b&gt;echo $[name]&lt;/b&gt;&lt;/td&gt;
      &lt;td&gt;
        Displays the contents of an environment variable (or any variable).
      &lt;/td&gt;
      &lt;td&gt;&lt;b&gt;echo $TRAINING&lt;/b&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;b&gt;printenv&lt;/b&gt;&lt;/td&gt;
      &lt;td&gt;Displays a list of the current environment variables.&lt;/td&gt;
      &lt;td&gt;&lt;b&gt;printenv&lt;/b&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;b&gt;env&lt;/b&gt;&lt;/td&gt;
      &lt;td&gt;
        Displays a list of the current environment variables.
        &lt;div&gt;
          &lt;div&gt;
            &lt;div class=&quot;to-info-box-body&quot;&gt;
              &lt;div
                class=&quot;to-icon large&quot;
                aria-hidden=&quot;true&quot;
                style=&quot;width: 20px&quot;
              &gt;
                &lt;svg
                  aria-hidden=&quot;true&quot;
                  focusable=&quot;false&quot;
                  data-prefix=&quot;fal&quot;
                  data-icon=&quot;circle-info&quot;
                  class=&quot;svg-inline--fa fa-circle-info&quot;
                  role=&quot;img&quot;
                  xmlns=&quot;http://www.w3.org/2000/svg&quot;
                  viewBox=&quot;0 0 512 512&quot;
                &gt;
                  &lt;path
                    fill=&quot;currentColor&quot;
                    d=&quot;M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z&quot;
                  &gt;&lt;/path&gt;
                &lt;/svg&gt;
              &lt;/div&gt;
              &lt;div class=&quot;to-info-box-body-content&quot;&gt;
                &lt;span&gt;
                  You can also use the &lt;b&gt;env&lt;/b&gt; command to run a command
                  using temporarily manipulated environment variables.
                &lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/td&gt;
      &lt;td&gt;&lt;b&gt;env&lt;/b&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;b&gt;export -p&lt;/b&gt;&lt;/td&gt;
      &lt;td&gt;Displays a list of all exported variables and functions.&lt;/td&gt;
      &lt;td&gt;&lt;b&gt;export -p&lt;/b&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;b&gt;set&lt;/b&gt;&lt;/td&gt;
      &lt;td&gt;
        Displays a list of all environment variables, shell variables, local
        variables, and shell functions.
        &lt;div&gt;
          &lt;div&gt;
            &lt;div class=&quot;to-info-box-body&quot;&gt;
              &lt;div class=&quot;to-icon large&quot; aria-hidden=&quot;true&quot;&gt;
                &lt;svg
                  aria-hidden=&quot;true&quot;
                  focusable=&quot;false&quot;
                  data-prefix=&quot;fal&quot;
                  data-icon=&quot;circle-info&quot;
                  class=&quot;svg-inline--fa fa-circle-info&quot;
                  role=&quot;img&quot;
                  xmlns=&quot;http://www.w3.org/2000/svg&quot;
                  viewBox=&quot;0 0 512 512&quot;
                &gt;
                  &lt;path
                    fill=&quot;currentColor&quot;
                    d=&quot;M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z&quot;
                  &gt;&lt;/path&gt;
                &lt;/svg&gt;
              &lt;/div&gt;
              &lt;div class=&quot;to-info-box-body-content&quot;&gt;
                &lt;span&gt;
                  You can also use the &lt;b&gt;set&lt;/b&gt; command to set or unset
                  values of shell options and positional parameters.&lt;/span
                &gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/td&gt;
      &lt;td&gt;&lt;b&gt;set&lt;/b&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;b&gt;unset [name]&lt;/b&gt;&lt;/td&gt;
      &lt;td&gt;
        Removes the variable and its value independent of whether the
        variable is an environment variable or a shell variable.
      &lt;/td&gt;
      &lt;td&gt;&lt;b&gt;unset TRAINING&lt;/b&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</code></pre><h3 id="create-persistent-environment-variables" tabindex="-1"><a class="header-anchor" href="#create-persistent-environment-variables"><span>Create Persistent Environment Variables</span></a></h3><p>The above commands can be added to the following system and bash configuration files to create environment variables that persist across system reboots and Bash shell startups:</p>`,73),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"File(s)"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"/etc/environment"),e("td",null,[t(" The /etc/environment file is a system-wide configuration file for all users. Environment variables defined in this file are available to all shells and processes. "),e("div",null,[e("div",{class:"to-info-box"},[e("div",{class:"to-info-box-body"},[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null," Changes to this file do not take affect until after a reboot. ")])])])])])]),e("tr",null,[e("td",null,"/etc/profile"),e("td",null,[t(" This file is run for all users, but only during interactive logins (when a username and password is required to log in). While environment variable can be defined in this file, the preferred method is to define them in a separate script file saved in the /etc/profile.d directory. "),e("div",null,[e("div",{class:"to-info-box"},[e("div",{class:"to-info-box-body"},[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null,[t(" An interactive login occurs when the user must supply a username and password. An example is when the user connects using SSH, when using Ctrl+Alt+F2 to log in to a virtual terminal, or when using the "),e("b",null,"su"),t(" (switch user) command.")])])])])])])]),e("tr",null,[e("td",null,"/etc/profile.d/*.sh"),e("td",null," These script files are run for all users, but only during interactive logins. You can add environment variable definitions to these files. These files are run by the /etc/profile file. ")]),e("tr",null,[e("td",null,[t(" ~/.bash_profile "),e("br"),t(" ~/.bash_login "),e("br"),t(" ~/.profile ")]),e("td",null," These hidden files are located in a user's home directory and are only run for that specific user and only during interactive logins. A search is made for these files in the order that is listed. Only the first file found will be run. Environment variable definitions can be added to these files. ")]),e("tr",null,[e("td",null,"/etc/bashrc"),e("td",null,[t(" This file is run for all users during a Bash shell initialization. It is run during both interactive logins and interactive non-logins. Environment variable definitions can be added to them. "),e("div",null,[e("div",{class:"to-info-box"},[e("div",{class:"to-info-box-body"},[e("div",{class:"to-icon large","aria-hidden":"true",style:{width:"20px"}},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null,[t(" An interactive non-login occurs when the user is not required to enter a username and password to open a shell. An example is when the user opens a graphical terminal window in gnome or a new shell using the "),e("b",null,"bash"),t(" command.")])])])])])])]),e("tr",null,[e("td",null,"~/.bashrc"),e("td",null," This hidden file is located in a users home directory and is only run for that specific user during both interactive logins and non-interactive logins. You can add environment variable definitions to this file. ")])])],-1),a('<h3 id="common-environment-variables" tabindex="-1"><a class="header-anchor" href="#common-environment-variables"><span>Common Environment Variables</span></a></h3><p>The table below lists common environment variables.</p><blockquote><p>A few of these environment variables are exported during shell initialization and aren&#39;t inherited from the system process. They&#39;re still considered environment variables because they&#39;re inherited by any child processes.</p></blockquote><table><thead><tr><th>Variable</th><th>Description</th></tr></thead><tbody><tr><td>SHELL</td><td>The user&#39;s login shell.</td></tr><tr><td>DISPLAY</td><td>The location where Windows output is displayed.</td></tr><tr><td>ENV</td><td>The location of the configuration file for the current shell.</td></tr><tr><td>HISTSIZE</td><td>The number of lines or commands that are stored in a history list while your shell session is ongoing.</td></tr><tr><td>HOME</td><td>The absolute path of the user&#39;s home directory.</td></tr><tr><td>HOSTNAME</td><td>HOSTNAME is identical to HOST, but is only used on certain distributions.</td></tr><tr><td>LOGNAME</td><td>The current user&#39;s username.</td></tr><tr><td>MAIL</td><td>The path to the current user&#39;s mailbox file.</td></tr><tr><td>OLDPWD</td><td>The directory the user was in prior to switching to the current directory.</td></tr><tr><td>PATH</td><td>The directory paths used to search for programs and files. <ul><li>Use a colon to separate entries in the PATH variable.</li><li>Do not include a period (.) in the PATH variable. A period indicates that the working directory is in the path and poses a security risk.</li></ul></td></tr><tr><td>PWD</td><td>The path of the current working directory.</td></tr><tr><td>LANG</td><td>The language the operating system uses.</td></tr><tr><td>TERM</td><td>The type of terminal to emulate when running the shell.</td></tr><tr><td>USER</td><td>The current logged in user.</td></tr></tbody></table><p>The table below lists useful Bash shell variables:</p><blockquote><p>These shell variables are not inherited by child shells and processes. However, when the child shell is created, these shell variables will be initialized.</p></blockquote>',6),e("table",null,[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Variable"),e("th",{scope:"col",class:"fw-bold"}," Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"BASH"),e("td",null,"The location of the Bash executable file.")]),e("tr",null,[e("td",null,"BASHOPTS"),e("td",null,"The list of options that were used when Bash was executed.")]),e("tr",null,[e("td",null,"BASH_VERSION"),e("td",null,"The Bash version being executed in a readable form.")]),e("tr",null,[e("td",null,"BASH_VERSINFO"),e("td",null,"The Bash version in machine-readable output.")]),e("tr",null,[e("td",null,"EUID"),e("td",null,"The current user's ID number.")]),e("tr",null,[e("td",null,"HISTFILE"),e("td",null,"The filename where past commands are stored.")]),e("tr",null,[e("td",null,"HISTFILESIZE"),e("td",null,"The number of past commands that HISTFILE stores for multiple sessions.")]),e("tr",null,[e("td",null,"OSTYPE"),e("td",null,"The type of operating system (usually Linux).")]),e("tr",null,[e("td",null,"PS1"),e("td",null,"The characters that the shell uses to define what the shell prompt looks like.")]),e("tr",null,[e("td",null,"COLUMNS"),e("td",null,"The number of columns being used to draw output on the screen.")]),e("tr",null,[e("td",null,"LINES"),e("td",null,"The number of lines being used to draw output on the screen.")]),e("tr",null,[e("td",null,"UID"),e("td",null,"The current user's user ID.")])])],-1)]))}const u=i(r,[["render",o],["__file","05.html.vue"]]),c=JSON.parse('{"path":"/02/05.html","title":"Section 2.5 Environment Variables","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 2.5 Environment Variables","description":"some description"},"headers":[{"level":2,"title":"2.5.1 Environment Variables","slug":"_2-5-1-environment-variables","link":"#_2-5-1-environment-variables","children":[{"level":3,"title":"Environment Variables 00:00-00:24","slug":"environment-variables-00-00-00-24","link":"#environment-variables-00-00-00-24","children":[]},{"level":3,"title":"Variables 00:24-03:06","slug":"variables-00-24-03-06","link":"#variables-00-24-03-06","children":[]},{"level":3,"title":"Viewing Environment Variables 03:06-06:07","slug":"viewing-environment-variables-03-06-06-07","link":"#viewing-environment-variables-03-06-06-07","children":[]},{"level":3,"title":"Summary 06:07-06:29","slug":"summary-06-07-06-29","link":"#summary-06-07-06-29","children":[]}]},{"level":2,"title":"2.5.2 Manage Environment Variables","slug":"_2-5-2-manage-environment-variables","link":"#_2-5-2-manage-environment-variables","children":[{"level":3,"title":"Managing Environment Variables 00:00-01:47","slug":"managing-environment-variables-00-00-01-47","link":"#managing-environment-variables-00-00-01-47","children":[]},{"level":3,"title":"PATH Environment Variable 01:47-02:46","slug":"path-environment-variable-01-47-02-46","link":"#path-environment-variable-01-47-02-46","children":[]},{"level":3,"title":"Assign a New Value to an Environment Variable 02:46-05:56","slug":"assign-a-new-value-to-an-environment-variable-02-46-05-56","link":"#assign-a-new-value-to-an-environment-variable-02-46-05-56","children":[]},{"level":3,"title":"Summary 05:56-06:23","slug":"summary-05-56-06-23","link":"#summary-05-56-06-23","children":[]}]},{"level":2,"title":"2.5.3 Environment Variable Facts","slug":"_2-5-3-environment-variable-facts","link":"#_2-5-3-environment-variable-facts","children":[{"level":3,"title":"Environment Variables vs. Shell, User, and Local Variables","slug":"environment-variables-vs-shell-user-and-local-variables","link":"#environment-variables-vs-shell-user-and-local-variables","children":[]},{"level":3,"title":"Create and Work with Environment Variables","slug":"create-and-work-with-environment-variables","link":"#create-and-work-with-environment-variables","children":[]},{"level":3,"title":"Create Persistent Environment Variables","slug":"create-persistent-environment-variables","link":"#create-persistent-environment-variables","children":[]},{"level":3,"title":"Common Environment Variables","slug":"common-environment-variables","link":"#common-environment-variables","children":[]}]}],"git":{"updatedTime":1736407950000},"filePathRelative":"02/05.md"}');export{u as comp,c as data};
