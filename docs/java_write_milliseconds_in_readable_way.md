# Java write milliseconds in a readable way

While writing java code where let's say I need to pass an argument which takes milliseconds. 

example:
```kt
import java.util.Timer

Timer("refresher", true).schedule(refresh(), 300000)
```

I find that confusing about what does `300000` mean. 

I know it is millis but it doesn't click immediately what duration it represents. 

One alternative is 

```kt
Timer("refresher", true).schedule(refresh(), 1000*60*5)
```

This give a hint that it is 5 minutes. However, it still puts a small cognitive load.

A better alternative is 

```kt
import java.util.concurrent.TimeUnit

Timer("refresher", true).schedule(refresh(), TimeUnit.MINUTES.toMillis(5))
```