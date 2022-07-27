# Java - read from console (stdin)

## Read integers from stdin

``` .java
import java.util.Scanner;
...
Scanner in = new Scanner(System.in);
while (in.hasNext()) {
    int i = in.nextInt();
    System.out.println("You entered int " + i);
}
```

[test this on ideone](https://ideone.com/xsyEl6)