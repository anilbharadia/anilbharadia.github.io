
# Java Gradle - Unsupported class file major version 62

``` shell
$ ./gradlew build 
Starting a Gradle Daemon (subsequent builds will be faster)

FAILURE: Build failed with an exception.

* Where:
Settings file '~/.../nakadi/settings.gradle'

* What went wrong:
Could not compile settings file '~/.../nakadi/settings.gradle'.
> startup failed:
  General error during semantic analysis: Unsupported class file major version 62
  
  java.lang.IllegalArgumentException: Unsupported class file major version 62
  	at groovyjarjarasm.asm.ClassReader.<init>(ClassReader.java:196)
  	...
  	at java.base/java.lang.Thread.run(Thread.java:833)
  
  1 error


* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 1s
```

Check Java version

``` shell
$ java -version
openjdk version "18.0.1.1" 2022-04-22
OpenJDK Runtime Environment Homebrew (build 18.0.1.1+0)
OpenJDK 64-Bit Server VM Homebrew (build 18.0.1.1+0, mixed mode, sharing)
```