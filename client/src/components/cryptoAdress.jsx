import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Alchemy, Network, Utils } from "alchemy-sdk";
import { useState } from "react";
import { ethers } from "ethers";
import Button from "react-bootstrap/Button";

function cryptoAdress() {
  const [userAddress, setUserAddress] = useState("");
  const [results, setResults] = useState([]);
  const [hasQueried, setHasQueried] = useState(false);
  const [tokenDataObjects, setTokenDataObjects] = useState([]);
  const [account, setAccount] = useState("None");
  async function getTokenBalance() {
    const config = {
      apiKey: "Otl7v1BE82wtc4U_Sgc-VQNYGNuT4nw5",
      network: Network.ETH_MAINNET,
    };

    const alchemy = new Alchemy(config);
    const data = await alchemy.core.getTokenBalances(userAddress);

    setResults(data);

    const tokenDataPromises = [];

    for (let i = 0; i < data.tokenBalances.length; i++) {
      const tokenData =
        alchemy.core.getTokenMetadata(data.tokenBalances[i].contractAddress) ||
        {};
      await tokenDataPromises.push(tokenData);
    }

    setTokenDataObjects(await Promise.all(tokenDataPromises));
    setHasQueried(true);
    console.log(data);
    console.log(Promise.all(tokenDataPromises));
    console.log(tokenDataObjects);
  }

  async function getWalletAddress() {
    const { ethereum } = window;
    if (ethereum) {
      const account = await ethereum.request({ method: "eth_requestAccounts" });
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      setAccount(account);
      console.log(account);
      setUserAddress(account[0]);
      const entrytab = document.querySelector(".entrytab");
      if (entrytab) {
        entrytab.value = account[0];
      }

      // ...
    } else {
      alert("Please install a compatible Ethereum wallet extension.");
    }
  }
  return (
    <>
   
   <div className="container mx-auto my-20">
      <div className="mt-20 pt-5 pb-2 px-5 text-3xl font-semibold text-left text-gray-900">
        <h2>Address </h2>
        
      </div>
      <div className="flex flex-col md:flex-row gap-12 items-center md:justify-evenly mx-auto overflow-x-auto relative">
      
         
                <Box w="100vw">
                  <Center>
                    <Flex
                      alignItems={"center"}
                      justifyContent="center"
                      flexDirection={"column"}
                    >
                      <Text style={{ color: "blue" }}>
                        <b>Enter</b> an address, and this website will provide
                        the <b>ERC-20</b> token balances associated with it.
                      </Text>
                    </Flex>
                  </Center>
                  <Flex
                    w="100%"
                    flexDirection="column"
                    alignItems="lefft"
                    justifyContent={"lefft"}
                  >
                    <br />
                    <div className="mb-4" role="none">
                      <div className="relative flex flex-col justify-center rounded border border-gray-400 bg-white transition duration-150 ease-in-out focus-within:border-primary">
                        <label
                          htmlFor="Address"
                          className="select-none self-start px-2 pt-1 text-xs text-gray-600 placeholder-gray-400 "
                        >
                          Get all the ERC-20 token balances of this address:
                        </label>
                        <input
  type="text"
  className="text-xxs w-1/2 rounded-md bg-white px-0.2 pb-0.5 text-primary outline-none"
  id="entrytab"
  placeholder="Enter address"
  value={userAddress}
  onChange={(e) => setUserAddress(e.target.value)}
/>


                      </div>
                    </div>

                    <Flex mt={36} justifyContent="center" alignItems="center">
                      <Button
                        onClick={getTokenBalance}
                        variant="outline-primary"
                      >
                        Check ERC-20 Token Balances
                      </Button>{" "}
                      <div style={{ width: "16px" }}></div> {/* Espacement */}
                      <Button
                        onClick={getWalletAddress}
                        variant="outline-primary"
                      >
                        Connect Wallet
                      </Button>{" "}
                    </Flex>

                    {hasQueried ? (
                      <SimpleGrid w={"20vw"} columns={6} spacing={200}>
                        {results.tokenBalances.map((e, i) => {
                          return (
                            <Flex
                              flexDir={"column"}
                              color="white"
                              bg="blue"
                              w={"10vw"}
                              key={e.id}
                              alignItems="center"
                              justifyContent="center"
                              p={7}
                            >
                              <Box textAlign="center">
                                {" "}
                                {/* Centrer le contenu horizontalement */}
                                <b>Symbol:</b> $
                                {tokenDataObjects[i].symbol || "N/A"}&nbsp;
                              </Box>

                              <Box textAlign="center">
                                {" "}
                                {/* Centrer le contenu horizontalement */}
                                <b>Balance:</b>&nbsp;
                                {Utils.formatUnits(
                                  e.tokenBalance,
                                  tokenDataObjects[i].decimals || 0
                                )}
                              </Box>
                              <Image src={tokenDataObjects[i].logo} />
                            </Flex>
                          );
                        })}
                      </SimpleGrid>
                    ) : (
                      <></>
                    )}
                  </Flex>
                </Box>
             
        
        <img src="/images/undraw-crypto.svg" className="w-2/3 h-1/2 md:w-1/2" />
      </div>
    </div>
    </>
  );
}

export default cryptoAdress;
