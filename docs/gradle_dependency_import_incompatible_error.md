
added `implementation("io.github.xxx:xxx:0.2.0")` as dependency and run `Refresh Dradle Depenceies` from idea.

```
Incompatible because this component declares an API of a component compatible with Java 18 and the consumer needed a runtime of a component compatible with Java 16
```

Running `./gradlew clean build` is wrking fine.

It seems idea is using different jdk than terminal. It was.

Changed the SDK from idea settings, from 16 to 18. And try again.

It worked.




