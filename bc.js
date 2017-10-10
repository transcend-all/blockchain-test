var dataInput = document.querySelector('#data');
var nonceInput = document.querySelector('#nonce');
var prevInput = document.querySelector('#prev')

var dataInput2 = parseInt(document.getElementById('data').value);
var nonceInput2 = parseInt(document.getElementById('nonce').value);

var dataInput3 = document.getElementsByClassName('data');
var nonceInput3 = document.getElementsByClassName('nonce');
var prevInput3 = document.getElementsByClassName('prev');
var hashSelector = document.getElementsByClassName('hash');

//document.getElementById('hash').innerHTML = CryptoJS.SHA256(dataInput.value) + "<br>";
for (var count1=0; count1 < 4; count1++) {
	hashSelector[count1].innerHTML = CryptoJS.SHA256(dataInput3[count1].value);
}

for (var count2=1; count2 < 4; count2++) {
	prevInput3[count2].innerHTML = hashSelector[count2 - 1].innerHTML;
}

function datatest(){
	console.log(dataInput3[0].value +
		nonceInput3[0].value +
		prevInput3[0].innerHTML)
}

// function bc(){
// 	document.getElementById('hash').innerHTML = "";
	// document.getElementById('hash').innerHTML +=
	// 	CryptoJS.SHA256(dataInput.value + nonceInput.value)
	// 	;
// }

function bc(blockNumber) {
	// hashSelector[blockNumber].innerHTML = "";
	// hashSelector[blockNumber].innerHTML +=
	// 	CryptoJS.SHA256(dataInput3[blockNumber].value +
	// 		nonceInput3[blockNumber].value +
	// 		prevInput3[blockNumber].innerHTML
	// 	);

for (var count3=blockNumber; count3 < 4; count3++) {
	if (count3 >= 1) {
		prevInput3[count3].innerHTML = hashSelector[count3 - 1].innerHTML
	}
		hashSelector[count3].innerHTML = "";
		hashSelector[count3].innerHTML +=
			CryptoJS.SHA256(dataInput3[count3].value +
				nonceInput3[count3].value +
				prevInput3[count3].innerHTML
			);

	// if (count3 >= 1) {
	// prevInput[count3].innerHTML = hashSelector[count3 - 1].innerHTML
	// hashSelector[count3].innerHTML +=
	// 	CryptoJS.SHA256(dataInput3[count3].value +
	// 		nonceInput3[count3].value +
	// 		prevInput3[count3].innerHTML
	// 	);
	// }
	// console.log(hashSelector[count3 - 1].innerHTML)
}

		// for (var count3=blockNumber; count3 < 4; count3++) {
		// 	prevInput3[count3].innerHTML = hashSelector[count3 - 1].innerHTML;
		// };

	// console.log(prevInput3[blockNumber].innerHTML);
}

function mine(blockNumber){

	while (hashSelector[blockNumber].innerHTML.substr(0,2) != "00") {
		bc(blockNumber);
		nonceInput2 += 1;
		document.getElementsByClassName('nonce')[blockNumber].value = nonceInput2;
		console.log(nonceInput2);
		console.log(document.getElementsByClassName('hash')[blockNumber].innerHTML.substr(0,2));
	}

// console.log(blockNumber);

	// while (document.getElementById('hash').innerHTML.substr(0,2) != "00") {
	// 	bc();
	// 	nonceInput2 += 1;
	// 	document.getElementById('nonce').value = nonceInput2;
	// 	console.log(nonceInput2);
	// 	console.log(document.getElementById('hash').innerHTML.substr(0,2));
	// }

}

// function multiplyNode(node, count, deep) {
//     for (var i = 0, copy; i < count - 1; i++) {
//         copy = node.cloneNode(deep);
//         node.parentNode.insertBefore(copy, node);
// 				document.getElementsByClassName('nonce').value = i;
//     }
// }
//
// multiplyNode(document.querySelector('.block'), 4, true)
