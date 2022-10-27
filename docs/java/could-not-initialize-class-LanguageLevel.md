# Could not initialize class org.jetbrains.kotlin.com.intellij.pom.java.LanguageLevel

Getting error:

``` .sh
$ ./gradlew --no-build-cache --rerun-tasks clean build
...
> Task :generateJooq
Oct 26, 2022 3:49:55 PM org.jooq.tools.JooqLogger info
INFO: Initialising properties  : ~/project-x/build/tmp/generateJooq/config.xml
Oct 26, 2022 3:49:55 PM org.jooq.tools.JooqLogger warn
WARNING: org.xml.sax.SAXParseException; lineNumber: 1; columnNumber: 1226; cvc-complex-type.2.4.a: Invalid content was found starting with element '{"http://www.jooq.org/xsd/jooq-codegen-3.13.0.xsd":includeDomains}'.  
...
> Task :compileKotlin FAILED
e: java.lang.NoClassDefFoundError: Could not initialize class org.jetbrains.kotlin.com.intellij.pom.java.LanguageLevel
        at org.jetbrains.kotlin.com.intellij.core.CoreLanguageLevelProjectExtension.<init>(CoreLanguageLevelProjectExtension.java:26)
        at org.jetbrains.kotlin.com.intellij.core.JavaCoreProjectEnvironment.<init>(JavaCoreProjectEnvironment.java:42)
        at org.jetbrains.kotlin.cli.jvm.compiler.KotlinCoreProjectEnvironment.<init>(KotlinCoreProjectEnvironment.kt:26)
        at org.jetbrains.kotlin.cli.jvm.compiler.KotlinCoreEnvironment$ProjectEnvironment.<init>(KotlinCoreEnvironment.kt:121)
        at org.jetbrains.kotlin.cli.jvm.compiler.KotlinCoreEnvironment$Companion.createForProduction(KotlinCoreEnvironment.kt:425)
        at org.jetbrains.kotlin.cli.jvm.K2JVMCompiler.createCoreEnvironment(K2JVMCompiler.kt:226)
        at org.jetbrains.kotlin.cli.jvm.K2JVMCompiler.doExecute(K2JVMCompiler.kt:152)
        at org.jetbrains.kotlin.cli.jvm.K2JVMCompiler.doExecute(K2JVMCompiler.kt:52)
        at org.jetbrains.kotlin.cli.common.CLICompiler.execImpl(CLICompiler.kt:88)
        at org.jetbrains.kotlin.cli.common.CLICompiler.execImpl(CLICompiler.kt:44)
        at org.jetbrains.kotlin.cli.common.CLITool.exec(CLITool.kt:98)
        at org.jetbrains.kotlin.incremental.IncrementalJvmCompilerRunner.runCompiler(IncrementalJvmCompilerRunner.kt:386)
        at org.jetbrains.kotlin.incremental.IncrementalJvmCompilerRunner.runCompiler(IncrementalJvmCompilerRunner.kt:110)
        at org.jetbrains.kotlin.incremental.IncrementalCompilerRunner.compileIncrementally(IncrementalCompilerRunner.kt:286)
        at org.jetbrains.kotlin.incremental.IncrementalCompilerRunner.compileImpl$rebuild(IncrementalCompilerRunner.kt:99)
        at org.jetbrains.kotlin.incremental.IncrementalCompilerRunner.compileImpl(IncrementalCompilerRunner.kt:114)
        at org.jetbrains.kotlin.incremental.IncrementalCompilerRunner.compile(IncrementalCompilerRunner.kt:74)
        at org.jetbrains.kotlin.daemon.CompileServiceImplBase.execIncrementalCompiler(CompileServiceImpl.kt:607)
        at org.jetbrains.kotlin.daemon.CompileServiceImplBase.access$execIncrementalCompiler(CompileServiceImpl.kt:96)
        at org.jetbrains.kotlin.daemon.CompileServiceImpl.compile(CompileServiceImpl.kt:1659)
        at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)
        at java.base/java.lang.reflect.Method.invoke(Method.java:577)
        at java.rmi/sun.rmi.server.UnicastServerRef.dispatch(UnicastServerRef.java:360)
        at java.rmi/sun.rmi.transport.Transport$1.run(Transport.java:200)
        at java.rmi/sun.rmi.transport.Transport$1.run(Transport.java:197)
        at java.base/java.security.AccessController.doPrivileged(AccessController.java:712)
        at java.rmi/sun.rmi.transport.Transport.serviceCall(Transport.java:196)
        at java.rmi/sun.rmi.transport.tcp.TCPTransport.handleMessages(TCPTransport.java:598)
        at java.rmi/sun.rmi.transport.tcp.TCPTransport$ConnectionHandler.run0(TCPTransport.java:844)
        at java.rmi/sun.rmi.transport.tcp.TCPTransport$ConnectionHandler.lambda$run$0(TCPTransport.java:721)
        at java.base/java.security.AccessController.doPrivileged(AccessController.java:399)
        at java.rmi/sun.rmi.transport.tcp.TCPTransport$ConnectionHandler.run(TCPTransport.java:720)
        at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)
        at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)
        at java.base/java.lang.Thread.run(Thread.java:833)
Caused by: java.lang.ExceptionInInitializerError: Exception java.lang.ExceptionInInitializerError [in thread "RMI TCP Connection(2)-127.0.0.1"]
        at org.jetbrains.kotlin.com.intellij.pom.java.LanguageLevel.<clinit>(LanguageLevel.java:25)
        ... 35 more


> Task :dockerStop
generateJooqSource

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':compileKotlin'.
> Internal compiler error. See log for more details
```

## Solution: Upgrade kotlin version from `1.4.32` to `1.6.21`

``` .gradle title="build.gradle"
buildscript {
    ext {
        ...
        kotlin_version = "1.6.21"
        ...
    }
}
```