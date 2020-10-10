window.onload = function () {
  function switchDiv(a,b) {
    let x = document.getElementById(a);
    let y = document.getElementById(b);
    if (x.classList.contains("fa-chevron-down"))
    {
      x.classList.remove("fa-chevron-down");
      x.classList.add("fa-chevron-up");
      y.classList.remove("d-none");
    }
    else
    {
      x.classList.remove("fa-chevron-up");
      x.classList.add("fa-chevron-down");
      y.classList.add("d-none");
    }
  }
  
  // let b = document.getElementById('switchCourseType');
  // b.onclick = switchDiv('courseType','courseTypeDiv');
}