var dataInput = document.getElementsByClassName('data');
var nonceInput = document.getElementsByClassName('nonce');
var prevInput = document.getElementsByClassName('prev');
var hashSelector = document.getElementsByClassName('hash');
var blockSelector = document.getElementsByClassName('block');

for (var count1=0; count1 < 4; count1++) {
	hashSelector[count1].innerHTML = CryptoJS.SHA256(dataInput[count1].value);
}

for (var count2=1; count2 < 4; count2++) {
	prevInput[count2].innerHTML = hashSelector[count2 - 1].innerHTML;
}

function datatest(){
	console.log(dataInput[0].value +
		nonceInput[0].value +
		prevInput[0].innerHTML)
}

function bc(blockNumber) {
	for (var count3=blockNumber; count3 < 4; count3++) {
		if (count3 >= 1) {
			prevInput[count3].innerHTML = hashSelector[count3 - 1].innerHTML
		}
			hashSelector[count3].innerHTML = "";
			hashSelector[count3].innerHTML +=
				CryptoJS.SHA256(dataInput[count3].value +
					nonceInput[count3].value +
					prevInput[count3].innerHTML
				);
			}
		if (hashSelector[blockNumber].innerHTML.substr(0,2) == "00") {
			blockSelector[blockNumber].style.background = 'lightgreen';
		} else {
			blockSelector[blockNumber].style.background = 'pink';
		}
}

function mine(blockNumber){

	while (hashSelector[blockNumber].innerHTML.substr(0,2) != "00") {
		bc(blockNumber);
		var ni3 = parseInt(nonceInput[blockNumber].value)
		ni3 += 1;
		nonceInput[blockNumber].value = ni3;
		console.log(nonceInput[blockNumber]);
		console.log(hashSelector[blockNumber].innerHTML.substr(0,2));
	}
}
