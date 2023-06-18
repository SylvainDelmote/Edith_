<script setup>
import { colors } from 'quasar'

//VARIABLES
const { getPaletteColor } = colors
const quasarTheme = ['primary', 'secondary', 'accent', 'dark', 'elevated', 'positive', 'negative', 'info', 'warning']
const columns = [
  { name: 'themename', align: 'center', label: 'Theme Name', field: 'themename', sortable: true },
  { name: 'hexacode', align: 'center', label: 'Hexacode', field: 'hexacode', sortable: true },
  { name: 'nordname', align: 'center', label: 'NordName', field: 'nordname', sortable: true },
  { name: 'color', align: 'center', label: 'color', field: 'color', format: (val, row) => val, sortable: true },
  { name: 'dark', align: 'center', label: 'Nord DarkModeDesc', field: 'dark', sortable: true },
  { name: 'light', align: 'center', label: 'Nord LightModeDesc', field: 'light', sortable: true },
]

//FUNCTIONS 
function getNordName(hex) {
  const nordTheme = {
    "#2E3440": "Nord0",
    "#3B4252": "Nord1",
    "#434C5E": "Nord2",
    "#4C566A": "Nord3",
    "#D8DEE9": "Nord4",
    "#E5E9F0": "Nord5",
    "#ECEFF4": "Nord6",
    "#8FBCBB": "Nord7",
    "#88C0D0": "Nord8",
    "#81A1C1": "Nord9",
    "#5E81AC": "Nord10",
    "#BF616A": "Nord11",
    "#D08770": "Nord12",
    "#EBCB8B": "Nord13",
    "#A3BE8C": "Nord14",
    "#B48EAD": "Nord15"
  }
  if (!nordTheme[hex]) {
    return 'Not Found'
  }
  return nordTheme[hex]
}

function getNordDesc(mode, nordName = 'Unknown') {
  const nordDesc = {
    "Not Found": {
      'dark': '-',
      'light': ' -'
    },

    "Nord0": {
      'dark': 'For background and area coloring',
      'light': 'For base elements like plain text'
    },

    "Nord1": {
      'dark': ' For elevated, prominent or focused UI elements like status bars, panels, modals, user interaction/form components like buttons, text/select fields ',
      'light': ' For more subtle/inconspicuous UI text elements that do not need so much visual attention'
    },
    "Nord2": {
      'dark': 'To colorize the currently active text editor line as well as selection- and text highlighting color.',
      'light': 'Brighter variant for the same target elements like nord1'
    },
    "Nord3": {
      'dark': ' For UI elements like indent- and wrap guide marker.',
      'light': 'Darker variants, also used for the most subtle/inconspicuous UI text element'
    },
    "Nord4": {
      'dark': 'Used for UI elements like the text editor caret. In the context of syntax highlighting it is used as text color for variables, constants, attributes and fields',
      'light': 'Used for elevated, more prominent or focused UI elements like status bars...form components like buttons, text/ select fields or checkboxes'
    },
    "Nord5": {
      'dark': 'Used for more subtle/inconspicuous UI text elements that do not need so much visual attention.',
      'light': ' Colorize the currently active text editor line as well as selection- and text highlighting color.'
    },
    "Nord6": {
      'dark': 'Used for elevated UI text elements that require more visual attention.',
      'light': 'Used as background and area coloring while its not used for syntax highlighting at all because otherwise it would collide with the same background color.'
    },
    "Nord7": {
      'dark': 'Used for UI elements that should, next to the primary accent color nord8, stand out and get more visual attention. In the context of syntax highlighting it is used for classes, types and primitives.',
      'light': 'Used for UI elements that should, next to the primary accent color nord8, stand out and get more visual attention. In the context of syntax highlighting it is used for classes, types and primitives.',
    },
    "Nord8": {
      'dark': 'Used for primary UI elements ',
      'light': 'Used for primary UI elements ',
    },

    "Nord9": {
      'dark': 'Used for secondary UI elements that also require more visual attention than other elements.',
      'light': 'Used for secondary UI elements that also require more visual attention than other elements.'
    },
    "Nord10": {
      'dark': 'Used for tertiary UI elements that require more visual attention than default elements.',
      'light': 'Used for tertiary UI elements that require more visual attention than default elements.'
    },
    "Nord11": {
      'dark': 'Used for UI elements that are rendering error states',
      'light': 'Used for UI elements that are rendering error states'
    },
    "Nord12": {
      'dark': 'Rarely used for UI elements, but it may indicate a more advanced or dangerous functionality.',
      'light': 'Rarely used for UI elements, but it may indicate a more advanced or dangerous functionality.'
    },
    "Nord13": {
      'dark': 'Used for UI elements that are rendering warning states like linter markers and the highlighting of G',
      'light': 'Used for UI elements that are rendering warning states like linter markers and the highlighting of G'
    },
    "Nord14": {
      'dark': 'Used for UI elements that are rendering success states ',
      'light': 'Used for UI elements that are rendering success states '
    },
    "Nord15": {
      'dark': 'Rarely used for UI elements, but it may indicate a more uncommon functionality.',
      'light': 'Rarely used for UI elements, but it may indicate a more uncommon functionality.'
    },
  }

  return nordDesc[nordName][mode]
}

function populateRows() {
  console.log('Populate Rows')
  let dynamicRow = []
  quasarTheme.forEach((theme) => {
    let hex = getPaletteColor(theme)
    let name = getNordName(hex.toUpperCase())
    let dark = getNordDesc('dark', name)
    let light = getNordDesc('light', name)

    dynamicRow.push(
      {
        'themename': theme,
        'hexacode': hex,
        'nordname': name,
        'dark': dark,
        'light': light,
        'color': hex
      }
    )

  })
  return dynamicRow
}




</script>

<template>
  <div>
    <div v-if="toggle"> "HELLO"</div>
    <div class="q-pa-md">
      <q-table class="bg-grey-9 text-white" hide-pagination title="Colors" :rows-per-page-options="[0]"
        :rows=populateRows() :columns="columns" row-key="name" rows-per-page=10 wrap-cells>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
              {{ props.row.themename }}
            </q-td>
            <q-td key="hexacode" :props="props">
              {{ props.row.themename }}
            </q-td>


            <q-td key="name" :props="props">
              {{ props.row.hexacode }}
            </q-td>
            <q-td key="hexacode" :props="props">
              {{ props.row.hexacode }}
            </q-td>


            <q-td key="name" :props="props">
              {{ props.row.nordname }}
            </q-td>
            <q-td key="hexacode" :props="props">
              {{ props.row.nordname }}
            </q-td>

            <q-td key="name" :props="props">
              {{ props.row.color }}
            </q-td>
            <q-td key="hexacode" :props="props">
              <q-badge rounded :color=props.row.themename>
              </q-badge>
            </q-td>

            <q-td key="name" :props="props" class=" text-justify">
              {{ props.row.dark }}
            </q-td>
            <q-td key="hexacode" :props="props" style="max-width: 15rem;" class=" text-justify">
              {{ props.row.dark }}
            </q-td>

            <q-td key="name" :props="props">
              {{ props.row.light }}
            </q-td>
            <q-td key="hexacode" :props="props" style="max-width: 15rem;" class=" text-justify">
              {{ props.row.light }}
            </q-td>


          </q-tr>


        </template>
      </q-table>
    </div>

  </div>
</template>