const _ = (elem)=> {
    return document.getElementById(elem);
}

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
    _("connect-pane").style.display = "inline-block";
    _("disconnect").onclick = ()=> {
        web3modal.openModal();
    };
}
else {
    connected = false;
    _("connect-pane").style.display = "inline-block";
    _("connect").onclick = ()=> {
        web3modal.openModal();
    };
}

const listen = ()=> {
    web3Account = getAccount();
    if (web3Account.isConnected) {
        _("connect-pane").style.display = "none";
        _("disconnect-pane").style.display = "inline-block";
        _("disconnect").innerHTML = formatWallet(web3Account.address);
        _("connect").onclick = ()=> {
            web3modal.openModal();
        };
        _("content").innerHTML = `Connected To: ${web3Account.address}`;
        connected = true;
    }
    else {
        _("connect-pane").style.display = "inline-block";
        _("disconnect-pane").style.display = "none";
        _("disconnect").onclick = ()=> {
            web3modal.openModal();
        };
        connected = false;
        _("content").innerHTML = ``;
    }
}

setInterval(listen, 200);