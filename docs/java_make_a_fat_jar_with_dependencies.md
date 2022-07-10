# Java make a fat jar with dependencies using gradle

Modify the `jar` gradle task to copy dependencies files
```kt
tasks.jar {
    manifest.attributes["Main-Class"] = "org.package.AppKt"
    from(configurations.runtimeClasspath.get().map { if (it.isDirectory) it else zipTree(it) })
}
```

Try again:

```shell
$ ./gradlew clean build                 

> Task :compileKotlin
'compileJava' task (current target is 18) and 'compileKotlin' task (current target is 1.8) jvm target compatibility should be set to the same Java version.

> Task :jar FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':jar'.
> Entry META-INF/versions/9/module-info.class is a duplicate but no duplicate handling strategy has been set. Please refer to https://docs.gradle.org/7.4.2/dsl/org.gradle.api.tasks.Copy.html#org.gradle.api.tasks.Copy:duplicatesStrategy for details.

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org
```

Add duplicate strategy as suggested by gradle

```kt
tasks.jar {
    ...
    from(configurations.runtimeClasspath.get().map { if (it.isDirectory) it else zipTree(it) })
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
}
```

Try again

```shell
$ ./gradlew clean build

> Task :compileKotlin
'compileJava' task (current target is 18) and 'compileKotlin' task (current target is 1.8) jvm target compatibility should be set to the same Java version.

BUILD SUCCESSFUL in 6s

```


ref: 
- https://www.baeldung.com/gradle-fat-jar
- https://stackoverflow.com/a/43998029