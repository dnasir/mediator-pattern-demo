/**
 * A generic mediator that handles communications between modules
 */
export class Mediator {
    private static channels = {};

    /**
     * Registers an event handler.
     * @param channel The event name to listen to.
     * @param context The context to use when invoking the callback.
     * @param callback The callback method to invoke when event is triggered.
     */
    static subscribe(channel: string, context: any, callback: Function) {
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }

        this.channels[channel].push({
            context: context,
            callback: callback
        });
    }

    /**
     * Triggers a registered event.
     * @param channel The event to trigger.
     * @param params Additional parameters to pass to the callback method.
     */
    static publish(channel: string, ...params) {
        if (!this.channels[channel]) {
            throw new Error('Channel does not exist');
        }

        for (let i = 0, l = this.channels[channel].length; i < l; i++) {
            const subscription = this.channels[channel][i];
            subscription.callback.apply(subscription.context, params);
        };
    }
}