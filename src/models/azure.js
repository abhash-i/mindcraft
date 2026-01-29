import { AzureOpenAI } from "openai";
import { getKey, hasKey } from '../utils/keys.js';
import { GPT } from './gpt.js'

export class AzureGPT extends GPT {
    static prefix = 'azure';
    constructor(model_name, url, params) {
        super(model_name, url, params);

        // Extract and validate apiVersion from params
        // We delete it from params so it's not passed to the API call as an extra parameter
        // assuming params is a clone or we are allowed to modify it.
        // If not, we should probably just use it and not delete, but original code deleted it.
        if (this.params && this.params.apiVersion) {
            this.apiVersion = this.params.apiVersion;
            delete this.params.apiVersion;
        } else {
             throw new Error('apiVersion is required in params for azure!');
        }
    }

    _createClient() {
        const config = {};

        if (this.url)
            config.endpoint = this.url;

        config.apiKey = hasKey('AZURE_OPENAI_API_KEY') ? getKey('AZURE_OPENAI_API_KEY') : getKey('OPENAI_API_KEY');

        config.deployment = this.model_name;

        config.apiVersion = this.apiVersion;

        return new AzureOpenAI(config)
    }
}
