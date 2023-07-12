import type { Store } from '@/store/store.type';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store;
    }
}
