/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

//API vscode : https://code.visualstudio.com/api/references/vscode-api
import * as vscode from 'vscode';
import { ExalgoCompletionProvider } from './ExalgoCompletionProvider';

/**
 * Method called when the extension is activated (On editor start)
 * @param context context utilities
 */
export function activate(context: vscode.ExtensionContext) {

	//Creating the Exalgo completion from the ExalgoCompletionProvider class
	const exalgoCompletion = vscode.languages.registerCompletionItemProvider('plaintext', new ExalgoCompletionProvider());

	//Subscribe the Exalgo completion provider for this extension
	context.subscriptions.push(exalgoCompletion);

	// Show a popup in vscode
	vscode.window.showInformationMessage('Extension Exalgo activée !');
	console.log('Exalgo extension activated');
}

/**
 * Method called when the extension is deactivated
 */
export function deactivate() {
	console.log('Exalgo extension deactivated');
}
