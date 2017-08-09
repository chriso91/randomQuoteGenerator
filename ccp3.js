// Forismatic API data taken in json format //
$(document).ready(function(){

	var quote;
	var author;

	function getNewQuote(){							//vanilla javascript function creation code
		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/', 
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data:{									//could also type in rest of url this is neater
				method: 'getQuote',
				lang: 'en',
				format:'jsonp'
			},
			success: function(response){
				quote = response.quoteText;
				author = response.quoteAuthor;
				$('#quote').text(quote);
				if (author){
					$('#author').text('- ' + author);
				}
				else{
					$('#author').text('- Unknown');
				}
			}
		});
	}
	getNewQuote();

	$('#quotebutton').on('click', function(event) {
		event.preventDefault();
		getNewQuote();
	})

	$('#sharetwit').on('click', function(event){
		event.preventDefault();
		window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '--' + author))
	})

	var colarr = ["#bf80ff", "#ffff4d", "#66ff66", "#4dffc3", "pink", " #666699", "#999966", "#800000"];
	$('#quotebutton').on('click', function(event){
		event.preventDefault();
		var num = Math.floor(Math.random() * 8);
		document.getElementById('quotebutton').style.backgroundColor = colarr[num];
		document.getElementById('sharetwit').style.backgroundColor = colarr[num];
		document.getElementById('quoteblock').style.color = colarr[num];
		document.getElementById('body-color').style.backgroundColor = colarr[num];
	})
});
