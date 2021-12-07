# Beispiel Events

```
    {"action":"like}
    {"action":"dislike}
    {}
```



# Dieses Template mappt die Antwort der Like API auf einen Text
```

    #set($inputRoot = $input.path('$'))
    $inputRoot.like Benutzer(n) gefällt das.
    $inputRoot.dislike Benutzer(n) gefällt das nicht.

```