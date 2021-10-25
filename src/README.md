# 1860 Memory

Dieses Projekt ist das offizielle 1860-Memory.

## Details

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

### CSS-Spezifika

Folgende Eigenschaften werden angezeigt:

- _size_ (Anzahl der Tiles)
- _length_ (Länge bzw. Höhe eines Tiles)
- _height_ (Headerhöhe)
- _extensions_ (Ausmaße des identifizierten Device)
- _device_ (welches Device wurde identifiziert?)
- _newGame_ (Button, um ein neues Spiel zu beginnen)

Es existieren folgende CSS-Varianten:

- Notebook
- Nexus hoch
- Nexus quer
- Samsung
- Unihertz

| Kategorie    | Notebook   | Nexus hoch | Nexus quer | Samsung   | Unihertz  |
| ------------ | ---------- | ---------- | ---------- | --------- | --------- |
|              | 1708 x 817 | 600 x 792  | 960 x 432  | 360 x 648 | 320 x 496 |
| _color_      | rosa       | orange     | rot        | cyan      | grün      |
| _size_       |            |            |            | x         | -         |
| _length_     |            |            |            | x         | -         |
| _height_     |            |            |            | -         | -         |
| _extensions_ |            |            |            | x         | x         |
| _device_     |            |            |            | x         | -         |
| _clicks_     |            |            |            | x         | x         |
| _pairs_      |            |            |            | x         | x         |
| _newGame_    |            |            |            | x         | x         |

#### Samsung ()

#### Unihertz (320 x 496)

- size
