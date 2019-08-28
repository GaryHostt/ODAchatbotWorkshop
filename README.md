# DigitalAssistantChatbot_Workshop

[Follow the steps on this link to get started with this workshop on creating a custom skill](
https://docs.oracle.com/en/cloud/paas/digital-assistant/tutorial-cc-dev/index.html)

[Further information on developing custom skills with node](https://docs.oracle.com/en/cloud/paas/digital-assistant/tutorial-cc-dev/index.html)

[Click here for other chatbot workshops](https://fnimphiu.github.io/OracleTechExchange/)


The most important CLI commands to rememeber:

- Be in your home directory, the below command creates a folder and the component.
- The component in this case is CurrencyConverter, the parent-parent directory is converterccs
```
bots-node-sdk init converterccs --component-name CurrencyConverter
cd converterccs
Npm install request
Open . 
```
- in the components folder, place your node.js code to replace what was there CurrencyConverter in this case

```
Npm pack 
```

Now take the tar file and upload it as a skill to the chatbot.

The ComponentCode folder contains code that writes inputs to a blockchain, gets a top news headline about vaccines, and the default - helloworld skill. 

Line 31, 
```
"args":  ["marblename","red", 123456,"size"]
```

needs replaced to take the var args on line 23.

```
var args = "["+vaccineType+","+QuantityOfVaccine+","+NameOfHospital+","+RecalledStatus+"]"
```

