
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

Check gradle version

``` .sh
$ ./gradlew -version

------------------------------------------------------------
Gradle 6.8.3
------------------------------------------------------------

Build time:   2021-02-22 16:13:28 UTC
Revision:     9e26b4a9ebb910eaa1b8da8ff8575e514bc61c78

Kotlin:       1.4.20
Groovy:       2.5.12
Ant:          Apache Ant(TM) version 1.10.9 compiled on September 27 2020
JVM:          18.0.1.1 (Homebrew 18.0.1.1+0)
OS:           Mac OS X 12.4 aarch64
```

As per the [compatibility matrix](./java-gradle-version-compatibility.md), we need Gradle 7.5+ to work with Java 18

Update gradle wrapper

``` .sh
$ ./gradlew wrapper --gradle-version 7.5

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
BUILD FAILED in 323ms
```

It seems  I need to downgrade java first. ([how to switch java version ?](./java-mac-os-use-multiple-versions.md))

```
$ java16
$ java -version
openjdk version "16.0.2" 2021-07-20
OpenJDK Runtime Environment Zulu16.32+15-CA (build 16.0.2+7)
OpenJDK 64-Bit Server VM Zulu16.32+15-CA (build 16.0.2+7, mixed mode)
```

And try again:
