		//adjustable
		var movePerUnit = 1;
		var totalTime = 60; //in sec
		var time = 1;
		
		var maxMove = Math.round(9+Math.random()*3);
		var countMove = 0;
		//searh for //temporary
		
		var min=0;
		var max=1;
		var bking = 0;
		var wking = 0;
		var bpawn = randomInt(0, 0);
		var wpawn = randomInt(0, 0);
		var bqueen = randomInt(0, 0);
		var wqueen = randomInt(0, 0);
		var bbishop = randomInt(0, 0);
		var wbishop = randomInt(0, 0);
		var bknight = randomInt(0, 0);
		var wknight = randomInt(1, 1);	
		var brook = randomInt(0, 0);
		var wrook = randomInt(0, 0);	
		/*var bpawn = 0;
		var wpawn = 0;
		var bqueen = 0;
		var wqueen = 0;
		var bbishop = 0;
		var wbishop = 0;
		var bknight = 1;
		var wknight = 1;
		var brook = 0;
		var wrook = 0;*/
		var bot = bking+wking+bqueen+wqueen+bbishop+wbishop+bknight+wknight+brook+wrook+bpawn+wpawn;
		//bot=2;
		function randomInt(min, max) { // min and max included 
			return Math.floor(Math.random() * (max - min + 1) + min);
		}
		var square = 6;
		var removed = [];
		
		
		var randomSquare = Math.round(0);
		var countSquare = 1;
		var botLvl = 1;
		var IQball = 0;
		var realFollowers = 0; //22
		var N = ["ginkacecelia"];
		var B = ["ginkacecelia"];
		var K = [];
		var R = [];
		var userName50 = ["ginkacecelia 0","roadtomultimillionaire 1","merr1ly_ 2","cecilieboennelycke 3","ak4.tsukii 4","travelwithuzz_ 5","distopic_animal 6","austeen_royal 7","itzme_jzmin 8","thenuskin_nirvana 9","stantonaesthetics 10","art.therapy._ 11","ebikeprotips 12","nizmastudio 13","qrt11whty 14","mori.hearns 15","lulu_glow_ 16","salmanaume 17","hb.is4henin.bg 18","kokoderecho 19","officialtreven37 20", "n3xus8725 21", "mosdailypay 22"];
		let userNameAll = [];
		let numAll = [];
		for(let i=0; i<userName50.length; i++) {
			userNameAll.push(userName50[i].split(" ")[0]);
			numAll.push(userName50[i].split(" ")[1]);
		}
		let nameSearch = "thenuskin_nirvana";
		//alert(userNameAll[userNameAll.indexOf(nameSearch)]+' '+numAll[userNameAll.indexOf(nameSearch)]);
		var followersTeam = false;
		var randomTurn = true;
		var peopleToCollapseBoard = 0;
		var peopleToShotBoard = 0;
		var addrow = 0;
		
		let timer=0;
		let timerCount = setInterval(()=>{
			if(timer < totalTime || alive == 1) {
				timer+=1;
			} else {
				write("Draw\n\n\n\n\n\n\n\n\n\n", 0);
				clearInterval(timerCount);
			}
		}, 1000);
		var row = square;
		
		var column = square;
		
		var animation=false;
		var boardHeight = 100*row/column;
		document.getElementById("board").style.height=`${boardHeight}vw`;
		var content='';
		var color="black";
		var followers = realFollowers + bot;
		var alive = followers;
		if(addrow !== null) {
			row+=addrow;
		}
		function initColumn(j) {
			content+=`<div class="row">`;
			if(square%2 == 0) {
				if(color=="white") {
					color="black";
				} else {
					color="white";
				}
			}
			for(let i=0; i < column; i++) {
				content += `<div class="${color}"></div>`;
				
				if(color=="white") {
					color="black";
				} else {
					color="white";
				}
			}
			content += `</div>`;
		}
		function initBoard() {
			for(let j=0; j < row; j++) {
				initColumn(j);
			}
			document.getElementById("board").innerHTML = content;
			for(let i=0; i<removed.length; i++) {
				let square= removed[i].split(' ');
				document.querySelectorAll('.white, .black, .removed')[findpos(square[0], square[1])].classList.add('removed');
			}
		}
		initBoard();
		
		//temporary
		for(let i=1; i<=0; i++) {
			removed.push(i+' '+ 1);
			removeSquare(i, 1);
		}
		
		for(let i=0; i<randomSquare; i++) { randomRemoveSquare(); }
		var totalSquare = (row*column);
		var guy = new Array();
		var where;
		var condition1;
		var condition2;
		function randomPlaces() {
			for(let i=0; i < followers; i+=1) {
				where=Math.round(Math.random()*(totalSquare-1));
				//alert(where);
				condition1 = document.querySelectorAll('.white, .black, .removed')[where].getElementsByTagName('img').length == 0;
				condition2 = !(Array.from(document.querySelectorAll('.white, .black, .removed')[where].classList).includes('removed'));
				if(i >= realFollowers && wpawn+bpawn != 0) {
					condition2 = condition2 && where <= (totalSquare-1)-square && where >= square
				}
				if(i >= realFollowers && wpawn+bpawn != 0) {
					condition2 = condition2 && where <= (totalSquare-1)-square && where >= square
				}
				if(bqueen+wqueen+bbishop+wbishop+bknight+wknight+brook+wrook+bpawn+wpawn == 0 && bking+wking>0) {
					
				}
				putPiece(where, i, condition1, condition2);
			}
			
		}
		var heroClass;
		function putPiece(where, i, condition1, condition2) {
			
			if (condition1 && condition2) {
				guy.push(where);
						if(i<realFollowers) {
							heroClass = "char followers";
							for(let j=0; j<5; j++) {
								if(userName50[i].includes(N[j])) {
									heroClass += " N";
								}
								if(userName50[i].includes(B[j])) {
									heroClass += " B";
								}
								if(userName50[i].includes(R[j])) {
									heroClass += " R";
								}
							}
							
							if(heroClass.split(" ").length == 2) {
								if(Math.random < 1/6) {
									heroClass += " K N";
								} else if(Math.random() < 1/6) {
									heroClass += " K B";
								} else if(Math.random() < 1/6) {
									heroClass += " K R";
								} else if(Math.random() < 1/6) {
									heroClass += " N B";
								} else if(Math.random() < 1/6) {
									heroClass += " N R";
								} else {
									heroClass += " B R";
								} 
							} else if(heroClass.split(" ").length == 3) {
								heroClass += " K";
							}  else if(heroClass.split(" ").length > 4) {
								alert(userName50[i]+" has multiple class");
							}	
							document.querySelectorAll('.white, .black, .removed')[where].innerHTML = `<img class="${heroClass}" src="${i}.jpg"/><img class="class" id="${where}" src="w${heroClass.split(" ")[2]}.png"/><img class="class2" id="${where}" src="w${heroClass.split(" ")[3]}.png"/><h5 id="i${where}"></h5>`;
						} else if(bpawn > 0) {
							for(let i=1; i<botLvl; i++) {
								guy.push(where);
							}
							document.querySelectorAll('.white, .black, .removed')[where].innerHTML = `<img class="char bot" src="bP.png"/><img class="class" id="${where}"/><img class="class2" id="${where}"/><h5 class="h5bot" id="i${where}"></h5>`;
							bpawn -= 1;
						} else if(wpawn > 0) {
							for(let i=1; i<botLvl; i++) {
								guy.push(where);
							}
							document.querySelectorAll('.white, .black, .removed')[where].innerHTML = `<img class="char bot" src="wP.png"/><img class="class" id="${where}"/><img class="class2" id="${where}"/><h5 class="h5bot" id="i${where}"></h5>`;
							wpawn -= 1;
						} else if(bknight > 0) {
							for(let i=1; i<botLvl; i++) {
								guy.push(where);
							}
							document.querySelectorAll('.white, .black, .removed')[where].innerHTML = `<img class="char bot" src="bN.png"/><img class="class" id="${where}"/><img class="class2" id="${where}"/><h5 class="h5bot" id="i${where}"></h5>`;
							bknight -= 1;
						} else if(wknight > 0) {
							for(let i=1; i<botLvl; i++) {
								guy.push(where);
							}
							document.querySelectorAll('.white, .black, .removed')[where].innerHTML = `<img class="char bot" src="wN.png"/><img class="class" id="${where}"/><img class="class2" id="${where}"/><h5 class="h5bot" id="i${where}"></h5>`;
							wknight -= 1;
						} else if(bbishop > 0) {
							for(let i=1; i<botLvl; i++) {
								guy.push(where);
							}
							document.querySelectorAll('.white, .black, .removed')[where].innerHTML = `<img class="char bot" src="bB.png"/><img class="class" id="${where}"/><img class="class2" id="${where}"/><h5 class="h5bot" id="i${where}"></h5>`;
							bbishop -= 1;
						} else if(wbishop > 0) {
							for(let i=1; i<botLvl; i++) {
								guy.push(where);
							}
							document.querySelectorAll('.white, .black, .removed')[where].innerHTML = `<img class="char bot" src="wB.png"/><img class="class" id="${where}"/><img class="class2" id="${where}"/><h5 class="h5bot" id="i${where}"></h5>`;
							wbishop -= 1;
						} else if(brook > 0) {
							for(let i=1; i<botLvl; i++) {
								guy.push(where);
							}
							document.querySelectorAll('.white, .black, .removed')[where].innerHTML = `<img class="char bot" src="bR.png"/><img class="class" id="${where}"/><img class="class2" id="${where}"/><h5 class="h5bot" id="i${where}"></h5>`;
							brook -= 1;
						} else if(wrook > 0) {
							for(let i=1; i<botLvl; i++) {
								guy.push(where);
							}
							document.querySelectorAll('.white, .black, .removed')[where].innerHTML = `<img class="char bot" src="wR.png"/><img class="class" id="${where}"/><img class="class2" id="${where}"/><h5 class="h5bot" id="i${where}"></h5>`;
							wrook -= 1;
						} else if(bqueen > 0) {
							for(let i=1; i<botLvl; i++) {
								guy.push(where);
							}
							document.querySelectorAll('.white, .black, .removed')[where].innerHTML = `<img class="char bot" src="bQ.png"/><img class="class" id="${where}"/><img class="class2" id="${where}"/><h5 class="h5bot" id="i${where}"></h5>`;
							bqueen -= 1;
						} else if(wqueen > 0) {
							for(let i=1; i<botLvl; i++) {
								guy.push(where);
							}
							document.querySelectorAll('.white, .black, .removed')[where].innerHTML = `<img class="char bot" src="wQ.png"/><img class="class" id="${where}"/><img class="class2" id="${where}"/><h5 class="h5bot" id="i${where}"></h5>`;
							wqueen -= 1;
						} else if(bking > 0) {
							for(let i=1; i<botLvl; i++) {
								guy.push(where);
							}
							document.querySelectorAll('.white, .black, .removed')[where].innerHTML = `<img class="char bot" src="bK.png"/><img class="class" id="${where}"/><img class="class2" id="${where}"/><h5 class="h5bot" id="i${where}"></h5>`;
							bking -= 1;
						} else if(wking > 0) {
							for(let i=1; i<botLvl; i++) {
								guy.push(where);
							}
							document.querySelectorAll('.white, .black, .removed')[where].innerHTML = `<img class="char bot" src="wK.png"/><img class="class" id="${where}"/><img class="class2" id="${where}"/><h5 class="h5bot" id="i${where}"></h5>`;
							wking -= 1;
						}
						changeColor(where, where);
			} else {
					where=Math.round(Math.random()*(totalSquare-1));
					condition1 = document.querySelectorAll('.white, .black, .removed')[where].getElementsByTagName('img').length == 0;
					condition2 = !(Array.from(document.querySelectorAll('.white, .black, .removed')[where].classList).includes('removed'));
					//alert(condition1);
					//alert(condition2);
					if(i >= realFollowers && wpawn+bpawn != 0) {
						condition2 = condition2 && where <= (totalSquare-1)-square && where >= square
					}
					putPiece(where, i, condition1, condition2)
			}
		}
		randomPlaces();
		function findx(pos) {
			return ((pos+column)%column+1);
		}
		function findy(pos) {
			return (Math.ceil((pos+0.1)/column));
		}
		function findpos(x, y) {
			return (x-1) + (y-1)*column;
		}
		var nextGuy = 0;
		function randomGuy() {
			let random = randomTurn ? Math.floor(Math.random() * guy.length) : nextGuy;
			
			
			let x = guy[random];
			move(x, x, random);
		}
		function changePiece(z, piece) {
						for(let k=1; k<3; k++) {
							if(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[k].src.includes(piece)) {
								document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[k].style.height = '75%';
								document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[k].style.zIndex = '1';
								document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[k].style.width = '75%';
							} else {
								document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[k].style.height = '25%';
								document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[k].style.width = '25%';
								document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[k].style.zIndex = '2';
							}
						}
		}
		function move(pos, z, random) {
			let x = findx(pos);
			let y = findy(pos);
			let choice = Math.round(1+Math.random()*7);
			let piece;
			if( !Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes('bot')) {
				
					
					
				
				if(Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes("N") && Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes("B") ) {	
					if(Math.random() > 0.5) {
						piece="wN.png";
						if(choice==1) {
							x-=2;
							y-=1;
						} else if(choice==2) {
							x-=2;
							y+=1;
						} else if(choice==3) {
							x+=2;
							y+=1
						} else if(choice==4) {
							x+=2;
							y-=1;
						} else if(choice==5) {
							x+=1;
							y+=2;
						} else if(choice==6) {
							x+=1;
							y-=2;
						} else if(choice==7) {
							x-=1;
							y+=2;
						} else if(choice==8) {
							x-=1;
							y-=2;
						}
					} else {
						piece="wB.png";
						let quadrant = Math.round(1+Math.random()*3);
						let distance = Math.random()>0.5?2:1;
						if(quadrant==1) {
							x-=distance;
							y-=distance;
						} else if(quadrant==2) {
							x+=distance;
							y+=distance;
						} else if(quadrant==3) {
							x+=distance;
							y-=distance;
						} else if(quadrant==4) {
							x-=distance;
							y+=distance;
						} 
					}
				} else if(Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes("R") && Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes("B") ) {
					if(Math.random() > 0.5) {
						piece="wR.png";
						let quadrant = Math.round(1+Math.random()*3);
						let distance = Math.random()>0.5?2:1;
						if(quadrant==1) {
							x-=distance;
						} else if(quadrant==2) {
							x+=distance;
						} else if(quadrant==3) {
							y-=distance;
						} else if(quadrant==4) {
							y+=distance;
						} 
					} else {
						piece="wB.png";
						let quadrant = Math.round(1+Math.random()*3);
						let distance = Math.random()>0.5?2:1;
						if(quadrant==1) {
							x-=distance;
							y-=distance;
						} else if(quadrant==2) {
							x+=distance;
							y+=distance;
						} else if(quadrant==3) {
							x+=distance;
							y-=distance;
						} else if(quadrant==4) {
							x-=distance;
							y+=distance;
						} 
					}
				} else if(Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes("K") && Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes("B") ) {
					if(Math.random() > 0.5) {
						piece="wK.png";
						if(choice==1) {
							x-=1;
							y+=1;
						} else if(choice==2) {
							y+=1;
						} else if(choice==3) {
							x+=1;
							y+=1
						} else if(choice==4) {
							x-=1;
						} else if(choice==5) {
							x+=1;
						} else if(choice==6) {
							x-=1;
							y-=1;
						} else if(choice==7) {
							y-=1;
						} else if(choice==8) {
							x+=1;
							y-=1;
						}
					} else {
						piece="wB.png";
						let quadrant = Math.round(1+Math.random()*3);
						let distance = Math.random()>0.5?2:1;
						if(quadrant==1) {
							x-=distance;
							y-=distance;
						} else if(quadrant==2) {
							x+=distance;
							y+=distance;
						} else if(quadrant==3) {
							x+=distance;
							y-=distance;
						} else if(quadrant==4) {
							x-=distance;
							y+=distance;
						} 
					}
				} else if(Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes("R") && Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes("N") ) {
					if(Math.random() > 0.5) {
						piece="wR.png";
						let quadrant = Math.round(1+Math.random()*3);
						let distance = Math.random()>0.5?2:1;
						if(quadrant==1) {
							x-=distance;
						} else if(quadrant==2) {
							x+=distance;
						} else if(quadrant==3) {
							y-=distance;
						} else if(quadrant==4) {
							y+=distance;
						} 
					} else {
						piece="wN.png";
						if(choice==1) {
							x-=2;
							y-=1;
						} else if(choice==2) {
							x-=2;
							y+=1;
						} else if(choice==3) {
							x+=2;
							y+=1
						} else if(choice==4) {
							x+=2;
							y-=1;
						} else if(choice==5) {
							x+=1;
							y+=2;
						} else if(choice==6) {
							x+=1;
							y-=2;
						} else if(choice==7) {
							x-=1;
							y+=2;
						} else if(choice==8) {
							x-=1;
							y-=2;
						}
					}
				} else if(Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes("K") && Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes("N") ) {
					if(Math.random() > 0.5) {
						piece="wK.png";
						if(choice==1) {
							x-=1;
							y+=1;
						} else if(choice==2) {
							y+=1;
						} else if(choice==3) {
							x+=1;
							y+=1
						} else if(choice==4) {
							x-=1;
						} else if(choice==5) {
							x+=1;
						} else if(choice==6) {
							x-=1;
							y-=1;
						} else if(choice==7) {
							y-=1;
						} else if(choice==8) {
							x+=1;
							y-=1;
						}
					} else {
						piece="wN.png";
						if(choice==1) {
							x-=2;
							y-=1;
						} else if(choice==2) {
							x-=2;
							y+=1;
						} else if(choice==3) {
							x+=2;
							y+=1
						} else if(choice==4) {
							x+=2;
							y-=1;
						} else if(choice==5) {
							x+=1;
							y+=2;
						} else if(choice==6) {
							x+=1;
							y-=2;
						} else if(choice==7) {
							x-=1;
							y+=2;
						} else if(choice==8) {
							x-=1;
							y-=2;
						}
					}
				} else if(Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes("K") && Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes("R") ) {
					if(Math.random() > 0.5) {
						piece="wK.png";
						if(choice==1) {
							x-=1;
							y+=1;
						} else if(choice==2) {
							y+=1;
						} else if(choice==3) {
							x+=1;
							y+=1
						} else if(choice==4) {
							x-=1;
						} else if(choice==5) {
							x+=1;
						} else if(choice==6) {
							x-=1;
							y-=1;
						} else if(choice==7) {
							y-=1;
						} else if(choice==8) {
							x+=1;
							y-=1;
						}
					} else {
						piece="wR.png";
						let quadrant = Math.round(1+Math.random()*3);
						let distance = Math.random()>0.5?2:1;
						if(quadrant==1) {
							x-=distance;
						} else if(quadrant==2) {
							x+=distance;
						} else if(quadrant==3) {
							y-=distance;
						} else if(quadrant==4) {
							y+=distance;
						} 
					}
				} else {
					if(Math.random() > 0.5) {
						piece="wK.png";
						if(choice==1) {
							x-=1;
							y+=1;
						} else if(choice==2) {
							y+=1;
						} else if(choice==3) {
							x+=1;
							y+=1
						} else if(choice==4) {
							x-=1;
						} else if(choice==5) {
							x+=1;
						} else if(choice==6) {
							x-=1;
							y-=1;
						} else if(choice==7) {
							y-=1;
						} else if(choice==8) {
							x+=1;
							y-=1;
						}
					} else {
						changePiece(z, "wKK.png");
						if(choice==1) {
							x-=1;
							y+=1;
						} else if(choice==2) {
							y+=1;
						} else if(choice==3) {
							x+=1;
							y+=1
						} else if(choice==4) {
							x-=1;
						} else if(choice==5) {
							x+=1;
						} else if(choice==6) {
							x-=1;
							y-=1;
						} else if(choice==7) {
							y-=1;
						} else if(choice==8) {
							x+=1;
							y-=1;
						}
					}
				}
			} else {
				//Bot
				let botpiece = document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0];
				if(botpiece.src.includes("wN.png") || botpiece.src.includes("bN.png")) {
					if(choice==1) {
						x-=2;
						y-=1;
					} else if(choice==2) {
						x-=2;
						y+=1;
					} else if(choice==3) {
						x+=2;
						y+=1
					} else if(choice==4) {
						x+=2;
						y-=1;
					} else if(choice==5) {
						x+=1;
						y+=2;
					} else if(choice==6) {
						x+=1;
						y-=2;
					} else if(choice==7) {
						x-=1;
						y+=2;
					} else if(choice==8) {
						x-=1;
						y-=2;
					}
				} else if(botpiece.src.includes("bB.png") || botpiece.src.includes("wB.png") ) {
					let quadrant = Math.round(1+Math.random()*3);
					let distance = Math.random()>0.5?2:1;
					if(quadrant==1) {
						x-=distance;
						y-=distance;
					} else if(quadrant==2) {
						x+=distance;
						y+=distance;
					} else if(quadrant==3) {
						x+=distance;
						y-=distance;
					} else if(quadrant==4) {
						x-=distance;
						y+=distance;
					} 
				} else if(botpiece.src.includes("wK.png") || botpiece.src.includes("bK.png")) {
					if(choice==1) {
						x-=1;
						y-=1;
					} else if(choice==2) {
						y-=1;
					} else if(choice==3) {
						x+=1;
						y-=1
					} else if(choice==4) {
						x+=1;
					} else if(choice==5) {
						x-=1;
					} else if(choice==6) {
						x-=1;
						y+=1;
					} else if(choice==7) {
						y+=1;
					} else if(choice==8) {
						x+=1;
						y+=1;
					}
				} else if(botpiece.src.includes("wR.png") || botpiece.src.includes("bR.png")) {
					let quadrant = Math.round(1+Math.random()*3);
					let distance = Math.random()>0.5?2:1;
					if(quadrant==1) {
						x-=distance;
					} else if(quadrant==2) {
						x+=distance;
					} else if(quadrant==3) {
						y-=distance;
					} else if(quadrant==4) {
						y+=distance;
					} 
				} else if(botpiece.src.includes("wQ.png") || botpiece.src.includes("bQ.png")) {
					if(Math.random() > 0.5) {
					let quadrant = Math.round(1+Math.random()*3);
					let distance = Math.random()>0.5?2:1;
					if(quadrant==1) {
						x-=distance;
					} else if(quadrant==2) {
						x+=distance;
					} else if(quadrant==3) {
						y-=distance;
					} else if(quadrant==4) {
						y+=distance;
					} 
					} else {
					let quadrant = Math.round(1+Math.random()*3);
					let distance = Math.random()>0.5?2:1;
					if(quadrant==1) {
						x-=distance;
						y-=distance;
					} else if(quadrant==2) {
						x+=distance;
						y+=distance;
					} else if(quadrant==3) {
						x+=distance;
						y-=distance;
					} else if(quadrant==4) {
						x-=distance;
						y+=distance;
					} 
					}
				} 
			}
			
			let newpos = findpos(x, y);
			if(removed.includes(x+' '+y)) {
				randomGuy(); 
			} else if(document.querySelectorAll('.white, .black, .removed')[newpos].getElementsByTagName('img').length != 0) {
				randomGuy(); 
			} else if(x < 1 || x > column || y < 1 || y > row ) {
				randomGuy(); 
			} else if(!Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes('bot') && (document.querySelectorAll('.white, .black, .removed')[newpos].getElementsByTagName('img').length == 1 && (Array.from(document.querySelectorAll('.white, .black, .removed')[newpos].getElementsByTagName('img')[0].classList).includes('followers') || Array.from(document.querySelectorAll('.white, .black, .removed')[newpos].getElementsByTagName('img')[0].classList).includes('bot')) && followersTeam)) {	
				randomGuy(); 
			} else if(Array.from(document.querySelectorAll('.white, .black, .removed')[z].getElementsByTagName('img')[0].classList).includes('bot') && (document.querySelectorAll('.white, .black, .removed')[newpos].getElementsByTagName('img').length == 1 && Array.from(document.querySelectorAll('.white, .black, .removed')[newpos].getElementsByTagName('img')[0].classList).includes('bot') && followersTeam)) {	
				randomGuy();
			} else if(document.querySelectorAll('.white, .black, .removed')[newpos].getElementsByTagName('img').length == 0 && Math.random() > 1/IQball) {
				randomGuy();
				
			} else {
				if(maxMove == countMove) {
					
				} else {
				
				
				countMove++;
				changePiece(z, piece);
				if(guy.includes(newpos)) {		
					guy.push(newpos);
					guy[guy.indexOf(newpos)]="dead";
					alive-=1;
					//alert(alive);
					
				}
				let check = guy[random];
				while (guy.includes(check)) {
					guy[guy.indexOf(check)] = newpos;
					
				}
				
				removed.push(findx(pos)+' '+findy(pos));
				document.querySelectorAll('.white, .black, .removed')[pos].classList.add('removed');
				
				removed.push(x+' '+y);
				document.querySelectorAll('.white, .black, .removed')[newpos].classList.add('removed');
				
				//document.querySelectorAll('.white, .black, .removed')[pos].innerHTML = `<img src="dont.png" />`;
				
				animation = true;
				document.querySelectorAll('.white, .black, .removed')[newpos].style.background = 'red';
				document.querySelectorAll('.white, .black, .removed')[z].style.background = 'blue';
				let id = myFunction();
				change(z, newpos, id, time);
				
				}
			}
		}
		function myFunction(z, newpos) {
			return setTimeout(()=>{
					animation = false;
					document.querySelectorAll('.white, .black, .removed')[newpos].style.background = '';
					document.querySelectorAll('.white, .black, .removed')[z].style.background = '';
					document.querySelectorAll('.white, .black, .removed')[newpos].innerHTML = document.querySelectorAll('.white, .black, .removed')[z].innerHTML;
					document.querySelectorAll('.white, .black, .removed')[z].innerHTML = "";
					if(guy.includes("dead")) {			
						guy.splice(guy.indexOf("dead"), 1);
					}
					changeColor(z, newpos);
					
					
			}, time); 
		}
		function change(z, newpos, id, newVal){
			clearTimeout(id); //clearing the previous timer using the id
			setTimeout(()=>{
					animation = false;
					document.querySelectorAll('.white, .black, .removed')[newpos].style.background = '';
					document.querySelectorAll('.white, .black, .removed')[z].style.background = '';
					document.querySelectorAll('.white, .black, .removed')[newpos].innerHTML = document.querySelectorAll('.white, .black, .removed')[z].innerHTML;
					document.querySelectorAll('.white, .black, .removed')[z].innerHTML = "";
					if(guy.includes("dead")) {			
						guy.splice(guy.indexOf("dead"), 1);
					}
					
					changeColor(z, newpos);
			}, time); 
		}
		function randomRemoveSquare() {
			//code if few people left
					let x = Math.round(1+Math.random()*(column-1));
					let y = Math.round(1+Math.random()*(row-1));
					let remove = findpos(x, y);
					if(document.querySelectorAll('.white, .black, .removed')[remove].getElementsByTagName('img').length == 0 && !removed.includes(x+' '+y)) {
						removed.push(x+' '+y);
						document.querySelectorAll('.white, .black, .removed')[remove].classList.add('removed');
						document.querySelectorAll('.white, .black, .removed')[remove].innerHTML = `<img src="dont.png" />`;
					} else {
						randomRemoveSquare();
					}
		}
		function removeSquare(x, y) {
			
					let remove = findpos(x, y);
					
						removed.push(x+' '+y);
						document.querySelectorAll('.white, .black, .removed')[remove].classList.add('removed');
						document.querySelectorAll('.white, .black, .removed')[remove].innerHTML = `<img src="dont.png" />`;
					
		}
		var realHeight = 100/column;
		function changeColor(z, newpos) {
					
				let level = (guy.filter((val) => val === newpos ).length);
				document.getElementById(z).id = newpos;
				document.getElementById(newpos).innerHTML = level;
				
				
				
				
				document.getElementById('i'+z).id = 'i'+newpos;
				document.getElementById('i'+newpos).innerHTML = level;
				let color = level * 255/(followers - 6*followers/7);
				if(level <= followers - 6*followers/7) {
					document.getElementById('i'+newpos).style.background = `rgb(${color/3}, ${color/3}, ${color/3})`;
				} else if(level <= followers - 5*followers/7) {
					document.getElementById('i'+newpos).style.background = `rgb(${color}, 0, 0)`;
				} else if(level <= followers - 4*followers/7) {
					document.getElementById('i'+newpos).style.background = `rgb(0, ${color}, 0)`;
				} else if(level <= followers - 3*followers/7) {
					document.getElementById('i'+newpos).style.background = `rgb(0, 0, ${color})`;
				} else if(level <= followers - 2*followers/7) {
					document.getElementById('i'+newpos).style.background = `rgb(${color}, ${color}, 0)`;
					document.getElementById('i'+newpos).style.color = `black`;
				} else if(level <= followers - 1*followers/7) {
					document.getElementById('i'+newpos).style.background = `rgb(0, ${color}, ${color})`;
					document.getElementById('i'+newpos).style.color = `black`;
				} else if(level <= followers) {
					document.getElementById('i'+newpos).style.background = `rgb(${color}, 0, ${color})`;
					document.getElementById('i'+newpos).style.color = `black`;
				} else {
					document.getElementById('i'+newpos).style.background = `rgb(255, 255, 255)`;
					document.getElementById('i'+newpos).style.color = `black`;
				}
		}
		let i = 1;
		let j = 1;
		let onetime = true;
		function start() {		
			let refreshIntervalId = setInterval(function() {
					setTimeout(()=>{
					for(let i=0; i < document.querySelectorAll('.removed').length; i++) {
						if(document.querySelectorAll('.removed')[i].innerHTML == "") {
						document.querySelectorAll('.removed')[i].innerHTML = countSquare;
						countSquare++;
						}
						//alert(countSquare);
					}
					}, 2000);
				if(!animation) {
				
				if (alive <= peopleToShotBoard && alive!=1) {
					for(let i=0; i < movePerUnit; i++){ 
						randomGuy();
					}
					randomRemoveSquare();
				} else if(alive <= peopleToCollapseBoard && alive!=1) {
					for(let i=0; i < movePerUnit; i++){ 
						randomGuy();
					}
					//code if few people left
					let a = Math.random() > 0.5;
					let x;
					let y;
					let remove;
					if(a) {
						x = 1 + Math.round(Math.random() * column);
						y = Math.random() > 0.5 ? 1 : row;
						remove = findpos(x, y);
					} else {
						x = 1 + Math.round(Math.random() * row);
						y = Math.random() > 0.5 ? 1 : column;
						remove = findpos(y, x);
					}
					
					if(document.querySelectorAll('.white, .black, .removed')[remove].getElementsByTagName('img').length == 0 && !removed.includes(x+' '+y)) {
						removed.push(findx(remove)+' '+findy(remove));
						document.querySelectorAll('.white, .black, .removed')[remove].classList.add("removed");
					} else if (!removed.includes(findx(remove)+' '+findy(remove)) && onetime) {
						removed.splice(removed.indexOf(x+' '+y), 1);
						document.querySelectorAll('.white, .black, .removed')[remove].classList.remove("removed");
						setTimeout(()=>{
							write("Survival Mode", 0);
						}, 0);
						onetime = false;
					}
				}
				if(guy.filter((val) => val === guy[0]).length != guy.length && alive > 1) {
					for(let i=0; i < movePerUnit; i++){ 
						randomGuy();
					}
				} else {
					
					for(let i=0; i < movePerUnit; i++){ 
						randomGuy();
					}
				}
				}
			}, time);
		}
		
		
		function write(content, i) {
			setTimeout(function() {
				if(i < content.length) {
					document.getElementById("winText").innerHTML += content[i];
					write(content, i+1);
				} else {
					setTimeout(()=>{
						document.getElementById("winText").innerHTML = "";
					}, 1000);
					
				}
			}, 111);
		}
