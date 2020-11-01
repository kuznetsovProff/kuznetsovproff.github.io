// кнопки иконки
var json_menu =	`{
				  "btnprint": {	"title": "Печать", "fntawesome": "fas fa-print"	},
				  "btnlink": { "title": "Копировать ссылку", "fntawesome": "fas fa-link" },
				  "btnshare": { "title": "Поделиться ссылкой", "fntawesome": "fas fa-share" }
				}`;
				
var json_form = `
				{
					"section1": {
						"id": "sc1",
						"type": "2colSection",
						"cols": {
							"col1": {
								"id": "sc1_col1"
							},
							"col2": {
								"id": "sc1_col2",
								"childs": [
									{
										"type": "div",
										"class": "text-left d-inline"
									},
									{
										"type": "div",
										"class": "emptyline"
									}
								]
							}
						}
					},
					"section2": { 
						"id": "sc2",
						"type": "1colSection",
						"childs": {
							
						}
					}
				}
				`;