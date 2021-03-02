import * as vscode from 'vscode';
import { getExalgoTypesString } from './definitions/primitives';

/**
 * Provide the Exlago language completion by extending the CompletionItemProvider
 */
export class ExalgoCompletionProvider implements vscode.CompletionItemProvider {

	/**
	 * Return all the completion items of the Exalgo languages
	 * @param document
	 * @param position
	 * @param token
	 */
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.CompletionItem[]> {
		const completions: vscode.CompletionItem[] = [];

		completions.push(new vscode.CompletionItem('int'));
		completions.push(new vscode.CompletionItem('String'));
		completions.push(new vscode.CompletionItem('boolean'));
		completions.push(new vscode.CompletionItem('char'));

		const varCompletion = new vscode.CompletionItem('Var');
		varCompletion.insertText = new vscode.SnippetString('Var ${1} : ${2|'+ getExalgoTypesString() +'|}');
		completions.push(varCompletion);

		const functionCompletion = new vscode.CompletionItem('Fonction');
		functionCompletion.insertText = new vscode.SnippetString('Fonction ${1}() : ${2|int,String,boolean|}\n\nDébut\n${0}\nFin');
		completions.push(functionCompletion);


		const forCompletion = new vscode.CompletionItem('Pour');
		forCompletion.insertText = new vscode.SnippetString('Pour ${1} de ${2} à ${3} Faire\n');
		completions.push(forCompletion);


		return Promise.resolve(completions);
	}
}
