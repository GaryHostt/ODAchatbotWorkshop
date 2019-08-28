# DigitalAssistantChatbot_Workshop

[Follow the steps on this link to get started with this workshop](
https://docs.oracle.com/en/cloud/paas/digital-assistant/tutorial-cc-dev/index.html)


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

