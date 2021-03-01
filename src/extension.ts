//API vscode : https://code.visualstudio.com/api/references/vscode-api
import * as vscode from 'vscode';

/**
 * Method called when the extension is activated (On editor start)
 * @param context context utilities
 */
export const activate = (context: vscode.ExtensionContext): void => {

	// Show a popup in vscode
	vscode.window.showInformationMessage('Exalgo language support activated !');

	console.log('Exalgo extension activated');
};

/**
 * Method called when the extension is deactivated
 */
export const deactivate = (): void => {
	console.log('Exalgo extension deactivated');
};
