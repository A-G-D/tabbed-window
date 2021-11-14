# Tabbed Window

## Screenshots

`(Coming soon...)`

## Installation

`npm i --save @ui-components/tabbed-window`

## API

### HTML API

```html
<tabbed-window header-location=top|bottom|left|right></tabbed-window>
```

The neccessary child components will then be generated at runtime. The above declaration will be transformed into something like [this](#ui-nomenclature).

### Javascript API

```javascript
class TabbedWindow extends HTMLElement
```
```javascript
    get headerLocation(): Element
```
```javascript
    set headerLocation(value: "top"|"bottom"|"left"|"right"): 
```

## UI Nomenclature

```html
<tabbed-window header-location="top">
    <tabbed-window-header>
        <div class="links">
            <tabbed-window-link>...</tabbed-window-link>
            ... <!-- tabbed-window-link element for each open tab goes here -->
        </div>
        <div class="new-tab-button">
            ...
        </div>
    </tabbed-window-header>

    <tabbed-window-body>
        <div class="contents">
            <tabbed-window-content>...</tabbed-window-content>
            ... <!-- tabbed-window-content elenent for each tab goes here -->
        </div>
    </tabbed-window-body>
</tabbed-window>
```

## License

This repository is released under [MIT License](LICENSE).