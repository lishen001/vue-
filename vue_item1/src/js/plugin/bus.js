export default {
    install: (Vue, options) => {
        const bus = new Vue();
        if (!window.bus) {
            window.bus = bus;
        }
        if (!Vue.prototype.bus) {
            Vue.prototype.bus = bus;
        } else {
            throw 'The bus already exists!'
        }
    }
}