var dataSelector = document.getElementsByClassName('data');
var nonceSelector = document.getElementsByClassName('nonce');
var prevSelector = document.getElementsByClassName('prev');
var hashSelector = document.getElementsByClassName('hash');
var blockSelector = document.getElementsByClassName('block');
var buttonSelector = document.getElementsByClassName('button');
var nodeNumber = 12;

//sets number of nodes based on nodeNumber
function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}

multiplyNode(document.querySelector('.block'), nodeNumber, true);

//populates blocks with data
for (var count1=0; count1 < nodeNumber; count1++) {
	$(nonceSelector[count1]).attr('onkeyup', "bc(" + count1 + ")");
	$(dataSelector[count1]).attr('onkeyup', "bc(" + count1 + ")");
	$(buttonSelector[count1]).attr('onclick', "mine(" + count1 + ")");
	hashSelector[count1].innerHTML = CryptoJS.SHA256(dataSelector[count1].value);
	count1 > 0 ? prevSelector[count1].innerHTML = hashSelector[count1 - 1].innerHTML : 0;
}

//creates hash and determines color of block based on signiture
function bc(blockNumber) {
	for (var count2=blockNumber; count2 < nodeNumber; count2++) {
		if (count2 >= 1) {
			prevSelector[count2].innerHTML = hashSelector[count2 - 1].innerHTML
		}
			hashSelector[count2].innerHTML = "";
			hashSelector[count2].innerHTML +=
				CryptoJS.SHA256(dataSelector[count2].value +
					nonceSelector[count2].value +
					prevSelector[count2].innerHTML
				);
		if (hashSelector[count2].innerHTML.substr(0,2) == "00") {
			blockSelector[count2].style.background = 'lightgreen';
		} else {
			blockSelector[count2].style.background = 'pink';
		}
	}
}

//finds a signature
function mine(blockNumber){
	while (hashSelector[blockNumber].innerHTML.substr(0,2) != "00") {
		bc(blockNumber);
		var ni3 = parseInt(nonceSelector[blockNumber].value)
		ni3 += 1;
		nonceSelector[blockNumber].value = ni3;
	}
}

//initialize
for (var count3=0; count3 < nodeNumber; count3++) {
	mine(count3);
}
