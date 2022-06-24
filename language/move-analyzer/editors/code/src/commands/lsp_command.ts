
import * as lc from 'vscode-languageclient';
import type { Context } from '../context';

/**
 * An LSP command textDocument/documentSymbol
 */
export async function textDocumentDocumentSymbol(context: Readonly<Context>, params: lc.DocumentSymbolParams)
    : Promise<Array<lc.SymbolInformation> | Array<lc.DocumentSymbol> | null> {
    const client = context.getClient();
    if (client === undefined) {
        return Promise.reject(new Error('No language client connected.'));
    }

    // Wait for the language client to be ready.
    await context.onReady();

    // Send the request to the language client.
    return client.sendRequest(lc.DocumentSymbolRequest.type, params);
}
