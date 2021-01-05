// components/tabs/tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabBar: Array
    },
    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleIndex(e){
            const {index} = e.currentTarget.dataset;
            this.triggerEvent('getIndex', {index})
        }
    }
})
