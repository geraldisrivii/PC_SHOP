import { Ref, ref, watch } from "vue";

class Loader {

    private loadedCounter: number = 0;

    private counter: number = 0;
    public constructor(counter: number) {
        this.counter = counter;
    }
    public load(): void {
        this.loadedCounter++;

        this.afterLoad()
    }
    public onAllisLoaded: Function;
    private afterLoad(): void {
        if (this.loadedCounter != this.counter) {
            return;
        }

        if (this.onAllisLoaded) {
            return this.onAllisLoaded();
        }
    }
}


export const useLoad = (count: number) => {

    const loader = new Loader(count);

    return {
        loader
    }
}