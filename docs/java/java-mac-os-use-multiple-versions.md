# Java MacOS use multiple versions - switch version

## Check installed versions

``` .sh
$ /usr/libexec/java_home -V  
Matching Java Virtual Machines (2):
    18.0.1.1 (arm64) "Homebrew" - "OpenJDK 18.0.1.1" /opt/homebrew/Cellar/openjdk/18.0.1.1/libexec/openjdk.jdk/Contents/Home
    16.0.2 (arm64) "Azul Systems, Inc." - "Zulu 16.32.15" /Users/anil/Library/Java/JavaVirtualMachines/azul-16.0.2/Contents/Home
/opt/homebrew/Cellar/openjdk/18.0.1.1/libexec/openjdk.jdk/Contents/Home
```

## Get java home for specific version

``` .sh
$ /usr/libexec/java_home -v18
/opt/homebrew/Cellar/openjdk/18.0.1.1/libexec/openjdk.jdk/Contents/Home
$ /usr/libexec/java_home -v16
/Users/anil/Library/Java/JavaVirtualMachines/azul-16.0.2/Contents/Home
```

## Create a sh function to switch versions

``` .sh title="~/.zshrc"
jdk() {
    version=$1
    export JAVA_HOME=$(/usr/libexec/java_home -v"$version");
    java -version
}
```
Update current termainal session with `source ~/.zshrc`


## Switch the version with this command

```
jdk 16
```

Example
``` .sh
$ java -version
openjdk version "18.0.1.1" 2022-04-22
OpenJDK Runtime Environment Homebrew (build 18.0.1.1+0)
OpenJDK 64-Bit Server VM Homebrew (build 18.0.1.1+0, mixed mode, sharing)
$ jdk 16
openjdk version "16.0.2" 2021-07-20
OpenJDK Runtime Environment Zulu16.32+15-CA (build 16.0.2+7)
OpenJDK 64-Bit Server VM Zulu16.32+15-CA (build 16.0.2+7, mixed mode)
$ java -version
openjdk version "16.0.2" 2021-07-20
OpenJDK Runtime Environment Zulu16.32+15-CA (build 16.0.2+7)
OpenJDK 64-Bit Server VM Zulu16.32+15-CA (build 16.0.2+7, mixed mode)
```




Reference: 

 - https://medium.com/w-logs/installing-java-11-on-macos-with-homebrew-7f73c1e9fadf
 - https://stackoverflow.com/a/52524114/411871