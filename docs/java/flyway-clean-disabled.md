# Unable to execute clean as it has been disabled with the 'flyway.cleanDisabled' property.

## Solution: set `cleanDisabled` to `false` with command line arg

``` .sh
$ flyway -cleanDisabled="false"  clean
```

Reference: [https://flywaydb.org/documentation/configuration/parameters/cleanDisabled](https://flywaydb.org/documentation/configuration/parameters/cleanDisabled)