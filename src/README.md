Es gibt folgende Werte:

_index_ bezeichnet die laufende Nummer des Tiles (0 für das erste Tile, 29 für das letzte Tile)
_indexx_ zeigt an, ob es sich um den ersten oder zweiten Teil eines Paares handelt
_value_ bezeichnet den Wert des Tiles (entspricht dem Bild-Index)

```
mem {
    index: // (loop) hier steht _index_, d.h. die laufende Nummer des Tiles
    nr: // (nr) hier steht der Wert des Tiles
}
```

## Kommandos

### yarn mocha

startet die Test-Skripte

## Sonstiges

### Deployment

In Procfile muss der Befehl _web: npm start_ stehen, sonst geht's nicht
Außerdem muss in _Settings_ das buildpack _heroku/nodejs_ ausgewählt werden (zumindest, wenn man eine webpack-Applikation entwickelt)
