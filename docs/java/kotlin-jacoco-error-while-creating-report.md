# Kotlin Jacoco - Error while creating report


``` .sh
$ ./gradlew --no-build-cache --rerun-tasks clean build --stacktrace
...
Caused by: java.io.IOException: Error while analyzing ~/project-x/build/classes/kotlin/main/de/org/MyClass.class.
        at org.jacoco.core.analysis.Analyzer.analyzerError(Analyzer.java:162)
        at org.jacoco.core.analysis.Analyzer.analyzeClass(Analyzer.java:134)
        at org.jacoco.core.analysis.Analyzer.analyzeClass(Analyzer.java:157)
        at org.jacoco.core.analysis.Analyzer.analyzeAll(Analyzer.java:193)
        at org.jacoco.core.analysis.Analyzer.analyzeAll(Analyzer.java:226)
        at org.jacoco.core.analysis.Analyzer.analyzeAll(Analyzer.java:221)
        at org.jacoco.core.analysis.Analyzer.analyzeAll(Analyzer.java:221)
        at org.jacoco.core.analysis.Analyzer.analyzeAll(Analyzer.java:221)
        at org.jacoco.core.analysis.Analyzer.analyzeAll(Analyzer.java:221)
        at org.jacoco.core.analysis.Analyzer.analyzeAll(Analyzer.java:221)
        at org.jacoco.ant.ReportTask.createBundle(ReportTask.java:570)
        at org.jacoco.ant.ReportTask.createReport(ReportTask.java:545)
        at org.jacoco.ant.ReportTask.execute(ReportTask.java:496)
        ... 151 more
Caused by: java.lang.IllegalStateException: Unexpected SMAP line: *S KotlinDebug
        at org.jacoco.core.internal.analysis.filter.KotlinInlineFilter.getFirstGeneratedLineNumber(KotlinInlineFilter.java:98)
        at org.jacoco.core.internal.analysis.filter.KotlinInlineFilter.filter(KotlinInlineFilter.java:44)
        at org.jacoco.core.internal.analysis.filter.Filters.filter(Filters.java:59)
        at org.jacoco.core.internal.analysis.ClassAnalyzer.addMethodCoverage(ClassAnalyzer.java:119)
        at org.jacoco.core.internal.analysis.ClassAnalyzer.access$100(ClassAnalyzer.java:33)
        at org.jacoco.core.internal.analysis.ClassAnalyzer$1.accept(ClassAnalyzer.java:108)
        at org.jacoco.core.internal.flow.ClassProbesAdapter$2.visitEnd(ClassProbesAdapter.java:91)
        at org.objectweb.asm.ClassReader.readMethod(ClassReader.java:1492)
        at org.objectweb.asm.ClassReader.accept(ClassReader.java:718)
        at org.objectweb.asm.ClassReader.accept(ClassReader.java:401)
        at org.jacoco.core.analysis.Analyzer.analyzeClass(Analyzer.java:116)
        at org.jacoco.core.analysis.Analyzer.analyzeClass(Analyzer.java:132)
        ... 162 more
...
```

## Solution: Upgrade gradle wrapper from `6.8.1` to `7.4.2`

``` .sh
./gradlew wrapper --gradle-version 7.4.2 
```

 
