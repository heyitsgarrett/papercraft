// Array of SVG HTML
var fancy = ['<svg class="papercraft papercraft-a" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d=" M16 0 L32 32 L0 32 Z "/><path class="papercraft-front" d=" M16 0 L20 24 L0 32 Z "/></svg>',
'<svg class="papercraft papercraft-b" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L16 0 L32 18 L26 32 L0 32 Z"/><path class="papercraft-front" d="M0 0 L26 0 L32 6 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-c" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L28 0 L0 32 Z"/><path class="papercraft-front" d="M0 0 L30 0 L32 8 Z M0 8 L32 32 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-d" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L16 0 L32 18 L28 32 L0 32 Z"/><path class="papercraft-front" d="M0 0 L22 26 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-e" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L16 0 L32 16 L24 24 L32 32 L0 32 Z"/><path class="papercraft-front" d="M0 0 L32 0 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-f" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L16 0 L32 16 L0 32 Z"/><path class="papercraft-front" d="M0 0 L32 0 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-g" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L28 0 L0 32 Z M0 32 L32 16 L32 32 Z"/><path class="papercraft-front" d="M0 0 L30 0 L32 8 Z M0 8 L32 32 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-h" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L6 0 L12 32 L0 32 Z M20 0 L32 0 L32 32 L22 32 Z"/><path class="papercraft-front" d="M32 0 L32 20 L0 32 L0 12 Z"/></svg>',
'<svg class="papercraft papercraft-i" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-front" d="M10 0 L22 0 L22 32 L10 32 Z"/></svg>',
'<svg class="papercraft papercraft-j" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M20 0 L32 0 L32 32 L16 32 Z"/><path class="papercraft-front" d="M0 24 L32 32 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-k" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L32 0 L0 32 Z"/><path class="papercraft-front" d="M0 0 L32 32 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-l" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L14 0 L16 32 L0 32 Z"/><path class="papercraft-front" d="M0 32 L4 20 L32 26 L32 32 Z"/></svg>',
'<svg class="papercraft papercraft-m" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M32 0 L32 32 L0 32 Z"/><path class="papercraft-front" d="M0 0 L32 32 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-n" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M20 0 L32 0 L32 32 L16 32 Z"/><path class="papercraft-front" d="M0 0 L32 32 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-o" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-front" d="M0 0 L32 0 L32 32 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-p" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L16 0 L12 32 L0 32 Z"/><path class="papercraft-front" d="M0 0 L32 0 L30 20 L0 28 Z"/></svg>',
'<svg class="papercraft papercraft-q papercraft-tall" width="64" height="80" viewBox="0 0 32 40"><path class="papercraft-back" d="M0 0 L32 0 L32 40 L0 24 Z"/><path class="papercraft-front" d="M0 0 L32 0 L32 32 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-r" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 16 L32 32 L0 32 Z"/><path class="papercraft-front" d="M0 0 L32 0 L30 20 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-s" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L32 16 L32 32 L0 16 Z"/><path class="papercraft-front" d="M0 0 L32 0 L32 8 L0 16 Z M0 24 L32 16 L32 32 L0 32 Z"/></svg>',
'<svg class="papercraft papercraft-t" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L32 0 L32 10 L22 10 L22 32 L10 32 L10 10 L0 10 Z"/><path class="papercraft-front" d="M32 0 L32 10 L10 32 L10 10 Z"/></svg>',
'<svg class="papercraft papercraft-u" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L6 0 L16 32 L2 32 Z"/><path class="papercraft-front" d="M24 0 L32 0 L30 32 L2 32 Z"/></svg>',
'<svg class="papercraft papercraft-v" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L32 0 L16 32 Z"/><path class="papercraft-front" d="M0 0 L20 10 L16 32 Z"/></svg>',
'<svg class="papercraft papercraft-w papercraft-wide" width="80" height="64" viewBox="0 0 40 32"><path class="papercraft-back" d="M0 0 L40 0 L32 32 Z"/><path class="papercraft-front" d="M0 0 L40 0 L8 32 Z"/></svg>',
'<svg class="papercraft papercraft-x" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L32 0 L16 16 Z M0 32 L16 16 L32 32 Z"/><path class="papercraft-front" d="M0 0 L16 0 L32 32 L16 32 Z"/></svg>',
'<svg class="papercraft papercraft-y" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L32 0 L22 12 L22 32 L10 32 L10 16 Z"/><path class="papercraft-front" d="M10 0 L32 0 L10 32 Z"/></svg>',
'<svg class="papercraft papercraft-z" width="64" height="64" viewBox="0 0 32 32"><path class="papercraft-back" d="M0 0 L32 0 L32 16 L0 8 Z M0 20 L32 24 L32 32 L0 32 Z"/><path class="papercraft-front" d="M32 0 L32 16 L0 32 L0 16 Z"/></svg>'];

// Bind typing
// HACKY HACK HACK

$(function() {

  var convert = function(val) {
    var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', i, j, result = 0;

    for (i = 0, j = val.length - 1; i < val.length; i += 1, j -= 1) {
      result += Math.pow(base.length, j) * (base.indexOf(val[i]) + 1);
    }
    return result;
  };

  $('#typing').keyup(function() {
    updateText($('#typing').val());
  });


  function updateText(string) {
    $('.paper-container').empty();

    var newString = string.toUpperCase().split('').map(convert);

    for (var s=0; s < newString.length; s++) {
      $('.paper-container').append(fancy[newString[s] - 1]);
    }
  }


});