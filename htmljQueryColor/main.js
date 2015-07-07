$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  $('p').each(function(index) {
    var words = $(this).html().split(' ')
    // debugger;
    for(var i = 0; i < words.length; i++) {
      // not changing value of words
      words[i] = '<span>' + words[i] + '</span>';
    }
    $(this).html(words.join(' '))
  });


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  var changeColor = function(span) {
    var colors = span
    console.log('colors are', colors)
    for (var i = 0; i < colors.length; i++) {
      // add color function?? Not working...
      colors[i].css('color', function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
        })
    }
    $(this).html(colors.join(' '));
  };

  setTimeout(changeColor($('span')), 1000);

});