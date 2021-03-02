### Project installation
- Install nodejs : https://nodejs.org/en/
- Clone the project or fork it : ```git clone https://github.com/celian-rib/exalgo-vscode.git```
- Install project dependencies : ```cd exalgo-vscode``` & ```npm i```
- The ESlint vscode extension is required : https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

### Run the project
- Open the vscode debugger, select the 'run extension' option and press start, a new vscode instance will open.
- On the new vscode instance : ```ctrl.shift+p```and select ```Disabled all installed extensions```
- On the development instance of vscode : ```ctrl+shift+p``` and then select ``Ènabled all extensions for this workspace````
> This will improve the start time of the test instance of vscode !

### Code in
- The entry point of the extension is located in extension.ts, it is highly recommended to check the vscode API documentation 
- To add a new definition in the exalgo language check the definition folder

### Contributing
- Make your changes on your own branch and then create a new pull request !
> ```git checkout -b your-branch-name```
>
> ```git add -A```
> 
> ```git commit -m 'my changes are awesome'```
> 
> ```git push -u origin your-branch-name```
