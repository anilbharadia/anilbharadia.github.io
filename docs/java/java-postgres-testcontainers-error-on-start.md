# Java - PostgreSQL - testcontainer error on start - Could not find a valid Docker environment

```
java.lang.ExceptionInInitializerError
	at java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)
	...
	at worker.org.gradle.process.internal.worker.GradleWorkerMain.main(GradleWorkerMain.java:74)
Caused by: java.lang.IllegalStateException: Could not find a valid Docker environment. Please see logs and check configuration
	at org.testcontainers.dockerclient.DockerClientProviderStrategy.lambda$getFirstValidStrategy$7(DockerClientProviderStrategy.java:215)
	at java.base/java.util.Optional.orElseThrow(Optional.java:403)
	at org.testcontainers.dockerclient.DockerClientProviderStrategy.getFirstValidStrategy(DockerClientProviderStrategy.java:207)
	at org.testcontainers.DockerClientFactory.getOrInitializeStrategy(DockerClientFactory.java:136)
	at org.testcontainers.DockerClientFactory.client(DockerClientFactory.java:178)
	at org.testcontainers.LazyDockerClient.getDockerClient(LazyDockerClient.java:14)
	at org.testcontainers.LazyDockerClient.authConfig(LazyDockerClient.java:12)
	at org.testcontainers.containers.GenericContainer.start(GenericContainer.java:310)
	... 78 more
```

Check docker is running 

``` .sh
$ docker ps   
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```
 It is running.


 Check the testcontainers version

 ``` .gradle
 testImplementation 'org.testcontainers:postgresql:1.15.1'
 ```

This could be the issue related to Apple M1 processor.


from this post, it looks like the issue is solved in the new version of testcontainers.

upgradle testcontainers

```
testImplementation 'org.testcontainers:postgresql:1.17.3'
```