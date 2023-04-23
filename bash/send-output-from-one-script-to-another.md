# Send Output From One Script To Another

> Script one

```sh
#! /bin/bash

MESSAGE="Hello Audience"

export MESSAGE
./secondScript.sh
```

> secondScript.sh

```sh
#! /bin/bash

echo "The message from helloScript is: $MESSAGE"
```
