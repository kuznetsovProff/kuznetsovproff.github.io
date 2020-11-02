// кнопки иконки
let json_menu =	`{
				  "btnprint": {	"title": "Печать", "fntawesome": "fas fa-print"	},
				  "btnlink": { "title": "Копировать ссылку", "fntawesome": "fas fa-link" },
				  "btnshare": { "title": "Поделиться ссылкой", "fntawesome": "fas fa-share" }
				}`;
				
let json_form = `
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
										"class": "text-left",
										"childs": [
											{
												"type": "div",
												"class": "d-inline",
												"text": "В "
											},
											{
												"type": "div",
												"id": "ospname",
												"class": "d-inline bg-warning-opacity-10",
												"contenteditable": "true",
												"placeholder": "(наименование отдела судебных приставов)",
												"text": ""
											}
											
										]
									},
									{
										"type": "div",
										"class": "emptyline"
									},
									{
										"type": "div",
										"class": "text-left",
										"childs": [
											{
												"type": "div",
												"class": "d-inline",
												"text": "от "
											},
											{
												"type": "div",
												"id": "claimantname",
												"class": "d-inline bg-warning-opacity-10",
												"contenteditable": "true",
												"placeholder": "(ФИО взыскателя)",
												"text": ""
											}
											
										]
									},
									{
										"type": "div",
										"class": "text-left",
										"childs": [
											{
												"type": "div",
												"class": "d-inline",
												"text": "адрес: "
											},
											{
												"type": "div",
												"id": "claimantaddress",
												"class": "d-inline bg-warning-opacity-10",
												"contenteditable": "true",
												"placeholder": "(адрес взыскателя)",
												"text": ""
											}
											
										]
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
				
													
									
									/*
									
				<div class="text-left"><div class="d-inline">адрес: </div><div id="claimantaddress" class="d-inline bg-warning-opacity-10" contenteditable="true" placeholder="(адрес взыскателя)"></div></div>
				<div class="text-left"><div class="d-inline">телефон: </div><div id="claimantphone" class="d-inline bg-warning-opacity-10" contenteditable="true" placeholder="(телефон взыскателя)"></div></div>
				*/