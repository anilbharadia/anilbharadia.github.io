# Gradle build failed - Could not create an instance of type org.gradle.initialization.DefaultSettings_Decorated

```shell
$ ./gradlew clean build

FAILURE: Build failed with an exception.

* What went wrong:
Could not create an instance of type org.gradle.initialization.DefaultSettings_Decorated.
> Could not initialize class org.codehaus.groovy.runtime.InvokerHelper

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 0s
```

[This post](https://discuss.gradle.org/t/could-not-create-an-instance-of-type-org-gradle-initialization-defaultsettings-decorated/37349) suggest to update gradle wrapper.


Check the current version:

```shell
$ ./gradlew -version

------------------------------------------------------------
Gradle 5.0
------------------------------------------------------------

Build time:   2018-11-26 11:48:43 UTC
Revision:     7fc6e5abf2fc5fe0824aec8a0f5462664dbcd987

Kotlin DSL:   1.0.4
Kotlin:       1.3.10
Groovy:       2.5.4
Ant:          Apache Ant(TM) version 1.9.13 compiled on July 10 2018
JVM:          18.0.1.1 (Homebrew 18.0.1.1+0)
OS:           Mac OS X 12.4 aarch64
```
