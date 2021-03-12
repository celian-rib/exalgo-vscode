import * as vscode from 'vscode';
import * as methods from './definitions/methods';
import * as exalgo from './definitions/interfaces';

/**
 * Provide hovers windows for the Exalgo language
 */
export default class ExalgoHoverProvider implements vscode.HoverProvider {

	/**
	 * Return the current hover object corresponding to where the cursor is
	 * null of the cursor is not hovering something known
	 * @param document the current active document
	 * @param position the position of th cursor
	 * @param token cancelation token
	 * @returns curent hover object
	 */
	provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover | null> {
		let hover = null;

		// Word in the document that is actually hovered
		const hoveredWord = document.getText(document.getWordRangeAtPosition(position));

		// Check if the word is known in the methods
		methods.getAllMethods().forEach(method => {
			if(hoveredWord === method.name)
				hover = new vscode.Hover(this.getMethodMarkdownString(method));
		});

		return hover;
	}

	/**
	 * Transform a method into a markdown string that will be used for the hover window
	 * For icons see : https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
	 * @param method the method to use
	 * @returns the corresponding markdonw string
	 */
	getMethodMarkdownString(method: exalgo.IExalgoMethods): vscode.MarkdownString {
		const header = '**$(symbol-method) Exalgo**';
		let params = '';
		method.parameters?.forEach(param => {
			params += `>$(symbol-field) ${this.getParamTypeName(param.type)}\n\n`;
		});
		return new vscode.MarkdownString(
			`${header}\n***\n${method.description}\n***\nParamètres :\n ${params}`,
			true
		);
	}

	/**
	 * Get the string name of a method parameter
	 * @param ptype the parameter type
	 * @return the name to display
	 */
	getParamTypeName(ptype : exalgo.ExalgoPrimitives | exalgo.IExalgoClass): string {
		if((ptype as exalgo.IExalgoClass).name != undefined){
			const classType: exalgo.IExalgoClass = <exalgo.IExalgoClass>ptype;
			return classType.name;
		}
		const enumType: exalgo.ExalgoPrimitives = <exalgo.ExalgoPrimitives>ptype;
		return enumType;
	}
}
