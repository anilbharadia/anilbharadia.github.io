# Python Convert List to Dict

``` .py
class User:
    def __init__(self, uid: int, name: str):
        self.uid = uid
        self.name = name

    def __repr__(self):
        return f"User(uid={self.uid}, name={self.name})"


users = [User(1, "A"), User(2, "B"), User(3, "C")]
print(users)

users_dict = {u.uid: u.name for u in users}
print(users_dict)
```

Output

``` .sh
[User(uid=1, name=A), User(uid=2, name=B), User(uid=3, name=C)]
{1: 'A', 2: 'B', 3: 'C'}
```