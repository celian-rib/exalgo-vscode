import * as vscode from 'vscode';
import * as primitives from './definitions/primitives';
import * as methods from './definitions/methods';
import * as classes from './definitions/classes';
import * as exalgo from './definitions/interfaces';


type testType = {
	name: string
}

/**
 * Provide the Exlago language completion by extending the CompletionItemProvider
 */
export default class ExalgoCompletionProvider implements vscode.CompletionItemProvider {

	/**
	 * Return all the completion items of the Exalgo languages
	 * @param document
	 * @param position
	 * @param token
	 */
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.CompletionItem[]> {
		/**
		 * @TODO check the document extension, and reprovide the completion items on active text editor change
		 */

		let completions: vscode.CompletionItem[] = [];

		//Register all regular expressions
		completions = completions.concat(this.getAllRegExItems());

		//Register all primitives
		completions = completions.concat(this.getAllPrimitivesItems());

		//Register all methods
		completions = completions.concat(this.getAllMethodsItems());

		//Register all classes
		completions = completions.concat(this.getAllClassesItems());

		return Promise.resolve(completions);
	}

	/**
	 * Create all the completion items related to the exalgo's promitives
	 * @return all exalgo primitives items
	 */
	getAllPrimitivesItems(): vscode.CompletionItem[] {
		const items: vscode.CompletionItem[] = [];
		primitives.getExalgoPrimitivesString().forEach(element => {
			items.push(new vscode.CompletionItem(element, vscode.CompletionItemKind.Variable));
		});
		return items;
	}

	/**
	 * Create all the completion items related to the exalgo's classes
	 * @return all exalgo classes items
	 */
	getAllClassesItems(): vscode.CompletionItem[] {
		const items: vscode.CompletionItem[] = [];
		classes.exalgoClasses.forEach(element => {
			items.push(new vscode.CompletionItem(element.name, vscode.CompletionItemKind.Class));
		});
		return items;
	}


	/**
	 * Create all the completion items related to the exalgo's methods
	 * @return all exalgo methods items
	 */
	getAllMethodsItems(): vscode.CompletionItem[] {
		const items: vscode.CompletionItem[] = [];

		methods.getAllMethods().forEach(element => {
			const params: string[] = [];

			let snippetsParams = '';
			let pcount = 1;

			//Foreach methods : parameters are created as a snippet string
			element.parameters?.forEach((param: exalgo.IParameter) => {
				if ((param.type as exalgo.IExalgoClass).name != undefined){ // Check if param.type is type of IExalgoClass
					const c: exalgo.IExalgoClass = <exalgo.IExalgoClass>param.type; // Cast param.type into c: IExalgoClass so c.name will work
					params.push(c.name.toString());
				} else {
					params.push(param.type.toString());
				}

				snippetsParams += '${' + pcount + '}';
				if (pcount != element.parameters?.length)//If not last param, we add to the string coma and space:
					snippetsParams += ', ';
				pcount++;
			});

			const methodItem = new vscode.CompletionItem(element.name + `(${params.toString()})`, vscode.CompletionItemKind.Method);
			methodItem.insertText = new vscode.SnippetString(`${element.name}(${snippetsParams})\n$0`);

			items.push(methodItem);
		});
		return items;
	}

	/**
	 * Create all the completion items related to the exalgo's regular expressions
	 * (For/Var/Fonction/...)
	 * @return all exalgo regex items
	 */
	getAllRegExItems(): vscode.CompletionItem[] {
		const items: vscode.CompletionItem[] = [];

		const varCompletion = new vscode.CompletionItem('Var', vscode.CompletionItemKind.Keyword);
		varCompletion.insertText = new vscode.SnippetString('Var ${1} : ${2|' + primitives.getExalgoPrimitivesString() + '|} $0');
		items.push(varCompletion);

		const functionCompletion = new vscode.CompletionItem('Fonction', vscode.CompletionItemKind.Keyword);
		functionCompletion.insertText = new vscode.SnippetString('Fonction ${1}() : ${2|' + primitives.getExalgoPrimitivesString() + '|}\n\nDébut\n$0\nFin');
		items.push(functionCompletion);

		const forCompletion = new vscode.CompletionItem('Pour', vscode.CompletionItemKind.Keyword);
		forCompletion.insertText = new vscode.SnippetString('Pour ${1} de ${2} à ${3} Faire\n');
		items.push(forCompletion);

		items.push(new vscode.CompletionItem('=', vscode.CompletionItemKind.Operator));
		items.push(new vscode.CompletionItem('<-', vscode.CompletionItemKind.Operator));
		return items;
	}
}
