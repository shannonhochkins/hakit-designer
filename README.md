# HAKIT Dashboard Designer
WIP A dashboard designer using ha-compont-kit packages.


## Installation

### Manual Installation

1. Download the [hakit-designer](http://www.github.com/custom-cards/hakit-designer/releases/latest/download/hakit-designer.js)
2. Place the file in your `config/www` folder
3. Include the card code in your `ui-lovelace-card.yaml`

   ```yaml
   title: Home
   resources:
     - url: /local/hakit-designer.js
       type: module
   ```

4. Write configuration for the card in your `ui-lovelace.yaml`

### Installation and tracking with `hacs`

1. Make sure the [HACS](https://github.com/custom-components/hacs) component is installed and working.
2. Search for `hakit-designer` and add it through HACS
3. Add the configuration to your `ui-lovelace.yaml`

   ```yaml
   resources:
     - url: /hacsfiles/hakit-designer/hakit-designer.js
       type: module
   ```

4. Refresh home-assistant.