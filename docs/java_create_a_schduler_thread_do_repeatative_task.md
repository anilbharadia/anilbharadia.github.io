# Java create a new thread to do repeatative task


```kt
import java.util.*
import java.util.concurrent.TimeUnit
import kotlin.concurrent.scheduleAtFixedRate
...
Timer("refresher", true).scheduleAtFixedRate(
    TimeUnit.MINUTES.toMillis(5), // First run after 5 minutes
    TimeUnit.MINUTES.toMillis(5)  // Repeat every 5 minutes
) { refresh() }
```

This code will call `refresh()` method every 5 minute.