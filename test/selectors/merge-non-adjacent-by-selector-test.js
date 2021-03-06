var vows = require('vows');
var optimizerContext = require('../test-helper').optimizerContext;

vows.describe('merge non djacent by selector')
  .addBatch(
    optimizerContext('advanced on', {
      'up': [
        '.one{color:red}.two{color:#fff}.one{font-weight:400}',
        '.one{color:red;font-weight:400}.two{color:#fff}'
      ],
      'down': [
        '.one{color:red}.two{font-weight:700}.one{font-weight:400}',
        '.two{font-weight:700}.one{color:red;font-weight:400}'
      ]
      // 'up - blocked': [
      //   '.one{color:red;with:100%}.two{display:inline-block;width:10px}.one{font-weight:400;display:block}',
      //   '.one{color:red;with:100%}.two{display:inline-block;width:10px}.one{font-weight:400;display:block}'
      // ]
    })
  )
  .addBatch(
    optimizerContext('advanced off', {
      'up': [
        '.one{color:red}.two{color:#fff}.one{font-weight:400}',
        '.one{color:red}.two{color:#fff}.one{font-weight:400}'
      ],
      'down': [
        '.one{color:red}.two{font-weight:700}.one{font-weight:400}',
        '.one{color:red}.two{font-weight:700}.one{font-weight:400}'
      ]
    }, { advanced: false })
  )
  .export(module);
