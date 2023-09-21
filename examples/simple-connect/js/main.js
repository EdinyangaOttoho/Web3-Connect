var connected = false;

const formatWallet = (address) => {
    if (address.length >= 12) {
        const prefix = address.substring(0, 5);
        const suffix = address.substring(address.length - 5);
        return `${prefix}...${suffix}`;
    }
    return address;
}

if (web3Account.isConnected == true) {
    connected = true;
    document.getElementById("connect-pane").style.display = "inline-block";
    document.getElementById("disconnect").onclick = ()=> {
        web3modal.openModal();
    };
}
else {
    connected = false;
    document.getElementById("connect-pane").style.display = "inline-block";
    document.getElementById("connect").onclick = ()=> {
        web3modal.openModal();
    };
}

const listen = ()=> {
    web3Account = getAccount();
    if (web3Account.isConnected) {
        document.getElementById("connect-pane").style.display = "none";
        document.getElementById("disconnect-pane").style.display = "inline-block";
        document.getElementById("disconnect").innerHTML = formatWallet(web3Account.address);
        document.getElementById("connect").onclick = ()=> {
            web3modal.openModal();
        };
        document.getElementById("content").innerHTML = `Connected To: ${web3Account.address}`;
        connected = true;
    }
    else {
        document.getElementById("connect-pane").style.display = "inline-block";
        document.getElementById("disconnect-pane").style.display = "none";
        document.getElementById("disconnect").onclick = ()=> {
            web3modal.openModal();
        };
        connected = false;
        document.getElementById("content").innerHTML = ``;
    }
}

setInterval(listen, 200);