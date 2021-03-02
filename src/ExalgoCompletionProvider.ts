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

		const varCompletion = new vscode.CompletionItem('var');
		varCompletion.insertText = new vscode.SnippetString('Var ${1} : ${2|'+ getExalgoTypesString() +'|}');
		completions.push(varCompletion);

		const functionCompletion = new vscode.CompletionItem('function');
		functionCompletion.insertText = new vscode.SnippetString('Function ${1}() : ${2|int,String,boolean|}\n\nBegin\n\nEnd');
		completions.push(functionCompletion);


		const forCompletion = new vscode.CompletionItem('for');
		forCompletion.insertText = new vscode.SnippetString('For ${1} to ${2} Do');
		completions.push(forCompletion);


		return Promise.resolve(completions);
	}
}
