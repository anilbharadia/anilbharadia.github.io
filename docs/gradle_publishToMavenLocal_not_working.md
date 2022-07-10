# Gradle publishToMavenLocal not putting file in local repo


```shell
$ ./gradlew publishToMavenLocal

BUILD SUCCESSFUL in 2s
```

The new file is not present in `~/.m2/repository/...`

Root cause:

In the `build.gradle.kts` file, there were two places where I defined version and forgot to update the second one.

```kt
...
version = "0.2.0"

publishing {
    publications {
        create<MavenPublication>("mavenJava") {
            ...
            version = "0.1.1"
            ...
```

Sollution is to change it like this:

```kt
...
version = "0.2.0"

publishing {
    publications {
        create<MavenPublication>("mavenJava") {
            ...
            version = project.version.toString()
            ...
```

And it worked!