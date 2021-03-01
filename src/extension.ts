/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

//API vscode : https://code.visualstudio.com/api/references/vscode-api
import * as vscode from 'vscode';
import { ExalgoCompletionProvider } from './ExalgoCompletionProvider';

/**
 * Method called when the extension is activated (On editor start)
 * @param context context utilities
 */
export function activate(context: vscode.ExtensionContext) {

	// Show a popup in vscode
	vscode.window.showInformationMessage('Exalgo language support activated !');


	const exalgo = vscode.languages.registerCompletionItemProvider('plaintext', new ExalgoCompletionProvider());

	//Ajouter a vscode une nouvelle feature
	context.subscriptions.push(exalgo);

	console.log('Exalgo extension activated');
}

/**
 * Method called when the extension is deactivated
 */
export function deactivate() {
	console.log('Exalgo extension deactivated');
}
