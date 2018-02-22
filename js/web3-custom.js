	var Web3 = require('web3');
    web3 = new Web3();
	var host = "http://127.0.0.1:8545";
    web3.setProvider(new web3.providers.HttpProvider(host));
	firstAccount = web3.eth.accounts[0];
    var from = web3.eth.coinbase;
    web3.eth.defaultAccount = from;
	var CoursetroContract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "ind",
				"type": "uint256"
			}
		],
		"name": "getBankRequests",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "uname",
				"type": "string"
			},
			{
				"name": "eth",
				"type": "address"
			},
			{
				"name": "regNum",
				"type": "string"
			}
		],
		"name": "addBank",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ethAcc",
				"type": "address"
			}
		],
		"name": "getBankReg",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			}
		],
		"name": "viewCustomer",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ethAcc",
				"type": "address"
			}
		],
		"name": "getBankRating",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "bankAddress",
				"type": "address"
			},
			{
				"name": "ifAdded",
				"type": "bool"
			}
		],
		"name": "updateRating",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ethAcc",
				"type": "address"
			}
		],
		"name": "getBankName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			}
		],
		"name": "removeCustomer",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ethAcc",
				"type": "address"
			}
		],
		"name": "getBankKYC",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "DataHash",
				"type": "string"
			}
		],
		"name": "modifyCustomer",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "uname",
				"type": "string"
			}
		],
		"name": "getBankEth",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "bankAddress",
				"type": "address"
			}
		],
		"name": "ifAllowed",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "checkCustomer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			}
		],
		"name": "getCustomerBankRating",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "ifIncrease",
				"type": "bool"
			}
		],
		"name": "updateRatingCustomer",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "DataHash",
				"type": "string"
			}
		],
		"name": "addCustomer",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "bankAddress",
				"type": "address"
			}
		],
		"name": "addRequest",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "bankAddress",
				"type": "address"
			},
			{
				"name": "ifallowed",
				"type": "bool"
			}
		],
		"name": "allowBank",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "password",
				"type": "address"
			}
		],
		"name": "checkBank",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "setPassword",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			}
		],
		"name": "getCustomerBankName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Uname",
				"type": "string"
			}
		],
		"name": "getCustomerRating",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "isPartOfOrg",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "eth",
				"type": "address"
			}
		],
		"name": "removeBank",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	}
]);
var Coursetro = CoursetroContract.at("0x74BFB07C09778BAbeD0521B6AdE81669BDdb0213");
        console.log(Coursetro);
	

    /*window.onload = function () {
        var filter = web3.eth.namereg().Changed();
        filter.watch(function (err, event) {
            // live update all fields
            onAddressKeyUp();
            onNameKeyUp();
            onRegisterOwnerKeyUp();
        });
    };*/

    function registerOwner() {
        var name = document.getElementById('registerOwner').value;
        web3.eth.namereg().reserve(name);
        document.getElementById('nameAvailability').innerText += ' Registering name in progress, please wait...';
    };
    
    function changeAddress() {
        var name = document.getElementById('registerOwner').value;
        var address = document.getElementById('newAddress').value;
        web3.eth.namereg().setAddress(name, address, true);
        document.getElementById('currentAddress').innerText += ' Changing address in progress. Please wait.';
    };

    function onRegisterOwnerKeyUp() {
        var name = document.getElementById('userName').value;
        var data = {};
		//var acct = web3.eth.accounts; 
		//console.log(web3.eth.namereg().reserve(name)); 
		//var owner = web3.eth.namereg().owner(name)
		//web3.eth.accounts.create();  
		var ethAddress=web3.personal.newAccount(name);
		console.log(web3.eth.accounts[0]) 
		web3.personal.unlockAccount(ethAddress, name);
		web3.personal.unlockAccount("0x31cdfc58bb551218261fe505c219e00d83474d61", "kiran");
		var reg="100";
		Coursetro.addBank.sendTransaction(name, ethAddress, reg, { 
        //from: web3.eth.accounts[0],  
        from: "0x31cdfc58bb551218261fe505c219e00d83474d61",
		gas: 4500000
    });  
     
		
    };
	
	
 
    function onAddressKeyUp() {
        var address = document.getElementById('address').value;
        document.getElementById('nameOf').innerText = web3.eth.namereg().name(address);
    };
    
    function onNameKeyUp() {
        var name = document.getElementById('name').value;
        document.getElementById('addressOf').innerText = web3.eth.namereg().addr(name);
    };
	
	function validateForm() {
    	onRegisterOwnerKeyUp();
		return false;
	}

	
	function validateLogin() {
    	//onRegisterOwnerKeyUp();
		
		 var bank_name_l = document.getElementById("loginUserName").value;
    var pass_l = document.getElementById("loginPassword").value;

    //  validate input

    if (bank_name_l == "") {
        alert("Enter a valid bank name!");
        return;
    }
    if (pass_l == "") {
        alert("Enter a valid password!");
        return;
    }
	
	//localStorage.setItem("currentUserName", "Smith");
	
    if (Coursetro.checkBank.call(bank_name_l, pass_l, {
            from: pass_l,
            gas: 4700000
        }) == "null") {
        alert("Bank not in network. Sign up before proceeding further. Thank You!");
        return;
    }

    //  open bank page if login successful

    alert("Welcome " + bank_name_l + " !");
    localStorage.bank_eth_account = pass_l;
    window.location = './html/home.html';
		
		
		return false;
	}
