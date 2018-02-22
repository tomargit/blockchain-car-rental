	var Web3 = require('web3');
    web3 = new Web3();
	var host = "http://127.0.0.1:8545";
    web3.setProvider(new web3.providers.HttpProvider(host));
	
    var from = web3.eth.coinbase;
    web3.eth.defaultAccount = from;
	

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
		web3.personal.newAccount(name);
		
		//return owner;
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
