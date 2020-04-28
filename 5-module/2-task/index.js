function toggleText() {
  document.querySelector('.toggle-text-button').onclick = function() {
    let status = document.getElementById('text').hidden = true;
      if (status = true){
        document.querySelector('.toggle-text-button').onclick = function() {
        document.getElementById('text').hidden = false;
      }
    }
  }
}
