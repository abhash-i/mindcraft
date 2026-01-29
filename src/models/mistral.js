import { Mistral as MistralClient } from '@mistralai/mistralai';
import { getKey } from '../utils/keys.js';
import { strictFormat } from '../utils/text.js';

export class Mistral {
    static prefix = 'mistral';

    constructor(model_name, url, params) {
        this.model_name = model_name;
        this.params = params;

        if (typeof url === "string") {
            console.warn("Mistral does not support custom URL's, ignoring!");
        }

        // Prevents the following code from running when model not specified
        if (typeof this.model_name === "undefined") return;

        // get the model name without the "mistral" or "mistralai" prefix
        // e.g "mistral/mistral-large-latest" -> "mistral-large-latest"
        if (typeof model_name.split("/")[1] !== "undefined") {
            this.model_name = model_name.split("/")[1];
        }
    }

    _createClient() {
        if (!getKey("MISTRAL_API_KEY")) {
            throw new Error("Mistral API Key missing, make sure to set MISTRAL_API_KEY in settings.json")
        }

        return new MistralClient(
            {
                apiKey: getKey("MISTRAL_API_KEY")
            }
        );
    }

    async sendRequest(turns, systemMessage) {

        let result;

        try {
            const model = this.model_name || "mistral-large-latest";

            const messages = [
                { role: "system", content: systemMessage }
            ];
            messages.push(...strictFormat(turns));

            console.log('Awaiting mistral api response...')
            const client = this._createClient();
            const response  = await client.chat.complete({
                model,
                messages,
                ...(this.params || {})
            });

            result = response.choices[0].message.content;
        } catch (err) {
            if (err.message.includes("A request containing images has been given to a model which does not have the 'vision' capability.")) {
                result = "Vision is only supported by certain models.";
            } else {
                result = "My brain disconnected, try again.";
            }
            console.log(err);
        }

        return result;
    }

    async sendVisionRequest(messages, systemMessage, imageBuffer) {
        const imageMessages = [...messages];
        imageMessages.push({
            role: "user",
            content: [
                { type: "text", text: systemMessage },
                {
                    type: "image_url",
                    imageUrl: `data:image/jpeg;base64,${imageBuffer.toString('base64')}`
                }
            ]
        });
        
        return this.sendRequest(imageMessages, systemMessage);
    }

    async embed(text) {
        const client = this._createClient();
        const embedding = await client.embeddings.create({
            model: "mistral-embed",
            inputs: text
        });
        return embedding.data[0].embedding;
    }
}