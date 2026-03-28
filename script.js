

  function func(btn) {
        let item = btn.parentElement;

    if (item.classList.contains('a')) {
      item.classList.remove('a');

    } else {
      document.querySelectorAll('.item').forEach(function(e) {
        e.classList.remove('a');
      });

      item.classList.add('a');
    }
  }

