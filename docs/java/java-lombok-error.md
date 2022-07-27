# Java - lombok - error while running gradle build

```
$ ./gradlew clean build
Starting a Gradle Daemon, 1 incompatible Daemon could not be reused, use --status for details
> Task :compileJava FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':compileJava'.
> java.lang.IllegalAccessError: class lombok.javac.apt.LombokProcessor (in unnamed module @0x5f438f1) cannot access class com.sun.tools.javac.processing.JavacProcessingEnvironment (in module jdk.compiler) because module jdk.compiler does not export com.sun.tools.javac.processing to unnamed module @0x5f438f1

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

See https://docs.gradle.org/7.4.2/userguide/command_line_interface.html#sec:command_line_warnings

BUILD FAILED in 3s
2 actionable tasks: 2 executed
```



Check java version:

```
$ java -version
openjdk version "16.0.2" 2021-07-20
OpenJDK Runtime Environment Zulu16.32+15-CA (build 16.0.2+7)
OpenJDK 64-Bit Server VM Zulu16.32+15-CA (build 16.0.2+7, mixed mode)
```


Lombok version:

``` .gradle
	compileOnly 'org.projectlombok:lombok:1.18.12'
	annotationProcessor 'org.projectlombok:lombok:1.18.12'
```

As per [this post](https://stackoverflow.com/a/65382080), lombok version 1.18.20 supports java 16.

Update lombok version to latest version 1.18.24

``` .gradle
	compileOnly 'org.projectlombok:lombok:1.18.24'
	annotationProcessor 'org.projectlombok:lombok:1.18.24'
```

Worked!!