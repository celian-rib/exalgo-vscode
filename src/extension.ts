/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

//API vscode : https://code.visualstudio.com/api/references/vscode-api
import * as vscode from 'vscode';
import { ExalgoCompletionProvider } from './ExalgoCompletionProvider';
import * as primitives from './definitions/primitives';


/**
 * Method called when the extension is activated (On editor start)
 * @param context context utilities
 */
export function activate(context: vscode.ExtensionContext) {

	console.log(primitives.getExalgoPrimitivesString());

	//Creating the Exalgo completion from the ExalgoCompletionProvider class
	const exalgoCompletion = vscode.languages.registerCompletionItemProvider('plaintext', new ExalgoCompletionProvider());

	//Subscribe the Exalgo completion provider for this extension
	context.subscriptions.push(exalgoCompletion);

	// Show a popup in vscode
	vscode.window.showInformationMessage('Exalgo language support activated !');
	console.log('Exalgo extension activated');
}

/**
 * Method called when the extension is deactivated
 */
export function deactivate() {
	console.log('Exalgo extension deactivated');
}
