# Spring boot test @SpringBootTest not using the bean defined in @TestConfiguration class

I have a class that defines the mock beans for test

``` kotlin
import org.springframework.boot.test.context.TestConfiguration
import org.springframework.boot.test.mock.mockito.MockBean
import org.zalando.fahrschein.NakadiClient

@TestConfiguration
class NakadiTestConfig {

    @MockBean(name = "nakadiClient")
    private lateinit var nakadiClient: NakadiClient
```

And a base integration test class like this, that other integration tests extend to: 

``` kotlin
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
abstract class BaseIntegrationTest {
```

When I run the tests, the `nakadiClient` bean defined in the `NakadiTestConfig` is not created and it tries to create the actual bean from main code.


## Solution

Import the `@TestConfiguration` class to `@SpringBootTest` class

``` kotlin title="BaseIntegrationTest.kt"
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Import(NakadiTestConfig::class)
@ActiveProfiles("test")
abstract class BaseIntegrationTest {
```