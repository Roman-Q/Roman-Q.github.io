	$(document).ready(function(){
			$('.calc select').change(function(){
				$edition = $('select#card_edition').val();
				$paper = $('select#card_paper').val();
				$color = $('select#card_color').val();
				$print = $('select#card_color option:selected').attr('data-print');
				$print_file = $('select#card_color option:selected').attr('data-print-file');
				$color_option = $('select#card_color option:selected').attr('data-color');
				$paper_ratio = $('select#card_paper option:selected').attr('data-paper-ratio');
				$division = 30;
				$final_edition = $edition / $division;
				$price = $final_edition * $paper_ratio + 
				parseInt($print_file) * $print;
				console.log($price);
				$('span#final_price').text($price);

				if ($color_option == 1) {
					$('.card-images img').hide();
					$('#card_1_0').show();
				}
				if ($color_option == 2) {
					$('.card-images img').hide();
					$('#card_1_1').show();
				}
				if ($color_option == 3) {
					$('.card-images img').hide();
					$('#card_2_0').show();
				}
				if ($color_option == 4) {
					$('.card-images img').hide();
					$('#card_2_1').show();
				}
				if ($color_option == 5) {
					$('.card-images img').hide();
					$('#card_2_2').show();
				}

			});
		});