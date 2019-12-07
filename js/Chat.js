class Chat {
    constructor(container = '.chat') {
        this.container = container;
        this.isVisible = false;
        this._init();
    }
    _init() {
        const block = document.querySelector(this.container);
        block.insertAdjacentHTML('beforeend', this._render());
    }
    _render(visible) {
        if (!visible) {
            return `<div class="chat chatBar" v-if="isShow">Чат</div>
                    <div class="chat chatBody" v-else>
                    <p class="chatHeader">Тэглайн<br>
                    Консультант</p>
                    <div class="chatMessages">Сообщения</div>
</div>`
        }
    }
}