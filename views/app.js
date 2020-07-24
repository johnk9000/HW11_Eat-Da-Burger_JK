module.exports = function(body){
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Eat da Burger JK</title>
    <script src="https://code.jquery.com/jquery.js"></script>
    <script href="./js/logic.js" type="text/javascript" ></script>
    <link rel="stylesheet" href="./css/style.css" type="text/css" />
  </head>
  <script type="text/javascript">
  $(function() {
    $('#add-form').on("submit", e => {
        
        e.preventDefault()
        console.log('clicked add button')
        if($('#add-burger') !== ""){
            var newBurger = {
                burger: $('#add-burger').val().trim(),
                eaten: 0
            }
                console.log(newBurger) // DEL
            $.ajax("/api/burger", {type: "POST", data: newBurger})
            .then(function() {
                console.log('added new burger')
                location.reload()
            })
        }
    })

    $('.devour').on("click", function() {
        console.log('clicked eat button')
        //e.preventDefault()
        var id = $(this).data("id")
        console.log(this, id)
        $.ajax("/api/burger/" + id, {type: "POST"})
            .then( 
            function() {
        console.log('eating burger...')
        location.reload();
    })
    })
})
  </script>
  <body>
  <header>
  <img src="https://img.icons8.com/ios/100/000000/crane.png"/>
  <img src="https://img.icons8.com/wired/64/000000/hamburger.png"/>
  <img src="https://img.icons8.com/ios/100/000000/sts-crane.png"/>
  </header>
    ${ body }
  </body>
  </html>
  `
  }