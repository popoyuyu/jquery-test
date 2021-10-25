jQuery(document).ready(function () {
  const htmlTag = ["h1", "p", "img"];
  htmlTag.forEach(function (element) {
    jQuery(element).click(function () {
      alert("This is a " + element + " tag.");
    });
  });
  // jQuery("h1").click(function () {
  //   alert("This is a heading.");
  // });

  // jQuery("p").click(function () {
  //   alert("This is a paragraph.");
  // });

  // jQuery("img").click(function () {
  //   alert("This is an image.");
  //   });
});


