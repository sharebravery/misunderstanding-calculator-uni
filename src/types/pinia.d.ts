declare module 'pinia' {
    interface DefineStoreOptionsBase<S extends StateTree, Store> {
        unistorage?: boolean | PersistedStateOptions;
    }
    
}

export declare interface Pinia {
    install: (app: App) => void;
    /**
     * root state
     */
    state: Ref<Record<string, StateTree>>;
    /**
     * Adds a store plugin to extend every store
     *
     * @param plugin - store plugin to add
     */
    use(plugin: PiniaPlugin): Pinia;
    /* Excluded from this release type: _p */
    /* Excluded from this release type: _a */
    /* Excluded from this release type: _e */
    /* Excluded from this release type: _s */
    /* Excluded from this release type: _testing */
}
