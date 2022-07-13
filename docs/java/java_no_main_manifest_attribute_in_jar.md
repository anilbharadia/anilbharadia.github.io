# Java no main manifest attribute, in MyApp.jar

```shell
$ java -jar ./build/libs/MyApp.jar 
no main manifest attribute, in ./build/libs/MyApp.jar
```

In `build.gradle.kts` file add:

```kt
tasks.jar {
    manifest.attributes["Main-Class"] = "org.package.AppKt"
}
```