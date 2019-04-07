import dragDrop from 'drag-drop'
import $ from 'jquery'

let playing = false;

$.each(['#L', '#R'], (idx, elem) => {
  dragDrop(elem, {
    onDrop: files => {
      const file = files[0]
      const url = URL.createObjectURL(file);
      const width = $(elem).width()
      $(elem).find('video')
        .attr('src', url)
        .attr('width', width)
        .attr('loop', true)
    }
  })
})

$('body').keyup(function(e) {
  switch (e.key) {
    case ' ' || e.key == 'Spacebar':
      $('video').each((idx, elem) => {
        if (!playing) elem.play()
        else elem.pause()
      })
      playing = !playing;
      break;
    case 'ArrowRight':
      $('video').each((idx, elem) => {
        elem.currentTime += 1
      })
      break;
    case 'ArrowLeft':
      $('video').each((idx, elem) => {
        elem.currentTime -= 1
      })
      break;
  }
})