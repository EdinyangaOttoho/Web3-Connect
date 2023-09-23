const writeWeb3Contract = async (address, functionName, abi, args=[], value=null) => {
    const config = await prepareWriteContract({
        address: address,
        abi: abi,
        functionName: functionName,
        args:args
    })

    if (value !== null) {
        config.value = parseEther(value.toString());
    }

    const { hash } = await writeContract(config)
    return hash;
}

const awaitConfirmation = async(hash)=> {
    const data = await waitForTransaction({
        hash: hash
    });
    return data;
}

const sendEthereum = async(to, value)=> {
    const config = await prepareSendTransaction({
        to: to,
        value: parseEther(value.toString())
    })
    const { hash } = await sendTransaction(config)
    return hash;
}

const readWeb3Contract = async (address, functionName, abi, args) => {
    const data = await readContract({
        address: address,
        functionName: functionName,
        abi: abi,
        args: args
    })
    return data;
}

var web3Account = getAccount();