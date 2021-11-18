// $(() => {

//   $("#post-tweet").submit(function(event){
//     // Prevent change of page to /tweets
//     event.preventDefault();
//     // AJAX Request w/ POST method
//     // would but put IF here
//     // console.log(this)
//     if (dataVal($("#tweet-text"))) {
//       $.ajax({
//         type: "POST",
//         url: "/tweets",
//         data: $(this).serialize()
//       })
//       .then (function(tweets) { 
//         loadTweets()
//       })
//     } 
    
//   });

//   const dataVal = (data) => {
//     console.log(data)
//     if (parseInt($(".counter").val()) <= 0) {
//       alert("too many characters");
//       return false;
//     } else if (parseInt($(".counter").val()) === 140) {
//       alert("Message is empty");
//       return false;
//     }
//     return true;
//   }
// });